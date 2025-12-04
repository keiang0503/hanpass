import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBar1Subsection = (): JSX.Element => {
  const statusBarData = {
    time: "9:41",
    date: "Sat Jun 11",
    battery: "100%",
    signalBars: [
      {
        alt: "Bar",
        src: "/img/bar-1-8.png",
        height: "h-[40.00%]",
        top: "top-[170.00%]",
        left: "left-[-8550.00%]",
        width: "w-[16.67%]",
      },
      {
        alt: "Bar",
        src: "/img/bar-2-9.png",
        height: "h-[60.00%]",
        top: "top-[150.00%]",
        left: "left-[-8522.22%]",
        width: "w-[16.67%]",
      },
      {
        alt: "Bar",
        src: "/img/bar-3-9.png",
        height: "h-[80.00%]",
        top: "top-[130.00%]",
        left: "left-[-8494.44%]",
        width: "w-[16.67%]",
      },
      {
        alt: "Bar",
        src: "/img/bar-4-5.png",
        height: "h-full",
        top: "top-[110.00%]",
        left: "left-[-8466.67%]",
        width: "w-[16.67%]",
      },
    ],
    wifiBars: [
      {
        alt: "Bar",
        src: "/img/bar-1-9.png",
        width: "w-[31.30%]",
        height: "h-[30.17%]",
        top: "top-[171.48%]",
        left: "left-[-9734.43%]",
      },
      {
        alt: "Bar",
        src: "/img/bar-2-10.png",
        width: "w-[62.57%]",
        height: "h-[34.44%]",
        top: "top-[135.37%]",
        left: "left-[-9750.00%]",
      },
      {
        alt: "Bar",
        src: "/img/bar-3-10.png",
        width: "w-[100.01%]",
        height: "h-[43.03%]",
        top: "top-[101.65%]",
        left: "left-[-9768.77%]",
      },
    ],
  };

  return (
    <Link
      className="w-full flex flex-col items-start relative bg-white"
      to="/mypageu95104u95u4361u4457u4540u4352u4467u4535-u4370u4449u4523u4355u4457-u4363u4449u4523u4354u4450"
    >
      <header className="w-full flex flex-col items-start bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <time className="inline-flex items-center gap-1">
              <span className="inline-flex items-center">
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[0]}
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[1]}
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
                  className={`${bar.height} ${bar.top} ${bar.left} absolute ${bar.width}`}
                  alt={bar.alt}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {statusBarData.wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt={bar.alt}
                  src={bar.src}
                />
              ))}
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.battery}
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-full left-[-6779.17%]"
                alt="Border"
                src="/img/border-5.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-6687.50%]"
                alt="Cap"
                src="/img/cap-5.png"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <time className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          {statusBarData.time}
        </time>

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
