import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection";
import { ViewSubsection } from "./sections/ViewSubsection";

export const Account = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="2674:67602"
    >
      <FrameSubsection />
      <ViewSubsection />
    </main>
  );
};
