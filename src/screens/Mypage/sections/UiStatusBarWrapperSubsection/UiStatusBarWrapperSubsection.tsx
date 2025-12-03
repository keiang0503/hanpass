import React from "react";

export const UiStatusBarWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-start gap-2.5 bg-white">
      <div className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
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
                className="absolute h-[40.00%] w-[16.67%] top-0 left-0"
                alt="Bar"
                src="/img/bar-1.png"
              />
              <img
                className="absolute h-[60.00%] w-[16.67%] top-0 left-[27.78%]"
                alt="Bar"
                src="/img/bar-2.png"
              />
              <img
                className="absolute h-[80.00%] w-[16.67%] top-0 left-[55.56%]"
                alt="Bar"
                src="/img/bar-3.png"
              />
              <img
                className="absolute h-full w-[16.67%] top-0 left-[83.33%]"
                alt="Bar"
                src="/img/bar-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-0 left-0"
                alt="Bar"
                src="/img/image.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-0 left-[18.75%]"
                alt="Bar"
                src="/img/bar-2-2.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-0 left-0"
                alt="Bar"
                src="/img/bar-3-2.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-0 left-0"
                alt="Border"
                src="/img/border.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[33.33%] right-0"
                alt="Cap"
                src="/img/cap.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full overflow-hidden">
        <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          9:41
        </div>

        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="/img/mobile-signal.png"
        />

        <img className="w-[17px] h-[11.83px]" alt="Wifi" src="/img/wifi.png" />

        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="/img/battery.png"
        />
      </div>
    </section>
  );
};
