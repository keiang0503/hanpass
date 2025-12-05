import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const AccountScreen = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="35139:61481"
    >
      <div className="w-[375px] h-[800px] items-start bg-white flex flex-col">
        <header className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="w-full flex flex-col items-start gap-2.5 bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
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
                    className="h-[40.00%] top-[-102560.00%] left-[-64238.89%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-6.png"
                  />
                  <img
                    className="h-[60.00%] top-[-102580.00%] left-[-64211.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-7.png"
                  />
                  <img
                    className="h-[80.00%] top-[-102600%] left-[-64183.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-7.png"
                  />
                  <img
                    className="h-full top-[-102620.00%] left-[-64155.56%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-4.png"
                  />
                </div>
                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-72384.43%]"
                    alt="Bar"
                    src="/img/bar-1-7.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-72400.00%]"
                    alt="Bar"
                    src="/img/bar-2-8.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-72418.77%]"
                    alt="Bar"
                    src="/img/bar-3-8.png"
                  />
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>
                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-48545.84%]"
                    alt="Border"
                    src="/img/border-4.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-48454.17%]"
                    alt="Cap"
                    src="/img/cap-4.png"
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
              src="https://c.animaapp.com/dojq12ez/img/icon---mobile-signal-5.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/dojq12ez/img/wifi-4.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/dojq12ez/img/battery-5.svg"
            />
          </div>
        </header>

        <nav className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full bg-white relative">
              <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5" />
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/dojq12ez/img/mini-5@2x.png"
              />
            </div>
          </div>
        </nav>

        <main className="flex flex-col items-start gap-2.5 px-6 py-0 flex-1 w-full">
          <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 w-full">
            <div className="relative w-60 h-[154px]">
              <img
                className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
                alt="Group"
                src="https://c.animaapp.com/dojq12ez/img/group-1261168836@2x.png"
              />
            </div>

            <div className="flex flex-col items-center gap-[30px] w-full">
              <div className="flex flex-col items-center gap-3 w-full">
                <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  자동출금 등록에 실패했습니다.
                </h1>

                <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                  등록 불가한 계좌입니다.
                  <br />
                  (A191822)
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
          <div className="flex flex-col items-center gap-6 w-full z-0">
            <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
              <div className="flex min-h-[54px] items-start flex-1">
                <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    다시하기
                  </span>
                </Button>
              </div>
            </div>

            <Link to="#" className="inline-flex items-center gap-0.5">
              <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                나중에 할게요
              </span>
              <ChevronRightIcon className="w-[18px] h-[18px] text-[#717682]" />
            </Link>
          </div>

          <div className="w-full h-4 z-[-1]" />

          <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-2] bg-white">
            <div className="w-[134px] flex flex-col items-center gap-2.5 ml-[-8.50px] mr-[-8.50px]">
              <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
