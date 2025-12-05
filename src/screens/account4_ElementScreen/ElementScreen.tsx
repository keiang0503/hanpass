import React from "react";
import { PopupHeader } from "../../components/PopupHeader";
import { FrameSubsection } from "./sections/FrameSubsection";
import { QwertySubsection } from "./sections/QwertySubsection";

export const ElementScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="35213:87606"
    >
      <PopupHeader />
      <FrameSubsection />
      <QwertySubsection />
    </div>
  );
};
