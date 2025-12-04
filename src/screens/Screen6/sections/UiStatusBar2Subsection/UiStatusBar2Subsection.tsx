import React from "react";
import { Link } from "react-router-dom";

export const UiStatusBar2Subsection = (): JSX.Element => {
  const signalBars = [
    {
      height: "h-[40.00%]",
      top: "top-[170.00%]",
      left: "left-[-3883.33%]",
      width: "w-[16.67%]",
      src: "/img/bar-1-6.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[150.00%]",
      left: "left-[-3855.56%]",
      width: "w-[16.67%]",
      src: "/img/bar-2-7.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[130.00%]",
      left: "left-[-3827.78%]",
      width: "w-[16.67%]",
      src: "/img/bar-3-7.png",
    },
    {
      height: "h-full",
      top: "top-[110.00%]",
      left: "left-[-3800%]",
      width: "w-[16.67%]",
      src: "/img/bar-4-4.png",
    },
  ];

  const wifiBars = [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[171.48%]",
      left: "left-[-4484.43%]",
      src: "/img/bar-1-7.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[135.37%]",
      left: "left-[-4500.00%]",
      src: "/img/bar-2-8.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[101.65%]",
      left: "left-[-4518.77%]",
      src: "/img/bar-3-8.png",
    },
  ];

  const timeDigits = [{ text: "9" }, { text: ":" }, { text: "41" }];

  return (
    <Link
      className="w-full flex flex-col items-start gap-2.5 bg-white"
      to="/mypageu95001u95u4354u4450-u4364u4453u4540u4359u4457-u4358u4454u4363u4469u4523"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <time className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                {timeDigits.map((digit, index) => (
                  <div
                    key={index}
                    className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]"
                  >
                    {digit.text}
                  </div>
                ))}
              </div>
            </time>

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
                  alt={`Signal bar ${index + 1}`}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              {wifiBars.map((bar, index) => (
                <img
                  key={index}
                  className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                  alt={`WiFi bar ${index + 1}`}
                  src={bar.src}
                />
              ))}
            </div>

            <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-full left-[-3279.17%]"
                alt="Battery border"
                src="/img/border-4.png"
              />

              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

              <img
                className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-3187.50%]"
                alt="Battery cap"
                src="/img/cap-4.png"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
        <time className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
          9:41
        </time>

        <img
          className="w-[18px] h-3"
          alt="Mobile signal"
          src="https://c.animaapp.com/emBHvnWi/img/icon---mobile-signal-7.svg"
        />

        <img
          className="w-[17px] h-[11.83px]"
          alt="WiFi"
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
