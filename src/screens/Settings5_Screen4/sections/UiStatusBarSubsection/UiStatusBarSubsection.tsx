import React from "react";
import { Link } from "react-router-dom";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
  signalBars: [
    {
      src: "/img/bar-1-6.png",
      height: "h-[40.00%]",
      top: "top-[-208140.00%]",
      left: "left-[-39455.56%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-2-7.png",
      height: "h-[60.00%]",
      top: "top-[-208160.00%]",
      left: "left-[-39427.78%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-3-7.png",
      height: "h-[80.00%]",
      top: "top-[-208180.00%]",
      left: "left-[-39400%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-4-4.png",
      height: "h-full",
      top: "top-[-208200%]",
      left: "left-[-39372.22%]",
      width: "w-[16.67%]",
    },
  ],
  wifiBars: [
    {
      src: "/img/bar-1-7.png",
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-179112.45%]",
      left: "left-[-44503.18%]",
    },
    {
      src: "/img/bar-2-8.png",
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-179148.56%]",
      left: "left-[-44518.75%]",
    },
    {
      src: "/img/bar-3-8.png",
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-179182.28%]",
      left: "left-[-44537.52%]",
    },
  ],
};

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 self-stretch bg-white"
      to="/settingsu95061u95u4363u4463u4527u4357u4454u4538-u4364u4449u4523u4363u4450u4520-u4363u4449u4523u4354u4450u4369u4449u4536u4363u4453u4536"
    >
      <div className="w-full flex flex-col items-start gap-2.5 self-stretch bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 self-stretch w-full bg-white">
          <div className="inline-flex items-center gap-2 flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto]">
              <div className="inline-flex items-center flex-[0_0_auto]">
                <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[0]}
                </div>
                <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>
                <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[1]}
                </div>
              </div>
            </div>
            <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.date}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 flex-[0_0_auto]">
            <div className="relative w-[18px] h-2.5">
              {statusBarData.signalBars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={`${bar.height} ${bar.top} ${bar.left} absolute ${bar.width}`}
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

            <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.battery}
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-29958.34%]"
                alt="Border"
                src="/img/border-4.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-29866.67%]"
                alt="Cap"
                src="/img/cap-4.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
        <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          {statusBarData.time}
        </div>

        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/d5CwqEvt/img/icon---mobile-signal-4.svg"
        />

        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/d5CwqEvt/img/wifi-4.svg"
        />

        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/d5CwqEvt/img/battery-4.svg"
        />
      </div>
    </Link>
  );
};
