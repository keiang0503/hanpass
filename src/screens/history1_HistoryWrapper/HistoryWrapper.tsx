import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const timelineSteps = [
  {
    title: "송금 신청 완료",
    timestamp: "2025.11.03 11:29:35 KST",
    iconSrc: "https://c.animaapp.com/u8GhiXiH/img/element-step-icon-3.svg",
    titleColor: "text-[#0d56e4]",
    hasConnector: true,
  },
  {
    title: "송금 취소",
    timestamp: "2025.11.03 11:29:35 KST",
    iconSrc: "https://c.animaapp.com/u8GhiXiH/img/element-step-icon-5.svg",
    titleColor: "text-[#1c253f]",
    hasConnector: false,
  },
];

export const HistoryWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="35139:58372"
    >
      <header className="flex flex-col w-full items-start absolute top-0 left-0">
        <Link
          className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]"
          to="/historyu95002-u4370u4450u4363u4460u4361u4457u4540u4352u4467u4535-u4364u4469u4523u4370u4450u4540-u4361u4449u4540u4370u4458u4540u95u4370u4458u4523u4359u4462u4527-u4366u4453u4357u4469-u4363u4458u4523u4357u4461"
        >
          <div className="w-full bg-white flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black tracking-[0] leading-[normal] relative mt-[-1.00px] text-sm">
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
                  <img
                    className="h-[40.00%] top-[-39550.00%] left-[-14516.67%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-10.png"
                  />
                  <img
                    className="h-[60.00%] top-[-39570.00%] left-[-14488.89%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-11.png"
                  />
                  <img
                    className="h-[80.00%] top-[-39590.00%] left-[-14461.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-11.png"
                  />
                  <img
                    className="h-full top-[-39610.00%] left-[-14433.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-6.png"
                  />
                </div>
                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-34013.91%] left-[-16446.93%]"
                    alt="Bar"
                    src="/img/bar-1-11.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-34050.01%] left-[-16462.50%]"
                    alt="Bar"
                    src="/img/bar-2-12.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-34083.73%] left-[-16481.27%]"
                    alt="Bar"
                    src="/img/bar-3-12.png"
                  />
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>
                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-33000%] left-[-11254.17%]"
                    alt="Border"
                    src="/img/border-6.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-32966.67%] left-[-11162.50%]"
                    alt="Cap"
                    src="/img/cap-6.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/u8GhiXiH/img/icon---mobile-signal-6.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/u8GhiXiH/img/wifi-6.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/u8GhiXiH/img/battery-6.svg"
            />
          </div>
        </Link>
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/u8GhiXiH/img/mini-6@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center gap-1.5 pt-0 pb-3.5 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[22px]" />
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <XIcon className="w-[18px] h-[18px] text-gray-600" />
            </Button>
          </div>

          <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
            <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-1 px-0 py-1.5 relative flex-1 grow">
                <h1 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                  해외송금 진행 상황
                </h1>
              </div>
            </div>
            <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="flex flex-col items-start relative flex-1 grow bg-white">
                  <div className="flex flex-col min-h-[68px] items-start px-0 py-[3px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start justify-around relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-start justify-around gap-3 relative flex-1 grow">
                        <div className="flex items-start gap-3.5 relative flex-1 grow">
                          <div className="inline-flex flex-col items-center gap-1.5 relative self-stretch flex-[0_0_auto]">
                            <img
                              className="relative w-8 h-8"
                              alt="Element step icon"
                              src={step.iconSrc}
                            />
                            {step.hasConnector && (
                              <div className="relative flex-1 w-0.5 min-h-4 grow bg-[#0d56e4] rounded-[41px]" />
                            )}
                          </div>
                          <div className="flex flex-col items-start gap-3 pt-1.5 pb-3.5 px-0 relative flex-1 grow">
                            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                              <div
                                className={`font-title-16-${
                                  index === 0 ? "SB" : "b"
                                } font-[number:var(--title-16-${
                                  index === 0 ? "SB" : "b"
                                }-font-weight)] ${
                                  step.titleColor
                                } relative self-stretch mt-[-1.00px] text-[length:var(--title-16-${
                                  index === 0 ? "SB" : "b"
                                }-font-size)] tracking-[var(--title-16-${
                                  index === 0 ? "SB" : "b"
                                }-letter-spacing)] leading-[var(--title-16-${
                                  index === 0 ? "SB" : "b"
                                }-line-height)] [font-style:var(--title-16-${
                                  index === 0 ? "SB" : "b"
                                }-font-style)]`}
                              >
                                {step.title}
                              </div>
                              <div className="relative self-stretch font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                                {step.timestamp}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end justify-center gap-2.5 px-5 py-[22px] relative self-stretch w-full flex-[0_0_auto] bg-[#f4f7fd] rounded-xl">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] relative mt-[-1.00px] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                    송금 신청이 취소되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
