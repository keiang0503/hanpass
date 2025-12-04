import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { PopupHeader } from "../../components/PopupHeader";

export const MypageBs = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-h-screen flex flex-col"
      data-model-id="34894:25230"
    >
      <PopupHeader />

      <main className="flex-1 flex items-end">
        <section className="w-full flex flex-col bg-white rounded-t-[30px]">
          <div className="gap-1.5 pt-0 pb-3.5 px-6 flex flex-col items-center w-full">
            <div className="flex-col w-full flex items-start">
              <div className="flex flex-col items-end w-full">
                <div className="w-full h-[22px]" />
              </div>
            </div>

            <div className="relative w-full">
              <img
                className="w-full aspect-[1.96]"
                alt="OS Picker Interface"
                src="https://c.animaapp.com/KuxympCS/img/-----------2025-11-19------3-36-27-2@2x.png"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#f10000] text-[length:var(--title-18-SB-font-size)] text-center tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] whitespace-nowrap [font-style:var(--title-18-SB-font-style)]">
                OS Picker
              </div>
            </div>
          </div>

          <div className="justify-end px-6 py-0 flex flex-col items-center w-full bg-white">
            <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl">
              <div className="min-h-[54px] flex-1 flex items-start">
                <Button className="flex min-h-[54px] h-auto items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    선택해주세요
                  </span>
                </Button>
              </div>
            </div>

            <div className="w-full h-4" />

            <div className="flex flex-col w-full items-center gap-2.5 px-[105px] py-2 bg-white">
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
