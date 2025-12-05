import React from "react";
import { Link } from "react-router-dom";

export const CouponListSection = (): JSX.Element => {
  const statusBarItems = [
    { type: "time", value: "9" },
    { type: "colon", value: ":" },
    { type: "time", value: "41" },
  ];

  const signalBars = [
    {
      height: "h-[40.00%]",
      top: "top-[-310.00%]",
      left: "left-[-4150.00%]",
      width: "w-[16.67%]",
      src: "/img/bar-1-4.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[-330.00%]",
      left: "left-[-4122.22%]",
      width: "w-[16.67%]",
      src: "/img/bar-2-5.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[-350.00%]",
      left: "left-[-4094.44%]",
      width: "w-[16.67%]",
      src: "/img/bar-3-5.png",
    },
    {
      height: "h-full",
      top: "top-[-370.00%]",
      left: "left-[-4066.67%]",
      width: "w-[16.67%]",
      src: "/img/bar-4-3.png",
    },
  ];

  const wifiBars = [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-241.64%]",
      left: "left-[-4784.43%]",
      src: "/img/bar-1-5.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-277.74%]",
      left: "left-[-4800.00%]",
      src: "/img/bar-2-6.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-311.47%]",
      left: "left-[-4818.77%]",
      src: "/img/bar-3-6.png",
    },
  ];

  return (
    <header className="flex flex-col items-start w-full bg-white">
      <Link
        className="w-full flex flex-col items-start bg-white"
        to="/overseasremitu95016-u4370u4450u4363u4460u4361u4457u4540u4352u4467u4535-u4352u4457u4540u4364u4469-u4363u4449u4523u4354u4450"
      >
        <div className="w-full flex flex-col items-start bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  {statusBarItems.map((item, index) => (
                    <div
                      key={index}
                      className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]"
                    >
                      {item.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                {signalBars.map((bar, index) => (
                  <img
                    key={index}
                    className={`${bar.height} ${bar.top} ${bar.left} absolute ${bar.width}`}
                    alt="Bar"
                    src={bar.src}
                  />
                ))}
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                {wifiBars.map((bar, index) => (
                  <img
                    key={index}
                    className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                    alt="Bar"
                    src={bar.src}
                  />
                ))}
              </div>

              <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-300%] left-[-3479.17%]"
                  alt="Border"
                  src="/img/border-3.png"
                />

                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-3387.50%]"
                  alt="Cap"
                  src="/img/cap-3.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/Fk3yL3l2/img/icon---mobile-signal-7.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/Fk3yL3l2/img/wifi-6.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/Fk3yL3l2/img/battery-7.svg"
          />
        </div>
      </Link>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/Fk3yL3l2/img/wechat-hd-5.svg"
            />

            <img
              className="w-[87px] h-8"
              alt="Mini"
              src="https://c.animaapp.com/Fk3yL3l2/img/mini-7@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
