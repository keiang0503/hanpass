import React from "react";

const androidStatusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  signalBars: [
    {
      src: "/img/bar-1-14.png",
      height: "h-[40.00%]",
      top: "top-[170.00%]",
      left: "left-[-64016.67%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-2-15.png",
      height: "h-[60.00%]",
      top: "top-[150.00%]",
      left: "left-[-63988.89%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-3-15.png",
      height: "h-[80.00%]",
      top: "top-[130.00%]",
      left: "left-[-63961.11%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-4-8.png",
      height: "h-full",
      top: "top-[110.00%]",
      left: "left-[-63933.33%]",
      width: "w-[16.67%]",
    },
  ],
  wifiBars: [
    {
      src: "/img/bar-1-15.png",
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[171.48%]",
      left: "left-[-72134.43%]",
    },
    {
      src: "/img/bar-2-16.png",
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[135.37%]",
      left: "left-[-72150.00%]",
    },
    {
      src: "/img/bar-3-16.png",
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[101.65%]",
      left: "left-[-72168.77%]",
    },
  ],
  battery: "100%",
};

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-start relative bg-white">
      <div className="w-full flex flex-col items-start bg-white">
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
              {androidStatusBarData.date}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              {androidStatusBarData.signalBars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={`absolute ${bar.height} ${bar.top} ${bar.left} ${bar.width}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {androidStatusBarData.wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {androidStatusBarData.battery}
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-full left-[-48379.17%]"
                alt="Border"
                src="/img/border-8.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-48287.50%]"
                alt="Cap"
                src="/img/cap-8.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          {androidStatusBarData.time}
        </div>
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
      </div>
    </section>
  );
};
