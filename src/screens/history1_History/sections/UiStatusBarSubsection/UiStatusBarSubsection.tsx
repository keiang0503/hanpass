import React from "react";
import { Link } from "react-router-dom";

const statusBarData = {
  topBar: {
    time: "9:41",
    date: "Sat Jun 11",
    battery: "100%",
    signalBars: [
      {
        src: "/img/bar-1.png",
        height: "h-[40.00%]",
        top: "top-[-39550.00%]",
        left: "left-[-1322.22%]",
      },
      {
        src: "/img/bar-2.png",
        height: "h-[60.00%]",
        top: "top-[-39570.00%]",
        left: "left-[-1294.44%]",
      },
      {
        src: "/img/bar-3.png",
        height: "h-[80.00%]",
        top: "top-[-39590.00%]",
        left: "left-[-1266.67%]",
      },
      {
        src: "/img/bar-4.png",
        height: "h-full",
        top: "top-[-39610.00%]",
        left: "left-[-1238.89%]",
      },
    ],
    wifiBars: [
      {
        src: "/img/image.png",
        width: "w-[31.30%]",
        height: "h-[30.17%]",
        top: "top-[-34013.91%]",
        left: "left-[-1603.18%]",
      },
      {
        src: "/img/bar-2-2.png",
        width: "w-[62.57%]",
        height: "h-[34.44%]",
        top: "top-[-34050.01%]",
        left: "left-[-1618.75%]",
      },
      {
        src: "/img/bar-3-2.png",
        width: "w-[100.01%]",
        height: "h-[43.03%]",
        top: "top-[-34083.73%]",
        left: "left-[-1637.52%]",
      },
    ],
  },
  bottomBar: {
    time: "9:41",
  },
};

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start relative bg-white"
      to="/historyu95001-u4370u4450u4363u4460u4361u4457u4540u4352u4467u4535-u4354u4450u4363u4455u45202"
    >
      <div className="w-full flex flex-col items-start bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.topBar.time.split(":")[0]}
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black tracking-[0] leading-[normal] text-sm">
                  :
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.topBar.time.split(":")[1]}
                </div>
              </div>
            </div>
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.topBar.date}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              {statusBarData.topBar.signalBars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={`${bar.height} ${bar.top} ${bar.left} absolute w-[16.67%]`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {statusBarData.topBar.wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.topBar.battery}
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-33000%] left-[-1358.34%]"
                alt="Border"
                src="/img/border.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-32966.67%] left-[-1266.67%]"
                alt="Cap"
                src="/img/cap.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          {statusBarData.bottomBar.time}
        </div>
        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/u8GhiXiH/img/icon---mobile-signal-1.svg"
        />
        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/u8GhiXiH/img/wifi-1.svg"
        />
        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/u8GhiXiH/img/battery-1.svg"
        />
      </div>
    </Link>
  );
};
