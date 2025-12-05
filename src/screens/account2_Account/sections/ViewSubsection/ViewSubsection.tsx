import React from "react";
import { Button } from "../../../../components/ui/button";

const keypadData = [
  { number: "1", letters: "", className: "w-[98.32%]" },
  { number: "2", letters: "ABC", className: "w-[96.69%]" },
  { number: "3", letters: "DEF", className: "w-[96.69%]" },
  { number: "4", letters: "GHI", className: "w-[96.69%]" },
  { number: "5", letters: "JKL", className: "w-[96.69%]" },
  { number: "6", letters: "MNO", className: "w-[96.69%]" },
  { number: "7", letters: "PQRS", className: "w-[96.69%]" },
  { number: "8", letters: "TUV", className: "w-[96.69%]" },
  { number: "9", letters: "WXYZ", className: "w-[96.69%]" },
];

export const ViewSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-end w-full">
      <div className="min-h-[54px] items-center justify-center gap-2 flex rounded-xl w-full">
        <div className="min-h-[54px] flex-1 flex items-start">
          <Button className="flex min-h-[54px] items-center justify-center gap-2 px-2 py-1 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-none h-auto">
            <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>
      </div>

      <div className="gap-10 w-full flex flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="w-full gap-2.5 flex flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)] grid grid-cols-3 gap-0 p-0">
            {keypadData.slice(0, 3).map((key, index) => (
              <button
                key={`key-${index}`}
                className="relative flex flex-col items-center justify-center h-[46px] bg-transparent"
              >
                <img
                  className={`absolute ${key.className} h-full top-0 left-0`}
                  alt="Key background"
                  src={
                    index === 0
                      ? "https://c.animaapp.com/X2DaSZUE/img/key-background-8.svg"
                      : index === 1
                        ? "https://c.animaapp.com/X2DaSZUE/img/key-background-7.svg"
                        : "https://c.animaapp.com/X2DaSZUE/img/key-background-6.svg"
                  }
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                    {key.number}
                  </div>
                  {key.letters && (
                    <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                      {key.letters}
                    </div>
                  )}
                </div>
              </button>
            ))}

            {keypadData.slice(3, 6).map((key, index) => (
              <button
                key={`key-${index + 3}`}
                className="relative flex flex-col items-center justify-center h-[47px] bg-transparent"
              >
                <img
                  className={`absolute ${key.className} h-full top-0 left-0`}
                  alt="Key background"
                  src={
                    index === 0
                      ? "https://c.animaapp.com/X2DaSZUE/img/key-background-5.svg"
                      : index === 1
                        ? "https://c.animaapp.com/X2DaSZUE/img/key-background-4.svg"
                        : "https://c.animaapp.com/X2DaSZUE/img/key-background-3.svg"
                  }
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                    {key.number}
                  </div>
                  {key.letters && (
                    <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                      {key.letters}
                    </div>
                  )}
                </div>
              </button>
            ))}

            {keypadData.slice(6, 9).map((key, index) => (
              <button
                key={`key-${index + 6}`}
                className="relative flex flex-col items-center justify-center h-[47px] bg-transparent"
              >
                <img
                  className={`absolute ${key.className} h-full top-0 left-0`}
                  alt="Key background"
                  src={
                    index === 0
                      ? "https://c.animaapp.com/X2DaSZUE/img/rectangle-1.svg"
                      : index === 1
                        ? "https://c.animaapp.com/X2DaSZUE/img/key-background-2.svg"
                        : "https://c.animaapp.com/X2DaSZUE/img/key-background-1.svg"
                  }
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                    {key.number}
                  </div>
                  {key.letters && (
                    <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                      {key.letters}
                    </div>
                  )}
                </div>
              </button>
            ))}

            <div className="relative flex flex-col items-center justify-center h-[46px] bg-transparent"></div>

            <button className="relative flex flex-col items-center justify-center h-[46px] bg-transparent">
              <img
                className="absolute w-[98.32%] h-full top-0 left-0"
                alt="Key background"
                src="https://c.animaapp.com/X2DaSZUE/img/key-background.svg"
              />
              <div className="relative z-10 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                0
              </div>
            </button>

            <button className="relative flex items-center justify-center h-[46px] bg-transparent">
              <img
                className="w-[22.63px] h-[18px]"
                alt="Delete"
                src="https://c.animaapp.com/X2DaSZUE/img/delete@2x.png"
              />
            </button>
          </div>
        </div>

        <div className="w-full h-[34px] flex items-end justify-center pb-2">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </div>
    </section>
  );
};
