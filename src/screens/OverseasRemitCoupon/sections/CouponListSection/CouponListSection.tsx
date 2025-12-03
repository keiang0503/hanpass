import { ChevronLeftIcon, FilterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const CouponListSection = (): JSX.Element => {
  return (
    <header className="flex flex-col items-start w-full">
      <div className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full max-w-[360px] flex flex-col items-start gap-2.5 bg-white">
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
                  className="h-[40.00%] top-[-310.00%] left-[-14533.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-2.png"
                />
                <img
                  className="h-[60.00%] top-[-330.00%] left-[-14505.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-3.png"
                />
                <img
                  className="h-[80.00%] top-[-350.00%] left-[-14477.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-3.png"
                />
                <img
                  className="h-full top-[-370.00%] left-[-14450.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-2.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-241.64%] left-[-16466.93%]"
                  alt="Bar"
                  src="/img/bar-1-3.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-277.74%] left-[-16482.50%]"
                  alt="Bar"
                  src="/img/bar-2-4.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-311.47%] left-[-16501.26%]"
                  alt="Bar"
                  src="/img/bar-3-4.png"
                />
              </div>

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-300%] left-[-11258.33%]"
                  alt="Border"
                  src="/img/border-2.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-11166.67%]"
                  alt="Cap"
                  src="/img/cap-2.png"
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

      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <FilterIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
