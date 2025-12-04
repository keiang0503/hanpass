import React from "react";
import { Button } from "../../../../components/ui/button";

const keypadData = [
  {
    number: "1",
    letters: "",
    className: "top-[2.78%] left-0 w-[31.73%] h-[21.30%]",
  },
  {
    number: "2",
    letters: "ABC",
    className: "top-[2.78%] left-[34.40%] w-[32.27%] h-[21.30%]",
  },
  {
    number: "3",
    letters: "DEF",
    className: "top-[2.78%] left-[67.20%] w-[32.27%] h-[21.30%]",
  },
  {
    number: "4",
    letters: "GHI",
    className: "top-[27.31%] left-0 w-[32.27%] h-[21.76%]",
  },
  {
    number: "5",
    letters: "JKL",
    className: "top-[27.31%] left-[34.40%] w-[32.27%] h-[21.76%]",
  },
  {
    number: "6",
    letters: "MNO",
    className: "top-[27.31%] left-[67.20%] w-[32.27%] h-[21.76%]",
  },
  {
    number: "7",
    letters: "PQRS",
    className: "top-[52.31%] left-0 w-[32.27%] h-[21.76%]",
  },
  {
    number: "8",
    letters: "TUV",
    className: "top-[52.31%] left-[34.40%] w-[32.27%] h-[21.76%]",
  },
  {
    number: "9",
    letters: "WXYZ",
    className: "top-[52.31%] left-[67.20%] w-[32.27%] h-[21.76%]",
  },
  {
    number: "0",
    letters: "",
    className: "top-[77.31%] left-[34.40%] w-[31.73%] h-[21.30%]",
  },
];

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-end gap-2.5 w-full">
      <div className="flex flex-col items-start w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="flex min-h-[54px] items-start flex-1">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 h-auto rounded-xl">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

        <div className="inline-flex gap-10 flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="flex w-[375px] gap-2.5 flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="relative w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
              <img
                className="absolute w-[6.03%] h-[8.33%] top-[83.33%] left-[80.53%]"
                alt="Delete"
                src="https://c.animaapp.com/KuxympCS/img/delete@2x.png"
              />

              {keypadData.map((key, index) => (
                <div key={index} className={`absolute ${key.className}`}>
                  <img
                    className="absolute w-[96.69%] h-full top-0 left-0"
                    alt="Key background"
                    src={`https://c.animaapp.com/KuxympCS/img/key-background${index === 0 || index === 9 ? (index === 0 ? "-8" : "") : `-${index}`}.svg`}
                  />
                  {key.letters && (
                    <div className="absolute w-[96.69%] h-[25.53%] top-[63.83%] left-0 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                      {key.letters}
                    </div>
                  )}
                  <div className="absolute w-[96.69%] h-[65.22%] top-[2.17%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                    {key.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-[375px] h-[34px]">
            <div className="absolute left-[calc(50.00%_-_66px)] bottom-2 w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
