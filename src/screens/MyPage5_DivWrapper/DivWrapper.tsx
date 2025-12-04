import {
  CameraIcon,
  ChevronLeftIcon,
  CircleIcon,
  MoreVerticalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="36848:68869"
    >
      <header className="w-full max-w-[375px] flex flex-col bg-white">
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
                className="h-[40.00%] top-[-125060.00%] left-[-45183.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-8.png"
              />
              <img
                className="h-[60.00%] top-[-125080.00%] left-[-45155.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-9.png"
              />
              <img
                className="h-[80.00%] top-[-125100%] left-[-45127.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-9.png"
              />
              <img
                className="h-full top-[-125120.00%] left-[-45100%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-5.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-50946.93%]"
                alt="Bar"
                src="/img/bar-1-9.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-50962.50%]"
                alt="Bar"
                src="/img/bar-2-10.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-50981.27%]"
                alt="Bar"
                src="/img/bar-3-10.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-34254.17%]"
                alt="Border"
                src="/img/border-5.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-34162.50%]"
                alt="Cap"
                src="/img/cap-5.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full bg-white">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/KuxympCS/img/icon---mobile-signal-7.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/KuxympCS/img/wifi-7.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/KuxympCS/img/battery-7.svg"
          />
        </div>
      </header>

      <nav className="w-full max-w-[375px] bg-white">
        <div className="flex h-[54px] items-center justify-between px-5 py-0 bg-white">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <img
            className="h-8 w-[87px]"
            alt="Mini"
            src="https://c.animaapp.com/KuxympCS/img/mini-7@2x.png"
          />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreVerticalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <CircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <section className="w-full max-w-[375px] bg-white pt-[22px] px-6">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            신분증 관리
          </h1>
          <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            신분증 앞면 사진을 업로드 해주세요
          </p>
        </div>
      </section>

      <main className="flex flex-col flex-1 w-full max-w-[375px] gap-9 pt-[42px] pb-[30px] px-6">
        <div className="flex flex-col items-start gap-[22px] relative">
          <img
            className="absolute h-[calc(100%_-_54px)] top-7 left-[5px] w-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/KuxympCS/img/line-209-1.svg"
          />

          <Card className="w-full border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-5 px-4 py-3.5">
                <div className="flex w-[26px] h-[26px] items-center justify-center bg-[#0d56e4] rounded-full">
                  <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-[15.1px] tracking-[-0.30px] leading-[19.6px]">
                    1
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    신분증 앞면
                  </h3>
                </div>

                <CameraIcon className="w-[26px] h-[26px] text-[#0d56e4]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-1.5">
          <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
            신분증 번호 입력
          </Label>

          <div className="w-full">
            <Input
              placeholder="신분증 번호를 입력해 주세요"
              className="h-[42px] border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:border-[#0d56e4]"
            />
          </div>
        </div>
      </main>

      <footer className="w-full max-w-[375px] flex flex-col items-center px-6 bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <Button
            disabled
            className="w-full h-auto min-h-[54px] bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl shadow-[0px_-20px_20px_#ffffff] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] px-[26px] py-1.5"
          >
            확인
          </Button>
        </div>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
