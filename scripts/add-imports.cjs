const fs = require('fs');
const path = require('path');

// 53개 파일 목록
const files = [
  'src/screens/AccountMain2/AccountMain2.tsx',
  'src/screens/AccountManagement/AccountManagement.tsx',
  'src/screens/AddressDetailInput/AddressDetailInput.tsx',
  'src/screens/AddressInputMethod/AddressInputMethod.tsx',
  'src/screens/AddressPhotoConfirm/AddressPhotoConfirm.tsx',
  'src/screens/AddressPhotoUpload/AddressPhotoUpload.tsx',
  'src/screens/AddressSearchResult/AddressSearchResult.tsx',
  'src/screens/ArsVerification/ArsVerification.tsx',
  'src/screens/AutoWithdrawConsent/AutoWithdrawConsent.tsx',
  'src/screens/CardVerification/CardVerification.tsx',
  'src/screens/CarrierSelect/CarrierSelect.tsx',
  'src/screens/CertificateImportGuide/CertificateImportGuide.tsx',
  'src/screens/CertificateSelectEmpty/CertificateSelectEmpty.tsx',
  'src/screens/CustomerInfoForm/CustomerInfoForm.tsx',
  'src/screens/CustomerVerification/CustomerVerification.tsx',
  'src/screens/DivWrapper/DivWrapper.tsx',
  'src/screens/EmailInput/EmailInput.tsx',
  'src/screens/Event/Event.tsx',
  'src/screens/EventScreen/EventScreen.tsx',
  'src/screens/ForeignIdInput/ForeignIdInput.tsx',
  'src/screens/HistoryDetail1/HistoryDetail1.tsx',
  'src/screens/HistoryDetail2/HistoryDetail2.tsx',
  'src/screens/HistoryDetail3/HistoryDetail3.tsx',
  'src/screens/HistoryDetail4/HistoryDetail4.tsx',
  'src/screens/HistoryDetail5/HistoryDetail5.tsx',
  'src/screens/HistoryDetail6/HistoryDetail6.tsx',
  'src/screens/MypageScreen/MypageScreen.tsx',
  'src/screens/MypageWrapper/MypageWrapper.tsx',
  'src/screens/Nationality/Nationality.tsx',
  'src/screens/NewAccountPhoneInput/NewAccountPhoneInput.tsx',
  'src/screens/OverseasRemitHistory/OverseasRemitHistory.tsx',
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
  'src/screens/Settings/Settings.tsx',
  'src/screens/SettingsFaceid/SettingsFaceid.tsx',
  'src/screens/SettingsFaceidScreen/SettingsFaceidScreen.tsx',
  'src/screens/SettingsWrapper/SettingsWrapper.tsx',
  'src/screens/Support/Support.tsx',
  'src/screens/VerificationCode/VerificationCode.tsx',
  'src/screens/VerificationCodeWechat/VerificationCodeWechat.tsx',
  'src/screens/VerificationSteps/VerificationSteps.tsx',
];

const importStatement = 'import { BackSubHeader } from "../../components/BackSubHeader";';

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

files.forEach(filePath => {
  const fullPath = path.join('/Users/kei/hanpass2/favorite', filePath);

  try {
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ 파일 없음: ${filePath}`);
      errorCount++;
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // 이미 import가 있는지 확인
    if (content.includes('import { BackSubHeader }') || content.includes('import {BackSubHeader}')) {
      console.log(`⏭️ 이미 import 있음: ${filePath}`);
      skipCount++;
      return;
    }

    // BackSubHeader 사용 여부 확인
    if (!content.includes('<BackSubHeader')) {
      console.log(`⏭️ BackSubHeader 미사용: ${filePath}`);
      skipCount++;
      return;
    }

    // 첫 번째 import 문 찾기
    const importRegex = /^import\s+.+?from\s+['"].+?['"];?\s*$/m;
    const match = content.match(importRegex);

    if (match) {
      // 첫 번째 import 문 앞에 추가
      const insertIndex = match.index;
      content = content.slice(0, insertIndex) + importStatement + '\n' + content.slice(insertIndex);
    } else {
      // import 문이 없으면 파일 맨 앞에 추가
      content = importStatement + '\n' + content;
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ import 추가됨: ${filePath}`);
    successCount++;
  } catch (error) {
    console.log(`❌ 오류: ${filePath} - ${error.message}`);
    errorCount++;
  }
});

console.log('\n========================================');
console.log(`완료: ${successCount}개 파일 수정`);
console.log(`건너뜀: ${skipCount}개 파일`);
console.log(`오류: ${errorCount}개 파일`);
console.log('========================================');
