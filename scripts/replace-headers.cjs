const fs = require('fs');
const path = require('path');

// 교체 대상 파일 목록
const targetFiles = [
  'src/screens/AccountMain2/AccountMain2.tsx',
  'src/screens/AccountManagement/AccountManagement.tsx',
  'src/screens/AddressDetailInput/AddressDetailInput.tsx',
  'src/screens/AddressDirectInput/AddressDirectInput.tsx',
  'src/screens/AddressInputMethod/AddressInputMethod.tsx',
  'src/screens/AddressPhotoConfirm/AddressPhotoConfirm.tsx',
  'src/screens/AddressPhotoUpload/AddressPhotoUpload.tsx',
  'src/screens/AddressSearchApi/AddressSearchApi.tsx',
  'src/screens/AddressSearchResult/AddressSearchResult.tsx',
  'src/screens/ArsVerification/ArsVerification.tsx',
  'src/screens/AutoWithdrawConsent/AutoWithdrawConsent.tsx',
  'src/screens/CardVerification/CardVerification.tsx',
  'src/screens/CarrierSelect/CarrierSelect.tsx',
  'src/screens/CertificateImportGuide/CertificateImportGuide.tsx',
  'src/screens/CertificateSelect/CertificateSelect.tsx',
  'src/screens/CertificateSelectEmpty/CertificateSelectEmpty.tsx',
  'src/screens/Components/Components.tsx',
  'src/screens/CustomerInfoForm/CustomerInfoForm.tsx',
  'src/screens/CustomerVerification/CustomerVerification.tsx',
  'src/screens/DivWrapper/DivWrapper.tsx',
  'src/screens/EmailInput/EmailInput.tsx',
  'src/screens/Event/Event.tsx',
  'src/screens/EventEmpty/EventEmpty.tsx',
  'src/screens/EventScreen/EventScreen.tsx',
  'src/screens/Favorite/Favorite.tsx',
  'src/screens/ForeignIdInput/ForeignIdInput.tsx',
  'src/screens/HistoryDetail1/HistoryDetail1.tsx',
  'src/screens/HistoryDetail2/HistoryDetail2.tsx',
  'src/screens/HistoryDetail3/HistoryDetail3.tsx',
  'src/screens/HistoryDetail4/HistoryDetail4.tsx',
  'src/screens/HistoryDetail5/HistoryDetail5.tsx',
  'src/screens/HistoryDetail6/HistoryDetail6.tsx',
  'src/screens/HistoryEmpty/HistoryEmpty.tsx',
  'src/screens/HistoryMain/HistoryMain.tsx',
  'src/screens/MypageScreen/MypageScreen.tsx',
  'src/screens/MypageWrapper/MypageWrapper.tsx',
  'src/screens/Nationality/Nationality.tsx',
  'src/screens/NewAccountPhoneInput/NewAccountPhoneInput.tsx',
  'src/screens/OverseasRemitHistory/OverseasRemitHistory.tsx',
  'src/screens/OverseasRemitIdInput/OverseasRemitIdInput.tsx',
  'src/screens/OverseasRemitNickname/OverseasRemitNickname.tsx',
  'src/screens/OverseasRemitPin/OverseasRemitPin.tsx',
  'src/screens/OverseasRemitReceiverInfo/OverseasRemitReceiverInfo.tsx',
  'src/screens/OverseasremitScreen/OverseasremitScreen.tsx',
  'src/screens/PassportInfoInput/PassportInfoInput.tsx',
  'src/screens/PinConfirm/PinConfirm.tsx',
  'src/screens/PinEntry/PinEntry.tsx',
  'src/screens/PinInput/PinInput.tsx',
  'src/screens/PinPin/PinPin.tsx',
  'src/screens/PinPinScreen/PinPinScreen.tsx',
  'src/screens/Screen/Screen.tsx',
  'src/screens/SelfieVerification/SelfieVerification.tsx',
  'src/screens/ServiceCertificate/ServiceCertificate.tsx',
  'src/screens/ServiceTerms/ServiceTerms.tsx',
  'src/screens/Servicecert/Servicecert.tsx',
  'src/screens/ServicecertScreen/ServicecertScreen.tsx',
  'src/screens/Settings/Settings.tsx',
  'src/screens/SettingsFaceid/SettingsFaceid.tsx',
  'src/screens/SettingsFaceidScreen/SettingsFaceidScreen.tsx',
  'src/screens/SettingsWrapper/SettingsWrapper.tsx',
  'src/screens/Support/Support.tsx',
  'src/screens/SupportScreen/SupportScreen.tsx',
  'src/screens/VerificationCode/VerificationCode.tsx',
  'src/screens/VerificationCodeWechat/VerificationCodeWechat.tsx',
  'src/screens/VerificationSteps/VerificationSteps.tsx',
];

