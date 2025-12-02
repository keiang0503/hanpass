import { FolderIcon, CheckCircleIcon, ClockIcon, ExternalLinkIcon, CopyIcon, LockIcon, CheckIcon, LayoutGridIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DownloadButton, DownloadAllButton } from "../../components/DownloadButton";

// 퍼블리싱 화면 데이터
type PublishingItem = {
  id: string;
  name: string;
  path: string;
  status: "completed" | "pending";
  description: string;
  type?: "menu";
} | {
  id: string;
  name: string;
  type: "section";
};

const publishingData: PublishingItem[] = [
  {
    id: "favorite",
    name: "즐겨찾기",
    path: "/favoriteu95375",
    status: "completed",
    description: "즐겨찾기 및 최근 송금내역 관리 화면",
  },
  {
    id: "transform",
    name: "해외송금",
    path: "/transformu95750",
    status: "completed",
    description: "송금 변환 화면",
  },
  {
    id: "section-login",
    name: "로그인",
    type: "section",
  },
  {
    id: "login",
    name: "로그인",
    path: "/loginu95001",
    status: "completed",
    description: "로그인 화면 - 이메일/휴대폰 및 비밀번호 입력",
  },
  {
    id: "element",
    name: "신규 쿠폰 알림",
    path: "/elementu95002",
    status: "completed",
    description: "신규 쿠폰 알림 팝업",
  },
  {
    id: "elementscreen",
    name: "메인 랜딩 팝업",
    path: "/elementscreenu95003",
    status: "completed",
    description: "메인 랜딩 페이지 팝업",
  },
  {
    id: "elementwrapper",
    name: "보이스피싱 주의",
    path: "/elementwrapperu95004",
    status: "completed",
    description: "보이스피싱 주의 안내 팝업",
  },
  {
    id: "screen4",
    name: "개인정보 업데이트",
    path: "/screen4u95005",
    status: "completed",
    description: "개인정보 업데이트 요청 팝업",
  },
  {
    id: "home",
    name: "홈 (로그인 전) 1",
    path: "/homeu95006",
    status: "completed",
    description: "홈 화면 - 송금 방식 선택",
  },
  {
    id: "homescreen",
    name: "홈 (로그인 전) 2",
    path: "/homescreenu95007",
    status: "completed",
    description: "홈 화면 - 금액 입력",
  },
  {
    id: "homewrapper",
    name: "홈 (로그인 전) 3",
    path: "/homewrapperu95008",
    status: "completed",
    description: "홈 화면 - 은행 정보",
  },
  {
    id: "screen8",
    name: "홈 (로그인 전) 4",
    path: "/screen8u95009",
    status: "completed",
    description: "홈 화면 - 거래 내역",
  },
  {
    id: "common",
    name: "비밀번호 입력",
    path: "/commonu95010",
    status: "completed",
    description: "비밀번호 입력 화면",
  },
  {
    id: "section-signup",
    name: "회원가입",
    type: "section",
  },
  {
    id: "signup",
    name: "이용약관 동의",
    path: "/signupu95003",
    status: "completed",
    description: "회원가입 이용약관 동의 화면",
  },
  {
    id: "signup-wrapper",
    name: "이용약관 동의 2",
    path: "/signupwrapperu95004",
    status: "completed",
    description: "회원가입 이용약관 동의 (체크박스 기능)",
  },
  {
    id: "signup-screen",
    name: "서비스 이용약관 상세",
    path: "/signupscreenu95005",
    status: "completed",
    description: "서비스 이용약관 상세 내용 화면",
  },
  {
    id: "div-wrapper",
    name: "국적 선택",
    path: "/nationalityu95006",
    status: "completed",
    description: "국적 선택 화면 (내국인/중국인)",
  },
  {
    id: "signup-phone-email",
    name: "휴대폰/이메일 입력",
    path: "/signupphoneemailu95007",
    status: "completed",
    description: "휴대폰번호 또는 이메일 회원가입 입력 화면",
  },
  {
    id: "verification-code",
    name: "인증번호 입력",
    path: "/verificationcodeu95008",
    status: "completed",
    description: "휴대폰/이메일 인증번호 입력 화면",
  },
  {
    id: "verification-code-timeout",
    name: "인증번호 시간 초과",
    path: "/verificationcodetimeoutu95013",
    status: "completed",
    description: "인증번호 입력 시간 초과 팝업",
  },
  {
    id: "signup-email-tab",
    name: "이메일 탭 선택",
    path: "/signupemailtabu95009",
    status: "completed",
    description: "이메일 탭 선택 상태 화면",
  },
  {
    id: "signup-email-input",
    name: "이메일 입력 (입력됨)",
    path: "/signupemailinputu95010",
    status: "completed",
    description: "이메일 입력 완료 상태 화면",
  },
  {
    id: "signup-phone-input",
    name: "휴대폰번호 입력 (입력됨)",
    path: "/signupphoneinputu95011",
    status: "completed",
    description: "휴대폰번호 입력 완료 상태 화면",
  },
  {
    id: "verification-code-wechat",
    name: "인증번호 입력 (WeChat)",
    path: "/verificationcodewechatu95012",
    status: "completed",
    description: "WeChat 스타일 인증번호 입력 화면",
  },
  {
    id: "new-account-phone-input",
    name: "휴대폰번호 입력 (이메일 가입)",
    path: "/newaccountphoneinputu95014",
    status: "completed",
    description: "이메일 회원가입 시 휴대폰번호 입력 화면",
  },
  {
    id: "new-account-password-filled",
    name: "비밀번호 설정 (입력됨)",
    path: "/newaccountpasswordfilledu95015",
    status: "completed",
    description: "비밀번호 설정 완료 상태 화면",
  },
  {
    id: "new-account-password",
    name: "비밀번호 설정",
    path: "/newaccountpasswordu95016",
    status: "completed",
    description: "비밀번호 설정 초기 화면",
  },
  {
    id: "new-account-referral",
    name: "파트너사 코드 입력",
    path: "/newaccountreferralu95017",
    status: "completed",
    description: "파트너사/추천인 코드 입력 화면",
  },
  {
    id: "new-account-password-wechat",
    name: "비밀번호 설정 (WeChat)",
    path: "/newaccountpasswordwechatu95018",
    status: "completed",
    description: "WeChat 스타일 비밀번호 설정 화면",
  },
  {
    id: "photo-confirmation",
    name: "사진 확인",
    path: "/photoconfirmationu95019",
    status: "completed",
    description: "사진 확인 팝업 (재시도/확인)",
  },
  {
    id: "password-reset",
    name: "비밀번호 재설정",
    path: "/passwordresetu95020",
    status: "completed",
    description: "비밀번호 재설정 화면 (요구사항 표시)",
  },
  {
    id: "selfie-capture",
    name: "셀카 촬영",
    path: "/selfiecaptureu95021",
    status: "completed",
    description: "셀카 촬영 화면 (얼굴 가이드)",
  },
  {
    id: "selfie-verification",
    name: "셀카인증 진행중",
    path: "/selfieverificationu95022",
    status: "completed",
    description: "셀카 인증 진행 중 화면",
  },
  {
    id: "password-input-keypad",
    name: "비밀번호 입력 (키패드)",
    path: "/passwordinputkeypadu95023",
    status: "completed",
    description: "iOS 스타일 숫자 키패드 비밀번호 입력 화면",
  },
  {
    id: "section-verification",
    name: "인증",
    type: "section",
  },
];

