import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Top1Subsection } from "./sections/Top1Subsection";
import { View4Subsection } from "./sections/View4Subsection";
import { View5Subsection } from "./sections/View5Subsection";
import { View6Subsection } from "./sections/View6Subsection";

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen bg-white"
      data-model-id="40000008:1188169"
    >
      <BackSubHeader />

      <Top1Subsection />

      <View4Subsection />

      <Separator className="w-full h-3 bg-[#f7f7f8]" />

      <View5Subsection />

      <Separator className="w-full h-3 bg-[#f7f7f8]" />

      <View6Subsection />

      <Separator className="w-full h-3 bg-[#f7f7f8]" />

      <Frame1Subsection />

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
