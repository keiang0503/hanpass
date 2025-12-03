import React from "react";
import { Button } from "../../../../components/ui/button";

const keypadData = [
  {
    number: "1",
    letters: "",
    top: "top-[2.78%]",
    left: "left-0",
    width: "w-[31.73%]",
    height: "h-[21.30%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-8.svg",
  },
  {
    number: "2",
    letters: "ABC",
    top: "top-[2.78%]",
    left: "left-[34.40%]",
    width: "w-[32.27%]",
    height: "h-[21.30%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-7.svg",
  },
  {
    number: "3",
    letters: "DEF",
    top: "top-[2.78%]",
    left: "left-[67.20%]",
    width: "w-[32.27%]",
    height: "h-[21.30%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-6.svg",
  },
  {
    number: "4",
    letters: "GHI",
    top: "top-[27.31%]",
    left: "left-0",
    width: "w-[32.27%]",
    height: "h-[21.76%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-5.svg",
  },
  {
    number: "5",
    letters: "JKL",
    top: "top-[27.31%]",
    left: "left-[34.40%]",
    width: "w-[32.27%]",
    height: "h-[21.76%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-4.svg",
  },
  {
    number: "6",
    letters: "MNO",
    top: "top-[27.31%]",
    left: "left-[67.20%]",
    width: "w-[32.27%]",
    height: "h-[21.76%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-3.svg",
  },
  {
    number: "7",
    letters: "PGRS",
    top: "top-[52.31%]",
    left: "left-0",
    width: "w-[32.27%]",
    height: "h-[21.76%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/rectangle.svg",
  },
  {
    number: "8",
    letters: "TUV",
    top: "top-[52.31%]",
    left: "left-[34.40%]",
    width: "w-[32.27%]",
    height: "h-[21.76%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-2.svg",
  },
  {
    number: "9",
    letters: "WXYZ",
    top: "top-[52.31%]",
    left: "left-[67.20%]",
    width: "w-[32.27%]",
    height: "h-[21.76%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background-1.svg",
  },
  {
    number: "0",
    letters: "",
    top: "top-[77.31%]",
    left: "left-[34.40%]",
    width: "w-[31.73%]",
    height: "h-[21.30%]",
    bgSrc: "https://c.animaapp.com/MgOgZxnr/img/key-background.svg",
  },
];

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex items-center justify-center gap-2 rounded-xl w-full min-h-[54px]">
        <div className="flex items-start flex-1 min-h-[54px]">
          <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
            <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </span>
          </Button>
        </div>
      </div>

      <div className="inline-flex gap-10 flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="flex w-[375px] gap-2.5 flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="relative w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
            <button className="absolute w-[6.03%] h-[8.33%] top-[83.33%] left-[80.53%] cursor-pointer">
              <img
                className="w-full h-full"
                alt="Delete"
                src="https://c.animaapp.com/MgOgZxnr/img/delete@2x.png"
              />
            </button>

            {keypadData.map((key, index) => (
              <button
                key={`key-${index}`}
                className={`absolute ${key.width} ${key.height} ${key.top} ${key.left} cursor-pointer`}
              >
                <img
                  className={`absolute ${key.number === "1" || key.number === "0" ? "w-[98.32%]" : "w-[96.69%]"} h-full top-0 left-0`}
                  alt="Key background"
                  src={key.bgSrc}
                />

                <div
                  className={`${key.number === "1" || key.number === "0" ? "w-[98.32%]" : "w-[96.69%]"} h-[65.22%] ${key.number === "1" || key.number === "0" ? "top-[2.17%]" : key.number === "4" || key.number === "5" || key.number === "6" || key.number === "7" || key.number === "8" || key.number === "9" ? "top-[3.19%]" : "top-[2.17%]"} absolute left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]`}
                >
                  {key.number}
                </div>

                {key.letters && (
                  <div
                    className={`${key.number === "1" || key.number === "0" ? "w-[98.32%]" : "w-[96.69%]"} ${key.number === "2" || key.number === "3" ? "h-[26.09%]" : "h-[25.53%]"} ${key.number === "2" || key.number === "3" ? "top-[63.04%]" : "top-[63.83%]"} absolute left-0 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center leading-[normal] ${key.number === "2" ? "" : "tracking-[2.00px]"}`}
                  >
                    {key.number === "2" ? (
                      <>
                        <span className="tracking-[0.20px]">AB</span>
                        <span className="tracking-[0]">C</span>
                      </>
                    ) : (
                      key.letters
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-[375px] h-[34px]">
          <div className="absolute left-[calc(50.00%_-_66px)] bottom-2 w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </div>
    </section>
  );
};
