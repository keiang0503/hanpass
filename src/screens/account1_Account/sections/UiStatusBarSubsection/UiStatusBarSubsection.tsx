import React from "react";
import { Link } from "react-router-dom";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
  cellularBars: [
    {
      height: "h-[40.00%]",
      top: "top-[-32540.00%]",
      left: "left-[-4522.22%]",
      src: "/img/bar-1.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[-32560.00%]",
      left: "left-[-4494.44%]",
      src: "/img/bar-2.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[-32580.00%]",
      left: "left-[-4466.67%]",
      src: "/img/bar-3.png",
    },
    {
      height: "h-full",
      top: "top-[-32600%]",
      left: "left-[-4438.89%]",
      src: "/img/bar-4.png",
    },
  ],
  wifiBars: [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-27980.68%]",
      left: "left-[-5203.18%]",
      src: "/img/image.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-28016.79%]",
      left: "left-[-5218.75%]",
      src: "/img/bar-2-2.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-28050.51%]",
      left: "left-[-5237.52%]",
      src: "/img/bar-3-2.png",
    },
  ],
};

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 bg-white"
      to="/accountu95001-u4352u4456u4364u4458-u4352u4458u4523u4357u44692"
    >
      <section className="w-full flex flex-col items-start gap-2.5 bg-white">
        <header className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <time className="inline-flex items-center gap-1">
              <span className="inline-flex items-center">
                <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </span>
                <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </span>
                <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </span>
              </span>
            </time>

            <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.date}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              {statusBarData.cellularBars.map((bar, index) => (
                <img
                  key={`cellular-bar-${index}`}
                  className={`${bar.height} ${bar.top} ${bar.left} absolute w-[16.67%]`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {statusBarData.wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <span className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.battery}
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-27158.33%] left-[-3758.34%]"
                alt="Border"
                src="/img/border.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-27125.00%] left-[-3666.67%]"
                alt="Cap"
                src="/img/cap.png"
              />
            </div>
          </div>
        </header>
      </section>

      <header className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <time className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          {statusBarData.time}
        </time>

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
      </header>
    </Link>
  );
};
