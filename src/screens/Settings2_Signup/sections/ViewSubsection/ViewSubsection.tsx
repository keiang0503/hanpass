import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const keypadData = [
  { number: "1", letters: "", className: "col-start-1" },
  { number: "2", letters: "ABC", className: "col-start-2" },
  { number: "3", letters: "DEF", className: "col-start-3" },
  { number: "4", letters: "GHI", className: "col-start-1" },
  { number: "5", letters: "JKL", className: "col-start-2" },
  { number: "6", letters: "MNO", className: "col-start-3" },
  { number: "7", letters: "PGRS", className: "col-start-1" },
  { number: "8", letters: "TUV", className: "col-start-2" },
  { number: "9", letters: "WXYZ", className: "col-start-3" },
];

export const ViewSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-end gap-2.5 w-full items-center">
      <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
        <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 w-full bg-[#252e33d6] rounded-xl">
          <div className="flex items-center justify-center flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            SMS로 인증번호가 발송되었습니다.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="min-h-[54px] items-start flex-1 grow flex">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-none h-auto">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

        <div className="gap-10 w-full flex flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="w-full gap-2.5 flex flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)] grid grid-cols-3 gap-0 p-1.5 relative">
              {keypadData.map((key, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`${key.className} flex flex-col items-center justify-center h-[46px] bg-white rounded-lg hover:bg-gray-100 p-0`}
                >
                  <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[30px]">
                    {key.number}
                  </span>
                  {key.letters && (
                    <span className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[12px]">
                      {key.letters}
                    </span>
                  )}
                </Button>
              ))}

              <Button
                variant="ghost"
                className="col-start-2 row-start-4 flex flex-col items-center justify-center h-[46px] bg-white rounded-lg hover:bg-gray-100 p-0"
              >
                <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[30px]">
                  0
                </span>
              </Button>

              <Button
                variant="ghost"
                className="col-start-3 row-start-4 flex items-center justify-center h-[46px] bg-[#aeb4bc] rounded-lg hover:bg-[#aeb4bc]/90 p-0"
              >
                <XIcon className="w-6 h-6 text-black" />
              </Button>
            </div>
          </div>

          <div className="w-full h-[34px] flex items-end justify-center pb-2">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
