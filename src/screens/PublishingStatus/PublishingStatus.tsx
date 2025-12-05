import { FolderIcon, CheckCircleIcon, ClockIcon, ExternalLinkIcon, CopyIcon, LockIcon, CheckIcon, LayoutGridIcon, PencilIcon, XIcon, RotateCcwIcon, GripVerticalIcon, ToggleLeftIcon, ToggleRightIcon, Layers2Icon, LayersIcon, Trash2Icon, AlertTriangleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
  // 숨김 처리: 즐겨찾기
  // {
  //   id: "favorite",
  //   name: "즐겨찾기",
  //   path: "/favoriteu95375",
  //   status: "completed",
  //   description: "즐겨찾기 및 최근 송금내역 관리 화면",
  // },
  // 숨김 처리: 해외송금
  // {
  //   id: "transform",
  //   name: "해외송금",
  //   path: "/transformu95750",
  //   status: "completed",
  //   description: "송금 변환 화면",
  // },
  {
    id: "section-login",
    name: "로그인",
    type: "section",
  },
  {
    id: "login",
    name: "Login_001 로그인 / 회원가입 화면",
    path: "/loginu95001",
    status: "completed",
    description: "로그인 화면 - 이메일/휴대폰 및 비밀번호 입력",
  },
  {
    id: "common",
    name: "Common_013 비밀번호 입력 화면",
    path: "/commonu95010",
    status: "completed",
    description: "비밀번호 입력 화면",
  },
  {
    id: "home",
    name: "Home_001 홈 (로그인)(1)",
    path: "/homeu95006",
    status: "completed",
    description: "홈 화면 - 송금 방식 선택",
  },
  {
    id: "homescreen",
    name: "Home_001 홈 (로그인)(2)",
    path: "/homescreenu95007",
    status: "completed",
    description: "홈 화면 - 금액 입력",
  },
  {
    id: "homewrapper",
    name: "Home_001 홈 (로그인)(3)",
    path: "/homewrapperu95008",
    status: "completed",
    description: "홈 화면 - 은행 정보",
  },
  {
    id: "screen8",
    name: "Home_001 홈 (로그인)(4)",
    path: "/screen8u95009",
    status: "completed",
    description: "홈 화면 - 거래 내역",
  },
  {
    id: "screen4",
    name: "개인정보 업데이트 (MD)",
    path: "/screen4u95005",
    status: "completed",
    description: "개인정보 업데이트 요청 팝업",
  },
  {
    id: "elementwrapper",
    name: "보이스피싱 주의 (MD)",
    path: "/elementwrapperu95004",
    status: "completed",
    description: "보이스피싱 주의 안내 팝업",
  },
  {
    id: "elementscreen",
    name: "메인 랜딩 팝업 (MD)",
    path: "/elementscreenu95003",
    status: "completed",
    description: "메인 랜딩 페이지 팝업",
  },
  {
    id: "element",
    name: "신규 쿠폰 알림 (MD)",
    path: "/elementu95002",
    status: "completed",
    description: "신규 쿠폰 알림 팝업",
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
    name: "인증번호 시간 초과 (MD)",
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
    name: "사진 확인 (MD)",
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
    id: "newaccount4-divwrapper",
    name: "DivWrapper",
    path: "/newaccount4divwrapper",
    status: "completed",
    description: "newaccount4 DivWrapper 화면",
  },
  {
    id: "newaccount4-login",
    name: "Login",
    path: "/newaccount4login",
    status: "completed",
    description: "newaccount4 Login 화면",
  },
  {
    id: "newaccount4-loginscreen",
    name: "LoginScreen",
    path: "/newaccount4loginscreen",
    status: "completed",
    description: "newaccount4 LoginScreen 화면",
  },
  {
    id: "newaccount4-loginwrapper",
    name: "LoginWrapper",
    path: "/newaccount4loginwrapper",
    status: "completed",
    description: "newaccount4 LoginWrapper 화면",
  },
  {
    id: "newaccount4-signup",
    name: "Signup",
    path: "/newaccount4signup",
    status: "completed",
    description: "newaccount4 Signup 화면",
  },
  {
    id: "section-verification",
    name: "인증",
    type: "section",
  },
  {
    id: "verification-steps",
    name: "인증 단계",
    path: "/verificationstepsu95024",
    status: "completed",
    description: "KYC 인증 단계 진행 화면",
  },
  {
    id: "id-registration-method",
    name: "신분증 등록 방법 (BT)",
    path: "/idregistrationmethodu95025",
    status: "completed",
    description: "신분증 등록 방법 선택 바텀시트",
  },
  {
    id: "capture-tips",
    name: "촬영 안내 (BT)",
    path: "/capturetipsu95026",
    status: "completed",
    description: "신분증 촬영 안내 바텀시트",
  },
  {
    id: "selfie-capture-countdown",
    name: "셀카 촬영 카운트다운 (MD)",
    path: "/selfiecapturecountdownu95027",
    status: "completed",
    description: "셀카 촬영 카운트다운 모달",
  },
  {
    id: "photo-confirm-dialog",
    name: "사진 확인 다이얼로그 (MD)",
    path: "/photoconfirmdialogu95028",
    status: "completed",
    description: "촬영된 사진 확인 팝업",
  },
  {
    id: "referral-code-input",
    name: "추천인 코드 입력 (MD)",
    path: "/referralcodeinputu95029",
    status: "completed",
    description: "추천인 코드 입력 모달 (여권 안내)",
  },
  {
    id: "id-front-capture",
    name: "신분증 앞면 촬영 (MD)",
    path: "/idfrontcaptureu95030",
    status: "completed",
    description: "신분증 앞면 촬영 모달",
  },
  {
    id: "id-type-selection",
    name: "신분증 종류 선택",
    path: "/idtypeselectiou95031",
    status: "completed",
    description: "신분증 종류 선택 화면 (주민등록증/운전면허증/여권)",
  },
  {
    id: "fund-source-selection",
    name: "자금 출처 선택 (BT)",
    path: "/fundsourceselectiou95032",
    status: "completed",
    description: "자금 출처 선택 바텀시트",
  },
  {
    id: "customer-info-form",
    name: "고객 정보 입력",
    path: "/customerinfoformu95033",
    status: "completed",
    description: "고객 정보 입력 폼 화면",
  },
  {
    id: "occupation-selection",
    name: "직업 선택 (BT)",
    path: "/occupationselectiou95034",
    status: "completed",
    description: "직업 선택 바텀시트",
  },
  {
    id: "customer-verification",
    name: "고객 정보 확인",
    path: "/customerverificatiou95035",
    status: "completed",
    description: "고객 정보 확인 화면",
  },
  {
    id: "wechat-verification",
    name: "WeChat 정보 확인",
    path: "/wechatverificatiou95036",
    status: "completed",
    description: "WeChat 정보 확인 화면",
  },
  {
    id: "address-input-method",
    name: "주소 입력 방법",
    path: "/addressinputmethodu95037",
    status: "completed",
    description: "주소 입력 방법 선택 화면 (직접 입력/사진 업로드)",
  },
  {
    id: "address-direct-input",
    name: "주소 직접 입력",
    path: "/addressdirectinputu95038",
    status: "completed",
    description: "주소 직접 입력 화면",
  },
  {
    id: "transaction-purpose",
    name: "거래목적 선택 (BT)",
    path: "/transactionpurposeu95039",
    status: "completed",
    description: "거래목적 선택 바텀시트",
  },
  {
    id: "signup-history-dialog",
    name: "가입내역 다이얼로그 (MD)",
    path: "/signuphistorydialogu95040",
    status: "completed",
    description: "기존 가입내역 확인 다이얼로그",
  },
  {
    id: "address-photo-confirm",
    name: "주소 사진 확인",
    path: "/addressphotoconfirmu95041",
    status: "completed",
    description: "주소 사진 촬영 후 확인 화면",
  },
  {
    id: "address-search-result",
    name: "주소 검색 결과",
    path: "/addresssearchresultu95042",
    status: "completed",
    description: "주소 검색 결과 목록 화면",
  },
  {
    id: "signup-complete-approved",
    name: "회원가입 완료 (승인)",
    path: "/signupcompleteu95043",
    status: "completed",
    description: "회원가입 완료 화면 (신분증 승인됨)",
  },
  {
    id: "address-photo-upload",
    name: "주소 사진 업로드",
    path: "/addressphotouploadu95044",
    status: "completed",
    description: "주소지 사진 업로드 화면",
  },
  {
    id: "address-detail-input",
    name: "상세 주소 입력",
    path: "/addressdetailinputu95045",
    status: "completed",
    description: "상세 주소 입력 화면",
  },
  {
    id: "address-search-api",
    name: "주소 검색 API",
    path: "/addresssearchapiu95046",
    status: "completed",
    description: "주소 검색 API 화면",
  },
  {
    id: "signup-complete-pending",
    name: "회원가입 완료 (대기)",
    path: "/signupcompletependingu95047",
    status: "completed",
    description: "회원가입 완료 화면 (신분증 승인 대기)",
  },
  {
    id: "account",
    name: "계좌관리",
    path: "/accountu95048",
    status: "completed",
    description: "계좌 관리 메인 화면",
  },
  {
    id: "screen6",
    name: "주계좌 선택 (BT)",
    path: "/screen6u95049",
    status: "completed",
    description: "주계좌 선택 바텀시트",
  },
  {
    id: "accountscreen",
    name: "계좌내역조회 안내 (BT)",
    path: "/accountscreenu95050",
    status: "completed",
    description: "계좌내역 조회 안내 바텀시트",
  },
  {
    id: "divwrapper",
    name: "계좌거래내역 조회",
    path: "/divwrapperu95051",
    status: "completed",
    description: "계좌 거래내역 조회 화면",
  },
  {
    id: "selfcheckauth",
    name: "셀프체크 인증 (MD)",
    path: "/selfcheckauthu95052",
    status: "completed",
    description: "셀카 촬영 인증 모달",
  },
  {
    id: "accountwrapper",
    name: "계좌관리 2",
    path: "/accountwrapperu95053",
    status: "completed",
    description: "계좌 관리 화면 2",
  },
  {
    id: "loginscreen",
    name: "사진 확인 (MD)",
    path: "/loginscreenu95054",
    status: "completed",
    description: "촬영된 사진 확인 모달",
  },
  {
    id: "accountverify",
    name: "계좌 인증",
    path: "/accountverifyu95055",
    status: "completed",
    description: "계좌 인증 화면",
  },
  {
    id: "pinentry",
    name: "PIN 입력 진입",
    path: "/pinentryu95056",
    status: "completed",
    description: "PIN 입력 진입 화면",
  },
  {
    id: "pininput",
    name: "PIN 번호 입력",
    path: "/pininputu95057",
    status: "completed",
    description: "PIN 번호 입력 화면",
  },
  {
    id: "pinconfirm",
    name: "PIN 확인",
    path: "/pinconfirmu95058",
    status: "completed",
    description: "PIN 확인 화면",
  },
  {
    id: "accountmain2",
    name: "계좌등록 메인",
    path: "/accountmain2u95059",
    status: "completed",
    description: "계좌등록 메인 화면 (은행 선택 및 키패드)",
  },
  {
    id: "withdrawcomplete",
    name: "출금계좌 등록 완료",
    path: "/withdrawcompleteu95060",
    status: "completed",
    description: "출금계좌 등록 완료 화면",
  },
  {
    id: "foreignidinput",
    name: "외국인등록번호 입력",
    path: "/foreignidinputu95061",
    status: "completed",
    description: "외국인등록번호 입력 화면",
  },
  {
    id: "withdrawfailed",
    name: "출금계좌 등록 실패",
    path: "/withdrawfailedu95062",
    status: "completed",
    description: "출금계좌 등록 실패 화면",
  },
  {
    id: "autowithdrawconsent",
    name: "자동출금 동의",
    path: "/autowithdrawconsentu95063",
    status: "completed",
    description: "자동출금 동의 화면",
  },
  {
    id: "authfailure",
    name: "인증 실패",
    path: "/authfailureu95064",
    status: "completed",
    description: "본인인증 실패 화면",
  },
  {
    id: "authmethodselect",
    name: "인증 방법 선택",
    path: "/authmethodselectu95065",
    status: "completed",
    description: "본인인증 방법 선택 화면",
  },
  {
    id: "emailinput",
    name: "이메일 입력",
    path: "/emailinputu95066",
    status: "completed",
    description: "이메일 입력 화면",
  },
  {
    id: "authinfoinput",
    name: "인증 정보 입력",
    path: "/authinfoinputu95067",
    status: "completed",
    description: "본인인증 정보 입력 화면",
  },
  {
    id: "certificateselect",
    name: "공동인증서 선택",
    path: "/certificateselectu95068",
    status: "completed",
    description: "공동인증서 선택 화면",
  },
  {
    id: "authcodeinput",
    name: "인증번호 입력",
    path: "/authcodeinputu95069",
    status: "completed",
    description: "인증번호 입력 화면",
  },
  {
    id: "serviceterms",
    name: "서비스 이용약관",
    path: "/servicetermsu95070",
    status: "completed",
    description: "서비스 이용약관 화면",
  },
  {
    id: "certificateimportguide",
    name: "공동인증서 가져오기 안내",
    path: "/certificateimportguideu95071",
    status: "completed",
    description: "공동인증서 가져오기 안내 화면",
  },
  {
    id: "certificateselectempty",
    name: "공동인증서 선택 (없음)",
    path: "/certificateselectemptyu95072",
    status: "completed",
    description: "공동인증서가 없는 경우 선택 화면",
  },
  {
    id: "certificatepasswordkeyboard",
    name: "인증서 비밀번호 입력 (BT)",
    path: "/certificatepasswordkeyboardu95073",
    status: "completed",
    description: "인증서 비밀번호 입력 바텀시트 (점 표시)",
  },
  {
    id: "certificateconfirmkeyboard",
    name: "인증서 비밀번호 확인 (BT)",
    path: "/certificateconfirmkeyboardu95074",
    status: "completed",
    description: "인증서 비밀번호 확인 입력 바텀시트",
  },
  {
    id: "simpleauthselect",
    name: "간편인증 선택",
    path: "/simpleauthselectu95075",
    status: "completed",
    description: "간편인증 방법 선택 화면",
  },
  {
    id: "cardverification",
    name: "카드 본인인증",
    path: "/cardverificationu95076",
    status: "completed",
    description: "카드 본인인증 정보 입력 화면",
  },
  {
    id: "carrierselect",
    name: "통신사 선택",
    path: "/carrierselectu95077",
    status: "completed",
    description: "통신사 선택 화면",
  },
  {
    id: "accountmanagement",
    name: "계좌관리 메인",
    path: "/accountmanagementu95078",
    status: "completed",
    description: "계좌관리 메인 화면",
  },
  {
    id: "arsverification",
    name: "ARS 인증",
    path: "/arsverificationu95079",
    status: "completed",
    description: "ARS 인증 화면",
  },
  {
    id: "autowithdrawfailed",
    name: "자동출금 등록 실패",
    path: "/autowithdrawfailedu95080",
    status: "completed",
    description: "자동출금 등록 실패 화면",
  },
  {
    id: "autowithdrawcomplete",
    name: "자동출금 완료",
    path: "/autowithdrawcompleteu95081",
    status: "completed",
    description: "자동출금 이체 동의 완료 화면",
  },
  {
    id: "selfieverificationprogress",
    name: "셀카인증 진행중",
    path: "/selfieverificationprogressu95082",
    status: "completed",
    description: "셀카인증 진행중 화면",
  },
  {
    id: "passportinfoinput",
    name: "여권정보 입력",
    path: "/passportinfoinputu95083",
    status: "completed",
    description: "여권정보 입력 화면",
  },
  {
    id: "overseasremit",
    name: "해외송금 메인 (BT)",
    path: "/overseasremitu95084",
    status: "completed",
    description: "해외송금 메인 바텀시트",
  },
  {
    id: "overseasremitscreen",
    name: "해외송금 금액 입력",
    path: "/overseasremitscreenu95085",
    status: "completed",
    description: "해외송금 금액 입력 화면",
  },
  {
    id: "overseasremitwrapper",
    name: "해외송금 대상자 선택 (BT)",
    path: "/overseasremitwrapperu95086",
    status: "completed",
    description: "해외송금 대상자 선택 바텀시트",
  },
  {
    id: "overseasremitcoupon",
    name: "해외송금 쿠폰 선택",
    path: "/overseasremitcouponu95087",
    status: "completed",
    description: "해외송금 쿠폰 선택 화면",
  },
  {
    id: "overseasremitnickname",
    name: "해외송금 별명 설정",
    path: "/overseasremitnicknameu95088",
    status: "completed",
    description: "해외송금 수취인 별명 설정 화면",
  },
  {
    id: "overseasremitcontacts",
    name: "해외송금 즐겨찾기",
    path: "/overseasremitcontactsu95089",
    status: "completed",
    description: "해외송금 즐겨찾기 연락처 관리 화면",
  },
  {
    id: "overseasremitrecipient",
    name: "해외송금 대상자 등록",
    path: "/overseasremitrecipientu95090",
    status: "completed",
    description: "해외송금 대상자 등록 화면",
  },
  {
    id: "overseasremitidinput",
    name: "해외송금 고객정보 입력",
    path: "/overseasremitidinputu95091",
    status: "completed",
    description: "해외송금 고객정보 (신분증) 입력 화면",
  },
  {
    id: "overseasremitconfirm",
    name: "해외송금 확인",
    path: "/overseasremitconfirmu95092",
    status: "completed",
    description: "해외송금 송금 확인 화면",
  },
  {
    id: "overseasremitfail",
    name: "해외송금 실패",
    path: "/overseasremitfailu95093",
    status: "completed",
    description: "해외송금 송금 실패 화면",
  },
  {
    id: "overseasremitpaymentconfirm",
    name: "해외송금 결제 확인",
    path: "/overseasremitpaymentconfirmu95094",
    status: "completed",
    description: "해외송금 결제 확인 화면",
  },
  {
    id: "overseasremithistory",
    name: "해외송금 내역",
    path: "/overseasremithistoryu95095",
    status: "completed",
    description: "해외송금 내역 조회 화면",
  },
  {
    id: "overseasremitreceiverinfo",
    name: "해외송금 수취인 정보",
    path: "/overseasremitreceiverinfou95096",
    status: "completed",
    description: "해외송금 수취인 정보 입력 화면",
  },
  {
    id: "overseasremittransferinfo",
    name: "해외송금 이체 정보",
    path: "/overseasremitu95097",
    status: "completed",
    description: "해외송금 이체 정보 확인 화면",
  },
  {
    id: "overseasremitpin",
    name: "해외송금 PIN 입력",
    path: "/overseasremitpinu95098",
    status: "completed",
    description: "해외송금 6자리 비밀번호 입력 화면",
  },
  {
    id: "historymain",
    name: "거래내역 메인",
    path: "/historymainu95099",
    status: "completed",
    description: "거래내역 메인 화면 (송금 현황 표시)",
  },
  {
    id: "historyempty",
    name: "거래내역 없음",
    path: "/historyemptyu95100",
    status: "completed",
    description: "거래내역이 없는 경우 빈 화면 표시",
  },
  {
    id: "historycancel",
    name: "거래내역 취소 (BT)",
    path: "/historycancelu95101",
    status: "completed",
    description: "송금 취소된 거래내역 상세 바텀시트",
  },
  {
    id: "historycomplete",
    name: "거래내역 완료 (BT)",
    path: "/historycompleteu95102",
    status: "completed",
    description: "송금 완료된 거래내역 상세 바텀시트",
  },
  {
    id: "historyprogress",
    name: "거래내역 진행중 (BT)",
    path: "/historyprogressu95103",
    status: "completed",
    description: "송금 진행중인 거래내역 상세 바텀시트",
  },
  {
    id: "historyperiodselect",
    name: "기간 선택 (BT)",
    path: "/historyperiodselectu95104",
    status: "completed",
    description: "거래내역 조회 기간 선택 바텀시트",
  },
  {
    id: "historyrefund",
    name: "환불 진행 상황 (BT)",
    path: "/historyrefundu95105",
    status: "completed",
    description: "환불 진행 상황 타임라인 바텀시트",
  },
  {
    id: "historydetail1",
    name: "송금 내역 상세 1",
    path: "/historydetail1u95106",
    status: "completed",
    description: "송금 내역 상세 화면 (해외송금 완료)",
  },
  {
    id: "historydetail2",
    name: "송금 내역 상세 2",
    path: "/historydetail2u95107",
    status: "completed",
    description: "송금 내역 상세 화면 (수령인/송금정보)",
  },
  {
    id: "historydetail3",
    name: "송금 내역 상세 3",
    path: "/historydetail3u95108",
    status: "completed",
    description: "송금 내역 상세 화면 (금액정보)",
  },
  {
    id: "historydetail4",
    name: "송금 내역 상세 4",
    path: "/historydetail4u95109",
    status: "completed",
    description: "송금 내역 상세 화면 (진행상황)",
  },
  {
    id: "historydetail5",
    name: "송금 추적",
    path: "/historydetail5u95110",
    status: "completed",
    description: "송금 추적 화면 (타임라인)",
  },
  {
    id: "historydetail6",
    name: "취소/환불 상세",
    path: "/historydetail6u95111",
    status: "completed",
    description: "취소/환불 상세 화면",
  },
  {
    id: "servicecertificate",
    name: "거래 증명서 발급",
    path: "/servicecertificateu95112",
    status: "completed",
    description: "거래 증명서 발급 화면 (이메일/PDF 선택)",
  },
  {
    id: "section-event",
    name: "Event",
    type: "section",
  },
  {
    id: "event",
    name: "이벤트",
    path: "/eventu95113",
    status: "completed",
    description: "이벤트 화면 (진행중/지난 이벤트 탭)",
  },
  {
    id: "eventempty",
    name: "이벤트 없음",
    path: "/eventemptyu95114",
    status: "completed",
    description: "종료된 이벤트가 없는 경우 빈 화면",
  },
  {
    id: "eventscreen",
    name: "이벤트 (과거)",
    path: "/eventscreenu95115",
    status: "completed",
    description: "지난 이벤트 목록 화면 (비활성화 표시)",
  },
  {
    id: "section-support",
    name: "Support",
    type: "section",
  },
  {
    id: "support",
    name: "고객센터",
    path: "/supportu95116",
    status: "completed",
  },
  {
    id: "supportscreen",
    name: "자주 묻는 질문",
    path: "/supportscreenu95117",
    status: "completed",
  },
  {
    id: "section-mypage",
    name: "MYPAGE",
    type: "section",
  },
  {
    id: "mypage",
    name: "MyPage_096_내 정보 메인(비로그인)",
    path: "/mypageu95118",
    status: "completed",
  },
  {
    id: "screen6mypage",
    name: "MyPage_001_내 정보 메인(1)",
    path: "/screen6u95049",
    status: "completed",
  },
  {
    id: "screen4mypage",
    name: "MyPage_001_내 정보 메인(2)",
    path: "/screen4u95005",
    status: "completed",
  },
  {
    id: "screen5mypage",
    name: "MyPage_001_내 정보 메인(3)",
    path: "/screen5u95122",
    status: "completed",
  },
  {
    id: "mypagewrapper",
    name: "MyPage_104_송금 한도 안내(BT)",
    path: "/mypagewrapperu95121",
    status: "completed",
  },
  {
    id: "screen7mypage",
    name: "MyPage_099_쿠폰 내역 없음",
    path: "/screen7u95123",
    status: "completed",
  },
  {
    id: "mypagepopup",
    name: "MyPage_018_내 쿠폰_popup(MD)",
    path: "/mypagepopupu95119",
    status: "completed",
  },
  {
    id: "mypagescreen",
    name: "MyPage_018_내 쿠폰_조회설정(BT)",
    path: "/mypagescreenu95120",
    status: "completed",
  },
  {
    id: "mypage017",
    name: "MyPage_017_내 쿠폰",
    path: "/mypage017u95124",
    status: "completed",
  },
  {
    id: "mypage2_mypage",
    name: "MyPage_002_내 정보 관리",
    path: "/mypage2_mypageu95125",
    status: "completed",
    description: "내 정보 관리 화면",
  },
  {
    id: "mypage2_mypagescreen",
    name: "MyPage_003_수정하기",
    path: "/mypage2_mypagescreenu95133",
    status: "completed",
    description: "내 정보 수정하기 화면",
  },
  {
    id: "mypage2_overseasremit",
    name: "OverseasRemit_016 해외송금 공지 안내(BT)",
    path: "/mypage2_overseasremitu95127",
    status: "completed",
    description: "해외송금 공지 안내 화면",
  },
  {
    id: "mypage2_servicecertscreen",
    name: "ServiceCert_003_확인증 발급 방법 선택",
    path: "/mypage2_servicecertscreenu95128",
    status: "completed",
    description: "확인증 발급 방법 선택 화면",
  },
  {
    id: "mypage2_servicecert",
    name: "ServiceCert_003_확인증 발급 방법 선택",
    path: "/mypage2_servicecertu95126",
    status: "completed",
    description: "확인증 발급 방법 선택 화면",
  },
  {
    id: "mypage2_servicecertwrapper",
    name: "ServiceCert_003_확인증 발급 방법 선택",
    path: "/mypage2_servicecertwrapperu95129",
    status: "completed",
    description: "확인증 발급 방법 선택 화면",
  },
  {
    id: "mypage2_screen6",
    name: "ServiceCert_004_위챗용_서비스 이용 확인증 발급",
    path: "/mypage2_screen6u95131",
    status: "completed",
    description: "위챗용 서비스 이용 확인증 발급 화면",
  },
  {
    id: "mypage2_screen7",
    name: "ServiceCert_004_위챗용_서비스 이용 확인증 발급",
    path: "/mypage2_screen7u95132",
    status: "completed",
    description: "위챗용 서비스 이용 확인증 발급 화면",
  },
  {
    id: "mypage2_divwrapper",
    name: "ServiceCert_004_위챗용_서비스 이용 확인증 발급",
    path: "/mypage2_divwrapperu95130",
    status: "completed",
    description: "위챗용 서비스 이용 확인증 발급 화면",
  },
  {
    id: "mypage3_mypage",
    name: "MyPage_021_친구초대",
    path: "/mypage3_mypageu95134",
    status: "completed",
    description: "친구초대 화면",
  },
  {
    id: "mypage3_screen6",
    name: "MyPage_021_친구초대",
    path: "/mypage3_screen6u95140",
    status: "completed",
    description: "친구초대 화면",
  },
  {
    id: "mypage3_screen7",
    name: "MyPage_021_친구초대",
    path: "/mypage3_screen7u95141",
    status: "completed",
    description: "친구초대 화면",
  },
  {
    id: "mypage3_screen5",
    name: "MyPage_022_친구초대 내역 (누적리워드 보기)",
    path: "/mypage3_screen5u95139",
    status: "completed",
    description: "친구초대 내역 (누적리워드 보기) 화면",
  },
  {
    id: "mypage3_overseasremit",
    name: "OverseasRemit_022 송금결과_가상계좌 입금 안내",
    path: "/mypage3_overseasremitu95137",
    status: "completed",
    description: "송금결과 가상계좌 입금 안내 화면",
  },
  {
    id: "mypage3_screen4",
    name: "MyPage_025_친구초대하기_바텀시트(BT)",
    path: "/mypage3_screen4u95138",
    status: "completed",
    description: "친구초대하기 바텀시트 화면",
  },
  {
    id: "mypage3_mypagewrapper",
    name: "MyPage_025_친구초대하기_바텀시트(BT)",
    path: "/mypage3_mypagewrapperu95136",
    status: "completed",
    description: "친구초대하기 바텀시트 화면",
  },
  {
    id: "mypage3_mypagescreen",
    name: "MyPage_025_친구초대하기_바텀시트(BT)",
    path: "/mypage3_mypagescreenu95135",
    status: "completed",
    description: "친구초대하기 바텀시트 화면",
  },
  {
    id: "mypage4_mypage",
    name: "MyPage_063 여권 등록방법 선택",
    path: "/mypage4_mypageu95143",
    status: "completed",
    description: "여권 등록방법 선택 화면",
  },
  {
    id: "mypage4_divwrapper",
    name: "MyPage_064 여권 촬영화면",
    path: "/mypage4_divwrapperu95142",
    status: "completed",
    description: "여권 촬영화면",
  },
  {
    id: "mypage4_screen5",
    name: "MyPage_066 여권정보 확인 - 외국인",
    path: "/mypage4_screen5u95147",
    status: "completed",
    description: "여권정보 확인 - 외국인 화면",
  },
  {
    id: "mypage4_screen6",
    name: "MyPage_066 여권정보 확인 - 내국인",
    path: "/mypage4_screen6u95148",
    status: "completed",
    description: "여권정보 확인 - 내국인 화면",
  },
  {
    id: "mypage4_mypagewrapper",
    name: "MyPage_067 여권등록 완료",
    path: "/mypage4_mypagewrapperu95145",
    status: "completed",
    description: "여권등록 완료 화면",
  },
  {
    id: "mypage4_screen4",
    name: "MyPage_066 여권정보 확인 - 외국인",
    path: "/mypage4_screen4u95146",
    status: "completed",
    description: "여권정보 확인 - 외국인 화면",
  },
  {
    id: "mypage4_mypagescreen",
    name: "MyPage_066 여권정보 확인 - 외국인",
    path: "/mypage4_mypagescreenu95144",
    status: "completed",
    description: "여권정보 확인 - 외국인 화면",
  },
  {
    id: "mypage5_divwrapper",
    name: "MyPage5_001_DivWrapper",
    path: "/mypage5_divwrapperu95149",
    status: "completed",
    description: "MyPage5 DivWrapper 화면",
  },
  {
    id: "mypage5_mypage",
    name: "MyPage5_002_Mypage",
    path: "/mypage5_mypageu95150",
    status: "completed",
    description: "MyPage5 Mypage 화면",
  },
  {
    id: "mypage5_mypagebs",
    name: "MyPage5_003_MypageBs",
    path: "/mypage5_mypagebsu95151",
    status: "completed",
    description: "MyPage5 MypageBs 화면",
  },
  {
    id: "mypage5_mypagescreen",
    name: "MyPage5_004_MypageScreen",
    path: "/mypage5_mypagescreenu95152",
    status: "completed",
    description: "MyPage5 MypageScreen 화면",
  },
  {
    id: "mypage5_mypagewrapper",
    name: "MyPage5_005_MypageWrapper",
    path: "/mypage5_mypagewrapperu95153",
    status: "completed",
    description: "MyPage5 MypageWrapper 화면",
  },
  {
    id: "mypage5_screen5",
    name: "MyPage5_006_Screen5",
    path: "/mypage5_screen5u95154",
    status: "completed",
    description: "MyPage5 Screen5 화면",
  },
  {
    id: "mypage5_screen6",
    name: "MyPage5_007_Screen6",
    path: "/mypage5_screen6u95155",
    status: "completed",
    description: "MyPage5 Screen6 화면",
  },
  {
    id: "mypage5_screen7",
    name: "MyPage5_008_Screen7",
    path: "/mypage5_screen7u95156",
    status: "completed",
    description: "MyPage5 Screen7 화면",
  },
  {
    id: "section-settings",
    name: "SETTINGS",
    type: "section",
  },
  {
    id: "settings1_account",
    name: "Settings1_001_Account",
    path: "/settings1_accountu95157",
    status: "completed",
    description: "Settings1 Account 화면",
  },
  {
    id: "settings1_accountscreen",
    name: "Settings1_002_AccountScreen",
    path: "/settings1_accountscreenu95158",
    status: "completed",
    description: "Settings1 AccountScreen 화면",
  },
  {
    id: "settings1_accountwrapper",
    name: "Settings1_003_AccountWrapper",
    path: "/settings1_accountwrapperu95159",
    status: "completed",
    description: "Settings1 AccountWrapper 화면",
  },
  {
    id: "settings1_divwrapper",
    name: "Settings1_004_DivWrapper",
    path: "/settings1_divwrapperu95160",
    status: "completed",
    description: "Settings1 DivWrapper 화면",
  },
  {
    id: "settings1_screen7",
    name: "Settings1_005_Screen7",
    path: "/settings1_screen7u95161",
    status: "completed",
    description: "Settings1 Screen7 화면",
  },
  {
    id: "settings1_settings",
    name: "Settings1_006_Settings",
    path: "/settings1_settingsu95162",
    status: "completed",
    description: "Settings1 Settings 화면",
  },
  {
    id: "settings1_settingsscreen",
    name: "Settings1_007_SettingsScreen",
    path: "/settings1_settingsscreenu95163",
    status: "completed",
    description: "Settings1 SettingsScreen 화면",
  },
  {
    id: "settings1_settingswrapper",
    name: "Settings1_008_SettingsWrapper",
    path: "/settings1_settingswrapperu95164",
    status: "completed",
    description: "Settings1 SettingsWrapper 화면",
  },
  {
    id: "settings2_mypage",
    name: "Settings2_001_Mypage",
    path: "/settings2_mypageu95165",
    status: "completed",
    description: "Settings2 Mypage 화면",
  },
  {
    id: "settings2_pinpin",
    name: "Settings2_002_PinPin",
    path: "/settings2_pinpinu95166",
    status: "completed",
    description: "Settings2 PinPin 화면",
  },
  {
    id: "settings2_pinpinscreen",
    name: "Settings2_003_PinPinScreen",
    path: "/settings2_pinpinscreenu95167",
    status: "completed",
    description: "Settings2 PinPinScreen 화면",
  },
  {
    id: "settings2_settings",
    name: "Settings2_004_Settings",
    path: "/settings2_settingsu95168",
    status: "completed",
    description: "Settings2 Settings 화면",
  },
  {
    id: "settings2_settingspin",
    name: "Settings2_005_SettingsPin",
    path: "/settings2_settingspinu95169",
    status: "completed",
    description: "Settings2 SettingsPin 화면",
  },
  {
    id: "settings2_settingsscreen",
    name: "Settings2_006_SettingsScreen",
    path: "/settings2_settingsscreenu95170",
    status: "completed",
    description: "Settings2 SettingsScreen 화면",
  },
  {
    id: "settings2_signup",
    name: "Settings2_007_Signup",
    path: "/settings2_signupu95171",
    status: "completed",
    description: "Settings2 Signup 화면",
  },
  {
    id: "settings2_signupscreen",
    name: "Settings2_008_SignupScreen",
    path: "/settings2_signupscreenu95172",
    status: "completed",
    description: "Settings2 SignupScreen 화면",
  },
  {
    id: "settings3_pinpin",
    name: "Settings3_001_PinPin",
    path: "/settings3_pinpinu95173",
    status: "completed",
    description: "Settings3 PinPin 화면",
  },
  {
    id: "settings3_settings",
    name: "Settings3_002_Settings",
    path: "/settings3_settingsu95174",
    status: "completed",
    description: "Settings3 Settings 화면",
  },
  {
    id: "settings3_settingsfaceid",
    name: "Settings3_003_SettingsFaceid",
    path: "/settings3_settingsfaceidu95175",
    status: "completed",
    description: "Settings3 SettingsFaceid 화면",
  },
  {
    id: "settings3_settingsfaceidscreen",
    name: "Settings3_004_SettingsFaceidScreen",
    path: "/settings3_settingsfaceidscreenu95176",
    status: "completed",
    description: "Settings3 SettingsFaceidScreen 화면",
  },
  {
    id: "settings4_screen",
    name: "Settings4_001_Screen",
    path: "/settings4_screenu95177",
    status: "completed",
    description: "Settings4 Screen 화면",
  },
  {
    id: "settings4_screen4",
    name: "Settings4_002_Screen4",
    path: "/settings4_screen4u95178",
    status: "completed",
    description: "Settings4 Screen4 화면",
  },
  {
    id: "settings4_screen5",
    name: "Settings4_003_Screen5",
    path: "/settings4_screen5u95179",
    status: "completed",
    description: "Settings4 Screen5 화면",
  },
  {
    id: "settings4_screen6",
    name: "Settings4_004_Screen6",
    path: "/settings4_screen6u95180",
    status: "completed",
    description: "Settings4 Screen6 화면",
  },
  {
    id: "settings4_screen7",
    name: "Settings4_005_Screen7",
    path: "/settings4_screen7u95181",
    status: "completed",
    description: "Settings4 Screen7 화면",
  },
  {
    id: "settings4_settings",
    name: "Settings4_006_Settings",
    path: "/settings4_settingsu95182",
    status: "completed",
    description: "Settings4 Settings 화면",
  },
  {
    id: "settings4_settingsscreen",
    name: "Settings4_007_SettingsScreen",
    path: "/settings4_settingsscreenu95183",
    status: "completed",
    description: "Settings4 SettingsScreen 화면",
  },
  {
    id: "settings4_settingswrapper",
    name: "Settings4_008_SettingsWrapper",
    path: "/settings4_settingswrapperu95184",
    status: "completed",
    description: "Settings4 SettingsWrapper 화면",
  },
  {
    id: "settings5_divwrapper",
    name: "Settings5_001_DivWrapper",
    path: "/settings5_divwrapperu95185",
    status: "completed",
    description: "Settings5 DivWrapper 화면",
  },
  {
    id: "settings5_screen4",
    name: "Settings5_002_Screen4",
    path: "/settings5_screen4u95186",
    status: "completed",
    description: "Settings5 Screen4 화면",
  },
  {
    id: "settings5_settings",
    name: "Settings5_003_Settings",
    path: "/settings5_settingsu95187",
    status: "completed",
    description: "Settings5 Settings 화면",
  },
  {
    id: "settings5_settingsscreen",
    name: "Settings5_004_SettingsScreen",
    path: "/settings5_settingsscreenu95188",
    status: "completed",
    description: "Settings5 SettingsScreen 화면",
  },
  {
    id: "settings5_settingswrapper",
    name: "Settings5_005_SettingsWrapper",
    path: "/settings5_settingswrapperu95189",
    status: "completed",
    description: "Settings5 SettingsWrapper 화면",
  },
  {
    id: "section-account1",
    name: "Account",
    type: "section",
  },
  {
    id: "account1-account",
    name: "Account",
    path: "/account1account",
    status: "completed",
    description: "account1 Account 화면",
  },
  {
    id: "account1-accountscreen",
    name: "AccountScreen",
    path: "/account1accountscreen",
    status: "completed",
    description: "account1 AccountScreen 화면",
  },
  {
    id: "account1-accountwrapper",
    name: "AccountWrapper",
    path: "/account1accountwrapper",
    status: "completed",
    description: "account1 AccountWrapper 화면",
  },
  {
    id: "account1-divwrapper",
    name: "DivWrapper",
    path: "/account1divwrapper",
    status: "completed",
    description: "account1 DivWrapper 화면",
  },
  {
    id: "account1-login",
    name: "Login",
    path: "/account1login",
    status: "completed",
    description: "account1 Login 화면",
  },
  {
    id: "account1-loginscreen",
    name: "LoginScreen",
    path: "/account1loginscreen",
    status: "completed",
    description: "account1 LoginScreen 화면",
  },
  {
    id: "account1-screen6",
    name: "Screen6",
    path: "/account1screen6",
    status: "completed",
    description: "account1 Screen6 화면",
  },
  {
    id: "account2-account",
    name: "Account",
    path: "/account2account",
    status: "completed",
    description: "account2 Account 화면",
  },
  {
    id: "account2-accountscreen",
    name: "AccountScreen",
    path: "/account2accountscreen",
    status: "completed",
    description: "account2 AccountScreen 화면",
  },
  {
    id: "account2-accountwrapper",
    name: "AccountWrapper",
    path: "/account2accountwrapper",
    status: "completed",
    description: "account2 AccountWrapper 화면",
  },
  {
    id: "account2-commonpin",
    name: "CommonPin",
    path: "/account2commonpin",
    status: "completed",
    description: "account2 CommonPin 화면",
  },
  {
    id: "account2-divwrapper",
    name: "DivWrapper",
    path: "/account2divwrapper",
    status: "completed",
    description: "account2 DivWrapper 화면",
  },
  {
    id: "account2-pinpin",
    name: "PinPin",
    path: "/account2pinpin",
    status: "completed",
    description: "account2 PinPin 화면",
  },
  {
    id: "account2-signup",
    name: "Signup",
    path: "/account2signup",
    status: "completed",
    description: "account2 Signup 화면",
  },
  {
    id: "account2-signuppin",
    name: "SignupPin",
    path: "/account2signuppin",
    status: "completed",
    description: "account2 SignupPin 화면",
  },
  {
    id: "account3-account",
    name: "Account",
    path: "/account3account",
    status: "completed",
    description: "account3 Account 화면",
  },
  {
    id: "account3-accountci",
    name: "AccountCi",
    path: "/account3accountci",
    status: "completed",
    description: "account3 AccountCi 화면",
  },
  {
    id: "account3-accountscreen",
    name: "AccountScreen",
    path: "/account3accountscreen",
    status: "completed",
    description: "account3 AccountScreen 화면",
  },
  {
    id: "account3-accountwrapper",
    name: "AccountWrapper",
    path: "/account3accountwrapper",
    status: "completed",
    description: "account3 AccountWrapper 화면",
  },
  {
    id: "account3-divwrapper",
    name: "DivWrapper",
    path: "/account3divwrapper",
    status: "completed",
    description: "account3 DivWrapper 화면",
  },
  {
    id: "account3-element",
    name: "Element",
    path: "/account3element",
    status: "completed",
    description: "account3 Element 화면",
  },
  {
    id: "account3-framescreen",
    name: "FrameScreen",
    path: "/account3framescreen",
    status: "completed",
    description: "account3 FrameScreen 화면",
  },
  {
    id: "account3-signup",
    name: "Signup",
    path: "/account3signup",
    status: "completed",
    description: "account3 Signup 화면",
  },
  {
    id: "account4-divwrapper",
    name: "DivWrapper",
    path: "/account4divwrapper",
    status: "completed",
    description: "account4 DivWrapper 화면",
  },
  {
    id: "account4-element",
    name: "Element",
    path: "/account4element",
    status: "completed",
    description: "account4 Element 화면",
  },
  {
    id: "account4-elementscreen",
    name: "ElementScreen",
    path: "/account4elementscreen",
    status: "completed",
    description: "account4 ElementScreen 화면",
  },
  {
    id: "account4-elementwrapper",
    name: "ElementWrapper",
    path: "/account4elementwrapper",
    status: "completed",
    description: "account4 ElementWrapper 화면",
  },
  {
    id: "account4-signup",
    name: "Signup",
    path: "/account4signup",
    status: "completed",
    description: "account4 Signup 화면",
  },
  {
    id: "account4-signupscreen",
    name: "SignupScreen",
    path: "/account4signupscreen",
    status: "completed",
    description: "account4 SignupScreen 화면",
  },
  {
    id: "account4-signupwrapper",
    name: "SignupWrapper",
    path: "/account4signupwrapper",
    status: "completed",
    description: "account4 SignupWrapper 화면",
  },
  {
    id: "account5-account",
    name: "Account",
    path: "/account5account",
    status: "completed",
    description: "account5 Account 화면",
  },
  {
    id: "account5-accountars",
    name: "AccountArs",
    path: "/account5accountars",
    status: "completed",
    description: "account5 AccountArs 화면",
  },
  {
    id: "account5-accountscreen",
    name: "AccountScreen",
    path: "/account5accountscreen",
    status: "completed",
    description: "account5 AccountScreen 화면",
  },
  {
    id: "account5-accountwrapper",
    name: "AccountWrapper",
    path: "/account5accountwrapper",
    status: "completed",
    description: "account5 AccountWrapper 화면",
  },
  {
    id: "account5-divwrapper",
    name: "DivWrapper",
    path: "/account5divwrapper",
    status: "completed",
    description: "account5 DivWrapper 화면",
  },
  {
    id: "account5-screen5",
    name: "Screen5",
    path: "/account5screen5",
    status: "completed",
    description: "account5 Screen5 화면",
  },
  {
    id: "section-overseasremit",
    name: "OverseasRemit",
    type: "section",
  },
  {
    id: "overseasremit1-overseasremit",
    name: "Overseasremit",
    path: "/overseasremit1overseasremit",
    status: "completed",
    description: "OverseasRemit1 Overseasremit 화면",
  },
  {
    id: "overseasremit1-overseasremitscreen",
    name: "OverseasremitScreen",
    path: "/overseasremit1overseasremitscreen",
    status: "completed",
    description: "OverseasRemit1 OverseasremitScreen 화면",
  },
  {
    id: "overseasremit1-overseasremitwrapper",
    name: "OverseasremitWrapper",
    path: "/overseasremit1overseasremitwrapper",
    status: "completed",
    description: "OverseasRemit1 OverseasremitWrapper 화면",
  },
  {
    id: "overseasremit1-screen3",
    name: "Screen3",
    path: "/overseasremit1screen3",
    status: "completed",
    description: "OverseasRemit1 Screen3 화면",
  },
  {
    id: "overseasremit1-screen4",
    name: "Screen4",
    path: "/overseasremit1screen4",
    status: "completed",
    description: "OverseasRemit1 Screen4 화면",
  },
  {
    id: "overseasremit1-screen5",
    name: "Screen5",
    path: "/overseasremit1screen5",
    status: "completed",
    description: "OverseasRemit1 Screen5 화면",
  },
  {
    id: "overseasremit1-screen6",
    name: "Screen6",
    path: "/overseasremit1screen6",
    status: "completed",
    description: "OverseasRemit1 Screen6 화면",
  },
  {
    id: "overseasremit1-screen7",
    name: "Screen7",
    path: "/overseasremit1screen7",
    status: "completed",
    description: "OverseasRemit1 Screen7 화면",
  },
  {
    id: "overseasremit2-overseasremit",
    name: "Overseasremit",
    path: "/overseasremit2overseasremit",
    status: "completed",
    description: "OverseasRemit2 Overseasremit 화면",
  },
  {
    id: "overseasremit2-overseasremitscreen",
    name: "OverseasremitScreen",
    path: "/overseasremit2overseasremitscreen",
    status: "completed",
    description: "OverseasRemit2 OverseasremitScreen 화면",
  },
  {
    id: "overseasremit2-overseasremitwrapper",
    name: "OverseasremitWrapper",
    path: "/overseasremit2overseasremitwrapper",
    status: "completed",
    description: "OverseasRemit2 OverseasremitWrapper 화면",
  },
  {
    id: "overseasremit2-pinpin",
    name: "PinPin",
    path: "/overseasremit2pinpin",
    status: "completed",
    description: "OverseasRemit2 PinPin 화면",
  },
  {
    id: "overseasremit2-screen4",
    name: "Screen4",
    path: "/overseasremit2screen4",
    status: "completed",
    description: "OverseasRemit2 Screen4 화면",
  },
  {
    id: "overseasremit2-screen5",
    name: "Screen5",
    path: "/overseasremit2screen5",
    status: "completed",
    description: "OverseasRemit2 Screen5 화면",
  },
  {
    id: "overseasremit2-screen6",
    name: "Screen6",
    path: "/overseasremit2screen6",
    status: "completed",
    description: "OverseasRemit2 Screen6 화면",
  },
  {
    id: "overseasremit2-screen7",
    name: "Screen7",
    path: "/overseasremit2screen7",
    status: "completed",
    description: "OverseasRemit2 Screen7 화면",
  },
  {
    id: "overseasremit2-screen8",
    name: "Screen8",
    path: "/overseasremit2screen8",
    status: "completed",
    description: "OverseasRemit2 Screen8 화면",
  },
  {
    id: "overseasremit2-screen9",
    name: "Screen9",
    path: "/overseasremit2screen9",
    status: "completed",
    description: "OverseasRemit2 Screen9 화면",
  },
  // HISTORY Section
  {
    id: "history-section",
    name: "HISTORY",
    type: "section",
  },
  {
    id: "history1-divwrapper",
    name: "DivWrapper",
    path: "/history1divwrapper",
    status: "completed",
    description: "History1 DivWrapper 화면",
  },
  {
    id: "history1-history",
    name: "History",
    path: "/history1history",
    status: "completed",
    description: "History1 History 화면",
  },
  {
    id: "history1-historyscreen",
    name: "HistoryScreen",
    path: "/history1historyscreen",
    status: "completed",
    description: "History1 HistoryScreen 화면",
  },
  {
    id: "history1-historywrapper",
    name: "HistoryWrapper",
    path: "/history1historywrapper",
    status: "completed",
    description: "History1 HistoryWrapper 화면",
  },
  {
    id: "history1-screen4",
    name: "Screen4",
    path: "/history1screen4",
    status: "completed",
    description: "History1 Screen4 화면",
  },
  {
    id: "history1-screen5",
    name: "Screen5",
    path: "/history1screen5",
    status: "completed",
    description: "History1 Screen5 화면",
  },
  {
    id: "history1-screen6",
    name: "Screen6",
    path: "/history1screen6",
    status: "completed",
    description: "History1 Screen6 화면",
  },
  {
    id: "history2-history",
    name: "History",
    path: "/history2history",
    status: "completed",
    description: "History2 History 화면",
  },
  {
    id: "history2-historyscreen",
    name: "HistoryScreen",
    path: "/history2historyscreen",
    status: "completed",
    description: "History2 HistoryScreen 화면",
  },
  {
    id: "history2-historywrapper",
    name: "HistoryWrapper",
    path: "/history2historywrapper",
    status: "completed",
    description: "History2 HistoryWrapper 화면",
  },
  {
    id: "history2-screen4",
    name: "Screen4",
    path: "/history2screen4",
    status: "completed",
    description: "History2 Screen4 화면",
  },
  {
    id: "history2-screen5",
    name: "Screen5",
    path: "/history2screen5",
    status: "completed",
    description: "History2 Screen5 화면",
  },
  {
    id: "history2-screen6",
    name: "Screen6",
    path: "/history2screen6",
    status: "completed",
    description: "History2 Screen6 화면",
  },
  {
    id: "history2-servicecert",
    name: "Servicecert",
    path: "/history2servicecert",
    status: "completed",
    description: "History2 Servicecert 화면",
  },
];

