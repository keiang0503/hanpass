import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  DeleteIcon,
  MoreHorizontalIcon,
  RotateCcwIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const pinDots = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadButtons = [
  { number: "7", position: "row-1 col-1" },
  { number: "5", position: "row-1 col-2" },
  { number: "2", position: "row-1 col-3" },
  { number: "1", position: "row-2 col-1" },
  { number: "4", position: "row-2 col-2" },
  { number: "6", position: "row-2 col-3" },
  { number: "8", position: "row-3 col-1" },
  { number: "0", position: "row-3 col-2" },
  { number: "3", position: "row-3 col-3" },
  { number: "9", position: "row-4 col-2" },
];

export const PinPin = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000016:2694299"
    >
      <header className="flex flex-col items-start gap-[22px] w-full">
        <div className="flex flex-col h-[92px] items-start w-full bg-white">
          <Link
            className="w-full flex flex-col items-start gap-2.5 bg-white"
            to="/settingsu95039u95u4366u4460u4366u4457u95faceidu38u4364u4469u4358u4462u4523-u4363u4469u4523u4364u4467u4540u4352u4458u4523u4357u44692"
          >
            <div className="w-[360px] flex flex-col items-start gap-2.5 bg-white">
              <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
                <div className="inline-flex items-center gap-2">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center">
                      <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        9
                      </span>
                      <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        :
                      </span>
                      <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        41
                      </span>
                    </div>
                  </div>
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    Sat Jun 11
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5">
                  <div className="relative w-[18px] h-2.5">
                    <img
                      className="h-[40.00%] top-[-169820.00%] left-[-51383.33%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-1-6.png"
                    />
                    <img
                      className="h-[60.00%] top-[-169840.00%] left-[-51355.56%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-2-7.png"
                    />
                    <img
                      className="h-[80.00%] top-[-169860.00%] left-[-51327.78%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-3-7.png"
                    />
                    <img
                      className="h-full top-[-169880.00%] left-[-51300%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-4-4.png"
                    />
                  </div>

                  <div className="relative w-4 h-[11.62px] overflow-hidden">
                    <img
                      className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-57921.93%]"
                      alt="Bar"
                      src="/img/bar-1-7.png"
                    />
                    <img
                      className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-57937.50%]"
                      alt="Bar"
                      src="/img/bar-2-8.png"
                    />
                    <img
                      className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-57956.27%]"
                      alt="Bar"
                      src="/img/bar-3-8.png"
                    />
                  </div>

                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    100%
                  </span>

                  <div className="relative w-6 h-3 overflow-hidden">
                    <img
                      className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-38904.17%]"
                      alt="Border"
                      src="/img/border-4.png"
                    />
                    <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                    <img
                      className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-38812.50%]"
                      alt="Cap"
                      src="/img/cap-4.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
              <span className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
                9:41
              </span>
              <img
                className="w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/THCauiAv/img/icon---mobile-signal-2.svg"
              />
              <img
                className="w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/THCauiAv/img/wifi-2.svg"
              />
              <img
                className="w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/THCauiAv/img/battery-2.svg"
              />
            </div>
          </Link>

          <nav className="flex flex-col items-start w-full mb-[-14.00px]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
                <Button variant="ghost" size="icon" className="h-auto w-8 p-0">
                  <ChevronLeftIcon className="w-8 h-8" />
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-auto w-6 p-0"
                  >
                    <MoreHorizontalIcon className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-auto w-6 p-0"
                  >
                    <CircleIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <main className="flex flex-col items-center gap-[50px] px-6 py-0 w-full">
          <div className="flex flex-col items-center gap-[26px] w-full">
            <div className="flex flex-col items-center gap-[50px] w-full">
              <div className="flex flex-col items-center gap-[26px] w-full">
                <div className="flex items-start justify-center w-full">
                  <h1 className="flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                    6자리 비밀번호를
                    <br />
                    입력해 주세요
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-3 w-full">
                  {pinDots.map((dot, index) => (
                    <div
                      key={`pin-dot-${index}`}
                      className={`w-[18px] h-[18px] rounded-full ${
                        dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center gap-0 p-0"
          >
            <div className="inline-flex items-center justify-center px-0 py-1.5">
              <div className="inline-flex items-center justify-center gap-2.5">
                <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                  6자리 비밀번호(PIN) 변경
                </span>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-[#85888e]" />
            </div>
          </Button>
        </main>
      </header>

      <div className="flex flex-col items-start gap-6 w-full mt-auto">
        <div className="flex items-center justify-center gap-2.5 px-6 py-0 w-full">
          <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
            입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
            국내송금, 월렛 충전 등)
          </p>
        </div>

        <div className="w-full h-[292px] bg-[#0d56e4] grid grid-cols-3 gap-0 p-0">
          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              7
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              5
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              2
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              1
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              4
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              6
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              8
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              0
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              3
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <RotateCcwIcon className="w-[31px] h-[30px] text-white" />
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              9
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <DeleteIcon className="w-[31px] h-[30px] text-white" />
          </Button>
        </div>
      </div>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-[#0d56e4]">
        <div className="flex flex-col w-[134px] items-center gap-2.5">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
