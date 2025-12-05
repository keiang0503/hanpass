import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { UiSubsection } from "./sections/UiSubsection";

export const Account = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="2674:67343"
    >
      <div className="flex-col items-start self-stretch w-full flex relative">
        <BackSubHeader />

        <UiSubsection />
        <FrameSubsection />
        <FrameWrapperSubsection />
      </div>

      <footer className="flex flex-col px-6 py-0 self-stretch w-full items-center justify-end relative">
        <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />
      </footer>
    </div>
  );
};
