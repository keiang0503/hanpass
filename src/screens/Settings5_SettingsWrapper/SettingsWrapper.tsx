import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const withdrawalSteps = [
  {
    number: "1",
    title: "탈퇴는 고객센터를 통해서만 가능합니다.",
    description: "탈퇴를 원하는 경우 고객센터로 접수해주세요.",
    hasConnector: true,
  },
  {
    number: "2",
    title:
      "탈퇴 후에는 회원정보 및 송금 내역이 모두 삭제되어 복구가 불가능합니다.",
    description: null,
    hasConnector: true,
  },
  {
    number: "3",
    title: "탈퇴할 경우 월렛에 충전된 잔액은 환불되지 않습니다.",
    description: null,
    hasConnector: false,
  },
];

export const SettingsWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="35382:74770"
    >
      <div className="flex flex-col items-start gap-[22px] pt-0 pb-[30px] px-0 relative flex-1 self-stretch w-full grow">
        <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
            <div className="w-[360px] flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
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
                    <img
                      className="h-[40.00%] top-[-208140.00%] left-[-44038.89%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-1-8.png"
                    />

                    <img
                      className="h-[60.00%] top-[-208160.00%] left-[-44011.11%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-2-9.png"
                    />

                    <img
                      className="h-[80.00%] top-[-208180.00%] left-[-43983.33%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-3-9.png"
                    />

                    <img
                      className="h-full top-[-208200%] left-[-43955.56%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-4-5.png"
                    />
                  </div>

                  <div className="relative w-4 h-[11.62px] overflow-hidden">
                    <img
                      className="absolute w-[31.30%] h-[30.17%] top-[-179112.45%] left-[-49659.43%]"
                      alt="Bar"
                      src="/img/bar-1-9.png"
                    />

                    <img
                      className="absolute w-[62.57%] h-[34.44%] top-[-179148.56%] left-[-49675.00%]"
                      alt="Bar"
                      src="/img/bar-2-10.png"
                    />

                    <img
                      className="absolute w-[100.01%] h-[43.03%] top-[-179182.28%] left-[-49693.77%]"
                      alt="Bar"
                      src="/img/bar-3-10.png"
                    />
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    100%
                  </div>

                  <div className="relative w-6 h-3 overflow-hidden">
                    <img
                      className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-33395.84%]"
                      alt="Border"
                      src="/img/border-5.png"
                    />

                    <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                    <img
                      className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-33304.17%]"
                      alt="Cap"
                      src="/img/cap-5.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
                9:41
              </div>

              <img
                className="relative w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/d5CwqEvt/img/icon---mobile-signal-4.svg"
              />

              <img
                className="relative w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/d5CwqEvt/img/wifi-4.svg"
              />

              <img
                className="relative w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/d5CwqEvt/img/battery-4.svg"
              />
            </div>
          </div>

          <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-[54px] items-center justify-between px-5 py-0 relative self-stretch w-full bg-white">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <ChevronLeftIcon className="h-6 w-6" />
                </Button>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <MoreHorizontalIcon className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <CircleIcon className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
              <div className="flex-col flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  회원 탈퇴
                </h1>
              </div>

              <div className="gap-2 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center justify-center relative flex-1 grow">
                  <p className="mt-[-1.00px] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] relative self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] [font-style:var(--body-16-r-font-style)]">
                    회원 탈퇴 전 반드시 주의사항을 확인해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center gap-2.5 px-6 py-0 relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            {withdrawalSteps.map((step, index) => (
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
                            <div className="relative w-8 h-8 bg-[url(https://c.animaapp.com/d5CwqEvt/img/group-2@2x.png)] bg-[100%_100%]">
                              <div className="absolute w-[75.00%] h-[65.62%] top-[18.75%] left-[12.50%] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#5e616b] text-[length:var(--title-16-SB-font-size)] text-center tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                {step.number}
                              </div>
                            </div>

                            {step.hasConnector && (
                              <div className="relative flex-1 w-0.5 min-h-4 grow bg-[#e5e8eb] rounded-[41px]" />
                            )}
                          </div>

                          <div className="flex flex-col items-start gap-3 pt-1.5 pb-3.5 px-0 relative flex-1 grow">
                            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                              <h2 className="relative self-stretch mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#1c253f] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                {step.title}
                              </h2>

                              {step.description && (
                                <p className="text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] relative self-stretch font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] [font-style:var(--caption-title-13-r-font-style)]">
                                  {step.description}
                                </p>
                              )}
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
        </main>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                고객센터로 이동
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto] ml-[-8.50px] mr-[-8.50px]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
