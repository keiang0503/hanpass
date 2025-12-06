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

      <Separator className="w-full h-3 bg-gray-light-bg" />

      <View5Subsection />

      <Separator className="w-full h-3 bg-gray-light-bg" />

      <View6Subsection />

      <Separator className="w-full h-3 bg-gray-light-bg" />

      <Frame1Subsection />

      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-8">
        <Button
          variant="link"
          className="h-auto text-body-15-r-style text-gray-secondary underline p-0"
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
};
