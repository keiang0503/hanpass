import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const SettingsScreen = (): JSX.Element => {
  const statusBarIcons = [
    {
      src: "https://c.animaapp.com/d5CwqEvt/img/icon---mobile-signal-1.svg",
      alt: "Icon mobile signal",
      className: "w-[18px] h-3",
    },
    {
      src: "https://c.animaapp.com/d5CwqEvt/img/wifi-1.svg",
      alt: "Wifi",
      className: "w-[17px] h-[11.83px]",
    },
    {
      src: "https://c.animaapp.com/d5CwqEvt/img/battery-1.svg",
      alt: "Battery",
      className: "w-[27.4px] h-[13px]",
    },
  ];

  const systemStatusIcons = [
    {
      src: "/img/bar-1-4.png",
      alt: "Bar",
      className:
        "h-[40.00%] top-[-208140.00%] left-[-41855.56%] absolute w-[16.67%]",
    },
    {
      src: "/img/bar-2-5.png",
      alt: "Bar",
      className:
        "h-[60.00%] top-[-208160.00%] left-[-41827.78%] absolute w-[16.67%]",
    },
    {
      src: "/img/bar-3-5.png",
      alt: "Bar",
      className:
        "h-[80.00%] top-[-208180.00%] left-[-41800%] absolute w-[16.67%]",
    },
    {
      src: "/img/bar-4-3.png",
      alt: "Bar",
      className: "h-full top-[-208200%] left-[-41772.22%] absolute w-[16.67%]",
    },
  ];

  const wifiIcons = [
    {
      src: "/img/bar-1-5.png",
      alt: "Bar",
      className:
        "absolute w-[31.30%] h-[30.17%] top-[-179112.45%] left-[-47203.18%]",
    },
    {
      src: "/img/bar-2-6.png",
      alt: "Bar",
      className:
        "absolute w-[62.57%] h-[34.44%] top-[-179148.56%] left-[-47218.75%]",
    },
    {
      src: "/img/bar-3-6.png",
      alt: "Bar",
      className:
        "absolute w-[100.01%] h-[43.03%] top-[-179182.28%] left-[-47237.52%]",
    },
  ];

  const batteryIcons = [
    {
      src: "/img/border-3.png",
      alt: "Border",
      className:
        "absolute w-[87.51%] h-full top-[-173491.67%] left-[-31758.34%]",
    },
    {
      src: "/img/cap-3.png",
      alt: "Cap",
      className:
        "absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-31666.67%]",
    },
  ];

  return (
    <div
      className="w-full min-w-[375px] min-h-[740px] flex"
      data-model-id="35166:121215"
    >
      <div className="flex w-[375px] h-[740px] relative items-center justify-center gap-2.5 px-6 py-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              한패스페이 월렛에 잔액이 있습니다.
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              잔액은 환불이 불가하니 회원 탈퇴를 원하실 경우, 잔액을 먼저
              소진해주시기 바랍니다.
            </p>

            <div className="flex flex-col items-center gap-6 p-4 self-stretch w-full bg-[#f7f7f8] rounded-xl">
              <div className="flex flex-col items-center justify-center self-stretch w-full">
                <div className="self-stretch mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#1c253f] text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  월렛 잔액
                </div>

                <div className="self-stretch font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0d56e4] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  11,000원
                </div>
              </div>
            </div>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 self-stretch w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button
                variant="secondary"
                className="w-[100px] h-auto px-2 py-1 bg-[#afb4ca] hover:bg-[#9ba0b6] min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                  닫기
                </span>
              </Button>

              <Button
                variant="default"
                className="px-[26px] py-1.5 h-auto flex-1 bg-[#0d56e4] hover:bg-[#0b47c0] min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  고객센터로 이동
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <header className="flex flex-col w-full items-start absolute top-0 left-0">
          <Link
            className="w-full flex flex-col items-start gap-2.5 self-stretch"
            to="/settingsu95062u95u4364u4462u4363u4468u4361u4449u4370u4449u4540-u4363u4449u4523u4354u4450"
          >
            <div className="w-[360px] bg-white flex flex-col items-start gap-2.5 self-stretch">
              <div className="flex h-6 items-center justify-between px-2.5 py-1 self-stretch w-full bg-white">
                <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center">
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

                <div className="inline-flex items-center gap-1.5 mt-[-0.50px] mb-[-0.50px]">
                  <div className="relative w-[18px] h-2.5">
                    {systemStatusIcons.map((icon, index) => (
                      <img
                        key={`system-status-${index}`}
                        className={icon.className}
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                  </div>

                  <div className="relative w-4 h-[11.62px] overflow-hidden">
                    {wifiIcons.map((icon, index) => (
                      <img
                        key={`wifi-${index}`}
                        className={icon.className}
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                  </div>

                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    100%
                  </div>

                  <div className="relative w-6 h-3 overflow-hidden">
                    {batteryIcons.map((icon, index) => (
                      <img
                        key={`battery-${index}`}
                        className={icon.className}
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                    <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
              <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                9:41
              </div>

              {statusBarIcons.map((icon, index) => (
                <img
                  key={`status-icon-${index}`}
                  className={icon.className}
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
          </Link>

          <nav className="flex flex-col items-start self-stretch w-full">
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <div className="flex h-[54px] items-center justify-around px-5 py-0 self-stretch w-full">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/d5CwqEvt/img/mini-4@2x.png"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
