import React from "react";
import { Button } from "../../components/ui/button";
import { ContentsWrapperSubsection } from "./sections/ContentsWrapperSubsection";
import { UiStatusBarWrapperSubsection } from "./sections/UiStatusBarWrapperSubsection";

export const MypageScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-white min-h-screen"
      data-model-id="36848:88153"
    >
      <UiStatusBarWrapperSubsection />

      <header className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 relative self-stretch w-full bg-white">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-8 h-8 p-0"
            >
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/Oax14zk6/img/wechat-hd-7.svg"
              />
            </Button>

            <img
              className="h-8 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/Oax14zk6/img/mini-8@2x.png"
            />
          </div>
        </div>
      </header>

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

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
