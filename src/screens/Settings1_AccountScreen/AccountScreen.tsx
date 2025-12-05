import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const AccountScreen = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex items-center justify-center bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%)]"
      data-model-id="36848:78592"
    >
      <div className="flex flex-col w-[375px] h-[800px] relative">
        <header className="flex flex-col w-full items-start absolute top-0 left-0 z-10">
          <div className="w-full bg-white flex flex-col items-start">
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
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] absolute w-[16.67%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-1-12.png"
                  />
                  <img
                    className="h-[60.00%] absolute w-[16.67%] top-0 left-[22.22%]"
                    alt="Bar"
                    src="/img/bar-2-13.png"
                  />
                  <img
                    className="h-[80.00%] absolute w-[16.67%] top-0 left-[44.44%]"
                    alt="Bar"
                    src="/img/bar-3-13.png"
                  />
                  <img
                    className="h-full absolute w-[16.67%] top-0 left-[66.67%]"
                    alt="Bar"
                    src="/img/bar-4-7.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-1-13.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-2-14.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-3-14.png"
                  />
                </div>

                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-0 left-0"
                    alt="Border"
                    src="/img/border-7.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-0 right-0"
                    alt="Cap"
                    src="/img/cap-7.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>

            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/w2kCT5wM/img/icon---mobile-signal-2.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/w2kCT5wM/img/wifi-2.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/w2kCT5wM/img/battery-2.svg"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full relative">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/w2kCT5wM/img/mini-7@2x.png"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex items-center justify-center px-6 flex-1">
          <Card className="flex flex-col max-w-[432px] w-full bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29]">
            <CardContent className="items-center pt-8 pb-9 px-[22px] flex flex-col gap-2.5">
              <h1 className="self-stretch font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                사진 확인
              </h1>

              <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                촬영하신 사진을 확인해주세요.
              </p>

              <div className="flex flex-col items-start gap-6 pt-[18px] pb-0 px-0 self-stretch w-full rounded-xl">
                <div className="items-start flex flex-col gap-2.5 self-stretch w-full">
                  <div className="self-stretch w-full h-[152px] bg-[#393939] rounded-[20px]" />
                </div>
              </div>
            </CardContent>

            <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
              <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
                <Button
                  variant="secondary"
                  className="w-[100px] h-auto px-2 py-1 bg-[#afb4ca] min-h-12 rounded-[14px] hover:bg-[#9fa4ba]"
                >
                  <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                    재시도
                  </span>
                </Button>

                <Button className="h-auto px-[26px] py-1.5 flex-1 bg-[#0d56e4] min-h-12 rounded-[14px] hover:bg-[#0c4dc8]">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    확인
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};
