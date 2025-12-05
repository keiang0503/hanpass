import React from "react";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection";

export const History = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-[#f7f7f8]"
      data-model-id="34838:66244"
    >
      <UiStatusBarSubsection />

      <header className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/u8GhiXiH/img/wechat-hd-1.svg"
              />
            </div>

            <img
              className="h-8"
              alt="Mini"
              src="https://c.animaapp.com/u8GhiXiH/img/mini-6@2x.png"
            />
          </div>
        </div>
      </header>

      <FrameSubsection />
      <ContentsSubsection />

      <footer className="flex flex-col px-6 py-0 w-full items-center justify-end mt-auto">
        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
