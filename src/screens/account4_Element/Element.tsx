import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Element = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="35213:25512"
    >
      <div className="flex flex-col items-start w-full flex-1">
        <header className="w-full bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[-102560.00%] left-[-28794.44%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1.png"
                />
                <img
                  className="h-[60.00%] top-[-102580.00%] left-[-28766.67%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2.png"
                />
                <img
                  className="h-[80.00%] top-[-102600%] left-[-28738.89%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3.png"
                />
                <img
                  className="h-full top-[-102620.00%] left-[-28711.11%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-32509.43%]"
                  alt="Bar"
                  src="/img/image.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-32525.00%]"
                  alt="Bar"
                  src="/img/bar-2-2.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-32543.77%]"
                  alt="Bar"
                  src="/img/bar-3-2.png"
                />
              </div>

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-21962.50%]"
                  alt="Border"
                  src="/img/border.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-21870.83%]"
                  alt="Cap"
                  src="/img/cap.png"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </div>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/UrLjfz9Z/img/icon---mobile-signal-6.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/UrLjfz9Z/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/UrLjfz9Z/img/battery-6.svg"
            />
          </div>

          <nav className="flex items-center justify-between px-5 py-4 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <MoreVerticalIcon className="w-6 h-6 text-black" />
              </Button>
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <CircleIcon className="w-6 h-6 text-black" />
              </Button>
            </div>
          </nav>
        </header>

        <main className="flex flex-col w-full flex-1 bg-white">
          <section className="px-6 pt-[22px] pb-0 w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              인증서를 선택해주세요.
            </h1>
          </section>

          <section className="flex flex-col px-6 pt-[42px] pb-0 w-full flex-1">
            <Card className="border-[#dfe3ec] rounded-xl">
              <CardContent className="flex items-center gap-1.5 p-6">
                <div className="flex flex-col items-center justify-center gap-2 flex-1">
                  <div className="flex items-center justify-center w-6 h-6 bg-[#2563eb] rounded-full">
                    <div className="w-3 h-3 text-white text-xl leading-none flex items-center justify-center">
                      +
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="w-[295px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-center tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                      인증서 가져오기
                    </div>
                    <div className="w-[295px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      가져오기를 통해 새로운 인증서를 등록합니다
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#e8eaf0] rounded-full">
                      <div className="w-6 h-6 text-[#a2a8bf] text-2xl leading-none flex items-center justify-center">
                        !
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <div className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          선택 가능한 인증서가 없습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