// SortableMenuItem 컴포넌트 - 드래그 가능한 메뉴 아이템
interface SortableMenuItemProps {
  item: PublishingItem;
  selectedScreen: string;
  editingId: string | null;
  editingName: string;
  customNames: Record<string, string>;
  onSelect: (id: string) => void;
  onStartEdit: (id: string, name: string, e: React.MouseEvent) => void;
  onSaveEdit: (id: string, e: React.MouseEvent) => void;
  onResetName: (id: string, e: React.MouseEvent) => void;
  onCancelEdit: (e: React.MouseEvent) => void;
  onEditingNameChange: (name: string) => void;
  onDeleteItem: (id: string, e: React.MouseEvent) => void;
  getMenuName: (id: string, originalName: string) => string;
  isDragMode: boolean;
  activeId: string | null;
}

const SortableMenuItem: React.FC<SortableMenuItemProps> = ({
  item,
  selectedScreen,
  editingId,
  editingName,
  customNames,
  onSelect,
  onStartEdit,
  onSaveEdit,
  onResetName,
  onCancelEdit,
  onEditingNameChange,
  onDeleteItem,
  getMenuName,
  isDragMode,
  activeId,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled: !isDragMode });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  // 섹션 타입인 경우
  if (item.type === "section") {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`px-3 py-2 mt-4 mb-1 ${isDragMode ? "cursor-move" : ""}`}
        {...(isDragMode ? { ...attributes, ...listeners } : {})}
      >
        <div className="flex items-center gap-2">
          {isDragMode && (
            <GripVerticalIcon className="w-3 h-3 text-gray-400 flex-shrink-0" />
          )}
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {item.name}
          </span>
        </div>
      </div>
    );
  }

  // 메뉴 타입인 경우
  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => !isDragMode && editingId !== item.id && onSelect(item.id)}
      className={`group w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors ${
        isDragMode ? "cursor-move" : "cursor-pointer"
      } ${
        selectedScreen === item.id
          ? "bg-blue-50 text-blue-700 border border-blue-200"
          : "hover:bg-gray-100 text-gray-700"
      } ${isDragging ? "shadow-lg ring-2 ring-blue-400" : ""}`}
      {...(isDragMode ? { ...attributes, ...listeners } : {})}
    >
      {isDragMode ? (
        <GripVerticalIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
      ) : (
        <FolderIcon className="w-4 h-4 flex-shrink-0" />
      )}
      {editingId === item.id ? (
        // 편집 모드
        <div className="flex-1 flex items-center gap-1">
          <input
            type="text"
            value={editingName}
            onChange={(e) => onEditingNameChange(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSaveEdit(item.id, e as unknown as React.MouseEvent);
              } else if (e.key === "Escape") {
                onCancelEdit(e as unknown as React.MouseEvent);
              }
            }}
            className="flex-1 px-2 py-1 text-xs border border-blue-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={(e) => onSaveEdit(item.id, e)}
            className="p-1 hover:bg-green-100 rounded"
            title="저장"
          >
            <CheckIcon className="w-3.5 h-3.5 text-green-600" />
          </button>
          {customNames[item.id] && (
            <button
              onClick={(e) => onResetName(item.id, e)}
              className="p-1 hover:bg-orange-100 rounded"
              title="원래 이름으로 되돌리기"
            >
              <RotateCcwIcon className="w-3.5 h-3.5 text-orange-600" />
            </button>
          )}
          <button
            onClick={onCancelEdit}
            className="p-1 hover:bg-gray-100 rounded"
            title="취소"
          >
            <XIcon className="w-3.5 h-3.5 text-gray-500" />
          </button>
          <div className="w-px h-4 bg-gray-300 mx-0.5" />
          <button
            onClick={(e) => onDeleteItem(item.id, e)}
            className="p-1 hover:bg-red-100 rounded"
            title="메뉴 및 페이지 삭제"
          >
            <Trash2Icon className="w-3.5 h-3.5 text-red-600" />
          </button>
        </div>
      ) : (
        // 일반 모드
        <>
          <span className="flex-1 font-medium text-xs">
            {getMenuName(item.id, item.name)}
            {customNames[item.id] && (
              <span className="ml-1 text-[10px] text-gray-400" title={`원래 이름: ${item.name}`}>
                (수정됨)
              </span>
            )}
          </span>
          {customNames[item.id] && (
            <button
              onClick={(e) => onResetName(item.id, e)}
              className={`p-1 hover:bg-orange-100 rounded transition-opacity ${isDragMode ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              title={`원래 이름으로 되돌리기 (${item.name})`}
            >
              <RotateCcwIcon className="w-3.5 h-3.5 text-orange-500" />
            </button>
          )}
          <button
            onClick={(e) => onStartEdit(item.id, item.name, e)}
            className={`p-1 hover:bg-gray-200 rounded transition-opacity ${isDragMode ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            title="이름 수정"
          >
            <PencilIcon className="w-3.5 h-3.5 text-gray-500" />
          </button>
        </>
      )}
      {"status" in item && item.status === "completed" ? (
        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
      ) : (
        <ClockIcon className="w-4 h-4 text-yellow-500 flex-shrink-0" />
      )}
    </div>
  );
};

export const PublishingStatus = (): JSX.Element => {
  const [selectedScreen, setSelectedScreen] = useState<string>("login");
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [customNames, setCustomNames] = useState<Record<string, string>>({});

  // 드래그 앤 드롭 상태
  const [menuOrder, setMenuOrder] = useState<string[]>(() => publishingData.map(item => item.id));
  const [dragMode, setDragMode] = useState<"section" | "free">("section"); // 섹션 내 이동 vs 자유 이동
  const [isDragEnabled, setIsDragEnabled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // 삭제된 메뉴 상태
  const [deletedItems, setDeletedItems] = useState<string[]>([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; path: string } | null>(null);

  // LNB 리사이즈 상태
  const [sidebarWidth, setSidebarWidth] = useState(307);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  // LNB 리사이즈 핸들러
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    // 최소 200px, 최대 1200px로 제한
    if (newWidth >= 200 && newWidth <= 1200) {
      setSidebarWidth(newWidth);
    }
  }, [isResizing]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  // 리사이즈 이벤트 리스너
  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  // 드래그 앤 드롭 센서 설정
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px 이동 후 드래그 시작
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // 정렬된 메뉴 데이터 계산 (삭제된 항목 제외)
  const sortedMenuData = useMemo(() => {
    return menuOrder
      .map(id => publishingData.find(item => item.id === id))
      .filter((item): item is PublishingItem => item !== undefined)
      .filter(item => !deletedItems.includes(item.id));
  }, [menuOrder, deletedItems]);

  // 섹션별로 그룹화된 메뉴 (섹션 모드용)
  const menuBySection = useMemo(() => {
    const sections: { section: PublishingItem | null; items: PublishingItem[] }[] = [];
    let currentSection: { section: PublishingItem | null; items: PublishingItem[] } = { section: null, items: [] };

    sortedMenuData.forEach(item => {
      if (item.type === "section") {
        if (currentSection.section !== null || currentSection.items.length > 0) {
          sections.push(currentSection);
        }
        currentSection = { section: item, items: [] };
      } else {
        currentSection.items.push(item);
      }
    });

    if (currentSection.section !== null || currentSection.items.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  }, [sortedMenuData]);

  const selectedData = publishingData.find((item) => item.id === selectedScreen);

  // localStorage에서 커스텀 이름 로드
  useEffect(() => {
    const savedNames = localStorage.getItem("publishingCustomNames");
    if (savedNames) {
      setCustomNames(JSON.parse(savedNames));
    }
  }, []);

  // 커스텀 이름 저장
  useEffect(() => {
    if (Object.keys(customNames).length > 0) {
      localStorage.setItem("publishingCustomNames", JSON.stringify(customNames));
    }
  }, [customNames]);

  // localStorage에서 삭제된 항목 로드
  useEffect(() => {
    const savedDeletedItems = localStorage.getItem("publishingDeletedItems");
    if (savedDeletedItems) {
      setDeletedItems(JSON.parse(savedDeletedItems));
    }
  }, []);

  // 삭제된 항목 저장
  useEffect(() => {
    if (deletedItems.length > 0) {
      localStorage.setItem("publishingDeletedItems", JSON.stringify(deletedItems));
    }
  }, [deletedItems]);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  // localStorage에서 메뉴 순서 로드
  useEffect(() => {
    const savedOrder = localStorage.getItem("publishingMenuOrder");
    if (savedOrder) {
      const order = JSON.parse(savedOrder);
      // 새로운 메뉴 아이템이 추가된 경우를 위해 기존 순서 + 새 아이템 병합
      const allIds = publishingData.map(item => item.id);
      const validOrder = order.filter((id: string) => allIds.includes(id));
      const newIds = allIds.filter(id => !validOrder.includes(id));
      setMenuOrder([...validOrder, ...newIds]);
    }
  }, []);

  // 메뉴 순서 저장
  useEffect(() => {
    const defaultOrder = publishingData.map(item => item.id);
    const isDefaultOrder = JSON.stringify(menuOrder) === JSON.stringify(defaultOrder);

    if (!isDefaultOrder) {
      localStorage.setItem("publishingMenuOrder", JSON.stringify(menuOrder));
    }
  }, [menuOrder]);

  // 드래그 시작 핸들러
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  // 드래그 종료 핸들러
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) {
      return;
    }

    const activeIndex = menuOrder.indexOf(active.id as string);
    const overIndex = menuOrder.indexOf(over.id as string);

    if (activeIndex === -1 || overIndex === -1) {
      return;
    }

    // 섹션 모드인 경우 같은 섹션 내에서만 이동 가능
    if (dragMode === "section") {
      const activeItem = publishingData.find(item => item.id === active.id);
      const overItem = publishingData.find(item => item.id === over.id);

      // 섹션 자체는 섹션끼리만 이동 가능
      if (activeItem?.type === "section" && overItem?.type !== "section") {
        return;
      }

      // 메뉴 아이템은 같은 섹션 내에서만 이동
      if (activeItem?.type !== "section" && overItem?.type !== "section") {
        // 현재 섹션 찾기
        const findSectionForItem = (itemId: string): string | null => {
          let currentSectionId: string | null = null;
          for (let i = menuOrder.indexOf(itemId) - 1; i >= 0; i--) {
            const item = publishingData.find(p => p.id === menuOrder[i]);
            if (item?.type === "section") {
              currentSectionId = item.id;
              break;
            }
          }
          return currentSectionId;
        };

        const activeSection = findSectionForItem(active.id as string);
        const overSection = findSectionForItem(over.id as string);

        // 다른 섹션으로 이동 불가
        if (activeSection !== overSection) {
          return;
        }
      }
    }

    setMenuOrder(arrayMove(menuOrder, activeIndex, overIndex));
  };

  // 메뉴 순서 초기화
  const handleResetOrder = () => {
    if (window.confirm("메뉴 순서를 기본값으로 초기화하시겠습니까?")) {
      const defaultOrder = publishingData.map(item => item.id);
      setMenuOrder(defaultOrder);
      localStorage.removeItem("publishingMenuOrder");
    }
  };

  // 메뉴 이름 편집 시작
  const handleStartEdit = (id: string, currentName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(id);
    setEditingName(customNames[id] || currentName);
  };

  // 메뉴 이름 저장
  const handleSaveEdit = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (editingName.trim()) {
      if (window.confirm("메뉴명을 변경하시겠습니까?")) {
        setCustomNames((prev) => ({ ...prev, [id]: editingName.trim() }));
        setEditingId(null);
        setEditingName("");
      }
    } else {
      setEditingId(null);
      setEditingName("");
    }
  };

  // 메뉴 이름 초기화 (원래 이름으로 되돌리기)
  const handleResetName = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("원래 이름으로 되돌리시겠습니까?")) {
      setCustomNames((prev) => {
        const newNames = { ...prev };
        delete newNames[id];
        // localStorage 업데이트
        if (Object.keys(newNames).length === 0) {
          localStorage.removeItem("publishingCustomNames");
        } else {
          localStorage.setItem("publishingCustomNames", JSON.stringify(newNames));
        }
        return newNames;
      });
      setEditingId(null);
      setEditingName("");
    }
  };

  // 메뉴 이름 편집 취소
  const handleCancelEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(null);
    setEditingName("");
  };

  // 메뉴 삭제 요청 (확인 다이얼로그 열기)
  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const item = publishingData.find(i => i.id === id);
    if (item && "path" in item) {
      setItemToDelete({
        id: item.id,
        name: customNames[item.id] || item.name,
        path: item.path
      });
      setDeleteConfirmOpen(true);
      setEditingId(null);
      setEditingName("");
    }
  };

  // 삭제 확인
  const handleConfirmDelete = () => {
    if (itemToDelete) {
      setDeletedItems(prev => [...prev, itemToDelete.id]);
      // 삭제된 항목이 현재 선택된 화면이면 다른 화면 선택
      if (selectedScreen === itemToDelete.id) {
        const firstAvailable = publishingData.find(
          item => "path" in item && item.id !== itemToDelete.id && !deletedItems.includes(item.id)
        );
        if (firstAvailable) {
          setSelectedScreen(firstAvailable.id);
        }
      }
      setDeleteConfirmOpen(false);
      setItemToDelete(null);
    }
  };

  // 삭제 취소
  const handleCancelDelete = () => {
    setDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  // 메뉴 이름 가져오기 (커스텀 이름 우선)
  const getMenuName = (id: string, originalName: string) => {
    return customNames[id] || originalName;
  };

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
    <div
      className="flex h-screen bg-gray-50"
      style={isResizing ? { userSelect: 'none', cursor: 'col-resize' } : undefined}
    >
      {/* LNB (Left Navigation Bar) */}
      <aside
        ref={sidebarRef}
        className="bg-white border-r border-gray-200 flex flex-col flex-shrink-0 relative"
        style={{ width: sidebarWidth }}
      >
        {/* LNB Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-900">퍼블리싱 현황</h1>
            <button
              onClick={() => setIsDragEnabled(!isDragEnabled)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDragEnabled
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 text-gray-400"
              }`}
              title={isDragEnabled ? "드래그 모드 비활성화" : "드래그 모드 활성화"}
            >
              <GripVerticalIcon className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">화면 목록</p>

          {/* 드래그 모드 옵션 */}
          {isDragEnabled && (
            <div className="mt-3 p-2 bg-gray-50 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-600">이동 모드:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setDragMode("section")}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                      dragMode === "section"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                    }`}
                    title="섹션 내에서만 이동 가능"
                  >
                    <LayersIcon className="w-3 h-3" />
                    섹션 내
                  </button>
                  <button
                    onClick={() => setDragMode("free")}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                      dragMode === "free"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                    }`}
                    title="전체 자유 이동"
                  >
                    <Layers2Icon className="w-3 h-3" />
                    자유
                  </button>
                </div>
              </div>
              <button
                onClick={handleResetOrder}
                className="flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700"
              >
                <RotateCcwIcon className="w-3 h-3" />
                순서 초기화
              </button>
            </div>
          )}
        </div>

        {/* LNB Menu List */}
        <nav className="flex-1 overflow-y-auto p-2">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={menuOrder}
              strategy={verticalListSortingStrategy}
            >
              <ul className="space-y-1">
                {sortedMenuData.map((item) => (
                  <li key={item.id}>
                    <SortableMenuItem
                      item={item}
                      selectedScreen={selectedScreen}
                      editingId={editingId}
                      editingName={editingName}
                      customNames={customNames}
                      onSelect={setSelectedScreen}
                      onStartEdit={handleStartEdit}
                      onSaveEdit={handleSaveEdit}
                      onResetName={handleResetName}
                      onCancelEdit={handleCancelEdit}
                      onEditingNameChange={setEditingName}
                      onDeleteItem={handleDeleteItem}
                      getMenuName={getMenuName}
                      isDragMode={isDragEnabled}
                      activeId={activeId}
                    />
                  </li>
                ))}
              </ul>
            </SortableContext>

            {/* 드래그 오버레이 */}
            <DragOverlay>
              {activeId && isDragEnabled ? (
                <div className="bg-white shadow-lg rounded-lg px-3 py-2.5 border-2 border-blue-400">
                  <span className="text-xs font-medium text-gray-700">
                    {getMenuName(
                      activeId,
                      publishingData.find(item => item.id === activeId)?.name || ""
                    )}
                  </span>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </nav>

        {/* LNB Footer - Summary */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">완료</span>
            <span className="font-medium text-green-600">
              {publishingData.filter((item) => item.status === "completed" && !deletedItems.includes(item.id)).length}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">대기</span>
            <span className="font-medium text-yellow-600">
              {publishingData.filter((item) => item.status === "pending" && !deletedItems.includes(item.id)).length}
            </span>
          </div>
        </div>

        {/* 리사이즈 핸들 */}
        <div
          onMouseDown={handleMouseDown}
          className={`absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-blue-400 transition-colors ${
            isResizing ? 'bg-blue-500' : 'bg-transparent hover:bg-blue-300'
          }`}
          style={{ zIndex: 10 }}
        />
      </aside>

      {/* Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {selectedData ? (
          <>
            {/* Info Bar */}
            <div className="flex items-center justify-start px-4 py-3 bg-white border-b border-gray-200">
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
                    <a
                      href={selectedData.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 px-2 py-1"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      새 탭
                    </a>
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

      {/* 삭제 확인 다이얼로그 */}
      {deleteConfirmOpen && itemToDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertTriangleIcon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">메뉴 삭제</h3>
              </div>
              <p className="text-gray-600 mb-2">
                다음 메뉴와 페이지를 삭제하시겠습니까?
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="font-medium text-gray-900">{itemToDelete.name}</p>
                <p className="text-sm text-gray-500 mt-1">{itemToDelete.path}</p>
              </div>
              <p className="text-sm text-red-600">
                ⚠️ 이 작업은 되돌릴 수 없습니다.
              </p>
            </div>
            <div className="flex border-t border-gray-200">
              <button
                onClick={handleCancelDelete}
                className="flex-1 px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 px-4 py-3 text-white bg-red-600 hover:bg-red-700 font-medium transition-colors"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
