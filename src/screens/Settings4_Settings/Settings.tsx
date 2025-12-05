import {
  ChevronDownIcon,
  ChevronLeftIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

export const Settings = (): JSX.Element => {
  const statusBarIcons = [
    {
      src: "/img/bar-1.png",
      height: "h-[40.00%]",
      top: "top-[-208140.00%]",
      left: "left-[-1550.00%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-2.png",
      height: "h-[60.00%]",
      top: "top-[-208160.00%]",
      left: "left-[-1522.22%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-3.png",
      height: "h-[80.00%]",
      top: "top-[-208180.00%]",
      left: "left-[-1494.44%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-4.png",
      height: "h-full",
      top: "top-[-208200%]",
      left: "left-[-1466.67%]",
      width: "w-[16.67%]",
    },
  ];

  const wifiIcons = [
    {
      src: "/img/image.png",
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-179112.45%]",
      left: "left-[-1859.43%]",
    },
    {
      src: "/img/bar-2-2.png",
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-179148.56%]",
      left: "left-[-1875.00%]",
    },
    {
      src: "/img/bar-3-2.png",
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-179182.28%]",
      left: "left-[-1893.77%]",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:80306"
    >
      {/* Status Bar - First */}
      <header className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="relative w-[18px] h-2.5">
                {statusBarIcons.map((icon, index) => (
                  <img
                    key={`status-bar-${index}`}
                    className={`${icon.height} ${icon.top} ${icon.left} absolute ${icon.width}`}
                    alt="Bar"
                    src={icon.src}
                  />
                ))}
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                {wifiIcons.map((icon, index) => (
                  <img
                    key={`wifi-${index}`}
                    className={`absolute ${icon.width} ${icon.height} ${icon.top} ${icon.left}`}
                    alt="Bar"
                    src={icon.src}
                  />
                ))}
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-1529.17%]"
                  alt="Border"
                  src="/img/border.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-1437.50%]"
                  alt="Cap"
                  src="/img/cap.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* iOS Status Bar */}
        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="relative w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/MgOgZxnr/img/icon---mobile-signal-7.svg"
          />
          <img
            className="relative w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/MgOgZxnr/img/wifi-7.svg"
          />
          <img
            className="relative w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/MgOgZxnr/img/battery-7.svg"
          />
        </div>
      </header>

      {/* Navigation Header */}
      <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 relative self-stretch w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <ChevronLeftIcon className="h-6 w-6 text-black" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreHorizontalIcon className="h-6 w-6 text-black" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <CircleIcon className="h-6 w-6 text-black" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              휴대전화번호 변경
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-6 relative flex-1 self-stretch w-full grow">
        {/* Current Phone Number */}
        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[17px]">
              <Label className="inline-flex items-center gap-1 relative">
                <span className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    현재 휴대전화번호
                  </span>
                </span>
              </Label>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 self-stretch w-full grow">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow">
                      <button className="inline-flex items-center gap-0.5 relative flex-[0_0_auto] bg-transparent border-none cursor-pointer">
                        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                          +62
                        </span>
                        <ChevronDownIcon className="relative w-4 h-4 text-[#5e616b]" />
                      </button>
                    </div>
                  </div>
                  <div className="relative self-stretch w-full h-0.5">
                    <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Phone Number */}
        <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[17px]">
                <Label className="inline-flex items-center gap-1 relative">
                  <span className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      새 휴대전화번호
                    </span>
                  </span>
                </Label>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                    <div className="flex items-center relative flex-1 self-stretch w-full grow">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                            +82
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch w-full h-0.5">
                      <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Verification Button */}
          <div className="items-start justify-center gap-2.5 flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="min-h-[46px] justify-center flex-1 grow flex items-start relative">
              <Button
                variant="outline"
                className="h-auto flex flex-col min-h-[46px] items-center justify-center gap-2.5 px-[26px] py-1 relative flex-1 grow bg-white rounded-[30px] border border-solid border-[#d0d7d7]"
                disabled
              >
                <div className="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="flex items-center justify-center w-fit mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#acb2c1] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap relative text-center [font-style:var(--title-15-SB-font-style)]">
                      인증 문자 발송
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="flex flex-col items-center justify-end pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button
              className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#b7ccf7] rounded-xl hover:bg-[#b7ccf7]/90"
              disabled
            >
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] relative text-center [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-4" />

        {/* Home Indicator */}
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
