import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const IdFrontCapture = (): JSX.Element => {
  return (
    <div
      className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] w-full h-screen relative flex flex-col"
      data-model-id="40000003:687579"
    >
      <PopupHeader />
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full items-center justify-center gap-2.5 px-6 py-0 mt-8">
          <h1 className="flex-1 font-title-24-b font-[number:var(--title-24-b-font-weight)] text-transparent text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            <span className="text-[#45a6ff]">신분증 앞면</span>
            <span className="text-white">을 촬영해주세요.</span>
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <img
            className="w-full max-w-[332px] h-auto object-cover rounded-2xl"
            alt="ID Card"
            src="https://c.animaapp.com/SXpbAKOQ/img/------@2x.png"
          />
        </div>

        <div className="flex w-full items-center justify-center gap-2.5 px-6 py-0 mb-8">
          <p className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            촬영 시 흔들림이나 빛 반사에 주의하세요.
          </p>
        </div>

        <div className="flex items-center justify-center pb-8">
          <Button
            variant="ghost"
            size="icon"
            className="h-[70px] w-[70px] rounded-full border-[1.5px] border-[#d2dbe6] bg-transparent hover:bg-transparent p-0"
          >
            <div className="w-[85%] h-[85%] bg-white rounded-full" />
          </Button>
        </div>
      </div>
    </div>
  );
};
