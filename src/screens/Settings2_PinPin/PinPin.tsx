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
  [
    { value: "7", position: "left-14" },
    { value: "5", position: "left-[180px]" },
    { value: "2", position: "left-[306px]" },
  ],
  [
    { value: "1", position: "left-[57px]" },
    { value: "4", position: "left-[180px]" },
    { value: "6", position: "left-[305px]" },
  ],
  [
    { value: "8", position: "left-[55px]" },
    { value: "0", position: "left-[180px]" },
    { value: "3", position: "left-[305px]" },
  ],
];

export const PinPin = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000016:2572293"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 items-start gap-[22px] self-stretch w-full">
        <section className="flex flex-col items-center gap-[50px] px-6 py-0 self-stretch w-full">
          <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
            <div className="flex flex-col items-center gap-[50px] self-stretch w-full">
              <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
                <div className="flex items-start justify-center self-stretch w-full">
                  <h1 className="flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                    다시 한번
                    <br />
                    입력해 주세요
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-2 w-[198px]">
                  {pinDots.map((dot, index) => (
                    <div
                      key={`pin-dot-${index}`}
                      className={`w-3 h-3 rounded-full ${
                        dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 self-stretch w-full">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 self-stretch w-full">
            <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="relative self-stretch w-full h-[292px]">
            <div className="absolute top-0 left-0 w-full h-[292px] bg-[#0d56e4]" />

            {keypadButtons.map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((button, colIndex) => (
                  <Button
                    key={`button-${rowIndex}-${colIndex}`}
                    variant="ghost"
                    className={`absolute top-[${33 + rowIndex * 66}px] ${button.position} h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent`}
                  >
                    {button.value}
                  </Button>
                ))}
              </React.Fragment>
            ))}

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_-_151px)] h-auto p-0 hover:bg-transparent"
            >
              <img
                className="w-[31px] h-[30px]"
                alt="Clear"
                src="https://c.animaapp.com/kp7cm7rf/img/ico.svg"
              />
            </Button>

            <Button
              variant="ghost"
              className="absolute top-[231px] left-[180px] h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent"
            >
              9
            </Button>

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_+_99px)] h-auto p-0 hover:bg-transparent"
            >
              <img
                className="w-[31px] h-[30px]"
                alt="Delete"
                src="https://c.animaapp.com/kp7cm7rf/img/ico-1.svg"
              />
            </Button>
          </div>
        </section>
      </main>

    </div>
  );
};
