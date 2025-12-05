import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBarSubsection = (): JSX.Element => {
  const cellularBars = [
    {
      className: "h-[40.00%] top-[-102560.00%] left-[-15077.78%] w-[16.67%]",
      src: "/img/bar-1-8.png",
      alt: "Bar",
    },
    {
      className: "h-[60.00%] top-[-102580.00%] left-[-15050.00%] w-[16.67%]",
      src: "/img/bar-2-9.png",
      alt: "Bar",
    },
    {
      className: "h-[80.00%] top-[-102600%] left-[-15022.22%] w-[16.67%]",
      src: "/img/bar-3-9.png",
      alt: "Bar",
    },
    {
      className: "h-full top-[-102620.00%] left-[-14994.44%] w-[16.67%]",
      src: "/img/bar-4-5.png",
      alt: "Bar",
    },
  ];

  const wifiBars = [
    {
      className: "w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-17078.18%]",
      src: "/img/bar-1-9.png",
      alt: "Bar",
    },
    {
      className: "w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-17093.75%]",
      src: "/img/bar-2-10.png",
      alt: "Bar",
    },
    {
      className: "w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-17112.52%]",
      src: "/img/bar-3-10.png",
      alt: "Bar",
    },
  ];

  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 bg-white"
      to="/signupu95004-u4363u4451u4520u4352u4458u4523u4355u4457u4540u4363u4468-u4361u4449u4540u4361u4454"
    >
      <div className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>
                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>
                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>
            <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              {cellularBars.map((bar, index) => (
                <img
                  key={`cellular-bar-${index}`}
                  className={`absolute ${bar.className}`}
                  alt={bar.alt}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.className}`}
                  alt={bar.alt}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-11675.00%]"
                alt="Border"
                src="/img/border-5.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-11583.33%]"
                alt="Cap"
                src="/img/cap-5.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <div className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          9:41
        </div>
        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/sCCrT5uL/img/icon---mobile-signal-7.svg"
        />
        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/sCCrT5uL/img/wifi-7.svg"
        />
        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/sCCrT5uL/img/battery-7.svg"
        />
      </div>
    </Link>
  );
};
