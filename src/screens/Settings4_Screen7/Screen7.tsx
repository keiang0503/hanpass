import React from "react";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";

export const Screen7 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:80320"
    >
      <FrameSubsection />
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
    </div>
  );
};
