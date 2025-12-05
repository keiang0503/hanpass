import React from "react";

export const NotificationStatusBarSection = (): JSX.Element => {
  const statusBarData = {
    time: "9:41",
    signalBars: [
      {
        height: "h-[40.00%]",
        top: "top-[-39550.00%]",
        left: "left-[-34872.22%]",
        width: "w-[16.67%]",
        src: "/img/bar-1-2.png",
      },
      {
        height: "h-[60.00%]",
        top: "top-[-39570.00%]",
        left: "left-[-34844.44%]",
        width: "w-[16.67%]",
        src: "/img/bar-2-3.png",
      },
      {
        height: "h-[80.00%]",
        top: "top-[-39590.00%]",
        left: "left-[-34816.67%]",
        width: "w-[16.67%]",
        src: "/img/bar-3-3.png",
      },
      {
        height: "h-full",
        top: "top-[-39610.00%]",
        left: "left-[-34788.89%]",
        width: "w-[16.67%]",
        src: "/img/bar-4-2.png",
      },
    ],
    wifiBars: [
      {
        width: "w-[31.30%]",
        height: "h-[30.17%]",
        top: "top-[-34013.91%]",
        left: "left-[-39346.93%]",
        src: "/img/bar-1-3.png",
      },
      {
        width: "w-[62.57%]",
        height: "h-[34.44%]",
        top: "top-[-34050.01%]",
        left: "left-[-39362.50%]",
        src: "/img/bar-2-4.png",
      },
      {
        width: "w-[100.01%]",
        height: "h-[43.03%]",
        top: "top-[-34083.73%]",
        left: "left-[-39381.27%]",
        src: "/img/bar-3-4.png",
      },
    ],
    battery: {
      percentage: "100%",
      borderSrc: "/img/border-2.png",
      capSrc: "/img/cap-2.png",
    },
  };

  return (
    <header className="w-full flex items-center justify-between px-5 py-2 bg-white">
      <time className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
        {statusBarData.time}
      </time>

      <div className="flex items-center gap-1.5">
        <div className="relative w-[18px] h-2.5">
          {statusBarData.signalBars.map((bar, index) => (
            <img
              key={`signal-bar-${index}`}
              className={`absolute ${bar.height} ${bar.top} ${bar.left} ${bar.width}`}
              alt={`Signal bar ${index + 1}`}
              src={bar.src}
            />
          ))}
        </div>

        <div className="relative w-4 h-[11.62px] overflow-hidden">
          {statusBarData.wifiBars.map((bar, index) => (
            <img
              key={`wifi-bar-${index}`}
              className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
              alt={`WiFi bar ${index + 1}`}
              src={bar.src}
            />
          ))}
        </div>

        <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
          {statusBarData.battery.percentage}
        </span>

        <div className="relative w-6 h-3 overflow-hidden">
          <img
            className="absolute w-[87.51%] h-full top-[-33000%] left-[-26520.84%]"
            alt="Battery border"
            src={statusBarData.battery.borderSrc}
          />
          <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
          <img
            className="absolute w-[8.33%] h-[33.33%] top-[-32966.67%] left-[-26429.17%]"
            alt="Battery cap"
            src={statusBarData.battery.capSrc}
          />
        </div>
      </div>
    </header>
  );
};
