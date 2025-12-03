import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  DeleteIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const pinDots = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadNumbers = [
  { number: "7", position: "top-[33px] left-14" },
  { number: "5", position: "top-[33px] left-[180px]" },
  { number: "2", position: "top-[33px] left-[306px]" },
  { number: "1", position: "top-[99px] left-[57px]" },
  { number: "4", position: "top-[99px] left-[180px]" },
  { number: "6", position: "top-[99px] left-[305px]" },
  { number: "8", position: "top-[165px] left-[55px]" },
  { number: "0", position: "top-[165px] left-[180px]" },
  { number: "3", position: "top-[165px] left-[305px]" },
  { number: "9", position: "top-[231px] left-[180px]" },
];

export const PinEntry = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="34892:269048"
    >
      <div className="flex w-[375px] h-[800px] relative flex-col items-start bg-white">
        <header className="flex flex-col items-start gap-[22px] relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start relative self-stretch w-full bg-white">
            <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5 h-auto p-0"
                  >
                    <ChevronLeftIcon className="w-8 h-8" />
                  </Button>

                  <div className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px] flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-auto p-0">
                      <MoreHorizontalIcon className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-auto p-0">
                      <CircleIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </nav>
          </div>

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
        </header>

        <footer className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="relative self-stretch w-full h-[292px] mr-[-20.00px]">
            <div className="absolute top-0 left-0 w-[375px] h-[292px] bg-[#0d56e4]" />

            {keypadNumbers.map((item, index) => (
              <Button
                key={`keypad-${index}`}
                variant="ghost"
                className={`${item.position} w-auto h-auto p-2 absolute font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-white/10`}
              >
                {item.number}
              </Button>
            ))}

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_-_151px)] w-[31px] h-[30px] p-0 hover:bg-white/10"
            >
              <RotateCcwIcon className="w-6 h-6 text-white" />
            </Button>

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_+_99px)] w-[31px] h-[30px] p-0 hover:bg-white/10"
            >
              <DeleteIcon className="w-6 h-6 text-white" />
            </Button>
          </div>
        </footer>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#0d56e4]">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
