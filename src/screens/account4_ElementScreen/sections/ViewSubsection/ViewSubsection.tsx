import React from "react";
import { Link } from "react-router-dom";

export const ViewSubsection = (): JSX.Element => {
  const signalBars = [
    {
      className:
        "h-[40.00%] top-[-102560.00%] left-[-36711.11%] absolute w-[16.67%]",
      src: "/img/bar-1-12.png",
      alt: "Bar",
    },
    {
      className:
        "h-[60.00%] top-[-102580.00%] left-[-36683.33%] absolute w-[16.67%]",
      src: "/img/bar-2-13.png",
      alt: "Bar",
    },
    {
      className:
        "h-[80.00%] top-[-102600%] left-[-36655.56%] absolute w-[16.67%]",
      src: "/img/bar-3-13.png",
      alt: "Bar",
    },
    {
      className:
        "h-full top-[-102620.00%] left-[-36627.78%] absolute w-[16.67%]",
      src: "/img/bar-4-7.png",
      alt: "Bar",
    },
  ];

  const wifiBars = [
    {
      className:
        "absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-41415.68%]",
      src: "/img/bar-1-13.png",
      alt: "Bar",
    },
    {
      className:
        "absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-41431.25%]",
      src: "/img/bar-2-14.png",
      alt: "Bar",
    },
    {
      className:
        "absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-41450.02%]",
      src: "/img/bar-3-14.png",
      alt: "Bar",
    },
  ];

  return (
    <header className="flex flex-col w-full items-start">
      <Link
        className="w-full flex flex-col items-start gap-2.5 self-stretch flex-[0_0_auto]"
        to="/signupu95026-u4364u4469u4520u4364u4453u4536u4363u4469u4536u4357u4455u4520u4370u4449u4352u44693"
      >
        <div className="w-full bg-white flex flex-col items-start gap-2.5 self-stretch flex-[0_0_auto]">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 self-stretch w-full bg-white">
            <div className="inline-flex items-center gap-2 flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="inline-flex items-center gap-1 flex-[0_0_auto]">
                <div className="inline-flex items-center flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>

                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
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
                    className={bar.className}
                    alt={bar.alt}
                    src={bar.src}
                  />
                ))}
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                {wifiBars.map((bar, index) => (
                  <img
                    key={`wifi-bar-${index}`}
                    className={bar.className}
                    alt={bar.alt}
                    src={bar.src}
                  />
                ))}
              </div>

              <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-27900.00%]"
                  alt="Border"
                  src="/img/border-7.png"
                />

                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-27808.33%]"
                  alt="Cap"
                  src="/img/cap-7.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full flex-[0_0_auto]">
          <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
            9:41
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/UrLjfz9Z/img/icon---mobile-signal-5.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/UrLjfz9Z/img/wifi-5.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/UrLjfz9Z/img/battery-5.svg"
          />
        </div>
      </Link>

      <div className="flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 self-stretch w-full flex-[0_0_auto] flex items-start">
          <div className="h-[54px] items-center justify-around px-5 py-0 flex self-stretch w-full relative">
            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/UrLjfz9Z/img/mini-6@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
