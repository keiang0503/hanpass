import React from "react";
import { UiStatusBarSubsection } from "../MypageWrapper/sections/UiStatusBarSubsection";
import { ViewSubsection } from "../MypageWrapper/sections/ViewSubsection";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { ViewWrapperSubsection } from "./sections/ViewWrapperSubsection";

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36956:34351"
    >
      <UiStatusBarSubsection />
      <FrameWrapperSubsection />
      <ViewWrapperSubsection />
      <ContentsSubsection />
      <ViewSubsection />
    </div>
  );
};
