import React from "react";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection";

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="35303:52784"
    >
      <UiStatusBarSubsection />

      <header className="flex flex-col items-start relative self-stretch w-full bg-white">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 relative self-stretch w-full bg-white">
            <img
              className="relative w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/d5CwqEvt/img/wechat-hd-3.svg"
            />

            <img
              className="relative h-4 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/d5CwqEvt/img/mini-4@2x.png"
            />
          </div>
        </div>
      </header>

      <ContentsSubsection />

      <FrameSubsection />
    </div>
  );
};
