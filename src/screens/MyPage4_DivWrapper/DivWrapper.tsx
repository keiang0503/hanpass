import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-black"
      data-model-id="36848:90813"
    >
      <div className="w-full h-screen relative bg-black">
        <div className="flex flex-col w-full h-full">
          <PopupHeader />
          <main className="flex flex-col items-center justify-between flex-1 px-6 py-6">
            <div className="flex w-full items-center justify-center gap-2.5 pt-4">
              <h1 className="relative flex-1 mt-[-1.00px] [font-family:'Pretendard-Bold',Helvetica] font-normal text-transparent text-2xl text-center tracking-[-0.48px] leading-[31.2px]">
                <span className="font-[number:var(--title-24-b-font-weight)] text-[#45a6ff] tracking-[var(--title-24-b-letter-spacing)] font-title-24-b [font-style:var(--title-24-b-font-style)] leading-[var(--title-24-b-line-height)] text-[length:var(--title-24-b-font-size)]">
                  여권 앞면
                </span>
                <span className="font-title-24-m font-[number:var(--title-24-m-font-weight)] text-white tracking-[var(--title-24-m-letter-spacing)] [font-style:var(--title-24-m-font-style)] leading-[var(--title-24-m-line-height)] text-[length:var(--title-24-m-font-size)]">
                  을 촬영해주세요.
                </span>
              </h1>
            </div>

            <div className="flex flex-col items-center w-full flex-1 justify-center">
              <img
                className="w-full max-w-[500px] h-auto aspect-[1.586/1] object-contain"
                alt="Passport"
                src="https://c.animaapp.com/2nKnhQUO/img/--@2x.png"
              />

              <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] mt-4 text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                촬영 시 흔들림이나 빛 반사에 주의하세요.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pb-8 w-full">
              <Button
                variant="ghost"
                size="icon"
                className="w-[70px] h-[70px] rounded-full border-[1.5px] border-[#d2dbe6] bg-transparent hover:bg-transparent p-0"
              >
                <div className="w-[85%] h-[85%] bg-white rounded-full" />
              </Button>
            </div>
          </main>
        </div>

        <img
          className="absolute w-full h-full top-0 left-0 pointer-events-none"
          alt="Exclude"
          src="https://c.animaapp.com/2nKnhQUO/img/exclude-1.svg"
        />
      </div>
    </div>
  );
};
