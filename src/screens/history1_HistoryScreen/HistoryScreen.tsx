import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export const HistoryScreen = (): JSX.Element => {
  const statusBarSignalBars = [
    { height: "h-[40.00%]", top: "top-[60%]", left: "left-0" },
    { height: "h-[60.00%]", top: "top-[40%]", left: "left-[27.78%]" },
    { height: "h-[80.00%]", top: "top-[20%]", left: "left-[55.56%]" },
    { height: "h-full", top: "top-0", left: "left-[83.33%]" },
  ];

  const wifiBars = [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[69.83%]",
      left: "left-0",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[65.56%]",
      left: "left-[15.63%]",
    },
    {
      width: "w-full",
      height: "h-[43.03%]",
      top: "top-[56.97%]",
      left: "left-[37.50%]",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-[#f7f7f8]"
      data-model-id="34892:276594"
    >
      <header className="w-full bg-white">
        <div className="flex items-center justify-between px-2.5 py-1 h-6 bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  9
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  :
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  41
                </span>
              </div>
            </div>
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              Sat Jun 11
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              {statusBarSignalBars.map((bar, index) => (
                <div
                  key={`signal-bar-${index}`}
                  className={`absolute ${bar.height} ${bar.top} ${bar.left} w-[16.67%] bg-black`}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {wifiBars.map((bar, index) => (
                <div
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left} bg-black`}
                />
              ))}
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <div className="absolute w-[87.51%] h-full top-0 left-0 border border-black rounded-sm" />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <div className="absolute w-[8.33%] h-[33.33%] top-[33.33%] left-[91.67%] bg-black rounded-r-sm" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4">
          <span className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
            9:41
          </span>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/u8GhiXiH/img/icon---mobile-signal-1.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/u8GhiXiH/img/wifi-1.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/u8GhiXiH/img/battery-1.svg"
          />
        </div>
      </header>

      <div className="flex flex-col bg-white">
        <div className="flex items-center justify-between h-[54px] px-5 bg-white">
          <img
            className="w-8 h-8"
            alt="Wechat hd"
            src="https://c.animaapp.com/u8GhiXiH/img/wechat-hd-1.svg"
          />

          <img
            className="w-[87px] h-8"
            alt="Mini"
            src="https://c.animaapp.com/u8GhiXiH/img/mini-6@2x.png"
          />
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div className="flex flex-col pt-[22px] px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            해외송금 내역
          </h1>
        </div>

        <nav className="flex justify-between items-center px-6 py-[18px] border-b border-[#dfe3ec] mt-[22px]">
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <div className="flex items-center gap-4">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              2024.10
            </span>
          </div>

          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </nav>

        <div className="flex justify-end items-center gap-2 pt-5 pb-3 px-6">
          <Button variant="ghost" className="h-auto p-0 gap-1">
            <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
              최신순
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <main className="flex flex-col flex-1 px-6">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-6 py-14">
            <img
              className="w-12 h-12"
              alt="Empty"
              src="https://c.animaapp.com/u8GhiXiH/img/ico48-empty.svg"
            />

            <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              내역이 없습니다.
            </p>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center px-6">
        <div className="flex items-center justify-center py-2 w-full">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
