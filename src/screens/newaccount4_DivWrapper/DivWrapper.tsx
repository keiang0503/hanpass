import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DivWrapper = (): JSX.Element => {
  const statusBarData = {
    time: "9:41",
    date: "Sat Jun 11",
    signalBars: [
      {
        height: "h-[40.00%]",
        top: "top-[-49420.00%]",
        left: "left-[-8322.22%]",
        width: "w-[16.67%]",
        src: "/img/bar-1-6.png",
      },
      {
        height: "h-[60.00%]",
        top: "top-[-49440.00%]",
        left: "left-[-8294.44%]",
        width: "w-[16.67%]",
        src: "/img/bar-2-7.png",
      },
      {
        height: "h-[80.00%]",
        top: "top-[-49460.00%]",
        left: "left-[-8266.67%]",
        width: "w-[16.67%]",
        src: "/img/bar-3-7.png",
      },
      {
        height: "h-full",
        top: "top-[-49480.00%]",
        left: "left-[-8238.89%]",
        width: "w-[16.67%]",
        src: "/img/bar-4-4.png",
      },
    ],
    wifiBars: [
      {
        width: "w-[31.30%]",
        height: "h-[30.17%]",
        top: "top-[-42508.61%]",
        left: "left-[-9478.18%]",
        src: "/img/bar-1-7.png",
      },
      {
        width: "w-[62.57%]",
        height: "h-[34.44%]",
        top: "top-[-42544.72%]",
        left: "left-[-9493.75%]",
        src: "/img/bar-2-8.png",
      },
      {
        width: "w-[100.01%]",
        height: "h-[43.03%]",
        top: "top-[-42578.44%]",
        left: "left-[-9512.52%]",
        src: "/img/bar-3-8.png",
      },
    ],
  };

  const statusBarData2 = {
    time: "9:41",
    date: "Sat Jun 11",
    signalBars: [
      {
        height: "h-[40.00%]",
        top: "top-[-49420.00%]",
        left: "left-[-8322.22%]",
        width: "w-[16.67%]",
        src: "/img/bar-1-8.png",
      },
      {
        height: "h-[60.00%]",
        top: "top-[-49440.00%]",
        left: "left-[-8294.44%]",
        width: "w-[16.67%]",
        src: "/img/bar-2-9.png",
      },
      {
        height: "h-[80.00%]",
        top: "top-[-49460.00%]",
        left: "left-[-8266.67%]",
        width: "w-[16.67%]",
        src: "/img/bar-3-9.png",
      },
      {
        height: "h-full",
        top: "top-[-49480.00%]",
        left: "left-[-8238.89%]",
        width: "w-[16.67%]",
        src: "/img/bar-4-5.png",
      },
    ],
    wifiBars: [
      {
        width: "w-[31.30%]",
        height: "h-[30.17%]",
        top: "top-[-42508.61%]",
        left: "left-[-9478.18%]",
        src: "/img/bar-1-9.png",
      },
      {
        width: "w-[62.57%]",
        height: "h-[34.44%]",
        top: "top-[-42544.72%]",
        left: "left-[-9493.75%]",
        src: "/img/bar-2-10.png",
      },
      {
        width: "w-[100.01%]",
        height: "h-[43.03%]",
        top: "top-[-42578.44%]",
        left: "left-[-9512.52%]",
        src: "/img/bar-3-10.png",
      },
    ],
  };

  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] relative"
      data-model-id="40000003:466993"
    >
      <div className="flex w-[375px] h-[800px] items-center justify-center gap-2.5 px-6 py-[206px] absolute top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 grow bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="items-center pt-8 pb-9 px-[22px] flex flex-col gap-2.5">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              사진 확인
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              촬영하신 사진을 확인해주세요.
            </p>

            <div className="flex flex-col items-start gap-6 pt-[18px] pb-0 px-0 self-stretch w-full rounded-xl">
              <div className="items-start flex flex-col gap-2.5 self-stretch w-full">
                <div className="self-stretch w-full h-[152px] bg-[#393939] rounded-[20px]" />
              </div>
            </div>
          </CardContent>

          <div className="min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex self-stretch w-full">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1 grow">
              <Button className="w-[100px] px-2 py-1 bg-[#afb4ca] hover:bg-[#afb4ca]/90 flex min-h-12 h-auto items-center justify-center gap-2 rounded-[14px]">
                <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                  재시도
                </span>
              </Button>

              <Button className="px-[26px] py-1.5 flex-1 self-stretch grow bg-[#0d56e4] hover:bg-[#0d56e4]/90 flex min-h-12 h-auto items-center justify-center gap-2 rounded-[14px]">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <header className="flex flex-col w-full items-start absolute top-0 left-0">
          <div className="w-full flex flex-col items-start gap-2.5 self-stretch">
            <div className="w-[360px] bg-white flex flex-col items-start gap-2.5 self-stretch">
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

                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    100%
                  </div>

                  <div className="relative w-6 h-3 overflow-hidden">
                    <img
                      className="absolute w-[87.51%] h-full top-[-41225.00%] left-[-6608.34%]"
                      alt="Border"
                      src="/img/border-4.png"
                    />

                    <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                    <img
                      className="absolute w-[8.33%] h-[33.33%] top-[-41191.67%] left-[-6516.67%]"
                      alt="Cap"
                      src="/img/cap-4.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
              <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                9:41
              </div>

              <img
                className="w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/shEJQFEJ/img/icon---mobile-signal-4.svg"
              />

              <img
                className="w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/shEJQFEJ/img/wifi-4.svg"
              />

              <img
                className="w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/shEJQFEJ/img/battery-4.svg"
              />
            </div>
          </div>

          <nav className="flex flex-col items-start self-stretch w-full">
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <div className="flex h-[54px] items-center justify-around px-5 py-0 self-stretch w-full">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/shEJQFEJ/img/mini-5@2x.png"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div className="flex flex-col w-full items-start absolute top-0 left-0">
        <Link
          className="flex flex-col items-start gap-2.5 self-stretch w-full"
          to="/loginu95002-u4361u4454u4527u4367u4449u4363u4469u4523u4364u4467u4540-u4363u4449u4523u4354u4450"
        >
          <div className="w-[360px] bg-white flex flex-col items-start gap-2.5 self-stretch">
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
                  {statusBarData2.signalBars.map((bar, index) => (
                    <img
                      key={`signal-bar-2-${index}`}
                      className={`${bar.height} ${bar.top} ${bar.left} absolute ${bar.width}`}
                      alt="Bar"
                      src={bar.src}
                    />
                  ))}
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  {statusBarData2.wifiBars.map((bar, index) => (
                    <img
                      key={`wifi-bar-2-${index}`}
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
                    className="absolute w-[87.51%] h-full top-[-41225.00%] left-[-6608.34%]"
                    alt="Border"
                    src="/img/border-5.png"
                  />

                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-41191.67%] left-[-6516.67%]"
                    alt="Cap"
                    src="/img/cap-5.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
            <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>

            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/shEJQFEJ/img/icon---mobile-signal-4.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/shEJQFEJ/img/wifi-4.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/shEJQFEJ/img/battery-4.svg"
            />
          </div>
        </Link>

        <div className="flex-col items-start flex self-stretch w-full">
          <div className="flex flex-col items-start gap-2 self-stretch w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/shEJQFEJ/img/mini-5@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
