import React from "react";

export const StatusBarSection = (): JSX.Element => {
  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-5 py-3 h-11">
        <time className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
          9:41
        </time>

        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Mobile signal"
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
    </header>
  );
};
