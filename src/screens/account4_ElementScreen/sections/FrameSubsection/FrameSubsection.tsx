import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const passwordDots = Array(10).fill(null);

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex flex-col items-start gap-[3px] pt-0 pb-6 px-6 w-full bg-white rounded-[30px_30px_0px_0px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-end w-full">
            <div className="w-full h-[22px]" />

            <Button
              variant="ghost"
              size="icon"
              className="w-[18px] h-[18px] p-0 hover:bg-transparent"
            >
              <XIcon className="w-[18px] h-[18px] text-gray-400" />
            </Button>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex items-start gap-2 w-full">
              <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
                <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                  인증서 비밀번호를 입력해 주세요
                </h2>
              </div>
            </div>

            <div className="w-full max-h-[26px] h-[26px] opacity-30" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="flex items-center gap-2.5 px-1.5 py-0 flex-1">
                      {passwordDots.map((_, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-0.5 bg-[#4c67f1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[54px] flex items-center justify-center gap-2 rounded-xl w-full">
        <div className="min-h-[54px] flex-1 flex items-start">
          <Button className="flex min-h-[54px] items-center justify-center gap-2 px-2 py-1 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 h-auto">
            <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
