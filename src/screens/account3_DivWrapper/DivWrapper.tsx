import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { FrameSubsection } from "./sections/FrameSubsection";

export const DivWrapper = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35202:90978"
    >
      <div className="flex flex-col flex-1">
        <BackSubHeader />

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

        </div>
      </footer>
    </main>
  );
};
