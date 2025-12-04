import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";

export const MypageBs = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-w-[375px] min-h-[800px] flex flex-col"
      data-model-id="34894:25230"
    >
      <header className="flex flex-col w-full">
        <Link
          className="w-full flex flex-col items-start gap-2.5"
          to="/mypageu95109u95u4361u4469u4523u4359u4462u4523u4364u4467u4540-u4366u4458u4527u4363u4455u4540-u4364u4462u4523u4359u44692"
        >
          <div className="w-full bg-white flex flex-col items-start gap-2.5">
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
                    className="h-[40.00%] top-[-125060.00%] left-[-41966.67%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-12.png"
                  />
                  <img
                    className="h-[60.00%] top-[-125080.00%] left-[-41938.89%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-13.png"
                  />
                  <img
                    className="h-[80.00%] top-[-125100%] left-[-41911.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-13.png"
                  />
                  <img
                    className="h-full top-[-125120.00%] left-[-41883.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-7.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-47328.18%]"
                    alt="Bar"
                    src="/img/bar-1-13.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-47343.75%]"
                    alt="Bar"
                    src="/img/bar-2-14.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-47362.52%]"
                    alt="Bar"
                    src="/img/bar-3-14.png"
                  />
                </div>

                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </span>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-31841.67%]"
                    alt="Border"
                    src="/img/border-7.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-31750.00%]"
                    alt="Cap"
                    src="/img/cap-7.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <span className="flex-1 h-5 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </span>

            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/KuxympCS/img/icon---mobile-signal-1.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/KuxympCS/img/wifi-1.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/KuxympCS/img/battery-1.svg"
            />
          </div>
        </Link>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/KuxympCS/img/mini-7@2x.png"
              />
              <Switch className="absolute right-5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-end">
        <section className="w-full flex flex-col bg-white rounded-t-[30px]">
          <div className="gap-1.5 pt-0 pb-3.5 px-6 flex flex-col items-center w-full">
            <div className="flex-col w-full flex items-start">
              <div className="flex flex-col items-end w-full">
                <div className="w-full h-[22px]" />
              </div>
            </div>

            <div className="relative w-full">
              <img
                className="w-full aspect-[1.96]"
                alt="OS Picker Interface"
                src="https://c.animaapp.com/KuxympCS/img/-----------2025-11-19------3-36-27-2@2x.png"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#f10000] text-[length:var(--title-18-SB-font-size)] text-center tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] whitespace-nowrap [font-style:var(--title-18-SB-font-style)]">
                OS Picker
              </div>
            </div>
          </div>

          <div className="justify-end px-6 py-0 flex flex-col items-center w-full bg-white">
            <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl">
              <div className="min-h-[54px] flex-1 flex items-start">
                <Button className="flex min-h-[54px] h-auto items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    선택해주세요
                  </span>
                </Button>
              </div>
            </div>

            <div className="w-full h-4" />

            <div className="flex flex-col w-full items-center gap-2.5 px-[105px] py-2 bg-white">
              <div className="w-[134px] items-center gap-2.5 flex flex-col">
                <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
