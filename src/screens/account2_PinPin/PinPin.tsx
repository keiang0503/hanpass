import {
  ChevronLeftIcon,
  CircleIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
};

const pinIndicators = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadButtons = [
  { row: 0, keys: ["7", "5", "2"] },
  { row: 1, keys: ["1", "4", "6"] },
  { row: 2, keys: ["8", "0", "3"] },
];

export const PinPin = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="34892:269046"
    >
      <div className="flex w-[375px] h-[800px] relative flex-col items-start bg-white">
        <header className="flex flex-col items-start relative self-stretch w-full bg-white">
          <div className="flex flex-col h-6 items-start px-2.5 py-1 relative self-stretch w-full bg-white">
            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      {statusBarData.time.split(":")[0]}
                    </span>
                    <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </span>
                    <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      {statusBarData.time.split(":")[1]}
                    </span>
                  </div>
                </div>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.date}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] top-[-67240.00%] left-[-12438.89%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-4.png"
                  />
                  <img
                    className="h-[60.00%] top-[-67260.00%] left-[-12411.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-5.png"
                  />
                  <img
                    className="h-[80.00%] top-[-67280.00%] left-[-12383.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-5.png"
                  />
                  <img
                    className="h-full top-[-67300%] left-[-12355.56%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-3.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-57845.56%] left-[-14109.43%]"
                    alt="Bar"
                    src="/img/bar-1-5.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-57881.67%] left-[-14125.00%]"
                    alt="Bar"
                    src="/img/bar-2-6.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-57915.39%] left-[-14143.77%]"
                    alt="Bar"
                    src="/img/bar-3-6.png"
                  />
                </div>

                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </span>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-56075.00%] left-[-9695.84%]"
                    alt="Border"
                    src="/img/border-3.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-56041.67%] left-[-9604.17%]"
                    alt="Cap"
                    src="/img/cap-3.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full">
            <span className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              {statusBarData.time}
            </span>

            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/X2DaSZUE/img/icon---mobile-signal-7.svg"
            />

            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/X2DaSZUE/img/wifi-6.svg"
            />

            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/X2DaSZUE/img/battery-7.svg"
            />
          </div>

          <nav className="flex items-center justify-between px-5 py-4 relative self-stretch w-full">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </Button>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <MoreHorizontalIcon className="w-6 h-6 text-black" />
              </Button>
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <CircleIcon className="w-6 h-6 text-black" />
              </Button>
            </div>
          </nav>
        </header>

        <main className="flex flex-col items-center gap-[50px] px-6 py-0 relative self-stretch w-full flex-1">
          <div className="flex flex-col items-center gap-[26px] relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
              6자리 비밀번호를
              <br />
              입력해 주세요
            </h1>

            <div className="flex items-center gap-3 relative">
              {pinIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`w-[18px] h-[18px] rounded-full ${
                    indicator.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center gap-1 px-0 py-1.5"
          >
            <span className="font-body-14-m text-[#85888e] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] [font-style:var(--body-14-m-font-style)]">
              생체 정보 등록하기
            </span>
            <img
              className="w-4 h-4"
              alt="Ico next line"
              src="https://c.animaapp.com/X2DaSZUE/img/ico-16-next-line-01-3.svg"
            />
          </Button>
        </main>

        <footer className="flex flex-col items-start gap-6 relative self-stretch w-full">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 relative self-stretch w-full">
            <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="relative self-stretch w-full h-[292px] bg-[#0d56e4]">
            <div className="grid grid-cols-3 gap-0 w-full h-full p-8">
              {keypadButtons.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.keys.map((key, keyIndex) => (
                    <Button
                      key={`${rowIndex}-${keyIndex}`}
                      variant="ghost"
                      className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
                    >
                      <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
                        {key}
                      </span>
                    </Button>
                  ))}
                </React.Fragment>
              ))}

              <Button
                variant="ghost"
                className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
              >
                <RotateCcwIcon className="w-8 h-8 text-white" />
              </Button>

              <Button
                variant="ghost"
                className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
              >
                <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
                  9
                </span>
              </Button>

              <Button
                variant="ghost"
                className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
              >
                <XIcon className="w-8 h-8 text-white" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-[#0d56e4]">
            <div className="flex flex-col w-[134px] items-center gap-2.5">
              <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
