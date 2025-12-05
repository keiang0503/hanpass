import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const countries = [
  {
    flag: "https://c.animaapp.com/MgOgZxnr/img/country.svg",
    name: "대한민국",
    code: "KR +82",
  },
  {
    flag: "https://c.animaapp.com/MgOgZxnr/img/country-1.svg",
    name: "중국",
    code: "CN +86",
  },
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] relative flex flex-col"
      data-model-id="36848:80333"
    >
      <div className="flex-1 flex items-end bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col items-start gap-1.5 pt-0 pb-6 px-6 w-full bg-white rounded-[30px_30px_0px_0px] overflow-hidden">
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col items-end w-full">
                <div className="w-full h-[22px]" />

                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[18px] h-[18px] p-0 hover:bg-transparent"
                >
                  <XIcon className="w-[18px] h-[18px] text-gray-400" />
                </Button>
              </div>

              <div className="flex flex-col items-center w-full">
                <div className="flex items-start gap-2 w-full">
                  <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
                    <div className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                      국가번호 선택
                    </div>
                  </div>
                </div>

                <div className="w-full max-h-[26px] h-[26px] opacity-30" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-[18px] w-full">
              {countries.map((country, index) => (
                <button
                  key={index}
                  className="w-full h-8 flex items-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 flex-1">
                    <div className="flex w-[30px] items-center justify-center">
                      <div
                        className="w-[30px] h-[30px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${country.flag})` }}
                      />
                    </div>

                    <div className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] whitespace-nowrap [font-style:var(--body-16-r-font-style)]">
                      {country.name}
                    </div>

                    <div className="flex items-center justify-center font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                      {country.code}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 w-full bg-white">
            <div className="flex flex-col w-[134px] items-center gap-2.5">
              <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-start absolute top-0 left-0">
        <Link
          className="w-full flex flex-col items-start gap-2.5"
          to="/settingsu95028u95u4363u4451u4520u4352u4458u4523u95u4358u4457u4520u4357u4457u4520"
        >
          <div className="w-[360px] bg-white flex flex-col items-start gap-2.5">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
              <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>

                    <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
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
                  <img
                    className="h-[40.00%] top-[-208140.00%] left-[-8383.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-14.png"
                  />

                  <img
                    className="h-[60.00%] top-[-208160.00%] left-[-8355.56%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-15.png"
                  />

                  <img
                    className="h-[80.00%] top-[-208180.00%] left-[-8327.78%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-15.png"
                  />

                  <img
                    className="h-full top-[-208200%] left-[-8300%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-8.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-179112.45%] left-[-9546.93%]"
                    alt="Bar"
                    src="/img/bar-1-15.png"
                  />

                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-179148.56%] left-[-9562.50%]"
                    alt="Bar"
                    src="/img/bar-2-16.png"
                  />

                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-179182.28%] left-[-9581.27%]"
                    alt="Bar"
                    src="/img/bar-3-16.png"
                  />
                </div>

                <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-6654.17%]"
                    alt="Border"
                    src="/img/border-8.png"
                  />

                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-6562.50%]"
                    alt="Cap"
                    src="/img/cap-8.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>

            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/MgOgZxnr/img/icon---mobile-signal-5.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/MgOgZxnr/img/wifi-5.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/MgOgZxnr/img/battery-5.svg"
            />
          </div>
        </Link>

        <div className="flex flex-col items-start w-full">
          <div className="gap-2 flex flex-col items-start w-full">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/MgOgZxnr/img/mini-7@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
