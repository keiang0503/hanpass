import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const transactionOptions = [
  { id: 1, label: "해외송금 보내기" },
  { id: 2, label: "해외송금 받기" },
  { id: 3, label: "간편송금" },
  { id: 4, label: "한패스 선불카드" },
  { id: 5, label: "생활편의 서비스" },
];

export const TransactionPurpose = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="34919:52431"
    >
      <header className="absolute top-0 left-0 w-full flex flex-col items-start">
        <div className="w-full bg-white flex flex-col items-start">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                    9
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                    :
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                    41
                  </div>
                </div>
              </div>
              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                Sat Jun 11
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[-1010.00%] left-[-43027.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-8.png"
                />
                <img
                  className="h-[60.00%] top-[-1030.00%] left-[-43000%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-9.png"
                />
                <img
                  className="h-[80.00%] top-[-1050.00%] left-[-42972.22%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-9.png"
                />
                <img
                  className="h-full top-[-1070.00%] left-[-42944.44%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-5.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-844.10%] left-[-48521.93%]"
                  alt="Bar"
                  src="/img/bar-1-9.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-880.20%] left-[-48537.50%]"
                  alt="Bar"
                  src="/img/bar-2-10.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-913.93%] left-[-48556.27%]"
                  alt="Bar"
                  src="/img/bar-3-10.png"
                />
              </div>
              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                100%
              </div>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-883.33%] left-[-32637.50%]"
                  alt="Border"
                  src="/img/border-5.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-850.00%] left-[-32545.83%]"
                  alt="Cap"
                  src="/img/cap-5.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
            9:41
          </div>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/Kel660N3/img/icon---mobile-signal-6.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/Kel660N3/img/wifi-6.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/Kel660N3/img/battery-6.svg"
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/Kel660N3/img/mini-7@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start w-full">
        <div className="items-center gap-1.5 pt-0 pb-3.5 px-6 bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-end w-full">
              <div className="w-full h-[22px]" />
              <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="items-start gap-2 w-full flex">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 flex">
                  <h2 className="flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    거래목적을 선택해주세요.
                  </h2>
                </div>
              </div>
              <div className="w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <nav className="flex flex-col items-start gap-[18px] w-full">
            {transactionOptions.map((option) => (
              <Button
                key={option.id}
                variant="ghost"
                className="flex items-start w-full h-auto p-0 justify-start hover:bg-transparent"
              >
                <div className="flex min-h-8 items-center flex-1">
                  <div className="flex items-center gap-1.5 flex-1">
                    <span className="flex-1 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] text-left">
                      {option.label}
                    </span>
                  </div>
                </div>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
