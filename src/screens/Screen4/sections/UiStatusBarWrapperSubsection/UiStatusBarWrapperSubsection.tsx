import React from "react";
import { Link } from "react-router-dom";

const androidStatusBarIcons = [
  {
    type: "signal",
    bars: [
      {
        src: "/img/bar-1-12.png",
        className: "h-[40.00%] top-[170.00%] left-[-6216.67%] w-[16.67%]",
      },
      {
        src: "/img/bar-2-13.png",
        className: "h-[60.00%] top-[150.00%] left-[-6188.89%] w-[16.67%]",
      },
      {
        src: "/img/bar-3-13.png",
        className: "h-[80.00%] top-[130.00%] left-[-6161.11%] w-[16.67%]",
      },
      {
        src: "/img/bar-4-7.png",
        className: "h-full top-[110.00%] left-[-6133.33%] w-[16.67%]",
      },
    ],
  },
  {
    type: "wifi",
    bars: [
      {
        src: "/img/bar-1-13.png",
        className: "w-[31.30%] h-[30.17%] top-[171.48%] left-[-7109.43%]",
      },
      {
        src: "/img/bar-2-14.png",
        className: "w-[62.57%] h-[34.44%] top-[135.37%] left-[-7125.00%]",
      },
      {
        src: "/img/bar-3-14.png",
        className: "w-[100.01%] h-[43.03%] top-[101.65%] left-[-7143.77%]",
      },
    ],
  },
];

const batteryElements = [
  {
    src: "/img/border-7.png",
    className: "w-[87.51%] h-full top-full left-[-5029.17%]",
  },
  {
    src: "/img/cap-7.png",
    className: "w-[8.33%] h-[33.33%] top-[133.33%] left-[-4937.50%]",
  },
];

export const UiStatusBarWrapperSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 bg-white"
      to="/mypageu95001u95u4354u4450-u4364u4453u4540u4359u4457-u4358u4454u4363u4469u45232"
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
              {androidStatusBarIcons[0].bars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={`absolute ${bar.className}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {androidStatusBarIcons[1].bars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.className}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              {batteryElements.map((element, index) => (
                <img
                  key={`battery-${index}`}
                  className={`absolute ${element.className}`}
                  alt={index === 0 ? "Border" : "Cap"}
                  src={element.src}
                />
              ))}
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
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
          src="https://c.animaapp.com/emBHvnWi/img/icon---mobile-signal-7.svg"
        />
        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/emBHvnWi/img/wifi-7.svg"
        />
        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/emBHvnWi/img/battery-7.svg"
        />
      </div>
    </Link>
  );
};
