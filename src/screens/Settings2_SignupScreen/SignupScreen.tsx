import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const SignupScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="40000016:2571806"
    >
      <header className="w-full flex flex-col items-start bg-white">
        <div className="w-full flex flex-col items-start bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black tracking-[0] leading-[normal] text-sm">
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
                  className="h-[40.00%] top-[-169820.00%] left-[-34327.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-10.png"
                />
                <img
                  className="h-[60.00%] top-[-169840.00%] left-[-34300%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-11.png"
                />
                <img
                  className="h-[80.00%] top-[-169860.00%] left-[-34272.22%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-11.png"
                />
                <img
                  className="h-full top-[-169880.00%] left-[-34244.44%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-6.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-38734.43%]"
                  alt="Bar"
                  src="/img/bar-1-11.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-38750.00%]"
                  alt="Bar"
                  src="/img/bar-2-12.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-38768.77%]"
                  alt="Bar"
                  src="/img/bar-3-12.png"
                />
              </div>
              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-26112.50%]"
                  alt="Border"
                  src="/img/border-6.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-26020.83%]"
                  alt="Cap"
                  src="/img/cap-6.png"
                />
              </div>
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
            src="https://c.animaapp.com/kp7cm7rf/img/icon---mobile-signal-6.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/kp7cm7rf/img/wifi-6.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/kp7cm7rf/img/battery-4.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Link
              to="/pinu95004-pin-u4359u4469u4358u4469u4527u4359u4453u4523u4370u4457-u4363u4469u4536u4357u4455u45202"
              className="flex items-center"
            >
              <ChevronLeftIcon className="w-8 h-8 text-black" />
            </Link>
            <div className="flex items-center gap-2">
              <button className="p-0 bg-transparent border-0">
                <MoreHorizontalIcon className="w-6 h-6 text-black" />
              </button>
              <button className="p-0 bg-transparent border-0">
                <CircleIcon className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-start bg-white w-full">
        <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              <span className="text-[#0d56e4]">보낸사람 HA 뒤 숫자 3자리</span>
              <span className="text-[#0b0c0e]">를 </span>
              <span className="text-[#0d56e4]">15분 안에 입력</span>
              <span className="text-[#0b0c0e]">해 주세요.</span>
            </h1>
          </div>

          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] font-body-16-r font-[number:var(--body-16-r-font-weight)] [font-style:var(--body-16-r-font-style)]">
                본인 계좌 확인을 위해 입력하신 계좌로 1원을 보내드렸어요
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="flex flex-col items-center gap-8 pt-[34px] pb-0 px-6 flex-1 w-full">
        <div className="flex flex-col items-center gap-2.5 px-[50px] py-0 w-full">
          <div className="relative min-w-[260px] max-w-[480px] w-full h-[90px] ml-[-16.50px] mr-[-16.50px]">
            <div className="w-[calc(100%_-_24px)] left-3 h-[74px] bg-[#e9f1ff] rounded-[10px] absolute bottom-0" />
            <Card className="absolute top-0 left-0 w-full bg-[#f4f7fd] rounded-[10px] shadow-[0px_4px_4px_#00000026] border-0">
              <CardContent className="flex flex-col items-start justify-center gap-1 px-4 py-3">
                <div className="flex items-center gap-1 w-full">
                  <div className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                    입금자명
                  </div>
                  <div className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                    입금
                  </div>
                </div>
                <div className="flex h-[30px] items-center gap-1 w-full">
                  <div className="w-[134px] h-[30px]">
                    <div className="flex w-full items-center gap-1 h-full">
                      <div className="inline-flex items-center">
                        <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] whitespace-nowrap [font-style:var(--body-20-r-font-style)]">
                          HA
                        </div>
                      </div>
                      <img
                        alt="Frame"
                        src="https://c.animaapp.com/kp7cm7rf/img/frame-1261169704.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] text-right tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                    1KRW
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    숫자 3자리 입력
                  </label>
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
                            placeholder="3자리 숫자"
                            className="flex-1 border-0 bg-transparent text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
                      15:00
                    </div>
                  </div>
                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="items-center justify-end px-6 py-0 bg-white flex flex-col w-full">
        <div className="items-start gap-1.5 pt-0 pb-3.5 px-0 z-[3] flex flex-col w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="relative w-2 h-3.5">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                입금내역이 없다면 등록하신 계좌 정보를 다시 확인해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
            <div className="min-h-[54px] flex-1 flex items-start">
              <Button
                disabled
                className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#b7ccf7] rounded-xl hover:bg-[#b7ccf7] disabled:opacity-100"
              >
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-4 z-0" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-1] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 ml-[-8.50px] mr-[-8.50px]">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
