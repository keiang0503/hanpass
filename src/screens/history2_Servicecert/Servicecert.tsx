import {
  ChevronLeftIcon,
  CircleIcon,
  InfoIcon,
  MoreVerticalIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const Servicecert = (): JSX.Element => {
  const [selectedMethod, setSelectedMethod] = useState<"email" | "pdf">(
    "email",
  );

  const statusBarIcons = [
    {
      src: "/img/bar-1-12.png",
      className:
        "h-[40.00%] top-[-39550.00%] left-[-29750.00%] absolute w-[16.67%]",
    },
    {
      src: "/img/bar-2-13.png",
      className:
        "h-[60.00%] top-[-39570.00%] left-[-29722.22%] absolute w-[16.67%]",
    },
    {
      src: "/img/bar-3-13.png",
      className:
        "h-[80.00%] top-[-39590.00%] left-[-29694.44%] absolute w-[16.67%]",
    },
    {
      src: "/img/bar-4-7.png",
      className:
        "h-full top-[-39610.00%] left-[-29666.67%] absolute w-[16.67%]",
    },
  ];

  const wifiIcons = [
    {
      src: "/img/bar-1-13.png",
      className:
        "absolute w-[31.30%] h-[30.17%] top-[-34013.91%] left-[-33584.43%]",
    },
    {
      src: "/img/bar-2-14.png",
      className:
        "absolute w-[62.57%] h-[34.44%] top-[-34050.01%] left-[-33600.00%]",
    },
    {
      src: "/img/bar-3-14.png",
      className:
        "absolute w-[100.01%] h-[43.03%] top-[-34083.73%] left-[-33618.77%]",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-end bg-white"
      data-model-id="40000008:1186774"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full max-w-[360px] flex flex-col items-start gap-2.5 bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black tracking-[0] leading-[normal] text-sm">
                    :
                  </div>
                  <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 mt-[-0.50px] mb-[-0.50px]">
              <div className="relative w-[18px] h-2.5">
                {statusBarIcons.map((icon, index) => (
                  <img
                    key={`status-bar-${index}`}
                    className={icon.className}
                    alt="Bar"
                    src={icon.src}
                  />
                ))}
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                {wifiIcons.map((icon, index) => (
                  <img
                    key={`wifi-${index}`}
                    className={icon.className}
                    alt="Bar"
                    src={icon.src}
                  />
                ))}
              </div>

              <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-33000%] left-[-22679.17%]"
                  alt="Border"
                  src="/img/border-7.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-32966.67%] left-[-22587.50%]"
                  alt="Cap"
                  src="/img/cap-7.png"
                />
              </div>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/yNx7OGE7/img/icon---mobile-signal-6.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/yNx7OGE7/img/wifi.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/yNx7OGE7/img/battery.svg"
          />
        </nav>
      </header>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <Link
              to="/historyu95003-u4370u4450u4363u4460u4361u4457u4540u4352u4467u4535-u4354u4450u4363u4455u4520-u4361u4449u4540u4361u44546"
              className="absolute top-[calc(50.00%_-_16px)] left-1.5"
            >
              <ChevronLeftIcon className="w-8 h-8 text-black" />
            </Link>

            <div className="absolute top-[11px] right-1.5 flex items-center gap-2">
              <MoreVerticalIcon className="w-6 h-6 text-black" />
              <CircleIcon className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-col items-start bg-white flex w-full">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 w-full flex items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              서비스 이용 확인증 발급
            </h1>
          </div>

          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                발급 방법을 선택해주세요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 flex-1 w-full">
        <div className="flex-col items-start gap-2 bg-white flex w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    발급 방법
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 w-full">
            <div className="flex items-center flex-1 rounded-[10px] overflow-hidden border border-solid border-[#dfe3ec]">
              <Button
                variant="ghost"
                className={`flex items-center justify-center flex-1 h-auto px-3.5 py-2.5 rounded-none ${
                  selectedMethod === "email" ? "bg-[#e9f1ff]" : "bg-white"
                }`}
                onClick={() => setSelectedMethod("email")}
              >
                <div className="flex items-center justify-center gap-[11px]">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Check"
                    src={
                      selectedMethod === "email"
                        ? "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01.svg"
                        : "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01-1.svg"
                    }
                  />
                  <div className="inline-flex flex-col items-center justify-center gap-2.5">
                    <span
                      className={`font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                        selectedMethod === "email"
                          ? "text-[#0d56e4]"
                          : "text-[#5e616b]"
                      }`}
                    >
                      이메일
                    </span>
                  </div>
                </div>
              </Button>

              <div className="w-px h-full bg-[#dfe3ec]" />

              <Button
                variant="ghost"
                className={`flex items-center justify-center flex-1 h-auto px-3.5 py-2.5 rounded-none ${
                  selectedMethod === "pdf" ? "bg-[#e9f1ff]" : "bg-white"
                }`}
                onClick={() => setSelectedMethod("pdf")}
              >
                <div className="flex items-center justify-center gap-[11px]">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Check"
                    src={
                      selectedMethod === "pdf"
                        ? "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01.svg"
                        : "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01-1.svg"
                    }
                  />
                  <div className="inline-flex flex-col items-center justify-center gap-2.5">
                    <span
                      className={`font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                        selectedMethod === "pdf"
                          ? "text-[#0d56e4]"
                          : "text-[#5e616b]"
                      }`}
                    >
                      PDF
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[22px] w-full">
          <div className="flex flex-col w-full items-start gap-1.5">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      이메일
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex-1 w-full flex items-center">
                      <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              type="email"
                              defaultValue="example@emil.com"
                              className="flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#dfe3ec] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="gap-0.5 w-full flex items-center">
            <InfoIcon className="w-5 h-5 text-[#757b88]" />
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </span>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="relative w-2 h-3.5">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                이메일을 못 받으신 경우 스팸메일함도 확인해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
            <div className="min-h-[54px] flex-1 flex items-start">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 h-auto bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  발급하기
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-4 z-0" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-1] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
