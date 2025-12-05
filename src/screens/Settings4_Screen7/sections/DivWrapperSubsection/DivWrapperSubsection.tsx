import React from "react";
import { Link } from "react-router-dom";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
  signalBars: [
    {
      height: "h-[40.00%]",
      top: "top-[-208140.00%]",
      left: "left-[-6050.00%]",
      src: "/img/bar-1-2.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[-208160.00%]",
      left: "left-[-6022.22%]",
      src: "/img/bar-2-3.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[-208180.00%]",
      left: "left-[-5994.44%]",
      src: "/img/bar-3-3.png",
    },
    {
      height: "h-full",
      top: "top-[-208200%]",
      left: "left-[-5966.67%]",
      src: "/img/bar-4-2.png",
    },
  ],
  wifiBars: [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-179112.45%]",
      left: "left-[-6921.93%]",
      src: "/img/bar-1-3.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-179148.56%]",
      left: "left-[-6937.50%]",
      src: "/img/bar-2-4.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-179182.28%]",
      left: "left-[-6956.27%]",
      src: "/img/bar-3-4.png",
    },
  ],
};

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start bg-white">
      <Link
        className="w-full flex flex-col items-start gap-2.5 bg-white"
        to="/settingsu95027u95u4352u4462u4520u4352u4449-u4359u4453u4523u4370u4457-u4361u4453u4523u4368u4450u4520"
      >
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {statusBarData.time.split(":")[0]}
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {statusBarData.time.split(":")[1]}
                  </div>
                </div>
              </div>
              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                {statusBarData.date}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                {statusBarData.signalBars.map((bar, index) => (
                  <img
                    key={`signal-bar-${index}`}
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

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                {statusBarData.battery}
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-4904.17%]"
                  alt="Border"
                  src="/img/border-2.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-4812.50%]"
                  alt="Cap"
                  src="/img/cap-2.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            {statusBarData.time}
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/MgOgZxnr/img/icon---mobile-signal-7.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/MgOgZxnr/img/wifi-7.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/MgOgZxnr/img/battery-7.svg"
          />
        </div>
      </Link>

      <div className="flex-col items-start flex w-full">
        <div className="flex-col items-start gap-2 w-full flex">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/MgOgZxnr/img/wechat-hd-6.svg"
              />
            </div>

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/MgOgZxnr/img/mini-7@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
