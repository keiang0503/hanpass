import React from "react";

export const StatusBarSection = (): JSX.Element => {
  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-black text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
          9:41
        </div>

        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/BgjmszUI/img/icon---mobile-signal.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/BgjmszUI/img/wifi.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/BgjmszUI/img/battery.svg"
          />
        </div>
      </div>
    </header>
  );
};
