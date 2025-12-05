import React from "react";
import { Link } from "react-router-dom";

const statusBarData = {
  firstRow: {
    time: {
      hour: "9",
      minute: "41",
    },
    date: "Sat Jun 11",
    signalBars: [
      {
        height: "h-[40.00%]",
        top: "top-[-169820.00%]",
        left: "left-[-10883.33%]",
        width: "w-[16.67%]",
        src: "/img/bar-1-8.png",
      },
      {
        height: "h-[60.00%]",
        top: "top-[-169840.00%]",
        left: "left-[-10855.56%]",
        width: "w-[16.67%]",
        src: "/img/bar-2-9.png",
      },
      {
        height: "h-[80.00%]",
        top: "top-[-169860.00%]",
        left: "left-[-10827.78%]",
        width: "w-[16.67%]",
        src: "/img/bar-3-9.png",
      },
      {
        height: "h-full",
        top: "top-[-169880.00%]",
        left: "left-[-10800%]",
        width: "w-[16.67%]",
        src: "/img/bar-4-5.png",
      },
    ],
    wifiBars: [
      {
        width: "w-[31.30%]",
        height: "h-[30.17%]",
        top: "top-[-146131.99%]",
        left: "left-[-12359.43%]",
        src: "/img/bar-1-9.png",
      },
      {
        width: "w-[62.57%]",
        height: "h-[34.44%]",
        top: "top-[-146168.10%]",
        left: "left-[-12375.00%]",
        src: "/img/bar-2-10.png",
      },
      {
        width: "w-[100.01%]",
        height: "h-[43.03%]",
        top: "top-[-146201.82%]",
        left: "left-[-12393.77%]",
        src: "/img/bar-3-10.png",
      },
    ],
    battery: "100%",
  },
  secondRow: {
    time: "9:41",
  },
};

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 bg-white"
      to="/accountu95029-u40u4363u4460u4352u4462u4520u4363u4469u4523u41u4361u4454u4527u4369u4469-u4366u4458u4527u4363u4455u4540"
    >
      <div className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.firstRow.time.hour}
                </div>

                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>

                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.firstRow.time.minute}
                </div>
              </div>
            </div>

            <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.firstRow.date}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 mt-[-0.50px] mb-[-0.50px]">
            <div className="relative w-[18px] h-2.5">
              {statusBarData.firstRow.signalBars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={`${bar.height} ${bar.top} ${bar.left} absolute ${bar.width}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {statusBarData.firstRow.wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.firstRow.battery}
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-8529.17%]"
                alt="Border"
                src="/img/border-5.png"
              />

              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-8437.50%]"
                alt="Cap"
                src="/img/cap-5.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-black text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
          {statusBarData.secondRow.time}
        </div>

        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/w2kCT5wM/img/icon---mobile-signal-7.svg"
        />

        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/w2kCT5wM/img/wifi-7.svg"
        />

        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/w2kCT5wM/img/battery-7.svg"
        />
      </div>
    </Link>
  );
};
