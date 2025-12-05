import React from "react";
import { PopupHeader } from "../../components/PopupHeader";
import { QwertySubsection } from "../account4_ElementScreen/sections/QwertySubsection";
import { BottomsheetSubsection } from "./sections/BottomsheetSubsection";

export const ElementWrapper = (): JSX.Element => {
  return (
    <main
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="35213:87599"
    >
      <PopupHeader />
      <BottomsheetSubsection />
      <QwertySubsection />
    </main>
  );
};