export const PublishingStatus = (): JSX.Element => {
  const [selectedScreen, setSelectedScreen] = useState<string>("favorite");
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  const selectedData = publishingData.find((item) => item.id === selectedScreen);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const getFullUrl = (path: string) => `${baseUrl}${path}`;

  const handleCopyUrl = async () => {
    if (selectedData) {
      const fullUrl = getFullUrl(selectedData.path);
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* LNB (Left Navigation Bar) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        {/* LNB Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">퍼블리싱 현황</h1>
          <p className="text-sm text-gray-500 mt-1">화면 목록</p>
        </div>

        {/* LNB Menu List */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            {publishingData.map((item) => (
              <li key={item.id}>
                {item.type === "section" ? (
                  <div className="px-3 py-2 mt-4 mb-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {item.name}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedScreen(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      selectedScreen === item.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <FolderIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 font-medium">{item.name}</span>
                    {"status" in item && item.status === "completed" ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    ) : (
                      <ClockIcon className="w-4 h-4 text-yellow-500" />
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* 공통 컴포넌트 링크 */}
        <div className="p-2 border-t border-gray-200">
          <Link
            to="/components"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-blue-50 text-blue-600 border border-blue-200 bg-blue-50/50"
          >
            <LayoutGridIcon className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 font-medium">공통 컴포넌트</span>
          </Link>
        </div>

        {/* LNB Footer - Summary */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">완료</span>
            <span className="font-medium text-green-600">
              {publishingData.filter((item) => item.status === "completed").length}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">대기</span>
            <span className="font-medium text-yellow-600">
              {publishingData.filter((item) => item.status === "pending").length}
            </span>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {selectedData ? (
          <>
            {/* Info Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
              <div className="flex items-center gap-3">
                <h2 className="font-semibold text-gray-900">{selectedData.name}</h2>
                <span className="text-sm text-gray-500">{selectedData.description}</span>
                {selectedData.status === "completed" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <CheckCircleIcon className="w-3 h-3" />
                    완료
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                    <ClockIcon className="w-3 h-3" />
                    대기
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {/* 브라우저 스타일 URL 바 */}
                <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 px-3 py-1.5 min-w-input-container">
                  <LockIcon className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700 truncate flex-1">
                    {getFullUrl(selectedData.path)}
                  </span>
                  <button
                    onClick={handleCopyUrl}
                    className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                    title="URL 복사"
                  >
                    {copied ? (
                      <CheckIcon className="w-4 h-4 text-green-500" />
                    ) : (
                      <CopyIcon className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>
                {selectedData.status === "completed" && (
                  <>
                    <DownloadButton
                      screenId={selectedData.id}
                      screenName={selectedData.name}
                    />
                    <DownloadAllButton />
                    <a
                      href={selectedData.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 px-2 py-1"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      새 탭
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-gray-100 p-4">
              {selectedData.status === "completed" ? (
                <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <iframe
                    src={selectedData.path}
                    className="w-full h-full"
                    title={`${selectedData.name} Preview`}
                  />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">아직 퍼블리싱되지 않은 화면입니다</p>
                    <p className="text-sm text-gray-400 mt-1">개발 예정</p>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            왼쪽 메뉴에서 화면을 선택하세요
          </div>
        )}
      </main>
    </div>
  );
};
