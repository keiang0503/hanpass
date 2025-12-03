import {
  ChevronLeftIcon,
  CircleIcon,
  InfoIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const noticeItems = [
  "인증번호는 3분 이내로 입력하세요.",
  "인증번호가 도착하지 않을 경우 인증번호 재전송을 눌러주세요",
  "인증문의 : KCB 고객센터 (02-708-1000)",
];

export const AuthCodeInput = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="35202:92057"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] w-fit">
                    :
                  </div>
                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-12.png"
                />
                <img
                  className="h-[60.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-13.png"
                />
                <img
                  className="h-[80.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-13.png"
                />
                <img
                  className="h-full absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-7.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%]"
                  alt="Bar"
                  src="/img/bar-1-13.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%]"
                  alt="Bar"
                  src="/img/bar-2-14.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%]"
                  alt="Bar"
                  src="/img/bar-3-14.png"
                />
              </div>
              <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full"
                  alt="Border"
                  src="/img/border-7.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%]"
                  alt="Cap"
                  src="/img/cap-7.png"
                />
              </div>
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
            src="https://c.animaapp.com/sCCrT5uL/img/icon---mobile-signal-7.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/sCCrT5uL/img/wifi-7.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/sCCrT5uL/img/battery-7.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <ChevronLeftIcon className="w-8 h-8" />
              </Button>
            </div>
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

      <main className="flex-col items-start w-full bg-white flex">
        <div className="flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full flex">
          <div className="flex flex-col items-start w-full">
            <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              본인인증을 위한 정보를
              <br />
              입력해 주세요
            </h1>
          </div>
        </div>
      </main>

      <section className="flex items-start gap-2.5 pt-[42px] pb-[30px] px-6 flex-1 w-full grow">
        <div className="flex-col items-start gap-1.5 flex-1 grow flex">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="w-fit font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    인증번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex-1 w-full grow flex items-center">
                    <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 grow flex items-center">
                      <div className="flex items-center flex-1 grow">
                        <div className="flex items-center gap-2 flex-1 grow">
                          <Input
                            type="text"
                            placeholder="숫자 6자리 입력"
                            className="flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#dfe3ec] rounded-none focus-visible:ring-0 focus-visible:border-[#003fbb] px-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap w-fit [font-style:var(--caption-title-13-r-font-style)]">
                      02:49
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col items-end gap-2.5 w-full flex">
            <div className="flex flex-col items-start w-full">
              <div className="justify-end gap-2.5 w-full flex items-center">
                <div className="flex items-center justify-end flex-1 grow">
                  <Button
                    variant="link"
                    className="h-auto p-0 font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]"
                  >
                    다시받기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="gap-0.5 w-full flex items-center">
            <InfoIcon className="w-5 h-5 text-[#757b88]" />
            <div className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap w-fit [font-style:var(--body-14-b-font-style)]">
              안내사항
            </div>
          </div>

          <div className="flex-col gap-2 flex items-start w-full">
            {noticeItems.map((item, index) => (
              <div
                key={`notice-${index}`}
                className="gap-[5px] flex items-start w-full"
              >
                <div className="w-2 h-3.5">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff] flex">
            <Button
              disabled
              className="h-auto min-h-[54px] flex-1 bg-[#b7ccf7] hover:bg-[#b7ccf7] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] rounded-xl px-[26px] py-1.5"
            >
              인증하기
            </Button>
          </div>
        </div>

        <div className="w-full h-4 z-0" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-1] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
