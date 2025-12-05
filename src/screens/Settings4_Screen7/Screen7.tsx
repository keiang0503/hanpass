import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";

export const Screen7 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:80320"
    >
      <BackSubHeader />
      <FrameSubsection />
      <FrameWrapperSubsection />
    </div>
  );
};
