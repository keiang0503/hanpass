import { ChevronLeftIcon, MoreHorizontalIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { ComponentWrapperSubsection } from "./sections/ComponentWrapperSubsection";
import { ContentsSubsection } from "./sections/ContentsSubsection";
import { UiStatusBarWrapperSubsection } from "./sections/UiStatusBarWrapperSubsection";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="35202:90012"
    >
      <UiStatusBarWrapperSubsection />

      <header className="flex flex-col items-start w-full">
        <div className="flex items-center justify-between px-4 py-3 w-full bg-white">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MoreHorizontalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <TargetIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-1 px-4 pb-4 w-full">
          <h1 className="font-title-28-b text-[28px] font-bold leading-[100%] tracking-[-1.12px]">
            계좌거래내역 조회
          </h1>
          <p className="font-body-14-r text-[14px] font-normal leading-[130%] tracking-[-0.28px] text-[#666666]">
            2024.07.07 ~ 2024.10.08
          </p>
        </div>
      </header>

      <ComponentWrapperSubsection />
      <ContentsSubsection />

      <footer className="flex flex-col items-center w-full mt-auto">
        <div className="flex justify-center py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
