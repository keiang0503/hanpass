import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { MyContainerWrapperSubsection } from "./sections/MyContainerWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen bg-white"
      data-model-id="40000008:1188767"
    >
      <BackSubHeader />

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
    </div>
  );
};
