import React from "react";
import { Link } from "react-router-dom";

export const StatusBarSection = (): JSX.Element => {
  const signalBars = [
    { height: "h-[40%]", src: "/img/bar-1-4.png" },
    { height: "h-[60%]", src: "/img/bar-2-5.png" },
    { height: "h-[80%]", src: "/img/bar-3-5.png" },
    { height: "h-full", src: "/img/bar-4-3.png" },
  ];

  const wifiBars = [
    { width: "w-[31.30%]", height: "h-[30.17%]", src: "/img/bar-1-5.png" },
    { width: "w-[62.57%]", height: "h-[34.44%]", src: "/img/bar-2-6.png" },
    { width: "w-[100.01%]", height: "h-[43.03%]", src: "/img/bar-3-6.png" },
  ];

  return (
    <Link
      className="w-full flex flex-col items-start relative bg-white"
      to="/historyu95003-u4370u4450u4363u4460u4361u4457u4540u4352u4467u4535-u4354u4450u4363u4455u4520-u4361u4449u4540u4361u44545"
    >
      <header className="w-full flex items-center justify-between px-2.5 py-1 bg-white h-6">
        <div className="inline-flex items-center gap-2">
          <time className="inline-flex items-center gap-1">
            <span className="inline-flex items-center">
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                9
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                :
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                41
              </span>
            </span>
          </time>
          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
            Sat Jun 11
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5">
          <div className="relative w-[18px] h-2.5">
            {signalBars.map((bar, index) => (
              <img
                key={`signal-bar-${index}`}
                className={`${bar.height} absolute w-[16.67%]`}
                style={{
                  top:
                    index === 0
                      ? "-39550%"
                      : index === 1
                        ? "-39570%"
                        : index === 2
                          ? "-39590%"
                          : "-39610%",
                  left:
                    index === 0
                      ? "-37511.11%"
                      : index === 1
                        ? "-37483.33%"
                        : index === 2
                          ? "-37455.56%"
                          : "-37427.78%",
                }}
                alt="Bar"
                src={bar.src}
              />
            ))}
          </div>

          <div className="relative w-4 h-[11.62px] overflow-hidden">
            {wifiBars.map((bar, index) => (
              <img
                key={`wifi-bar-${index}`}
                className={`absolute ${bar.width} ${bar.height}`}
                style={{
                  top:
                    index === 0
                      ? "-34013.91%"
                      : index === 1
                        ? "-34050.01%"
                        : "-34083.73%",
                  left:
                    index === 0
                      ? "-42315.68%"
                      : index === 1
                        ? "-42331.25%"
                        : "-42350.02%",
                }}
                alt="Bar"
                src={bar.src}
              />
            ))}
          </div>

          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
            100%
          </span>

          <div className="relative w-6 h-3 overflow-hidden">
            <img
              className="absolute w-[87.51%] h-full"
              style={{ top: "-33000%", left: "-28500.00%" }}
              alt="Border"
              src="/img/border-3.png"
            />
            <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
            <img
              className="absolute w-[8.33%] h-[33.33%]"
              style={{ top: "-32966.67%", left: "-28408.33%" }}
              alt="Cap"
              src="/img/cap-3.png"
            />
          </div>
        </div>
      </header>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <time className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          9:41
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
    </Link>
  );
};
