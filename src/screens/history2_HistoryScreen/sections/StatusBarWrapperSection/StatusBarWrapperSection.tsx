import React from "react";

export const StatusBarWrapperSection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col items-start bg-white">
      <div className="w-full flex items-center justify-between px-2.5 py-1 h-6 bg-white">
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex items-center gap-1">
            <div className="inline-flex items-center">
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                9
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                :
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                41
              </span>
            </div>
          </div>
          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
            Sat Jun 11
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5">
          <div className="relative w-[18px] h-2.5">
            <img
              className="h-[40.00%] top-[-39550.00%] left-[-45427.78%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-1-10.png"
            />
            <img
              className="h-[60.00%] top-[-39570.00%] left-[-45400%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-2-11.png"
            />
            <img
              className="h-[80.00%] top-[-39590.00%] left-[-45372.22%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-3-11.png"
            />
            <img
              className="h-full top-[-39610.00%] left-[-45344.44%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-4-6.png"
            />
          </div>

          <div className="relative w-4 h-[11.62px] overflow-hidden">
            <img
              className="absolute w-[31.30%] h-[30.17%] top-[-34013.91%] left-[-51221.93%]"
              alt="Bar"
              src="/img/bar-1-11.png"
            />
            <img
              className="absolute w-[62.57%] h-[34.44%] top-[-34050.01%] left-[-51237.50%]"
              alt="Bar"
              src="/img/bar-2-12.png"
            />
            <img
              className="absolute w-[100.01%] h-[43.03%] top-[-34083.73%] left-[-51256.27%]"
              alt="Bar"
              src="/img/bar-3-12.png"
            />
          </div>

          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
            100%
          </span>

          <div className="relative w-6 h-3 overflow-hidden">
            <img
              className="absolute w-[87.51%] h-full top-[-33000%] left-[-34437.50%]"
              alt="Border"
              src="/img/border-6.png"
            />
            <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
            <img
              className="absolute w-[8.33%] h-[33.33%] top-[-32966.67%] left-[-34345.83%]"
              alt="Cap"
              src="/img/cap-6.png"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pl-[34px] pr-5 py-4 w-full">
        <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
          9:41
        </span>

        <div className="inline-flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/yNx7OGE7/img/icon---mobile-signal-6.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/yNx7OGE7/img/wifi-6.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/yNx7OGE7/img/battery-6.svg"
          />
        </div>
      </div>
    </header>
  );
};
