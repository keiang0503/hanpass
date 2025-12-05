import React from "react";
import { Button } from "../../components/ui/button";
import { FrameSubsection } from "./sections/FrameSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection";

export const DivWrapper = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35202:90978"
    >
      <div className="flex flex-col flex-1">
        <UiStatusBarSubsection />

        <header className="flex flex-col bg-white">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 bg-white">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/sCCrT5uL/img/wechat-hd-6.svg"
              />
            </div>

            <img
              className="h-8 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/sCCrT5uL/img/mini-7@2x.png"
            />
          </div>
        </header>

        <section className="flex flex-col bg-white px-6 pt-[22px]">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            본인인증을 위한 정보를
            <br />
            입력해 주세요
          </h1>
        </section>

        <FrameSubsection />
      </div>

      <footer className="flex flex-col px-6 pb-0">
        <div className="flex flex-col gap-4">
          <Button
            className="min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl h-auto"
            disabled
          >
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </span>
          </Button>

          <div className="flex flex-col items-center py-2 bg-white">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </main>
  );
};
