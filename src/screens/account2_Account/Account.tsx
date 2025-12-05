import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { FrameSubsection } from "./sections/FrameSubsection";

export const Account = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="2674:67602"
    >
      <BackSubHeader />
      <FrameSubsection />
    </main>
  );
};
