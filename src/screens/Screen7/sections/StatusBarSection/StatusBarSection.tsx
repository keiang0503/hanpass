import React from "react";

export const StatusBarSection = (): JSX.Element => {
  const signalBars = [
    {
      height: "h-[40.00%]",
      top: "top-[-63850.00%]",
      left: "left-[-27577.78%]",
      src: "/img/bar-1-4.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[-63870.00%]",
      left: "left-[-27550.00%]",
      src: "/img/bar-2-5.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[-63890.00%]",
      left: "left-[-27522.22%]",
      src: "/img/bar-3-5.png",
    },
    {
      height: "h-full",
      top: "top-[-63910.00%]",
      left: "left-[-27494.44%]",
      src: "/img/bar-4-3.png",
    },
  ];

  const wifiBars = [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-54927.93%]",
      left: "left-[-31140.68%]",
      src: "/img/bar-1-5.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-54964.03%]",
      left: "left-[-31156.25%]",
      src: "/img/bar-2-6.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-54997.75%]",
      left: "left-[-31175.02%]",
      src: "/img/bar-3-6.png",
    },
  ];

  return (
    <header className="w-full flex flex-col items-start gap-2.5 bg-white">
      <div className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2 flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
            <div className="inline-flex items-center gap-1 flex-[0_0_auto]">
              <div className="inline-flex items-center flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>
                <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] mt-[-1.00px]">
                  :
                </div>
                <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>
            <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
            <div className="relative w-[18px] h-2.5">
              {signalBars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={`${bar.height} ${bar.top} ${bar.left} absolute w-[16.67%]`}
                  alt="Bar"
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
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
                className="absolute w-[87.51%] h-full top-[-53250.00%] left-[-21050.00%]"
                alt="Border"
                src="/img/border-3.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-53216.67%] left-[-20958.33%]"
                alt="Cap"
                src="/img/cap-3.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full flex-[0_0_auto]">
        <time className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          9:41
        </time>

        <img
          className="w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/pWVLYNoL/img/icon---mobile-signal-6.svg"
        />

        <img
          className="w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/pWVLYNoL/img/wifi-6.svg"
        />

        <img
          className="w-[27.4px] h-[13px]"
          alt="Battery"
          src="https://c.animaapp.com/pWVLYNoL/img/battery-6.svg"
        />
      </div>
    </header>
  );
};
