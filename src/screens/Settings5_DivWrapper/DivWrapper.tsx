import { ChevronLeftIcon, MoreHorizontalIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const withdrawalReasons = [
  { id: 1, text: "아이디 변경", selected: false },
  { id: 2, text: "아이디 변경", selected: false },
  { id: 3, text: "다른 송금서비스 이용", selected: false },
  { id: 4, text: "서비스 불만족", selected: false },
  { id: 5, text: "환율 및 혜택 불만족", selected: false },
  { id: 6, text: "고객 응대 불만족", selected: false },
  { id: 7, text: "한패스 이용 불가 (한도 초과)", selected: false },
  { id: 8, text: "한패스 이용 불가 (해외 이민 등)", selected: false },
  { id: 9, text: "기타", selected: true },
];

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="35166:94904"
    >
      <header className="w-full flex flex-col items-start relative bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 relative w-full bg-white">
          <div className="inline-flex items-center gap-2 relative">
            <div className="inline-flex items-center gap-1 relative">
              <div className="inline-flex items-center relative">
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
          <div className="inline-flex items-center gap-1.5 relative">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-208140.00%] left-[-37122.22%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-2.png"
              />
              <img
                className="h-[60.00%] top-[-208160.00%] left-[-37094.44%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-3.png"
              />
              <img
                className="h-[80.00%] top-[-208180.00%] left-[-37066.67%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-3.png"
              />
              <img
                className="h-full top-[-208200%] left-[-37038.89%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-2.png"
              />
            </div>
            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-179112.45%] left-[-41878.18%]"
                alt="Bar"
                src="/img/bar-1-3.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-179148.56%] left-[-41893.75%]"
                alt="Bar"
                src="/img/bar-2-4.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-179182.28%] left-[-41912.52%]"
                alt="Bar"
                src="/img/bar-3-4.png"
              />
            </div>
            <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>
            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-28208.34%]"
                alt="Border"
                src="/img/border-2.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-28116.67%]"
                alt="Cap"
                src="/img/cap-2.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative w-full">
          <div className="relative flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="relative w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/d5CwqEvt/img/icon---mobile-signal-4.svg"
          />
          <img
            className="relative w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/d5CwqEvt/img/wifi-4.svg"
          />
          <img
            className="relative w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/d5CwqEvt/img/battery-4.svg"
          />
        </div>

        <nav className="flex items-center justify-between px-5 py-4 relative w-full bg-white">
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <TargetIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-end gap-3.5 pt-[42px] pb-6 px-6 relative flex-1 w-full">
        {withdrawalReasons.map((reason) => (
          <Button
            key={reason.id}
            variant="outline"
            className={`h-auto min-h-[54px] w-full px-4 py-4 rounded-lg ${
              reason.selected
                ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                : "border border-[#dfe3ec]"
            }`}
          >
            <span
              className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                reason.selected ? "text-[#0d56e4]" : "text-[#5e616b]"
              }`}
            >
              {reason.text}
            </span>
          </Button>
        ))}

        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col items-start relative w-full">
              <Input
                placeholder="탈퇴 이유를 작성해주세요."
                className="h-[42px] w-full border-0 border-b border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col justify-end px-6 py-0 relative w-full">
        <Button
          disabled
          className="h-auto min-h-[54px] w-full rounded-xl bg-[#b7ccf7] hover:bg-[#b7ccf7] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
        >
          탈퇴하기
        </Button>

        <div className="relative w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
