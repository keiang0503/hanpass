import {
  ChevronLeftIcon,
  CircleIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
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
  [
    { value: "7", position: "top-[33px] left-14" },
    { value: "5", position: "top-[33px] left-[180px]" },
    { value: "2", position: "top-[33px] left-[306px]" },
  ],
  [
    { value: "1", position: "top-[99px] left-[57px]" },
    { value: "4", position: "top-[99px] left-[180px]" },
    { value: "6", position: "top-[99px] left-[305px]" },
  ],
  [
    { value: "8", position: "top-[165px] left-[55px]" },
    { value: "0", position: "top-[165px] left-[180px]" },
    { value: "3", position: "top-[165px] left-[305px]" },
  ],
];

export const PinPinScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="40000016:2572120"
    >
      <header className="flex flex-col items-start self-stretch w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>
                <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>
                <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>
            <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-169820.00%] left-[-36661.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-12.png"
              />
              <img
                className="h-[60.00%] top-[-169840.00%] left-[-36633.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-13.png"
              />
              <img
                className="h-[80.00%] top-[-169860.00%] left-[-36605.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-13.png"
              />
              <img
                className="h-full top-[-169880.00%] left-[-36577.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-7.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-41359.43%]"
                alt="Bar"
                src="/img/bar-1-13.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-41375.00%]"
                alt="Bar"
                src="/img/bar-2-14.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-41393.77%]"
                alt="Bar"
                src="/img/bar-3-14.png"
              />
            </div>

            <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-27862.50%]"
                alt="Border"
                src="/img/border-7.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-27770.83%]"
                alt="Cap"
                src="/img/cap-7.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-4 relative self-stretch w-full">
          <Button variant="ghost" size="icon" className="h-auto p-0" asChild>
            <Link to="/pinu95004-pin-u4359u4469u4358u4469u4527u4359u4453u4523u4370u4457-u4363u4469u4536u4357u4455u4520">
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <CircleIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex items-center px-5 py-0 relative self-stretch w-full">
          <img
            className="w-8 h-8"
            alt="Wechat hd"
            src="https://c.animaapp.com/kp7cm7rf/img/wechat-hd-5.svg"
          />
          <img
            className="ml-auto w-[87px] h-8"
            alt="Mini"
            src="https://c.animaapp.com/kp7cm7rf/img/mini-6@2x.png"
          />
        </div>
      </header>

      <main className="flex flex-col flex-1 items-center gap-[50px] px-6 py-0 self-stretch w-full">
        <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
          <div className="flex flex-col items-center gap-[50px] relative self-stretch w-full">
            <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
              <h1 className="relative flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                6자리 비밀번호를
                <br />
                입력해 주세요
              </h1>

              <div className="flex items-center justify-center gap-3 w-[198px]">
                {pinDots.map((dot, index) => (
                  <div
                    key={`pin-dot-${index}`}
                    className={`w-6 h-6 rounded-full ${
                      dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-start gap-6 self-stretch w-full">
        <div className="flex items-center justify-center px-6 py-0 self-stretch w-full">
          <p className="relative flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
            입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
            국내송금, 월렛 충전 등)
          </p>
        </div>

        <div className="relative self-stretch w-full h-[292px]">
          <div className="absolute top-0 left-0 w-full h-[292px] bg-[#0d56e4]" />

          {keypadNumbers.map((row, rowIndex) =>
            row.map((number, colIndex) => (
              <Button
                key={`keypad-${rowIndex}-${colIndex}`}
                variant="ghost"
                className={`absolute ${number.position} h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent`}
              >
                {number.value}
              </Button>
            )),
          )}

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_-_151px)] h-auto p-0 hover:bg-transparent"
          >
            <RotateCcwIcon className="w-[31px] h-[30px] text-white" />
          </Button>

          <Button
            variant="ghost"
            className="absolute top-[231px] left-[180px] h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent"
          >
            9
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_+_99px)] h-auto p-0 hover:bg-transparent"
          >
            <XIcon className="w-[31px] h-[30px] text-white" />
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-[#0d56e4]">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
