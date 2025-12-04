import React from "react";
import { Button } from "../../components/ui/button";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { MyContainerWrapperSubsection } from "./sections/MyContainerWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import { UiStatusBarWrapperSubsection } from "./sections/UiStatusBarWrapperSubsection";

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-white"
      data-model-id="40000008:1188767"
    >
      <UiStatusBarWrapperSubsection />

      <header className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg"
              />
            </div>

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/emBHvnWi/img/mini-7@2x.png"
            />
          </div>
        </div>
      </header>

      <MyContainerWrapperSubsection />

      <DivWrapperSubsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <DivSubsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <SectionComponentNodeSubsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <FrameSubsection />

      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-8">
        <Button
          variant="link"
          className="h-auto font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline [font-style:var(--body-15-r-font-style)] p-0"
        >
          로그아웃
        </Button>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 ml-[-8.50px] mr-[-8.50px]">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
