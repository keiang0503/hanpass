import React from "react";
import { Button } from "../../../../components/ui/button";

const keyboardRow1 = [
  { char: "ㅂ", left: "left-0" },
  { char: "ㅈ", left: "left-[10.14%]" },
  { char: "ㄷ", left: "left-[20.27%]" },
  { char: "ㄱ", left: "left-[30.41%]" },
  { char: "ㅅ", left: "left-[40.55%]" },
  { char: "ㅛ", left: "left-[50.68%]" },
  { char: "ㅕ", left: "left-[60.82%]" },
  { char: "ㅑ", left: "left-[70.96%]" },
  { char: "ㅐ", left: "left-[81.10%]" },
  { char: "ㅔ", left: "left-[91.51%]" },
];

const keyboardRow2 = [
  { char: "ㅁ", left: "left-0" },
  { char: "ㄴ", left: "left-[11.31%]" },
  { char: "ㅇ", left: "left-[22.63%]" },
  { char: "ㄹ", left: "left-[33.94%]" },
  { char: "ㅎ", left: "left-[45.26%]" },
  { char: "ㅗ", left: "left-[56.57%]" },
  { char: "ㅓ", left: "left-[67.89%]" },
  { char: "ㅏ", left: "left-[79.20%]" },
  { char: "ㅣ", left: "left-[90.52%]" },
];

const keyboardRow3 = [
  { char: "ㅋ", left: "left-[15.34%]" },
  { char: "ㅌ", left: "left-[25.48%]" },
  { char: "ㅊ", left: "left-[35.62%]" },
  { char: "ㅍ", left: "left-[45.75%]" },
  { char: "ㅠ", left: "left-[55.89%]" },
  { char: "ㅜ", left: "left-[66.03%]" },
  { char: "ㅡ", left: "left-[76.16%]" },
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <div className="min-h-[54px] items-center justify-center gap-2 w-full rounded-xl flex">
        <div className="flex min-h-[54px] items-start flex-1 grow">
          <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 grow bg-[#0d56e4] hover:bg-[#0d56e4]/90 h-auto rounded-xl">
            <span className="flex-1 text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>
      </div>

      <div className="w-full h-[291px] relative">
        <div className="w-full h-[calc(100%_-_75px)] flex">
          <div className="flex-1 w-full flex flex-col px-0 py-1 items-center min-h-full bg-[#d3d6e2] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
            <div className="w-[365px] h-[42px] relative mt-1.5">
              {keyboardRow1.map((key, index) => (
                <div
                  key={`row1-${index}`}
                  className={`absolute w-[9.04%] h-full top-0 ${key.left}`}
                >
                  <img
                    className="absolute w-[93.94%] h-full top-0 left-0"
                    alt="Keycap"
                    src={`https://c.animaapp.com/d5CwqEvt/img/keycap-${19 + index}.svg`}
                  />
                  <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                    {key.char}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[327px] mt-3 h-[42px] relative">
              {keyboardRow2.map((key, index) => (
                <div
                  key={`row2-${index}`}
                  className={`absolute w-[10.09%] h-full top-0 ${key.left}`}
                >
                  <img
                    className="absolute w-[93.94%] h-full top-0 left-0"
                    alt="Keycap"
                    src={`https://c.animaapp.com/d5CwqEvt/img/keycap-${10 + index}.svg`}
                  />
                  <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                    {key.char}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[365px] mt-[11px] h-[42px] relative">
              <img
                className="absolute w-[11.51%] h-full top-0 left-[88.49%]"
                alt="Key"
                src="https://c.animaapp.com/d5CwqEvt/img/key-1@2x.png"
              />

              {keyboardRow3.map((key, index) => (
                <div
                  key={`row3-${index}`}
                  className={`absolute w-[9.04%] h-full top-0 ${key.left}`}
                >
                  <img
                    className="w-[93.92%] absolute h-full top-0 left-0"
                    alt="Keycap"
                    src={`https://c.animaapp.com/d5CwqEvt/img/keycap-${2 + index}.svg`}
                  />
                  <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                    {key.char}
                  </div>
                </div>
              ))}

              <div className="absolute w-[11.51%] h-full top-0 left-0">
                <img
                  className="w-full absolute h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/d5CwqEvt/img/keycap-9.svg"
                />
                <img
                  className="absolute w-[47.59%] h-[38.10%] top-[30.95%] left-[26.19%]"
                  alt="Arrow"
                  src="https://c.animaapp.com/d5CwqEvt/img/arrow.svg"
                />
              </div>
            </div>

            <div className="w-[364px] mt-[11px] ml-[1.0px] h-[42px] relative">
              <div className="absolute w-[23.90%] h-full top-0 left-[76.10%]">
                <img
                  className="w-full absolute h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/d5CwqEvt/img/keycap.svg"
                />
                <img
                  className="absolute top-3.5 left-[34px] w-[17px] h-3.5"
                  alt="Return"
                  src="https://c.animaapp.com/d5CwqEvt/img/return.svg"
                />
              </div>

              <div className="absolute w-[49.73%] h-full top-0 left-[25.27%]">
                <img
                  className="w-[98.90%] absolute h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/d5CwqEvt/img/keycap-1.svg"
                />
                <div className="w-[78.45%] h-[42.86%] left-[9.94%] text-[15px] absolute top-[28.57%] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-center tracking-[0.30px] leading-[normal]">
                  스페이스
                </div>
              </div>

              <div className="absolute w-[12.09%] h-full top-0 left-0">
                <div className="w-[95.45%] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] absolute h-full top-0 left-0" />
                <div className="w-[95.45%] h-[45.24%] left-0 text-base absolute top-[28.57%] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-center tracking-[0.30px] leading-[normal]">
                  123
                </div>
              </div>

              <img
                className="absolute w-[11.54%] h-full top-0 left-[12.64%]"
                alt="Key"
                src="https://c.animaapp.com/d5CwqEvt/img/key@2x.png"
              />
            </div>
          </div>
        </div>

        <div className="absolute w-full h-[25.77%] top-[74.23%] left-0 bg-[#d3d6e2] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
          <img
            className="absolute top-[calc(50.00%_-_12px)] right-[30px] w-[15px] h-[25px]"
            alt="Dictation"
            src="https://c.animaapp.com/d5CwqEvt/img/dictation.svg"
          />

          <img
            className="absolute top-[calc(50.00%_-_14px)] left-[25px] w-7 h-7"
            alt="Type"
            src="https://c.animaapp.com/d5CwqEvt/img/type.svg"
          />

          <div className="absolute top-[41px] left-0 w-[375px] h-[34px] flex items-end justify-center">
            <div className="mb-2 w-[134px] h-[5px] ml-px bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
