import React from "react";

export const StatusBarSection = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-between px-5 py-3 bg-white">
      <div className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
        9:41
      </div>

      <div className="flex items-center gap-1.5">
        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/vuYaFJZH/img/icon---mobile-signal-9.svg"
        />

        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/vuYaFJZH/img/wifi-9.svg"
        />

        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/vuYaFJZH/img/battery-9.svg"
        />
      </div>
    </div>
  );
};
