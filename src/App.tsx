import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Favorite } from "./screens/Favorite";
import { Transform } from "./screens/Transform";
import { PublishingStatus } from "./screens/PublishingStatus";
import { Components } from "./screens/Components/Components";
import { Login } from "./screens/Login";
import { Element } from "./screens/Element";
import { ElementScreen } from "./screens/ElementScreen";
import { ElementWrapper } from "./screens/ElementWrapper";
import { Screen4 } from "./screens/Screen4";
import { Home } from "./screens/Home";
import { HomeScreen } from "./screens/HomeScreen";
import { HomeWrapper } from "./screens/HomeWrapper";
import { Screen8 } from "./screens/Screen8";
import { Common } from "./screens/Common";
import { Signup } from "./screens/Signup";
import { SignupWrapper } from "./screens/SignupWrapper";
import { SignupScreen } from "./screens/SignupScreen";
import { Nationality } from "./screens/Nationality";
import { SignupPhoneEmail } from "./screens/SignupPhoneEmail";
import { VerificationCode } from "./screens/VerificationCode";
import { VerificationCodeWechat } from "./screens/VerificationCodeWechat";
import { SignupEmailTab } from "./screens/SignupEmailTab";
import { SignupEmailInput } from "./screens/SignupEmailInput";
import { SignupPhoneInput } from "./screens/SignupPhoneInput";
import { VerificationCodeTimeout } from "./screens/VerificationCodeTimeout";
import { NewAccountPhoneInput } from "./screens/NewAccountPhoneInput";
import { NewAccountPasswordFilled } from "./screens/NewAccountPasswordFilled";
import { NewAccountPassword } from "./screens/NewAccountPassword";
import { NewAccountReferral } from "./screens/NewAccountReferral";
import { NewAccountPasswordWechat } from "./screens/NewAccountPasswordWechat";
import { PhotoConfirmation } from "./screens/PhotoConfirmation";
import { PasswordReset } from "./screens/PasswordReset";
import { SelfieCapture } from "./screens/SelfieCapture";
import { SelfieVerification } from "./screens/SelfieVerification";
import { PasswordInputKeypad } from "./screens/PasswordInputKeypad";
import { DivWrapper as Newaccount4DivWrapper } from "./screens/newaccount4_DivWrapper";
import { Login as Newaccount4Login } from "./screens/newaccount4_Login";
import { LoginScreen as Newaccount4LoginScreen } from "./screens/newaccount4_LoginScreen";
import { LoginWrapper as Newaccount4LoginWrapper } from "./screens/newaccount4_LoginWrapper";
import { Signup as Newaccount4Signup } from "./screens/newaccount4_Signup";
import { VerificationSteps } from "./screens/VerificationSteps";
import { IdRegistrationMethod } from "./screens/IdRegistrationMethod";
import { CaptureTips } from "./screens/CaptureTips";
import { SelfieCaptureCountdown } from "./screens/SelfieCaptureCountdown";
import { PhotoConfirmDialog } from "./screens/PhotoConfirmDialog";
import { ReferralCodeInput } from "./screens/ReferralCodeInput";
import { IdFrontCapture } from "./screens/IdFrontCapture";
import { IdTypeSelection } from "./screens/IdTypeSelection";
import { FundSourceSelection } from "./screens/FundSourceSelection";
import { CustomerInfoForm } from "./screens/CustomerInfoForm";
import { OccupationSelection } from "./screens/OccupationSelection";
import { CustomerVerification } from "./screens/CustomerVerification";
import { WechatVerification } from "./screens/WechatVerification";
import { AddressInputMethod } from "./screens/AddressInputMethod";
import { AddressDirectInput } from "./screens/AddressDirectInput";
import { TransactionPurpose } from "./screens/TransactionPurpose";
import { SignupHistoryDialog } from "./screens/SignupHistoryDialog";
import { AddressPhotoConfirm } from "./screens/AddressPhotoConfirm";
import { AddressSearchResult } from "./screens/AddressSearchResult";
import { SignupCompleteApproved } from "./screens/SignupCompleteApproved";
import { AddressPhotoUpload } from "./screens/AddressPhotoUpload";
import { AddressDetailInput } from "./screens/AddressDetailInput";
import { AddressSearchApi } from "./screens/AddressSearchApi";
import { SignupCompletePending } from "./screens/SignupCompletePending";
import { Account } from "./screens/Account";
import { Screen6 } from "./screens/Screen6";
import { AccountScreen } from "./screens/AccountScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { SelfCheckAuth } from "./screens/SelfCheckAuth";
import { AccountWrapper } from "./screens/AccountWrapper";
import { LoginScreen } from "./screens/LoginScreen";
import { AccountVerify } from "./screens/AccountVerify";
import { PinEntry } from "./screens/PinEntry";
import { PinInput } from "./screens/PinInput";
import { PinConfirm } from "./screens/PinConfirm";
import { AccountMain2 } from "./screens/AccountMain2";
import { WithdrawComplete } from "./screens/WithdrawComplete";
import { ForeignIdInput } from "./screens/ForeignIdInput";
import { WithdrawFailed } from "./screens/WithdrawFailed";
import { AutoWithdrawConsent } from "./screens/AutoWithdrawConsent";
import { AuthFailure } from "./screens/AuthFailure";
import { AuthMethodSelect } from "./screens/AuthMethodSelect";
import { EmailInput } from "./screens/EmailInput";
import { AuthInfoInput } from "./screens/AuthInfoInput";
import { CertificateSelect } from "./screens/CertificateSelect";
import { AuthCodeInput } from "./screens/AuthCodeInput";
import { ServiceTerms } from "./screens/ServiceTerms";
import { CertificateImportGuide } from "./screens/CertificateImportGuide";
import { CertificateSelectEmpty } from "./screens/CertificateSelectEmpty";
import { CertificatePasswordKeyboard } from "./screens/CertificatePasswordKeyboard";
import { CertificateConfirmKeyboard } from "./screens/CertificateConfirmKeyboard";
import { SimpleAuthSelect } from "./screens/SimpleAuthSelect";
import { CardVerification } from "./screens/CardVerification";
import { CarrierSelect } from "./screens/CarrierSelect";
import { AccountManagement } from "./screens/AccountManagement";
import { ArsVerification } from "./screens/ArsVerification";
import { AutoWithdrawFailed } from "./screens/AutoWithdrawFailed";
import { AutoWithdrawComplete } from "./screens/AutoWithdrawComplete";
import { SelfieVerificationProgress } from "./screens/SelfieVerificationProgress";
import { PassportInfoInput } from "./screens/PassportInfoInput";
import { Overseasremit } from "./screens/Overseasremit";
import { OverseasremitScreen } from "./screens/OverseasremitScreen";
import { OverseasremitWrapper } from "./screens/OverseasremitWrapper";
import { OverseasRemitCoupon } from "./screens/OverseasRemitCoupon";
import { OverseasRemitNickname } from "./screens/OverseasRemitNickname";
import { OverseasRemitContacts } from "./screens/OverseasRemitContacts";
import { OverseasRemitRecipient } from "./screens/OverseasRemitRecipient";
import { OverseasRemitIdInput } from "./screens/OverseasRemitIdInput";
import { OverseasRemitConfirm } from "./screens/OverseasRemitConfirm";
import { OverseasRemitFail } from "./screens/OverseasRemitFail";
import { OverseasRemitPaymentConfirm } from "./screens/OverseasRemitPaymentConfirm";
import { OverseasRemitHistory } from "./screens/OverseasRemitHistory";
import { OverseasRemitReceiverInfo } from "./screens/OverseasRemitReceiverInfo";
import { OverseasRemitTransferInfo } from "./screens/OverseasRemitTransferInfo";
import { OverseasRemitPin } from "./screens/OverseasRemitPin";
import { HistoryMain } from "./screens/HistoryMain";
import { HistoryEmpty } from "./screens/HistoryEmpty";
import { HistoryCancel } from "./screens/HistoryCancel";
import { HistoryComplete } from "./screens/HistoryComplete";
import { HistoryProgress } from "./screens/HistoryProgress";
import { HistoryPeriodSelect } from "./screens/HistoryPeriodSelect";
import { HistoryRefund } from "./screens/HistoryRefund";
import { HistoryDetail1 } from "./screens/HistoryDetail1";
import { HistoryDetail2 } from "./screens/HistoryDetail2";
import { HistoryDetail3 } from "./screens/HistoryDetail3";
import { HistoryDetail4 } from "./screens/HistoryDetail4";
import { HistoryDetail5 } from "./screens/HistoryDetail5";
import { HistoryDetail6 } from "./screens/HistoryDetail6";
import { ServiceCertificate } from "./screens/ServiceCertificate";
import { Event } from "./screens/Event";
import { EventEmpty } from "./screens/EventEmpty";
import { EventScreen } from "./screens/EventScreen";
import { Support } from "./screens/Support";
import { SupportScreen } from "./screens/SupportScreen";
import { Mypage } from "./screens/Mypage";
import { MypagePopup } from "./screens/MypagePopup";
import { MypageScreen } from "./screens/MypageScreen";
import { MypageWrapper } from "./screens/MypageWrapper";
import { Screen5 } from "./screens/Screen5";
import { Screen7 } from "./screens/Screen7";
import { Mypage017 } from "./screens/Mypage017";
import { Mypage as MyPage2_Mypage } from "./screens/MyPage2_Mypage";
import { Servicecert as MyPage2_Servicecert } from "./screens/MyPage2_Servicecert";
import { Overseasremit as MyPage2_Overseasremit } from "./screens/MyPage2_Overseasremit";
import { ServicecertScreen as MyPage2_ServicecertScreen } from "./screens/MyPage2_ServicecertScreen";
import { ServicecertWrapper as MyPage2_ServicecertWrapper } from "./screens/MyPage2_ServicecertWrapper";
import { DivWrapper as MyPage2_DivWrapper } from "./screens/MyPage2_DivWrapper";
import { Screen6 as MyPage2_Screen6 } from "./screens/MyPage2_Screen6";
import { Screen7 as MyPage2_Screen7 } from "./screens/MyPage2_Screen7";
import { MypageScreen as MyPage2_MypageScreen } from "./screens/MyPage2_MypageScreen";
import { Mypage as MyPage3_Mypage } from "./screens/MyPage3_Mypage";
import { MypageScreen as MyPage3_MypageScreen } from "./screens/MyPage3_MypageScreen";
import { MypageWrapper as MyPage3_MypageWrapper } from "./screens/MyPage3_MypageWrapper";
import { Overseasremit as MyPage3_Overseasremit } from "./screens/MyPage3_Overseasremit";
import { Screen4 as MyPage3_Screen4 } from "./screens/MyPage3_Screen4";
import { Screen5 as MyPage3_Screen5 } from "./screens/MyPage3_Screen5";
import { Screen6 as MyPage3_Screen6 } from "./screens/MyPage3_Screen6";
import { Screen7 as MyPage3_Screen7 } from "./screens/MyPage3_Screen7";
import { DivWrapper as MyPage4_DivWrapper } from "./screens/MyPage4_DivWrapper";
import { Mypage as MyPage4_Mypage } from "./screens/MyPage4_Mypage";
import { MypageScreen as MyPage4_MypageScreen } from "./screens/MyPage4_MypageScreen";
import { MypageWrapper as MyPage4_MypageWrapper } from "./screens/MyPage4_MypageWrapper";
import { Screen4 as MyPage4_Screen4 } from "./screens/MyPage4_Screen4";
import { Screen5 as MyPage4_Screen5 } from "./screens/MyPage4_Screen5";
import { Screen6 as MyPage4_Screen6 } from "./screens/MyPage4_Screen6";
import { DivWrapper as MyPage5_DivWrapper } from "./screens/MyPage5_DivWrapper";
import { Mypage as MyPage5_Mypage } from "./screens/MyPage5_Mypage";
import { MypageBs as MyPage5_MypageBs } from "./screens/MyPage5_MypageBs";
import { MypageScreen as MyPage5_MypageScreen } from "./screens/MyPage5_MypageScreen";
import { MypageWrapper as MyPage5_MypageWrapper } from "./screens/MyPage5_MypageWrapper";
import { Screen5 as MyPage5_Screen5 } from "./screens/MyPage5_Screen5";
import { Screen6 as MyPage5_Screen6 } from "./screens/MyPage5_Screen6";
import { Screen7 as MyPage5_Screen7 } from "./screens/MyPage5_Screen7";
import { Account as Settings1_Account } from "./screens/Settings1_Account";
import { AccountScreen as Settings1_AccountScreen } from "./screens/Settings1_AccountScreen";
import { AccountWrapper as Settings1_AccountWrapper } from "./screens/Settings1_AccountWrapper";
import { DivWrapper as Settings1_DivWrapper } from "./screens/Settings1_DivWrapper";
import { Screen7 as Settings1_Screen7 } from "./screens/Settings1_Screen7";
import { Settings as Settings1_Settings } from "./screens/Settings1_Settings";
import { SettingsScreen as Settings1_SettingsScreen } from "./screens/Settings1_SettingsScreen";
import { SettingsWrapper as Settings1_SettingsWrapper } from "./screens/Settings1_SettingsWrapper";
import { Mypage as Settings2_Mypage } from "./screens/Settings2_Mypage";
import { PinPin as Settings2_PinPin } from "./screens/Settings2_PinPin";
import { PinPinScreen as Settings2_PinPinScreen } from "./screens/Settings2_PinPinScreen";
import { Settings as Settings2_Settings } from "./screens/Settings2_Settings";
import { SettingsPin as Settings2_SettingsPin } from "./screens/Settings2_SettingsPin";
import { SettingsScreen as Settings2_SettingsScreen } from "./screens/Settings2_SettingsScreen";
import { Signup as Settings2_Signup } from "./screens/Settings2_Signup";
import { SignupScreen as Settings2_SignupScreen } from "./screens/Settings2_SignupScreen";
import { PinPin as Settings3_PinPin } from "./screens/Settings3_PinPin";
import { Settings as Settings3_Settings } from "./screens/Settings3_Settings";
import { SettingsFaceid as Settings3_SettingsFaceid } from "./screens/Settings3_SettingsFaceid";
import { SettingsFaceidScreen as Settings3_SettingsFaceidScreen } from "./screens/Settings3_SettingsFaceidScreen";
import { Screen as Settings4_Screen } from "./screens/Settings4_Screen";
import { Screen4 as Settings4_Screen4 } from "./screens/Settings4_Screen4";
import { Screen5 as Settings4_Screen5 } from "./screens/Settings4_Screen5";
import { Screen6 as Settings4_Screen6 } from "./screens/Settings4_Screen6";
import { Screen7 as Settings4_Screen7 } from "./screens/Settings4_Screen7";
import { Settings as Settings4_Settings } from "./screens/Settings4_Settings";
import { SettingsScreen as Settings4_SettingsScreen } from "./screens/Settings4_SettingsScreen";
import { SettingsWrapper as Settings4_SettingsWrapper } from "./screens/Settings4_SettingsWrapper";
import { DivWrapper as Settings5_DivWrapper } from "./screens/Settings5_DivWrapper";
import { Screen4 as Settings5_Screen4 } from "./screens/Settings5_Screen4";
import { Settings as Settings5_Settings } from "./screens/Settings5_Settings";
import { SettingsScreen as Settings5_SettingsScreen } from "./screens/Settings5_SettingsScreen";
import { SettingsWrapper as Settings5_SettingsWrapper } from "./screens/Settings5_SettingsWrapper";
import { Account as Account1_Account } from "./screens/account1_Account";
import { AccountScreen as Account1_AccountScreen } from "./screens/account1_AccountScreen";
import { AccountWrapper as Account1_AccountWrapper } from "./screens/account1_AccountWrapper";
import { DivWrapper as Account1_DivWrapper } from "./screens/account1_DivWrapper";
import { Login as Account1_Login } from "./screens/account1_Login";
import { LoginScreen as Account1_LoginScreen } from "./screens/account1_LoginScreen";
import { Screen6 as Account1_Screen6 } from "./screens/account1_Screen6";
import { Account as Account2_Account } from "./screens/account2_Account";
import { AccountScreen as Account2_AccountScreen } from "./screens/account2_AccountScreen";
import { AccountWrapper as Account2_AccountWrapper } from "./screens/account2_AccountWrapper";
import { CommonPin as Account2_CommonPin } from "./screens/account2_CommonPin";
import { DivWrapper as Account2_DivWrapper } from "./screens/account2_DivWrapper";
import { PinPin as Account2_PinPin } from "./screens/account2_PinPin";
import { Signup as Account2_Signup } from "./screens/account2_Signup";
import { SignupPin as Account2_SignupPin } from "./screens/account2_SignupPin";
import { Account as Account3_Account } from "./screens/account3_Account";
import { AccountCi as Account3_AccountCi } from "./screens/account3_AccountCi";
import { AccountScreen as Account3_AccountScreen } from "./screens/account3_AccountScreen";
import { AccountWrapper as Account3_AccountWrapper } from "./screens/account3_AccountWrapper";
import { DivWrapper as Account3_DivWrapper } from "./screens/account3_DivWrapper";
import { Element as Account3_Element } from "./screens/account3_Element";
import { FrameScreen as Account3_FrameScreen } from "./screens/account3_FrameScreen";
import { Signup as Account3_Signup } from "./screens/account3_Signup";
import { DivWrapper as Account4_DivWrapper } from "./screens/account4_DivWrapper";
import { Element as Account4_Element } from "./screens/account4_Element";
import { ElementScreen as Account4_ElementScreen } from "./screens/account4_ElementScreen";
import { ElementWrapper as Account4_ElementWrapper } from "./screens/account4_ElementWrapper";
import { Signup as Account4_Signup } from "./screens/account4_Signup";
import { SignupScreen as Account4_SignupScreen } from "./screens/account4_SignupScreen";
import { SignupWrapper as Account4_SignupWrapper } from "./screens/account4_SignupWrapper";
import { Account as Account5_Account } from "./screens/account5_Account";
import { AccountArs as Account5_AccountArs } from "./screens/account5_AccountArs";
import { AccountScreen as Account5_AccountScreen } from "./screens/account5_AccountScreen";
import { AccountWrapper as Account5_AccountWrapper } from "./screens/account5_AccountWrapper";
import { DivWrapper as Account5_DivWrapper } from "./screens/account5_DivWrapper";
import { Screen5 as Account5_Screen5 } from "./screens/account5_Screen5";
import { Overseasremit as Overseasremit1_Overseasremit } from "./screens/overseasremit1_Overseasremit";
import { OverseasremitScreen as Overseasremit1_OverseasremitScreen } from "./screens/overseasremit1_OverseasremitScreen";
import { OverseasremitWrapper as Overseasremit1_OverseasremitWrapper } from "./screens/overseasremit1_OverseasremitWrapper";
import { Screen3 as Overseasremit1_Screen3 } from "./screens/overseasremit1_Screen3";
import { Screen4 as Overseasremit1_Screen4 } from "./screens/overseasremit1_Screen4";
import { Screen5 as Overseasremit1_Screen5 } from "./screens/overseasremit1_Screen5";
import { Screen6 as Overseasremit1_Screen6 } from "./screens/overseasremit1_Screen6";
import { Screen7 as Overseasremit1_Screen7 } from "./screens/overseasremit1_Screen7";
import { Overseasremit as Overseasremit2_Overseasremit } from "./screens/overseasremit2_Overseasremit";
import { OverseasremitScreen as Overseasremit2_OverseasremitScreen } from "./screens/overseasremit2_OverseasremitScreen";
import { OverseasremitWrapper as Overseasremit2_OverseasremitWrapper } from "./screens/overseasremit2_OverseasremitWrapper";
import { PinPin as Overseasremit2_PinPin } from "./screens/overseasremit2_PinPin";
import { Screen4 as Overseasremit2_Screen4 } from "./screens/overseasremit2_Screen4";
import { Screen5 as Overseasremit2_Screen5 } from "./screens/overseasremit2_Screen5";
import { Screen6 as Overseasremit2_Screen6 } from "./screens/overseasremit2_Screen6";
import { Screen7 as Overseasremit2_Screen7 } from "./screens/overseasremit2_Screen7";
import { Screen8 as Overseasremit2_Screen8 } from "./screens/overseasremit2_Screen8";
import { Screen9 as Overseasremit2_Screen9 } from "./screens/overseasremit2_Screen9";
import { DivWrapper as History1_DivWrapper } from "./screens/history1_DivWrapper";
import { History as History1_History } from "./screens/history1_History";
import { HistoryScreen as History1_HistoryScreen } from "./screens/history1_HistoryScreen";
import { HistoryWrapper as History1_HistoryWrapper } from "./screens/history1_HistoryWrapper";
import { Screen4 as History1_Screen4 } from "./screens/history1_Screen4";
import { Screen5 as History1_Screen5 } from "./screens/history1_Screen5";
import { Screen6 as History1_Screen6 } from "./screens/history1_Screen6";
import { History as History2_History } from "./screens/history2_History";
import { HistoryScreen as History2_HistoryScreen } from "./screens/history2_HistoryScreen";
import { HistoryWrapper as History2_HistoryWrapper } from "./screens/history2_HistoryWrapper";
import { Screen4 as History2_Screen4 } from "./screens/history2_Screen4";
import { Screen5 as History2_Screen5 } from "./screens/history2_Screen5";
import { Screen6 as History2_Screen6 } from "./screens/history2_Screen6";
import { Servicecert as History2_Servicecert } from "./screens/history2_Servicecert";
const router = createBrowserRouter([
  {
    path: "/*",
    element: <PublishingStatus />,
  },
  {
    path: "/publishing",
    element: <PublishingStatus />,
  },
  {
    path: "/favoriteu95375",
    element: <Favorite />,
  },
  {
    path: "/transformu95750",
    element: <Transform />,
  },
  {
    path: "/components",
    element: <Components />,
  },
  {
    path: "/loginu95001",
    element: <Login />,
  },
  {
    path: "/elementu95002",
    element: <Element />,
  },
  {
    path: "/elementscreenu95003",
    element: <ElementScreen />,
  },
  {
    path: "/elementwrapperu95004",
    element: <ElementWrapper />,
  },
  {
    path: "/screen4u95005",
    element: <Screen4 />,
  },
  {
    path: "/homeu95006",
    element: <Home />,
  },
  {
    path: "/homescreenu95007",
    element: <HomeScreen />,
  },
  {
    path: "/homewrapperu95008",
    element: <HomeWrapper />,
  },
  {
    path: "/screen8u95009",
    element: <Screen8 />,
  },
  {
    path: "/commonu95010",
    element: <Common />,
  },
  {
    path: "/signupu95003",
    element: <Signup />,
  },
  {
    path: "/signupwrapperu95004",
    element: <SignupWrapper />,
  },
  {
    path: "/signupscreenu95005",
    element: <SignupScreen />,
  },
  {
    path: "/nationalityu95006",
    element: <Nationality />,
  },
  {
    path: "/signupphoneemailu95007",
    element: <SignupPhoneEmail />,
  },
  {
    path: "/verificationcodeu95008",
    element: <VerificationCode />,
  },
  {
    path: "/signupemailtabu95009",
    element: <SignupEmailTab />,
  },
  {
    path: "/signupemailinputu95010",
    element: <SignupEmailInput />,
  },
  {
    path: "/signupphoneinputu95011",
    element: <SignupPhoneInput />,
  },
  {
    path: "/verificationcodewechatu95012",
    element: <VerificationCodeWechat />,
  },
  {
    path: "/verificationcodetimeoutu95013",
    element: <VerificationCodeTimeout />,
  },
  {
    path: "/newaccountphoneinputu95014",
    element: <NewAccountPhoneInput />,
  },
  {
    path: "/newaccountpasswordfilledu95015",
    element: <NewAccountPasswordFilled />,
  },
  {
    path: "/newaccountpasswordu95016",
    element: <NewAccountPassword />,
  },
  {
    path: "/newaccountreferralu95017",
    element: <NewAccountReferral />,
  },
  {
    path: "/newaccountpasswordwechatu95018",
    element: <NewAccountPasswordWechat />,
  },
  {
    path: "/photoconfirmationu95019",
    element: <PhotoConfirmation />,
  },
  {
    path: "/passwordresetu95020",
    element: <PasswordReset />,
  },
  {
    path: "/selfiecaptureu95021",
    element: <SelfieCapture />,
  },
  {
    path: "/selfieverificationu95022",
    element: <SelfieVerification />,
  },
  {
    path: "/passwordinputkeypadu95023",
    element: <PasswordInputKeypad />,
  },
  {
    path: "/newaccount4divwrapper",
    element: <Newaccount4DivWrapper />,
  },
  {
    path: "/newaccount4login",
    element: <Newaccount4Login />,
  },
  {
    path: "/newaccount4loginscreen",
    element: <Newaccount4LoginScreen />,
  },
  {
    path: "/newaccount4loginwrapper",
    element: <Newaccount4LoginWrapper />,
  },
  {
    path: "/newaccount4signup",
    element: <Newaccount4Signup />,
  },
  {
    path: "/verificationstepsu95024",
    element: <VerificationSteps />,
  },
  {
    path: "/idregistrationmethodu95025",
    element: <IdRegistrationMethod />,
  },
  {
    path: "/capturetipsu95026",
    element: <CaptureTips />,
  },
  {
    path: "/selfiecapturecountdownu95027",
    element: <SelfieCaptureCountdown />,
  },
  {
    path: "/photoconfirmdialogu95028",
    element: <PhotoConfirmDialog />,
  },
  {
    path: "/referralcodeinputu95029",
    element: <ReferralCodeInput />,
  },
  {
    path: "/idfrontcaptureu95030",
    element: <IdFrontCapture />,
  },
  {
    path: "/idtypeselectiou95031",
    element: <IdTypeSelection />,
  },
  {
    path: "/fundsourceselectiou95032",
    element: <FundSourceSelection />,
  },
  {
    path: "/customerinfoformu95033",
    element: <CustomerInfoForm />,
  },
  {
    path: "/occupationselectiou95034",
    element: <OccupationSelection />,
  },
  {
    path: "/customerverificatiou95035",
    element: <CustomerVerification />,
  },
  {
    path: "/wechatverificatiou95036",
    element: <WechatVerification />,
  },
  {
    path: "/addressinputmethodu95037",
    element: <AddressInputMethod />,
  },
  {
    path: "/addressdirectinputu95038",
    element: <AddressDirectInput />,
  },
  {
    path: "/transactionpurposeu95039",
    element: <TransactionPurpose />,
  },
  {
    path: "/signuphistorydialogu95040",
    element: <SignupHistoryDialog />,
  },
  {
    path: "/addressphotoconfirmu95041",
    element: <AddressPhotoConfirm />,
  },
  {
    path: "/addresssearchresultu95042",
    element: <AddressSearchResult />,
  },
  {
    path: "/signupcompleteu95043",
    element: <SignupCompleteApproved />,
  },
  {
    path: "/addressphotouploadu95044",
    element: <AddressPhotoUpload />,
  },
  {
    path: "/addressdetailinputu95045",
    element: <AddressDetailInput />,
  },
  {
    path: "/addresssearchapiu95046",
    element: <AddressSearchApi />,
  },
  {
    path: "/signupcompletependingu95047",
    element: <SignupCompletePending />,
  },
  {
    path: "/accountu95048",
    element: <Account />,
  },
  {
    path: "/screen6u95049",
    element: <Screen6 />,
  },
  {
    path: "/accountscreenu95050",
    element: <AccountScreen />,
  },
  {
    path: "/divwrapperu95051",
    element: <DivWrapper />,
  },
  {
    path: "/selfcheckauthu95052",
    element: <SelfCheckAuth />,
  },
  {
    path: "/accountwrapperu95053",
    element: <AccountWrapper />,
  },
  {
    path: "/loginscreenu95054",
    element: <LoginScreen />,
  },
  {
    path: "/accountverifyu95055",
    element: <AccountVerify />,
  },
  {
    path: "/pinentryu95056",
    element: <PinEntry />,
  },
  {
    path: "/pininputu95057",
    element: <PinInput />,
  },
  {
    path: "/pinconfirmu95058",
    element: <PinConfirm />,
  },
  {
    path: "/accountmain2u95059",
    element: <AccountMain2 />,
  },
  {
    path: "/withdrawcompleteu95060",
    element: <WithdrawComplete />,
  },
  {
    path: "/foreignidinputu95061",
    element: <ForeignIdInput />,
  },
  {
    path: "/withdrawfailedu95062",
    element: <WithdrawFailed />,
  },
  {
    path: "/autowithdrawconsentu95063",
    element: <AutoWithdrawConsent />,
  },
  {
    path: "/authfailureu95064",
    element: <AuthFailure />,
  },
  {
    path: "/authmethodselectu95065",
    element: <AuthMethodSelect />,
  },
  {
    path: "/emailinputu95066",
    element: <EmailInput />,
  },
  {
    path: "/authinfoinputu95067",
    element: <AuthInfoInput />,
  },
  {
    path: "/certificateselectu95068",
    element: <CertificateSelect />,
  },
  {
    path: "/authcodeinputu95069",
    element: <AuthCodeInput />,
  },
  {
    path: "/servicetermsu95070",
    element: <ServiceTerms />,
  },
  {
    path: "/certificateimportguideu95071",
    element: <CertificateImportGuide />,
  },
  {
    path: "/certificateselectemptyu95072",
    element: <CertificateSelectEmpty />,
  },
  {
    path: "/certificatepasswordkeyboardu95073",
    element: <CertificatePasswordKeyboard />,
  },
  {
    path: "/certificateconfirmkeyboardu95074",
    element: <CertificateConfirmKeyboard />,
  },
  {
    path: "/simpleauthselectu95075",
    element: <SimpleAuthSelect />,
  },
  {
    path: "/cardverificationu95076",
    element: <CardVerification />,
  },
  {
    path: "/carrierselectu95077",
    element: <CarrierSelect />,
  },
  {
    path: "/accountmanagementu95078",
    element: <AccountManagement />,
  },
  {
    path: "/arsverificationu95079",
    element: <ArsVerification />,
  },
  {
    path: "/autowithdrawfailedu95080",
    element: <AutoWithdrawFailed />,
  },
  {
    path: "/autowithdrawcompleteu95081",
    element: <AutoWithdrawComplete />,
  },
  {
    path: "/selfieverificationprogressu95082",
    element: <SelfieVerificationProgress />,
  },
  {
    path: "/passportinfoinputu95083",
    element: <PassportInfoInput />,
  },
  {
    path: "/overseasremitu95084",
    element: <Overseasremit />,
  },
  {
    path: "/overseasremitscreenu95085",
    element: <OverseasremitScreen />,
  },
  {
    path: "/overseasremitwrapperu95086",
    element: <OverseasremitWrapper />,
  },
  {
    path: "/overseasremitcouponu95087",
    element: <OverseasRemitCoupon />,
  },
  {
    path: "/overseasremitnicknameu95088",
    element: <OverseasRemitNickname />,
  },
  {
    path: "/overseasremitcontactsu95089",
    element: <OverseasRemitContacts />,
  },
  {
    path: "/overseasremitrecipientu95090",
    element: <OverseasRemitRecipient />,
  },
  {
    path: "/overseasremitidinputu95091",
    element: <OverseasRemitIdInput />,
  },
  {
    path: "/overseasremitconfirmu95092",
    element: <OverseasRemitConfirm />,
  },
  {
    path: "/overseasremitfailu95093",
    element: <OverseasRemitFail />,
  },
  {
    path: "/overseasremitpaymentconfirmu95094",
    element: <OverseasRemitPaymentConfirm />,
  },
  {
    path: "/overseasremithistoryu95095",
    element: <OverseasRemitHistory />,
  },
  {
    path: "/overseasremitreceiverinfou95096",
    element: <OverseasRemitReceiverInfo />,
  },
  {
    path: "/overseasremitu95097",
    element: <OverseasRemitTransferInfo />,
  },
  {
    path: "/overseasremitpinu95098",
    element: <OverseasRemitPin />,
  },
  {
    path: "/historymainu95099",
    element: <HistoryMain />,
  },
  {
    path: "/historyemptyu95100",
    element: <HistoryEmpty />,
  },
  {
    path: "/historycancelu95101",
    element: <HistoryCancel />,
  },
  {
    path: "/historycompleteu95102",
    element: <HistoryComplete />,
  },
  {
    path: "/historyprogressu95103",
    element: <HistoryProgress />,
  },
  {
    path: "/historyperiodselectu95104",
    element: <HistoryPeriodSelect />,
  },
  {
    path: "/historyrefundu95105",
    element: <HistoryRefund />,
  },
  {
    path: "/historydetail1u95106",
    element: <HistoryDetail1 />,
  },
  {
    path: "/historydetail2u95107",
    element: <HistoryDetail2 />,
  },
  {
    path: "/historydetail3u95108",
    element: <HistoryDetail3 />,
  },
  {
    path: "/historydetail4u95109",
    element: <HistoryDetail4 />,
  },
  {
    path: "/historydetail5u95110",
    element: <HistoryDetail5 />,
  },
  {
    path: "/historydetail6u95111",
    element: <HistoryDetail6 />,
  },
  {
    path: "/servicecertificateu95112",
    element: <ServiceCertificate />,
  },
  {
    path: "/eventu95113",
    element: <Event />,
  },
  {
    path: "/eventemptyu95114",
    element: <EventEmpty />,
  },
  {
    path: "/eventscreenu95115",
    element: <EventScreen />,
  },
  {
    path: "/supportu95116",
    element: <Support />,
  },
  {
    path: "/supportscreenu95117",
    element: <SupportScreen />,
  },
  {
    path: "/mypageu95118",
    element: <Mypage />,
  },
  {
    path: "/mypagepopupu95119",
    element: <MypagePopup />,
  },
  {
    path: "/mypagescreenu95120",
    element: <MypageScreen />,
  },
  {
    path: "/mypagewrapperu95121",
    element: <MypageWrapper />,
  },
  {
    path: "/screen5u95122",
    element: <Screen5 />,
  },
  {
    path: "/screen7u95123",
    element: <Screen7 />,
  },
  {
    path: "/mypage017u95124",
    element: <Mypage017 />,
  },
  {
    path: "/mypage2_mypageu95125",
    element: <MyPage2_Mypage />,
  },
  {
    path: "/mypage2_servicecertu95126",
    element: <MyPage2_Servicecert />,
  },
  {
    path: "/mypage2_overseasremitu95127",
    element: <MyPage2_Overseasremit />,
  },
  {
    path: "/mypage2_servicecertscreenu95128",
    element: <MyPage2_ServicecertScreen />,
  },
  {
    path: "/mypage2_servicecertwrapperu95129",
    element: <MyPage2_ServicecertWrapper />,
  },
  {
    path: "/mypage2_divwrapperu95130",
    element: <MyPage2_DivWrapper />,
  },
  {
    path: "/mypage2_screen6u95131",
    element: <MyPage2_Screen6 />,
  },
  {
    path: "/mypage2_screen7u95132",
    element: <MyPage2_Screen7 />,
  },
  {
    path: "/mypage2_mypagescreenu95133",
    element: <MyPage2_MypageScreen />,
  },
  {
    path: "/mypage3_mypageu95134",
    element: <MyPage3_Mypage />,
  },
  {
    path: "/mypage3_mypagescreenu95135",
    element: <MyPage3_MypageScreen />,
  },
  {
    path: "/mypage3_mypagewrapperu95136",
    element: <MyPage3_MypageWrapper />,
  },
  {
    path: "/mypage3_overseasremitu95137",
    element: <MyPage3_Overseasremit />,
  },
  {
    path: "/mypage3_screen4u95138",
    element: <MyPage3_Screen4 />,
  },
  {
    path: "/mypage3_screen5u95139",
    element: <MyPage3_Screen5 />,
  },
  {
    path: "/mypage3_screen6u95140",
    element: <MyPage3_Screen6 />,
  },
  {
    path: "/mypage3_screen7u95141",
    element: <MyPage3_Screen7 />,
  },
  {
    path: "/mypage4_divwrapperu95142",
    element: <MyPage4_DivWrapper />,
  },
  {
    path: "/mypage4_mypageu95143",
    element: <MyPage4_Mypage />,
  },
  {
    path: "/mypage4_mypagescreenu95144",
    element: <MyPage4_MypageScreen />,
  },
  {
    path: "/mypage4_mypagewrapperu95145",
    element: <MyPage4_MypageWrapper />,
  },
  {
    path: "/mypage4_screen4u95146",
    element: <MyPage4_Screen4 />,
  },
  {
    path: "/mypage4_screen5u95147",
    element: <MyPage4_Screen5 />,
  },
  {
    path: "/mypage4_screen6u95148",
    element: <MyPage4_Screen6 />,
  },
  {
    path: "/mypage5_divwrapperu95149",
    element: <MyPage5_DivWrapper />,
  },
  {
    path: "/mypage5_mypageu95150",
    element: <MyPage5_Mypage />,
  },
  {
    path: "/mypage5_mypagebsu95151",
    element: <MyPage5_MypageBs />,
  },
  {
    path: "/mypage5_mypagescreenu95152",
    element: <MyPage5_MypageScreen />,
  },
  {
    path: "/mypage5_mypagewrapperu95153",
    element: <MyPage5_MypageWrapper />,
  },
  {
    path: "/mypage5_screen5u95154",
    element: <MyPage5_Screen5 />,
  },
  {
    path: "/mypage5_screen6u95155",
    element: <MyPage5_Screen6 />,
  },
  {
    path: "/mypage5_screen7u95156",
    element: <MyPage5_Screen7 />,
  },
  {
    path: "/settings1_accountu95157",
    element: <Settings1_Account />,
  },
  {
    path: "/settings1_accountscreenu95158",
    element: <Settings1_AccountScreen />,
  },
  {
    path: "/settings1_accountwrapperu95159",
    element: <Settings1_AccountWrapper />,
  },
  {
    path: "/settings1_divwrapperu95160",
    element: <Settings1_DivWrapper />,
  },
  {
    path: "/settings1_screen7u95161",
    element: <Settings1_Screen7 />,
  },
  {
    path: "/settings1_settingsu95162",
    element: <Settings1_Settings />,
  },
  {
    path: "/settings1_settingsscreenu95163",
    element: <Settings1_SettingsScreen />,
  },
  {
    path: "/settings1_settingswrapperu95164",
    element: <Settings1_SettingsWrapper />,
  },
  {
    path: "/settings2_mypageu95165",
    element: <Settings2_Mypage />,
  },
  {
    path: "/settings2_pinpinu95166",
    element: <Settings2_PinPin />,
  },
  {
    path: "/settings2_pinpinscreenu95167",
    element: <Settings2_PinPinScreen />,
  },
  {
    path: "/settings2_settingsu95168",
    element: <Settings2_Settings />,
  },
  {
    path: "/settings2_settingspinu95169",
    element: <Settings2_SettingsPin />,
  },
  {
    path: "/settings2_settingsscreenu95170",
    element: <Settings2_SettingsScreen />,
  },
  {
    path: "/settings2_signupu95171",
    element: <Settings2_Signup />,
  },
  {
    path: "/settings2_signupscreenu95172",
    element: <Settings2_SignupScreen />,
  },
  {
    path: "/settings3_pinpinu95173",
    element: <Settings3_PinPin />,
  },
  {
    path: "/settings3_settingsu95174",
    element: <Settings3_Settings />,
  },
  {
    path: "/settings3_settingsfaceidu95175",
    element: <Settings3_SettingsFaceid />,
  },
  {
    path: "/settings3_settingsfaceidscreenu95176",
    element: <Settings3_SettingsFaceidScreen />,
  },
  {
    path: "/settings4_screenu95177",
    element: <Settings4_Screen />,
  },
  {
    path: "/settings4_screen4u95178",
    element: <Settings4_Screen4 />,
  },
  {
    path: "/settings4_screen5u95179",
    element: <Settings4_Screen5 />,
  },
  {
    path: "/settings4_screen6u95180",
    element: <Settings4_Screen6 />,
  },
  {
    path: "/settings4_screen7u95181",
    element: <Settings4_Screen7 />,
  },
  {
    path: "/settings4_settingsu95182",
    element: <Settings4_Settings />,
  },
  {
    path: "/settings4_settingsscreenu95183",
    element: <Settings4_SettingsScreen />,
  },
  {
    path: "/settings4_settingswrapperu95184",
    element: <Settings4_SettingsWrapper />,
  },
  {
    path: "/settings5_divwrapperu95185",
    element: <Settings5_DivWrapper />,
  },
  {
    path: "/settings5_screen4u95186",
    element: <Settings5_Screen4 />,
  },
  {
    path: "/settings5_settingsu95187",
    element: <Settings5_Settings />,
  },
  {
    path: "/settings5_settingsscreenu95188",
    element: <Settings5_SettingsScreen />,
  },
  {
    path: "/settings5_settingswrapperu95189",
    element: <Settings5_SettingsWrapper />,
  },
  {
    path: "/account1account",
    element: <Account1_Account />,
  },
  {
    path: "/account1accountscreen",
    element: <Account1_AccountScreen />,
  },
  {
    path: "/account1accountwrapper",
    element: <Account1_AccountWrapper />,
  },
  {
    path: "/account1divwrapper",
    element: <Account1_DivWrapper />,
  },
  {
    path: "/account1login",
    element: <Account1_Login />,
  },
  {
    path: "/account1loginscreen",
    element: <Account1_LoginScreen />,
  },
  {
    path: "/account1screen6",
    element: <Account1_Screen6 />,
  },
  {
    path: "/account2account",
    element: <Account2_Account />,
  },
  {
    path: "/account2accountscreen",
    element: <Account2_AccountScreen />,
  },
  {
    path: "/account2accountwrapper",
    element: <Account2_AccountWrapper />,
  },
  {
    path: "/account2commonpin",
    element: <Account2_CommonPin />,
  },
  {
    path: "/account2divwrapper",
    element: <Account2_DivWrapper />,
  },
  {
    path: "/account2pinpin",
    element: <Account2_PinPin />,
  },
  {
    path: "/account2signup",
    element: <Account2_Signup />,
  },
  {
    path: "/account2signuppin",
    element: <Account2_SignupPin />,
  },
  {
    path: "/account3account",
    element: <Account3_Account />,
  },
  {
    path: "/account3accountci",
    element: <Account3_AccountCi />,
  },
  {
    path: "/account3accountscreen",
    element: <Account3_AccountScreen />,
  },
  {
    path: "/account3accountwrapper",
    element: <Account3_AccountWrapper />,
  },
  {
    path: "/account3divwrapper",
    element: <Account3_DivWrapper />,
  },
  {
    path: "/account3element",
    element: <Account3_Element />,
  },
  {
    path: "/account3framescreen",
    element: <Account3_FrameScreen />,
  },
  {
    path: "/account3signup",
    element: <Account3_Signup />,
  },
  {
    path: "/account4divwrapper",
    element: <Account4_DivWrapper />,
  },
  {
    path: "/account4element",
    element: <Account4_Element />,
  },
  {
    path: "/account4elementscreen",
    element: <Account4_ElementScreen />,
  },
  {
    path: "/account4elementwrapper",
    element: <Account4_ElementWrapper />,
  },
  {
    path: "/account4signup",
    element: <Account4_Signup />,
  },
  {
    path: "/account4signupscreen",
    element: <Account4_SignupScreen />,
  },
  {
    path: "/account4signupwrapper",
    element: <Account4_SignupWrapper />,
  },
  {
    path: "/account5account",
    element: <Account5_Account />,
  },
  {
    path: "/account5accountars",
    element: <Account5_AccountArs />,
  },
  {
    path: "/account5accountscreen",
    element: <Account5_AccountScreen />,
  },
  {
    path: "/account5accountwrapper",
    element: <Account5_AccountWrapper />,
  },
  {
    path: "/account5divwrapper",
    element: <Account5_DivWrapper />,
  },
  {
    path: "/account5screen5",
    element: <Account5_Screen5 />,
  },
  {
    path: "/overseasremit1overseasremit",
    element: <Overseasremit1_Overseasremit />,
  },
  {
    path: "/overseasremit1overseasremitscreen",
    element: <Overseasremit1_OverseasremitScreen />,
  },
  {
    path: "/overseasremit1overseasremitwrapper",
    element: <Overseasremit1_OverseasremitWrapper />,
  },
  {
    path: "/overseasremit1screen3",
    element: <Overseasremit1_Screen3 />,
  },
  {
    path: "/overseasremit1screen4",
    element: <Overseasremit1_Screen4 />,
  },
  {
    path: "/overseasremit1screen5",
    element: <Overseasremit1_Screen5 />,
  },
  {
    path: "/overseasremit1screen6",
    element: <Overseasremit1_Screen6 />,
  },
  {
    path: "/overseasremit1screen7",
    element: <Overseasremit1_Screen7 />,
  },
  {
    path: "/overseasremit2overseasremit",
    element: <Overseasremit2_Overseasremit />,
  },
  {
    path: "/overseasremit2overseasremitscreen",
    element: <Overseasremit2_OverseasremitScreen />,
  },
  {
    path: "/overseasremit2overseasremitwrapper",
    element: <Overseasremit2_OverseasremitWrapper />,
  },
  {
    path: "/overseasremit2pinpin",
    element: <Overseasremit2_PinPin />,
  },
  {
    path: "/overseasremit2screen4",
    element: <Overseasremit2_Screen4 />,
  },
  {
    path: "/overseasremit2screen5",
    element: <Overseasremit2_Screen5 />,
  },
  {
    path: "/overseasremit2screen6",
    element: <Overseasremit2_Screen6 />,
  },
  {
    path: "/overseasremit2screen7",
    element: <Overseasremit2_Screen7 />,
  },
  {
    path: "/overseasremit2screen8",
    element: <Overseasremit2_Screen8 />,
  },
  {
    path: "/overseasremit2screen9",
    element: <Overseasremit2_Screen9 />,
  },
  {
    path: "/history1divwrapper",
    element: <History1_DivWrapper />,
  },
  {
    path: "/history1history",
    element: <History1_History />,
  },
  {
    path: "/history1historyscreen",
    element: <History1_HistoryScreen />,
  },
  {
    path: "/history1historywrapper",
    element: <History1_HistoryWrapper />,
  },
  {
    path: "/history1screen4",
    element: <History1_Screen4 />,
  },
  {
    path: "/history1screen5",
    element: <History1_Screen5 />,
  },
  {
    path: "/history1screen6",
    element: <History1_Screen6 />,
  },
  {
    path: "/history2history",
    element: <History2_History />,
  },
  {
    path: "/history2historyscreen",
    element: <History2_HistoryScreen />,
  },
  {
    path: "/history2historywrapper",
    element: <History2_HistoryWrapper />,
  },
  {
    path: "/history2screen4",
    element: <History2_Screen4 />,
  },
  {
    path: "/history2screen5",
    element: <History2_Screen5 />,
  },
  {
    path: "/history2screen6",
    element: <History2_Screen6 />,
  },
  {
    path: "/history2servicecert",
    element: <History2_Servicecert />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
