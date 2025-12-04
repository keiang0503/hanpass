import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const rewardItems = [
  {
    label: "쿠폰 금액",
    amount: "0 KRW",
    image: "https://c.animaapp.com/pWVLYNoL/img/------1@4x.png",
    imageWidth: "w-[49.01px]",
    imageHeight: "h-[12.14px]",
  },
  {
    label: "캐시백 금액",
    amount: "0 KRW",
    image: "https://c.animaapp.com/pWVLYNoL/img/-------1@4x.png",
    imageWidth: "w-[60.75px]",
    imageHeight: "h-[12.18px]",
  },
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-between relative bg-white"
      data-model-id="36848:76855"
    >
      <div className="flex-col items-start flex-1 self-stretch w-full grow flex relative">
        <header className="w-full flex flex-col items-start relative self-stretch bg-white">
          <div className="w-full flex flex-col items-start relative self-stretch bg-white">
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
                    className="h-[40.00%] top-[-63850.00%] left-[-29911.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-6.png"
                  />
                  <img
                    className="h-[60.00%] top-[-63870.00%] left-[-29883.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-7.png"
                  />
                  <img
                    className="h-[80.00%] top-[-63890.00%] left-[-29855.56%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-7.png"
                  />
                  <img
                    className="h-full top-[-63910.00%] left-[-29827.78%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-4.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-54927.93%] left-[-33765.68%]"
                    alt="Bar"
                    src="/img/bar-1-7.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-54964.03%] left-[-33781.25%]"
                    alt="Bar"
                    src="/img/bar-2-8.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-54997.75%] left-[-33800.02%]"
                    alt="Bar"
                    src="/img/bar-3-8.png"
                  />
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-53250.00%] left-[-22800.00%]"
                    alt="Border"
                    src="/img/border-4.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-53216.67%] left-[-22708.33%]"
                    alt="Cap"
                    src="/img/cap-4.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full">
            <div className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </div>
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/pWVLYNoL/img/icon---mobile-signal-6.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/pWVLYNoL/img/wifi-6.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/pWVLYNoL/img/battery-6.svg"
            />
          </div>
        </header>

        <nav className="flex flex-col items-start relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
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

        <section className="flex-col items-start bg-white flex relative self-stretch w-full">
          <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex items-start relative">
            <div className="items-start flex flex-col relative self-stretch w-full">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                친구 초대 내역
              </h1>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start justify-end gap-[42px] pt-[35px] pb-0 px-6 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full">
            <div className="items-center flex flex-col relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex relative">
                <div className="items-center justify-center gap-2.5 px-0 py-1.5 flex-1 grow flex relative">
                  <h2 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    누적 리워드 금액
                  </h2>
                </div>
              </div>
            </div>

            <Card className="self-stretch w-full bg-[#f4f7fd] border-0 rounded-xl">
              <CardContent className="flex items-start gap-1.5 px-5 py-[22px]">
                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                    <div className="flex-col flex items-start gap-2.5 relative self-stretch w-full">
                      {rewardItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 relative self-stretch w-full"
                        >
                          <img
                            className={`relative ${item.imageWidth} ${item.imageHeight}`}
                            alt={item.label}
                            src={item.image}
                          />
                          <div className="items-center justify-end gap-0.5 flex-1 grow flex relative">
                            <div className="relative flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                              {item.amount}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] px-0 relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <div className="flex flex-col items-center justify-center relative self-stretch w-full">
              <div className="flex-col items-center justify-center gap-6 px-0 py-14 self-stretch w-full flex relative">
                <img
                  className="relative w-12 h-12"
                  alt="Empty"
                  src="https://c.animaapp.com/pWVLYNoL/img/ico48-empty.svg"
                />
                <div className="flex-col items-center gap-1 self-stretch w-full flex relative">
                  <div className="items-start gap-1 self-stretch w-full flex relative">
                    <p className="mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] relative flex-1 text-center [font-style:var(--body-15-r-font-style)]">
                      아직 초대된 친구가 없습니다.
                      <br />
                      친구를 초대해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white">
        <div className="flex-col items-center gap-6 self-stretch w-full z-0 flex relative">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full">
            <Button className="min-h-[54px] flex-1 grow h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              지금 친구초대 하기
            </Button>
          </div>
        </div>

        <div className="relative self-stretch w-full h-4 z-[-1]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full z-[-2] bg-white">
          <div className="flex-col w-[134px] items-center gap-2.5 flex-[0_0_auto] ml-[-8.50px] mr-[-8.50px] flex relative">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
