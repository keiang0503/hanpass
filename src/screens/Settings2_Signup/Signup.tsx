import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { ViewSubsection } from "./sections/ViewSubsection";

export const Signup = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79140"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 bg-white">
        <div className="flex flex-col px-6 pt-6 pb-0">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            인증번호를 입력해 주세요.
          </h1>
        </div>

        <ContentsSubsection />
        <ViewSubsection />
      </main>
    </div>
  );
};
