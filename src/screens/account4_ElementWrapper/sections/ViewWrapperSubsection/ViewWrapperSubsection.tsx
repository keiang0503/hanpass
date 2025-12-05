import React from "react";
import { Link } from "react-router-dom";

export const ViewWrapperSubsection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start">
      <Link
        className="w-full flex flex-col items-start gap-2.5 self-stretch"
        to="/u912025u4601u4608u93u4364u4449u4355u4457u4540u4352u4456u4364u4458-u4355u4467u4540u4357u4457u4520u95u4363u4469u4523u4364u4467u4540u4361u4453u4359u4469u4359u4453u4523-u4363u4469u4536u4357u4455u4520"
      >
        <nav className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
          <div className="flex-1 h-5 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
            9:41
          </div>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/UrLjfz9Z/img/icon---mobile-signal-5.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/UrLjfz9Z/img/wifi-5.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/UrLjfz9Z/img/battery-5.svg"
          />
        </nav>
      </Link>

      <div className="flex flex-col items-start self-stretch w-full">
        <div className="flex-col gap-2 self-stretch w-full flex items-start">
          <div className="h-[54px] items-center justify-around px-5 py-0 self-stretch w-full flex relative">
            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/UrLjfz9Z/img/mini-6@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
