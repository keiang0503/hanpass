import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection";
import { UiSubsection } from "./sections/UiSubsection";

export const Account = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="2674:67343"
    >
      <div className="flex-col items-start self-stretch w-full flex relative">
        <UiStatusBarSubsection />

        <header className="flex flex-col items-start relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
              <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
                <img
                  className="relative w-8 h-8"
                  alt="Wechat hd"
                  src="https://c.animaapp.com/ELrb3VWQ/img/wechat-hd-3.svg"
                />
              </div>

              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/ELrb3VWQ/img/mini-7@2x.png"
              />
            </div>
          </div>
        </header>

        <UiSubsection />
        <FrameSubsection />
        <FrameWrapperSubsection />
      </div>

      <footer className="flex flex-col px-6 py-0 self-stretch w-full items-center justify-end relative">
        <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-white">
          <div className="flex-col w-[134px] items-center gap-2.5 ml-[-8.50px] mr-[-8.50px] flex relative">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
