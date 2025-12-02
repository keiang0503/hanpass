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
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
