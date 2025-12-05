import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";

export const History = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-[#f7f7f8]"
      data-model-id="34838:66244"
    >
      <BackSubHeader />

      <FrameSubsection />
      <ContentsSubsection />

      <footer className="flex flex-col px-6 py-0 w-full items-center justify-end mt-auto">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
