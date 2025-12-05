import React from "react";

export const TransferDetailsSection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col items-start bg-white">
      <div className="w-full flex items-center justify-between px-2.5 py-1 bg-white">
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
              className="h-[40.00%] top-[-310.00%] left-[-17716.67%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-1-8.png"
            />
            <img
              className="h-[60.00%] top-[-330.00%] left-[-17688.89%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-2-9.png"
            />
            <img
              className="h-[80.00%] top-[-350.00%] left-[-17661.11%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-3-9.png"
            />
            <img
              className="h-full top-[-370.00%] left-[-17633.33%] absolute w-[16.67%]"
              alt="Bar"
              src="/img/bar-4-5.png"
            />
          </div>

          <div className="relative w-4 h-[11.62px] overflow-hidden">
            <img
              className="absolute w-[31.30%] h-[30.17%] top-[-241.64%] left-[-20046.93%]"
              alt="Bar"
              src="/img/bar-1-9.png"
            />
            <img
              className="absolute w-[62.57%] h-[34.44%] top-[-277.74%] left-[-20062.50%]"
              alt="Bar"
              src="/img/bar-2-10.png"
            />
            <img
              className="absolute w-[100.01%] h-[43.03%] top-[-311.47%] left-[-20081.27%]"
              alt="Bar"
              src="/img/bar-3-10.png"
            />
          </div>

          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
            100%
          </span>

          <div className="relative w-6 h-3 overflow-hidden">
            <img
              className="absolute w-[87.51%] h-full top-[-300%] left-[-13654.17%]"
              alt="Border"
              src="/img/border-5.png"
            />
            <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
            <img
              className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-13562.50%]"
              alt="Cap"
              src="/img/cap-5.png"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-[34px] py-4 w-full">
        <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
          9:41
        </span>

        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/Fk3yL3l2/img/icon---mobile-signal-7.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/Fk3yL3l2/img/wifi-6.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/Fk3yL3l2/img/battery-7.svg"
          />
        </div>
      </div>
    </header>
  );
};
