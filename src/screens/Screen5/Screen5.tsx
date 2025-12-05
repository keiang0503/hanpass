import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { TopWrapperSubsection } from "./sections/TopWrapperSubsection";
import { View1Subsection } from "./sections/View1Subsection";
import { View2Subsection } from "./sections/View2Subsection";
import { View3Subsection } from "./sections/View3Subsection";

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen bg-white"
      data-model-id="40000008:1188384"
    >
      <BackSubHeader />

      <TopWrapperSubsection />

      <View1Subsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <View2Subsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <View3Subsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <FrameWrapperSubsection />

      <div className="flex items-center justify-center gap-2.5 px-0 py-8">
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
