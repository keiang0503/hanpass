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
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
