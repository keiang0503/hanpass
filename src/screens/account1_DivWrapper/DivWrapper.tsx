import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ComponentWrapperSubsection } from "./sections/ComponentWrapperSubsection";
import { ContentsSubsection } from "./sections/ContentsSubsection";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-white"
      data-model-id="35202:90012"
    >
      <BackSubHeader />

      <ComponentWrapperSubsection />
      <ContentsSubsection />

      <footer className="flex flex-col items-center w-full mt-auto">
        <div className="flex justify-center py-2 w-full bg-white">
        </div>
      </footer>
    </div>
  );
};
