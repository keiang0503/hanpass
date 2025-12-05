import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34892:262353"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-67240.00%] left-[-7161.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-10.png"
              />
              <img
                className="h-[60.00%] top-[-67260.00%] left-[-7133.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-11.png"
              />
              <img
                className="h-[80.00%] top-[-67280.00%] left-[-7105.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-11.png"
              />
              <img
                className="h-full top-[-67300%] left-[-7077.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-6.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-57845.56%] left-[-8171.93%]"
                alt="Bar"
                src="/img/bar-1-11.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-57881.67%] left-[-8187.50%]"
                alt="Bar"
                src="/img/bar-2-12.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-57915.39%] left-[-8206.27%]"
                alt="Bar"
                src="/img/bar-3-12.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-56075.00%] left-[-5737.50%]"
                alt="Border"
                src="/img/border-6.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-56041.67%] left-[-5645.83%]"
                alt="Cap"
                src="/img/cap-6.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/X2DaSZUE/img/icon---mobile-signal-7.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/X2DaSZUE/img/wifi-7.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/X2DaSZUE/img/battery-7.svg"
          />
        </div>

        <nav className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6 text-black" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="h-6 w-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <CircleIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col items-start bg-white w-full pt-[22px] pb-0 px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            <span className="text-[#0b0c0e]">
              계좌 실명 확인에 실패했습니다. <br />
              계좌등록을 위해{" "}
            </span>
            <span className="text-[#0d56e4]">
              신분증 정보를 다시 입력해 주세요.
            </span>
          </h1>
        </section>

        <section className="flex flex-col flex-1 items-start gap-9 pt-[42px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <Label
              htmlFor="foreign-registration-number"
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              외국인등록번호
            </Label>

            <div className="flex flex-col w-full">
              <Input
                id="foreign-registration-number"
                placeholder="외국인등록번호를 입력해 주세요"
                className="h-[42px] border-0 border-b border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <Label
              htmlFor="issue-date"
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              외국인등록번호 발급일
            </Label>

            <div className="flex flex-col w-full">
              <Input
                id="issue-date"
                placeholder="YYYY/MM/DD"
                className="h-[42px] border-0 border-b border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center px-6 py-0 w-full">
        <Button
          disabled
          className="min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] h-auto"
        >
          다음
        </Button>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
