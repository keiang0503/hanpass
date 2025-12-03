import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { DisplaySection } from "./sections/DisplaySection";
import { MainContentSection } from "./sections/MainContentSection";

export const OverseasRemitNickname = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="34820:539228"
    >
      {/* Status Bar */}
      <header className="flex flex-col items-start w-full">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="w-full max-w-[360px] flex flex-col items-start gap-2.5 bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </div>
                  </div>
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  Sat Jun 11
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </div>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/Fk3yL3l2/img/icon---mobile-signal-7.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/Fk3yL3l2/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/Fk3yL3l2/img/battery-7.svg"
            />
          </div>
        </div>

        <nav className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 self-stretch w-full">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              닉네임 설정
            </h1>
          </div>
        </div>
      </section>

      <MainContentSection />
      <DisplaySection />
    </div>
  );
};
