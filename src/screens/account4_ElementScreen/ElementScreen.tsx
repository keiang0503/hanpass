import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection";
import { QwertySubsection } from "./sections/QwertySubsection";
import { ViewWrapperSubsection } from "../account4_ElementWrapper/sections/ViewWrapperSubsection";

export const ElementScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen items-center relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="35213:87606"
    >
      <ViewWrapperSubsection />
      <div className="flex flex-col w-full items-center mt-auto">
        <FrameSubsection />
        <QwertySubsection />
      </div>
    </div>
  );
};
