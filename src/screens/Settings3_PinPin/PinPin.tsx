import {
  ChevronRightIcon,
  DeleteIcon,
  RotateCcwIcon,
} from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

const pinDots = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadButtons = [
  { number: "7", position: "row-1 col-1" },
  { number: "5", position: "row-1 col-2" },
  { number: "2", position: "row-1 col-3" },
  { number: "1", position: "row-2 col-1" },
  { number: "4", position: "row-2 col-2" },
  { number: "6", position: "row-2 col-3" },
  { number: "8", position: "row-3 col-1" },
  { number: "0", position: "row-3 col-2" },
  { number: "3", position: "row-3 col-3" },
  { number: "9", position: "row-4 col-2" },
];

export const PinPin = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000016:2694299"
    >
      <BackSubHeader />

      <main className="flex flex-col items-center gap-[50px] px-6 py-0 w-full pt-[22px]">
          <div className="flex flex-col items-center gap-[26px] w-full">
            <div className="flex flex-col items-center gap-[50px] w-full">
              <div className="flex flex-col items-center gap-[26px] w-full">
                <div className="flex items-start justify-center w-full">
                  <h1 className="flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                    6자리 비밀번호를
                    <br />
                    입력해 주세요
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-3 w-full">
                  {pinDots.map((dot, index) => (
                    <div
                      key={`pin-dot-${index}`}
                      className={`w-[18px] h-[18px] rounded-full ${
                        dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center gap-0 p-0"
          >
            <div className="inline-flex items-center justify-center px-0 py-1.5">
              <div className="inline-flex items-center justify-center gap-2.5">
                <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                  6자리 비밀번호(PIN) 변경
                </span>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-[#85888e]" />
            </div>
          </Button>
        </main>

      <div className="flex flex-col items-start gap-6 w-full mt-auto">
        <div className="flex items-center justify-center gap-2.5 px-6 py-0 w-full">
          <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
            입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
            국내송금, 월렛 충전 등)
          </p>
        </div>

        <div className="w-full h-[292px] bg-[#0d56e4] grid grid-cols-3 gap-0 p-0">
          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              7
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              5
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              2
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              1
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              4
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              6
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              8
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              0
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              3
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <RotateCcwIcon className="w-[31px] h-[30px] text-white" />
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              9
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <DeleteIcon className="w-[31px] h-[30px] text-white" />
          </Button>
        </div>
      </div>

    </div>
  );
};
