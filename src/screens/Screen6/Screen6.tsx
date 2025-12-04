import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Top1Subsection } from "./sections/Top1Subsection";
import { UiStatusBar2Subsection } from "./sections/UiStatusBar2Subsection";
import { View4Subsection } from "./sections/View4Subsection";
import { View5Subsection } from "./sections/View5Subsection";
import { View6Subsection } from "./sections/View6Subsection";

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen bg-white"
      data-model-id="40000008:1188169"
    >
      <UiStatusBar2Subsection />

      <header className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg"
            />
            <img
              className="h-4 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/emBHvnWi/img/mini-7@2x.png"
            />
          </div>
        </div>
      </header>

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

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full mt-auto">
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
