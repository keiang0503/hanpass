import React from "react";
import { Button } from "../../components/ui/button";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection";
import { ViewSubsection } from "./sections/ViewSubsection";

export const Signup = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79140"
    >
      <UiStatusBarSubsection />

      <header className="flex items-center justify-between px-4 py-3 bg-white">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          </Button>
        </div>
      </header>

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
