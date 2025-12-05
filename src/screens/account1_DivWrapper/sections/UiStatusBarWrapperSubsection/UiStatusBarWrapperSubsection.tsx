import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBarWrapperSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 bg-white"
      to="/loginu95005-u4361u4454u4527u4367u4449u4366u4458u4527u4363u4455u4540"
    >
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
                className="h-[40.00%] top-[-32540.00%] left-[-15083.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-4.png"
              />
              <img
                className="h-[60.00%] top-[-32560.00%] left-[-15055.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-5.png"
              />
              <img
                className="h-[80.00%] top-[-32580.00%] left-[-15027.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-5.png"
              />
              <img
                className="h-full top-[-32600%] left-[-15000%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-3.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-27980.68%] left-[-17084.43%]"
                alt="Bar"
                src="/img/bar-1-5.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-28016.79%] left-[-17100.00%]"
                alt="Bar"
                src="/img/bar-2-6.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-28050.51%] left-[-17118.77%]"
                alt="Bar"
                src="/img/bar-3-6.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-27158.33%] left-[-11679.17%]"
                alt="Border"
                src="/img/border-3.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-27125.00%] left-[-11587.50%]"
                alt="Cap"
                src="/img/cap-3.png"
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
    </Link>
  );
};