// BackSubHeader import 문
const backSubHeaderImport = 'import { BackSubHeader } from "../../components/BackSubHeader";';

// 헤더 패턴 정규식들
const headerPatterns = [
  // Pattern 1: <header>...</header> 블록 전체
  /<header[\s\S]*?<\/header>/g,
  // Pattern 2: 뒤로가기 버튼이 포함된 div 블록
  /<div[^>]*className="[^"]*nav-header[^"]*"[\s\S]*?<\/div>\s*<\/div>/g,
];

// 제거할 import들
const importsToRemove = [
  /import\s*{\s*ChevronLeftIcon\s*}\s*from\s*["']lucide-react["'];?\n?/g,
  /import\s*{\s*ChevronLeft\s*}\s*from\s*["']lucide-react["'];?\n?/g,
  /import\s*{\s*ArrowLeftIcon\s*}\s*from\s*["']lucide-react["'];?\n?/g,
  /import\s*{\s*ArrowLeft\s*}\s*from\s*["']lucide-react["'];?\n?/g,
];

function processFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`파일 없음: ${filePath}`);
    return { success: false, reason: 'File not found' };
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  const originalContent = content;

  // 이미 BackSubHeader를 사용하고 있는지 확인
  if (content.includes('BackSubHeader')) {
    console.log(`이미 적용됨: ${filePath}`);
    return { success: true, reason: 'Already applied' };
  }

  // 헤더 패턴 찾기 및 교체
  let headerFound = false;

  // header 태그 찾기
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
  if (headerMatch) {
    // 뒤로가기 아이콘이 포함되어 있는지 확인
    if (headerMatch[0].includes('ChevronLeftIcon') ||
        headerMatch[0].includes('ChevronLeft') ||
        headerMatch[0].includes('ArrowLeft') ||
        headerMatch[0].includes('뒤로')) {
      content = content.replace(headerMatch[0], '<BackSubHeader backTo="/" />');
      headerFound = true;
    }
  }

  if (!headerFound) {
    console.log(`헤더 패턴 못찾음: ${filePath}`);
    return { success: false, reason: 'Header pattern not found' };
  }

  // BackSubHeader import 추가 (첫 번째 import 문 앞에)
  if (!content.includes('BackSubHeader')) {
    // import 문 뒤에 추가
    const importMatch = content.match(/import[\s\S]*?from[\s\S]*?;/);
    if (importMatch) {
      const firstImportEnd = content.indexOf(importMatch[0]) + importMatch[0].length;
      content = content.slice(0, firstImportEnd) + '\n' + backSubHeaderImport + content.slice(firstImportEnd);
    }
  }

  // lucide-react import에서 ChevronLeftIcon 등 제거
  content = content.replace(
    /import\s*{([^}]*)}\s*from\s*["']lucide-react["'];?/g,
    (match, imports) => {
      const iconsList = imports.split(',').map(s => s.trim()).filter(s =>
        s &&
        s !== 'ChevronLeftIcon' &&
        s !== 'ChevronLeft' &&
        s !== 'ArrowLeftIcon' &&
        s !== 'ArrowLeft'
      );
      if (iconsList.length === 0) {
        return ''; // 모든 아이콘이 제거되면 import 문 전체 제거
      }
      return `import { ${iconsList.join(', ')} } from "lucide-react";`;
    }
  );

  // 빈 줄 정리
  content = content.replace(/\n{3,}/g, '\n\n');

  // 변경사항 있으면 저장
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`✅ 교체 완료: ${filePath}`);
    return { success: true, reason: 'Replaced' };
  }

  return { success: false, reason: 'No changes made' };
}

// 메인 실행
console.log('=== BackSubHeader 교체 스크립트 시작 ===\n');

let successCount = 0;
let failCount = 0;
const results = [];

targetFiles.forEach(file => {
  const result = processFile(file);
  results.push({ file, ...result });
  if (result.success && result.reason === 'Replaced') {
    successCount++;
  } else if (!result.success) {
    failCount++;
  }
});

console.log('\n=== 결과 요약 ===');
console.log(`교체 완료: ${successCount}개`);
console.log(`실패/스킵: ${failCount}개`);

// 실패 파일 목록 출력
const failedFiles = results.filter(r => !r.success);
if (failedFiles.length > 0) {
  console.log('\n실패 파일 목록:');
  failedFiles.forEach(f => console.log(`  - ${f.file}: ${f.reason}`));
}
