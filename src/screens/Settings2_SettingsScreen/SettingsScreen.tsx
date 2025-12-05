import {
  ChevronDownIcon,
  ChevronLeftIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const SettingsScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79128"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </span>
              </div>
            </div>
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-169820.00%] left-[-27327.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-2.png"
              />
              <img
                className="h-[60.00%] top-[-169840.00%] left-[-27300%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-3.png"
              />
              <img
                className="h-[80.00%] top-[-169860.00%] left-[-27272.22%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-3.png"
              />
              <img
                className="h-full top-[-169880.00%] left-[-27244.44%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-2.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-30859.43%]"
                alt="Bar"
                src="/img/bar-1-3.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-30875.00%]"
                alt="Bar"
                src="/img/bar-2-4.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-30893.77%]"
                alt="Bar"
                src="/img/bar-3-4.png"
              />
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-20862.50%]"
                alt="Border"
                src="/img/border-2.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-20770.83%]"
                alt="Cap"
                src="/img/cap-2.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-4 w-full">
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
        </div>

        <div className="flex items-center justify-between px-5 py-0 w-full bg-white">
          <div className="flex items-center">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/kp7cm7rf/img/wechat-hd-5.svg"
            />
          </div>
          <img
            className="h-8"
            alt="Mini"
            src="https://c.animaapp.com/kp7cm7rf/img/mini-6@2x.png"
          />
        </div>
      </header>

      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            휴대폰 번호를 입력해주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 gap-9 pt-[42px] pb-6 px-6 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              국가번호
            </Label>

            <div className="flex flex-col w-full">
              <button className="flex items-center w-full h-[42px] border-b-2 border-[#4c67f1] bg-transparent">
                <div className="inline-flex items-center gap-2.5 pl-0 pr-1 py-0">
                  <div className="w-[30px] h-[30px] bg-[url(https://c.animaapp.com/kp7cm7rf/img/country.svg)] bg-[100%_100%]" />
                </div>

                <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                      대한민국
                    </span>
                    <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                      KR +82
                    </span>
                  </div>
                </div>

                <ChevronDownIcon className="w-[15px] h-[9px] text-black" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              휴대폰번호
            </Label>

            <div className="flex flex-col w-full">
              <div className="flex items-center w-full h-[42px] border-b border-[#dfe3ec]">
                <Input
                  type="tel"
                  placeholder="숫자만 입력하세요"
                  className="flex-1 border-0 bg-transparent px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center pt-6 pb-0 px-6 w-full">
        <Button
          disabled
          className="w-full min-h-[54px] bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl h-auto"
        >
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            인증번호 요청
          </span>
        </Button>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
