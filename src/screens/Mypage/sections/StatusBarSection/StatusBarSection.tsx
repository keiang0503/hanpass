import React from "react";
import { Link } from "react-router-dom";

export const StatusBarSection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start relative bg-white"
      to="/mypageu95021u95u4366u4469u4523u4352u4462u4366u4457u4355u44502"
    >
      <div className="w-full flex flex-col items-start bg-white">
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
                className="h-[40.00%] top-[-63850.00%] left-[-22911.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1.png"
              />
              <img
                className="h-[60.00%] top-[-63870.00%] left-[-22883.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2.png"
              />
              <img
                className="h-[80.00%] top-[-63890.00%] left-[-22855.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3.png"
              />
              <img
                className="h-full top-[-63910.00%] left-[-22827.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-54927.93%] left-[-25890.68%]"
                alt="Bar"
                src="/img/image.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-54964.03%] left-[-25906.25%]"
                alt="Bar"
                src="/img/bar-2-2.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-54997.75%] left-[-25925.02%]"
                alt="Bar"
                src="/img/bar-3-2.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-53250.00%] left-[-17550.00%]"
                alt="Border"
                src="/img/border.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-53216.67%] left-[-17458.33%]"
                alt="Cap"
                src="/img/cap.png"
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
          src="https://c.animaapp.com/pWVLYNoL/img/icon---mobile-signal-6.svg"
        />
        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/pWVLYNoL/img/wifi-6.svg"
        />
        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/pWVLYNoL/img/battery-6.svg"
        />
      </div>
    </Link>
  );
};
