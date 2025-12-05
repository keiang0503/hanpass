import React from "react";
import { QwertySubsection } from "../account4_ElementScreen/sections/QwertySubsection";
import { ViewSubsection } from "../account4_ElementScreen/sections/ViewSubsection";
import { BottomsheetSubsection } from "./sections/BottomsheetSubsection";

export const ElementWrapper = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="35213:87599"
    >
      <ViewSubsection />
      <BottomsheetSubsection />
      <QwertySubsection />
    </main>
  );
};
