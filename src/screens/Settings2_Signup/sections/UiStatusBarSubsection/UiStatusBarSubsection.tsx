import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start relative bg-white"
      to="/settingsu95034u95u4352u4456u4364u4458-u4357u4469u4361u4467u4368u4467"
    >
      <div className="flex items-center justify-between px-5 py-4 w-full bg-white">
        <div className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
          9:41
        </div>

        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/kp7cm7rf/img/icon---mobile-signal-6.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/kp7cm7rf/img/wifi-6.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/kp7cm7rf/img/battery-6.svg"
          />
        </div>
      </div>
    </Link>
  );
};
