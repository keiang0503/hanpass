import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { ContentsWrapperSubsection } from "./sections/ContentsWrapperSubsection";

export const MypageScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-white min-h-screen"
      data-model-id="36848:88153"
    >
      <BackSubHeader />

      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              내 정보 관리
            </h1>
          </div>
        </div>
      </section>

      <ContentsWrapperSubsection />

      <footer className="flex flex-col items-center justify-end pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#b7ccf7] rounded-xl hover:bg-[#a3bef5]">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                저장하기
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
