import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBarWrapperSubsection = (): JSX.Element => {
  const cellularBars = [
    {
      height: "h-[40.00%]",
      top: "top-[170.00%]",
      left: "left-[-35605.56%]",
      width: "w-[16.67%]",
      src: "/img/bar-1-2.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[150.00%]",
      left: "left-[-35577.78%]",
      width: "w-[16.67%]",
      src: "/img/bar-2-3.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[130.00%]",
      left: "left-[-35550.00%]",
      width: "w-[16.67%]",
      src: "/img/bar-3-3.png",
    },
    {
      height: "h-full",
      top: "top-[110.00%]",
      left: "left-[-35522.22%]",
      width: "w-[16.67%]",
      src: "/img/bar-4-2.png",
    },
  ];

  const wifiBars = [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[171.48%]",
      left: "left-[-40171.93%]",
      src: "/img/bar-1-3.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[135.37%]",
      left: "left-[-40187.50%]",
      src: "/img/bar-2-4.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[101.65%]",
      left: "left-[-40206.27%]",
      src: "/img/bar-3-4.png",
    },
  ];

  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 self-stretch bg-white"
      to="/overseasremitu95016-u4370u4450u4363u4460u4361u4457u4540u4352u4467u4535-u4352u4457u4540u4364u4469-u4363u4449u4523u4354u4450"
    >
      <div className="w-full flex flex-col items-start gap-2.5 self-stretch bg-white">
        <header className="flex h-6 items-center justify-between px-2.5 py-1 self-stretch w-full bg-white">
          <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
            <time className="inline-flex items-center gap-1">
              <span className="inline-flex items-center">
                <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] mt-[-1.00px]">
                  :
                </span>
                <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </span>
              </span>
            </time>

            <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 mt-[-0.50px] mb-[-0.50px]">
            <div className="relative w-[18px] h-2.5">
              {cellularBars.map((bar, index) => (
                <img
                  key={`cellular-bar-${index}`}
                  className={`absolute ${bar.height} ${bar.top} ${bar.left} ${bar.width}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-full left-[-27070.84%]"
                alt="Border"
                src="/img/border-2.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-26979.17%]"
                alt="Cap"
                src="/img/cap-2.png"
              />
            </div>
          </div>
        </header>
      </div>

      <header className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
        <time className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          9:41
        </time>

        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/Oax14zk6/img/icon---mobile-signal-8.svg"
        />

        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/Oax14zk6/img/wifi-8.svg"
        />

        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/Oax14zk6/img/battery-8.svg"
        />
      </header>
    </Link>
  );
};
