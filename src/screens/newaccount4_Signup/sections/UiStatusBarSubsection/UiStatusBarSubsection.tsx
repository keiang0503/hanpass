import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBarSubsection = (): JSX.Element => {
  const signalBars = [
    {
      className:
        "h-[40.00%] top-[-49420.00%] left-[-3655.56%] absolute w-[16.67%]",
      src: "/img/bar-1-2.png",
      alt: "Bar",
    },
    {
      className:
        "h-[60.00%] top-[-49440.00%] left-[-3627.78%] absolute w-[16.67%]",
      src: "/img/bar-2-3.png",
      alt: "Bar",
    },
    {
      className:
        "h-[80.00%] top-[-49460.00%] left-[-3600%] absolute w-[16.67%]",
      src: "/img/bar-3-3.png",
      alt: "Bar",
    },
    {
      className: "h-full top-[-49480.00%] left-[-3572.22%] absolute w-[16.67%]",
      src: "/img/bar-4-2.png",
      alt: "Bar",
    },
  ];

  const wifiBars = [
    {
      className:
        "absolute w-[31.30%] h-[30.17%] top-[-42508.61%] left-[-4228.18%]",
      src: "/img/bar-1-3.png",
      alt: "Bar",
    },
    {
      className:
        "absolute w-[62.57%] h-[34.44%] top-[-42544.72%] left-[-4243.75%]",
      src: "/img/bar-2-4.png",
      alt: "Bar",
    },
    {
      className:
        "absolute w-[100.01%] h-[43.03%] top-[-42578.44%] left-[-4262.52%]",
      src: "/img/bar-3-4.png",
      alt: "Bar",
    },
  ];

  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-none bg-white"
      to="/loginu95006-u4361u4454u4527u4367u4449u4366u4458u4527u4363u4455u4540"
    >
      <div className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-none bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
          <div className="inline-flex items-center gap-2 relative flex-none mt-neg-0-5 mb-neg-0-5">
            <div className="inline-flex items-center gap-1 relative flex-none">
              <div className="inline-flex items-center relative flex-none">
                <div className="relative w-fit mt-neg-1 [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>

                <div className="relative w-fit mt-neg-1 [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>

                <div className="relative w-fit mt-neg-1 [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>

            <div className="relative w-fit mt-neg-1 [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 relative flex-none mt-neg-0-5 mb-neg-0-5">
            <div className="relative w-[18px] h-2.5">
              {signalBars.map((bar, index) => (
                <img
                  key={`signal-bar-${index}`}
                  className={bar.className}
                  alt={bar.alt}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-11-62 overflow-hidden">
              {wifiBars.map((bar, index) => (
                <img
                  key={`wifi-bar-${index}`}
                  className={bar.className}
                  alt={bar.alt}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-fit mt-neg-1 [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-41225.00%] left-[-3108.34%]"
                alt="Border"
                src="/img/border-2.png"
              />

              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-41191.67%] left-[-3016.67%]"
                alt="Cap"
                src="/img/cap-2.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pl-34 pr-5 py-4 relative self-stretch w-full flex-none">
        <div className="relative flex-1 h-5 mt-neg-1 font-title-16-SB text-title-16-SB-style text-black whitespace-nowrap">
          9:41
        </div>

        <img
          className="relative w-[18px] h-3"
          alt="Icon mobile signal"
          src="https://c.animaapp.com/shEJQFEJ/img/icon---mobile-signal-5.svg"
        />

        <img
          className="relative w-[17px] h-[11.83px]"
          alt="Wifi"
          src="https://c.animaapp.com/shEJQFEJ/img/wifi-5.svg"
        />

        <img
          className="relative w-27-4 h-13"
          alt="Battery"
          src="https://c.animaapp.com/shEJQFEJ/img/battery-5.svg"
        />
      </div>
    </Link>
  );
};
