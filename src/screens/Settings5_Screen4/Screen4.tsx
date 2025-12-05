import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="35303:52784"
    >
      <BackSubHeader />

      <ContentsSubsection />

      <FrameSubsection />
    </div>
  );
};
