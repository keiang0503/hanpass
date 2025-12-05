import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const LoginScreen = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] relative flex items-center justify-center bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%)]"
      data-model-id="40000008:1156158"
    >
      <header className="absolute top-0 left-0 w-full flex flex-col">
        <div className="w-full bg-white flex flex-col">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
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
                  className="h-[40.00%] top-[-32540.00%] left-[-20355.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-12.png"
                />
                <img
                  className="h-[60.00%] top-[-32560.00%] left-[-20327.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-13.png"
                />
                <img
                  className="h-[80.00%] top-[-32580.00%] left-[-20300%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-13.png"
                />
                <img
                  className="h-full top-[-32600%] left-[-20272.22%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-7.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-27980.68%] left-[-23015.68%]"
                  alt="Bar"
                  src="/img/bar-1-13.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-28016.79%] left-[-23031.25%]"
                  alt="Bar"
                  src="/img/bar-2-14.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-28050.51%] left-[-23050.02%]"
                  alt="Bar"
                  src="/img/bar-3-14.png"
                />
              </div>

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-27158.33%] left-[-15633.34%]"
                  alt="Border"
                  src="/img/border-7.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-27125.00%] left-[-15541.67%]"
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
            src="https://c.animaapp.com/ELrb3VWQ/img/icon---mobile-signal-7.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/ELrb3VWQ/img/wifi-5.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/ELrb3VWQ/img/battery-5.svg"
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/ELrb3VWQ/img/mini-7@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      <Card className="w-full max-w-[432px] mx-6 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29]">
        <CardContent className="p-0">
          <div className="flex flex-col items-center pt-8 pb-9 px-[22px] gap-2.5">
            <h1 className="w-full font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              사진 확인
            </h1>

            <p className="w-full font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              촬영하신 사진을 확인해주세요.
            </p>

            <div className="flex flex-col items-start gap-6 pt-[18px] pb-0 px-0 w-full rounded-xl">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[152px] bg-[#393939] rounded-[20px]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex items-start gap-[7px] flex-1">
              <Button
                variant="secondary"
                className="w-[100px] h-12 bg-[#afb4ca] hover:bg-[#9fa4ba] rounded-[14px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]"
              >
                재시도
              </Button>

              <Button className="flex-1 h-12 bg-[#0d56e4] hover:bg-[#0c4dc8] rounded-[14px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                확인
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
