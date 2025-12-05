import React from "react";
import { Button } from "../../../../components/ui/button";

const keypadData = [
  { number: "1", letters: "", className: "w-[31.73%]" },
  { number: "2", letters: "ABC", className: "w-[32.27%]" },
  { number: "3", letters: "DEF", className: "w-[32.27%]" },
  { number: "4", letters: "GHI", className: "w-[32.27%]" },
  { number: "5", letters: "JKL", className: "w-[32.27%]" },
  { number: "6", letters: "MNO", className: "w-[32.27%]" },
  { number: "7", letters: "PGRS", className: "w-[32.27%]" },
  { number: "8", letters: "TUV", className: "w-[32.27%]" },
  { number: "9", letters: "WXYZ", className: "w-[32.27%]" },
];

export const ViewSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-end gap-2.5 w-full items-center relative">
      <div className="flex flex-col items-start relative w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative w-full">
          <div className="min-h-[54px] flex-1 flex items-start relative">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 grow bg-[#b7ccf7] hover:bg-[#a3bef5] rounded-xl h-auto">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Button>
          </div>
        </div>

        <div className="gap-10 w-full flex flex-col items-start relative bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="w-full gap-2.5 flex flex-col items-start relative bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="relative w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
              <div className="grid grid-cols-3 gap-x-[1.33%] gap-y-[3.24%] px-0 py-[2.78%]">
                {keypadData.slice(0, 3).map((key, index) => (
                  <button
                    key={`key-${index}`}
                    className={`relative h-[46px] ${key.className}`}
                  >
                    <img
                      className="absolute w-full h-full top-0 left-0"
                      alt="Key background"
                      src={`https://c.animaapp.com/shEJQFEJ/img/key-background-${index === 0 ? "8" : index === 1 ? "7" : "6"}.svg`}
                    />
                    {key.letters && (
                      <div className="absolute w-full h-[26.09%] top-[63.04%] left-0 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center leading-[normal]">
                        {index === 1 ? (
                          <>
                            <span className="tracking-[0.20px]">AB</span>
                            <span className="tracking-[0]">C</span>
                          </>
                        ) : (
                          <span className="tracking-[2.00px]">
                            {key.letters}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="absolute w-full h-[65.22%] top-[2.17%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      {key.number}
                    </div>
                  </button>
                ))}

                {keypadData.slice(3, 6).map((key, index) => (
                  <button
                    key={`key-${index + 3}`}
                    className={`relative h-[47px] ${key.className}`}
                  >
                    <img
                      className="absolute w-[96.69%] h-full top-0 left-0"
                      alt="Key background"
                      src={`https://c.animaapp.com/shEJQFEJ/img/key-background-${index === 0 ? "5" : index === 1 ? "4" : "3"}.svg`}
                    />
                    <div className="absolute w-[96.69%] h-[25.53%] top-[63.83%] left-0 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                      {key.letters}
                    </div>
                    <div className="absolute w-[96.69%] h-[63.83%] top-[3.19%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      {key.number}
                    </div>
                  </button>
                ))}

                {keypadData.slice(6, 9).map((key, index) => (
                  <button
                    key={`key-${index + 6}`}
                    className={`relative h-[47px] ${key.className}`}
                  >
                    <img
                      className="absolute w-[96.69%] h-full top-0 left-0"
                      alt={index === 0 ? "Rectangle" : "Key background"}
                      src={`https://c.animaapp.com/shEJQFEJ/img/${index === 0 ? "rectangle" : `key-background-${index === 1 ? "2" : "1"}`}.svg`}
                    />
                    <div className="absolute w-[96.69%] h-[25.53%] top-[63.83%] left-0 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                      {key.letters}
                    </div>
                    <div className="absolute w-[96.69%] h-[63.83%] top-[3.19%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      {key.number}
                    </div>
                  </button>
                ))}
              </div>

              <div className="absolute w-[31.73%] h-[21.30%] top-[77.31%] left-[34.40%]">
                <button className="relative w-full h-full">
                  <img
                    className="absolute w-[98.32%] h-full top-0 left-0"
                    alt="Key background"
                    src="https://c.animaapp.com/shEJQFEJ/img/key-background.svg"
                  />
                  <div className="absolute w-[98.32%] h-[65.22%] top-[17.39%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                    0
                  </div>
                </button>
              </div>

              <button className="absolute w-[6.03%] h-[8.33%] top-[83.33%] left-[80.53%]">
                <img
                  className="w-full h-full"
                  alt="Delete"
                  src="https://c.animaapp.com/shEJQFEJ/img/delete@2x.png"
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
