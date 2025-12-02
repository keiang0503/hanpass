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

export const InputViewSection = (): JSX.Element => {
  return (
    <section className="flex-col justify-end gap-2.5 w-full flex-[0_0_auto] flex items-center relative self-stretch">
      <div className="flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#b7ccf7] hover:bg-[#a3bef5] rounded-none h-auto">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Button>
          </div>
        </div>

        <div className="gap-10 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="w-full gap-2.5 flex flex-col items-start relative flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="relative self-stretch w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
              <div className="flex flex-wrap gap-0 w-full h-full p-0">
                {keypadData.slice(0, 3).map((key, index) => (
                  <Button
                    key={`key-${index}`}
                    variant="ghost"
                    className={`${key.className} h-[21.30%] relative flex flex-col items-center justify-center bg-transparent hover:bg-white/20 rounded-none p-0`}
                  >
                    <div className="absolute w-[96.69%] h-full top-0 left-0">
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt="Key background"
                        src={
                          index === 0
                            ? "https://c.animaapp.com/BgjmszUI/img/key-background-8.svg"
                            : index === 1
                              ? "https://c.animaapp.com/BgjmszUI/img/key-background-7.svg"
                              : "https://c.animaapp.com/BgjmszUI/img/key-background-6.svg"
                        }
                      />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                        {key.number}
                      </div>
                      {key.letters && (
                        <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal] mt-1">
                          {key.letters}
                        </div>
                      )}
                    </div>
                  </Button>
                ))}

                {keypadData.slice(3, 6).map((key, index) => (
                  <Button
                    key={`key-${index + 3}`}
                    variant="ghost"
                    className={`${key.className} h-[21.76%] relative flex flex-col items-center justify-center bg-transparent hover:bg-white/20 rounded-none p-0`}
                  >
                    <div className="absolute w-[96.69%] h-full top-0 left-0">
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt="Key background"
                        src={
                          index === 0
                            ? "https://c.animaapp.com/BgjmszUI/img/key-background-5.svg"
                            : index === 1
                              ? "https://c.animaapp.com/BgjmszUI/img/key-background-4.svg"
                              : "https://c.animaapp.com/BgjmszUI/img/key-background-3.svg"
                        }
                      />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                        {key.number}
                      </div>
                      {key.letters && (
                        <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal] mt-1">
                          {key.letters}
                        </div>
                      )}
                    </div>
                  </Button>
                ))}

                {keypadData.slice(6, 9).map((key, index) => (
                  <Button
                    key={`key-${index + 6}`}
                    variant="ghost"
                    className={`${key.className} h-[21.76%] relative flex flex-col items-center justify-center bg-transparent hover:bg-white/20 rounded-none p-0`}
                  >
                    <div className="absolute w-[96.69%] h-full top-0 left-0">
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt="Key background"
                        src={
                          index === 0
                            ? "https://c.animaapp.com/BgjmszUI/img/rectangle.svg"
                            : index === 1
                              ? "https://c.animaapp.com/BgjmszUI/img/key-background-2.svg"
                              : "https://c.animaapp.com/BgjmszUI/img/key-background-1.svg"
                        }
                      />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                        {key.number}
                      </div>
                      {key.letters && (
                        <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal] mt-1">
                          {key.letters}
                        </div>
                      )}
                    </div>
                  </Button>
                ))}

                <div className="w-[31.73%] h-[21.30%]"></div>

                <Button
                  variant="ghost"
                  className="w-[31.73%] h-[21.30%] relative flex flex-col items-center justify-center bg-transparent hover:bg-white/20 rounded-none p-0"
                >
                  <div className="absolute w-[98.32%] h-full top-0 left-0">
                    <img
                      className="absolute w-full h-full top-0 left-0"
                      alt="Key background"
                      src="https://c.animaapp.com/BgjmszUI/img/key-background.svg"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      0
                    </div>
                  </div>
                </Button>

                <Button
                  variant="ghost"
                  className="w-[32.27%] h-[21.30%] relative flex items-center justify-center bg-transparent hover:bg-white/20 rounded-none p-0"
                >
                  <img
                    className="w-[6.03%] h-[8.33%]"
                    alt="Delete"
                    src="https://c.animaapp.com/BgjmszUI/img/delete@2x.png"
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[34px]">
            <div className="absolute left-[calc(50.00%_-_66px)] bottom-2 w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
