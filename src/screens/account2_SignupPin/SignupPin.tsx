import { ChevronRightIcon, DeleteIcon, RotateCcwIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const pinDots = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadRows = [
  ["7", "5", "2"],
  ["1", "4", "6"],
  ["8", "0", "3"],
];

export const SignupPin = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-white"
      data-model-id="34892:269048"
    >
        <BackSubHeader />

        <main className="flex flex-col items-center gap-[50px] px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="relative flex-1 mt-[-1.00px] font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                      6자리 비밀번호를
                      <br />
                      입력해 주세요
                    </h1>
                  </div>

                  <div className="flex items-center justify-center gap-2 relative w-[198px] h-[18px]">
                    {pinDots.map((dot, index) => (
                      <div
                        key={`pin-dot-${index}`}
                        className={`w-4 h-4 rounded-full ${
                          dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center px-0 py-1.5 relative flex-[0_0_auto] h-auto"
              >
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    6자리 비밀번호(PIN) 변경
                  </span>
                </div>

                <div className="flex w-4 h-[18px] items-center justify-center gap-2.5 relative">
                  <ChevronRightIcon className="w-4 h-4 text-[#85888e]" />
                </div>
              </Button>

              <Button
                variant="ghost"
                className="inline-flex items-center justify-center px-0 py-1.5 relative flex-[0_0_auto] h-auto"
              >
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <span className="font-body-14-m text-[#85888e] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap relative w-fit mt-[-1.00px] font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] [font-style:var(--body-14-m-font-style)]">
                    생체 정보 등록하기
                  </span>
                </div>

                <div className="flex w-4 h-[18px] items-center justify-center gap-2.5 relative">
                  <ChevronRightIcon className="w-4 h-4 text-[#85888e]" />
                </div>
              </Button>
            </div>
          </main>

        <footer className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="w-full bg-[#0d56e4]">
            <div className="grid grid-cols-3 gap-0 w-full">
              {keypadRows.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                  {row.map((num, colIndex) => (
                    <Button
                      key={`keypad-${rowIndex}-${colIndex}`}
                      variant="ghost"
                      className="h-[66px] w-full rounded-none font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-white/10"
                    >
                      {num}
                    </Button>
                  ))}
                </React.Fragment>
              ))}

              <Button
                variant="ghost"
                className="h-[66px] w-full rounded-none hover:bg-white/10"
              >
                <RotateCcwIcon className="w-6 h-6 text-white" />
              </Button>

              <Button
                variant="ghost"
                className="h-[66px] w-full rounded-none font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-white/10"
              >
                9
              </Button>

              <Button
                variant="ghost"
                className="h-[66px] w-full rounded-none hover:bg-white/10"
              >
                <DeleteIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
        </footer>
    </div>
  );
};
