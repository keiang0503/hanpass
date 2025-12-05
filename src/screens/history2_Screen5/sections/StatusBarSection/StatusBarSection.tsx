import React from "react";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
  signalBars: [
    {
      src: "/img/bar-1-6.png",
      height: "h-[40.00%]",
      top: "top-[-39550.00%]",
      left: "left-[-40150.00%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-2-7.png",
      height: "h-[60.00%]",
      top: "top-[-39570.00%]",
      left: "left-[-40122.22%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-3-7.png",
      height: "h-[80.00%]",
      top: "top-[-39590.00%]",
      left: "left-[-40094.44%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-4-4.png",
      height: "h-full",
      top: "top-[-39610.00%]",
      left: "left-[-40066.67%]",
      width: "w-[16.67%]",
    },
  ],
  wifiBars: [
    {
      src: "/img/bar-1-7.png",
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-34013.91%]",
      left: "left-[-45284.43%]",
    },
    {
      src: "/img/bar-2-8.png",
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-34050.01%]",
      left: "left-[-45300.00%]",
    },
    {
      src: "/img/bar-3-8.png",
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-34083.73%]",
      left: "left-[-45318.77%]",
    },
  ],
};

export const StatusBarSection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col items-start relative bg-white">
      <div className="w-full flex items-center justify-between px-2.5 py-1 bg-white">
        <div className="inline-flex items-center gap-2">
          <time className="inline-flex items-center gap-1">
            <span className="inline-flex items-center">
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                9
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                :
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                41
              </span>
            </span>
          </time>
          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
            {statusBarData.date}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5">
          <div className="relative w-[18px] h-2.5">
            {statusBarData.signalBars.map((bar, index) => (
              <img
                key={`signal-bar-${index}`}
                className={`absolute ${bar.height} ${bar.top} ${bar.left} ${bar.width}`}
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

          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
            {statusBarData.battery}
          </span>

          <div className="relative w-6 h-3 overflow-hidden">
            <img
              className="absolute w-[87.51%] h-full top-[-33000%] left-[-30479.17%]"
              alt="Border"
              src="/img/border-4.png"
            />
            <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
            <img
              className="absolute w-[8.33%] h-[33.33%] top-[-32966.67%] left-[-30387.50%]"
              alt="Cap"
              src="/img/cap-4.png"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <time className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          {statusBarData.time}
        </time>

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
    </header>
  );
};
