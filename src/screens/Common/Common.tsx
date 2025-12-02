import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { InputViewSection } from "./sections/InputViewSection";

export const Common = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-white"
      data-model-id="40000001:46028"
    >
      <Link
        className="w-full flex flex-col items-start gap-2.5 bg-white"
        to="/"
      >
        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-black text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
            9:41
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/FyEwllI9/img/icon---mobile-signal-8.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/FyEwllI9/img/wifi-7.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/FyEwllI9/img/battery-8.svg"
          />
        </div>
      </Link>

      <nav className="flex flex-col items-start relative self-stretch w-full flex-none">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-none">
          <div className="nav-header relative self-stretch w-full flex items-center justify-between px-1.5 bg-white">
            <Link to="/" className="flex items-center justify-center w-8 h-8">
              <ChevronLeftIcon className="w-8 h-8 text-variable-collection-grayscale-01-0b0c0e" />
            </Link>
            <img
              className="h-8"
              alt="Mini"
              src="https://c.animaapp.com/FyEwllI9/img/mini-8@2x.png"
            />
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-start bg-white w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start pt-[42px] pb-6 px-6 flex-1 w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center w-full min-h-[42px] pl-1">
            <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
              비밀번호를 입력해주세요.
            </div>
          </div>
          <div className="w-full h-px bg-[#dfe3ec]" />
        </div>
      </section>

      <InputViewSection />
    </div>
  );
};
