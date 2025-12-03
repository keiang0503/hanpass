import { InfoIcon, MoreVerticalIcon, PlusIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const AccountWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34978:52371"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  9
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  :
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  41
                </div>
              </div>
            </div>
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              100%
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
            src="https://c.animaapp.com/ELrb3VWQ/img/icon---mobile-signal-6.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/ELrb3VWQ/img/wifi-6.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/ELrb3VWQ/img/battery-6.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full bg-white">
        <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/ELrb3VWQ/img/wechat-hd-3.svg"
            />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreVerticalIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <TargetIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-start w-full">
        <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
          <h1 className="flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
            계좌관리
          </h1>

          <Button
            variant="outline"
            className="h-auto gap-1 px-2 py-1.5 bg-white rounded border border-solid border-[#0d56e4] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]"
          >
            주계좌 설정
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-start gap-2.5 pt-1.5 pb-[22px] px-6 w-full">
        <div className="flex min-h-[52px] items-center gap-1 pl-4 pr-3 py-3 w-full bg-[#f4f7fd] rounded-xl border border-solid border-[#e9f1ff]">
          <div className="flex flex-wrap items-center gap-1 flex-1">
            <span className="flex-1 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#0b0c0e] tracking-[-0.28px] leading-[18.2px] text-sm">
              계좌내역조회 무료제공 횟수
            </span>
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0d56e4] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)] whitespace-nowrap">
              8회
            </span>
          </div>

          <InfoIcon className="w-5 h-5 text-[#0d56e4]" />
        </div>
      </section>

      <main className="flex flex-col items-start gap-2.5 flex-1 w-full px-6">
        <Card className="w-full h-[100px] bg-white rounded-xl border border-solid border-[#dfe3ec]">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d56e4]">
              <PlusIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0b0c0e] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              계좌등록
            </span>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col px-6 py-0 w-full items-center justify-end">
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
