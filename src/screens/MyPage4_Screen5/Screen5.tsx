import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const formFields = [
  {
    label: "여권번호",
    value: "M12345678",
    bgColor: "bg-white",
    textColor: "text-[#0b0c0e]",
  },
  {
    label: "국적",
    value: "NP",
    bgColor: "bg-[#f7f7f8]",
    textColor: "text-[#5e616b]",
  },
  {
    label: "여권만료일",
    value: "2030/01/01",
    bgColor: "bg-white",
    textColor: "text-[#0b0c0e]",
  },
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="36848:90815"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
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
                  className="h-[40.00%] top-[-125060.00%] left-[-8611.11%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-8.png"
                />
                <img
                  className="h-[60.00%] top-[-125080.00%] left-[-8583.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-9.png"
                />
                <img
                  className="h-[80.00%] top-[-125100%] left-[-8555.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-9.png"
                />
                <img
                  className="h-full top-[-125120.00%] left-[-8527.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-5.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-9803.18%]"
                  alt="Bar"
                  src="/img/bar-1-9.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-9818.75%]"
                  alt="Bar"
                  src="/img/bar-2-10.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-9837.52%]"
                  alt="Bar"
                  src="/img/bar-3-10.png"
                />
              </div>

              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </span>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-6825.00%]"
                  alt="Border"
                  src="/img/border-5.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-6733.33%]"
                  alt="Cap"
                  src="/img/cap-5.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <span className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </span>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/2nKnhQUO/img/icon---mobile-signal-6.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/2nKnhQUO/img/wifi-6.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/2nKnhQUO/img/battery-6.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" asChild>
              <Link to="/mypageu95066-u4363u4455u4352u4463u4523u4364u4453u4540u4359u4457-u4370u4458u4520u4363u4469u4523-u45-u4354u4450u4352u4462u4520u4363u4469u4523">
                <ChevronLeftIcon className="h-8 w-8" />
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreHorizontalIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <CircleIcon className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-col items-start w-full bg-white flex flex-1">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 w-full flex items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              여권정보를 확인해주세요.
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center pt-[22px] pb-5 px-6 w-full">
          <img
            className="flex-[0_0_auto]"
            alt="Box"
            src="https://c.animaapp.com/2nKnhQUO/img/box.svg"
          />

          <div className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-0 w-full">
            {formFields.map((field, index) => (
              <div
                key={index}
                className="flex-col w-full items-start gap-1.5 flex"
              >
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="w-full h-[17px]">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          {field.label}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div
                      className={`flex flex-col min-h-[42px] items-start gap-2.5 w-full ${field.bgColor}`}
                    >
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full grow">
                          <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 grow flex items-center">
                            <div className="flex items-center gap-2.5 flex-1 grow">
                              <div className="flex items-center gap-2 flex-1 grow">
                                <div
                                  className={`[display:-webkit-box] items-center justify-center flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] ${field.textColor} text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]`}
                                >
                                  {field.value}
                                </div>
                              </div>
                            </div>
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
            ))}
          </div>
        </div>
      </main>

      <footer className="flex-col justify-end px-6 py-0 w-full flex items-center">
        <div className="min-h-[54px] items-center justify-center gap-2 w-full rounded-xl flex">
          <div className="min-h-[54px] flex-1 grow flex items-start">
            <Button className="h-auto min-h-[54px] flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 grow bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

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
