import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

const periodOptions = [
  { label: "3개월", value: "3months" },
  { label: "6개월", value: "6months" },
  { label: "12개월", value: "12months" },
  { label: "직접입력", value: "custom" },
];

const infoItems = [
  "조회 기간은 최대 12개월까지 조회할 수 있어요.",
  "거래내역은 최대 5년 전까지 조회할 수 있어요.",
];

export const DivWrapper = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("custom");

  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="36848:89330"
    >
      <BackSubHeader />

      <main className="flex flex-col items-start w-full flex-1 bg-white">
        <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start relative w-full">
            <h1 className="relative mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              서비스 이용 확인증 발급
            </h1>
          </div>

          <div className="flex items-start gap-2 relative w-full">
            <div className="flex flex-col items-center justify-center relative flex-1">
              <p className="text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] relative mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] [font-style:var(--body-16-r-font-style)]">
                발급받으실 서비스의 조회 기간을 선택해 주세요.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start gap-9 pt-[42px] pb-14 px-6 relative flex-1 w-full">
          <div className="flex flex-col items-start gap-[22px] relative w-full">
            <div className="flex flex-col items-start gap-9 relative w-full">
              <div className="flex flex-col items-start gap-1.5 relative w-full">
                <div className="flex flex-col items-start gap-2.5 relative w-full">
                  <div className="relative w-full h-[17px]">
                    <div className="inline-flex items-center gap-1 relative">
                      <div className="inline-flex items-center gap-0.5 relative">
                        <label className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          서비스
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 relative w-full">
                  <div className="flex flex-col items-start gap-2.5 relative w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative w-full bg-[#f7f7f8]">
                      <div className="flex flex-col h-[42px] items-start relative w-full">
                        <div className="flex items-center relative flex-1 w-full">
                          <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1">
                            <div className="flex items-center gap-2.5 relative flex-1">
                              <div className="flex items-center gap-2 relative flex-1">
                                <div className="[display:-webkit-box] items-center justify-center flex-1 text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)]">
                                  해외송금 내역
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full h-0.5">
                          <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative w-full">
                <div className="flex flex-col items-start gap-1.5 relative w-full">
                  <div className="flex flex-col items-start gap-2.5 relative w-full">
                    <div className="relative w-full h-[17px]">
                      <div className="inline-flex items-center gap-1 relative">
                        <div className="inline-flex items-center gap-0.5 relative">
                          <label className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                            조회기간
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 relative w-full">
                  <div className="flex flex-wrap items-start gap-[8px_8px] relative w-full">
                    {periodOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className={`h-auto inline-flex items-center justify-center px-4 py-3 rounded-[22px] border ${
                          selectedPeriod === option.value
                            ? "bg-[#e9f1ff] border-[#b7ccf7]"
                            : "bg-white border-[#dfe3ec]"
                        }`}
                        onClick={() => setSelectedPeriod(option.value)}
                      >
                        <span
                          className={`mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap [font-style:var(--title-15-SB-font-style)] ${
                            selectedPeriod === option.value
                              ? "text-[#0d56e4]"
                              : "text-[#5e616b]"
                          }`}
                        >
                          {option.label}
                        </span>
                      </Button>
                    ))}
                  </div>

                  <div className="flex items-start gap-2.5 relative w-full">
                    <div className="flex flex-col items-start gap-1.5 relative flex-1">
                      <div className="flex flex-col items-start gap-2.5 relative w-full">
                        <div className="flex flex-col items-start gap-2.5 relative w-full">
                          <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative w-full">
                            <div className="flex flex-col h-[42px] items-start relative w-full">
                              <div className="flex items-center relative flex-1 w-full">
                                <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1">
                                  <div className="flex items-center relative flex-1">
                                    <div className="flex items-center gap-2 relative flex-1">
                                      <div className="relative [display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                                        시작일
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="inline-flex items-center justify-end gap-2.5 pl-0 pr-2 py-0 relative">
                                  <CalendarIcon className="w-6 h-6 text-[#acb2c1]" />
                                </div>
                              </div>
                              <div className="relative w-full h-0.5 bg-[#f10000]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2.5 relative w-full">
                        <div className="flex flex-col items-start pt-2 pb-0 px-0 relative w-full">
                          <p className="relative mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                            기간을 선택해 주세요.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-2.5 items-start gap-2.5 px-0 py-5 relative">
                      <img
                        className="relative w-full h-[1.5px] mt-[-1.50px]"
                        alt="Line"
                        src="https://c.animaapp.com/Oax14zk6/img/line-437-2.svg"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-1.5 relative flex-1">
                      <div className="flex flex-col items-start gap-2.5 relative w-full">
                        <div className="flex flex-col items-start gap-2.5 relative w-full">
                          <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative w-full">
                            <div className="flex flex-col h-[42px] items-start relative w-full">
                              <div className="flex items-center relative flex-1 w-full">
                                <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1">
                                  <div className="flex items-center relative flex-1">
                                    <div className="flex items-center gap-2 relative flex-1">
                                      <div className="relative [display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                                        종료일
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="inline-flex items-center justify-end gap-2.5 pl-0 pr-2 py-0 relative">
                                  <CalendarIcon className="w-6 h-6 text-[#acb2c1]" />
                                </div>
                              </div>
                              <div className="relative w-full h-0.5 bg-[#f10000]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 relative w-full z-[3]">
          <div className="flex items-center gap-0.5 relative w-full">
            <img
              className="relative w-5 h-5"
              alt="Img ars notice"
              src="https://c.animaapp.com/Oax14zk6/img/img-ars-notice-2.svg"
            />
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap relative w-fit [font-style:var(--body-14-b-font-style)]">
              안내사항
            </span>
          </div>

          <div className="flex flex-col gap-2 items-start relative w-full">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="gap-[5px] flex items-start relative w-full"
              >
                <div className="relative w-2 h-3.5">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <p className="mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] relative flex-1 [font-style:var(--caption-title-13-r-font-style)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative w-full">
            <div className="min-h-[54px] flex-1 flex items-start relative">
              <Button
                disabled
                className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 bg-[#b7ccf7] rounded-xl hover:bg-[#b7ccf7]"
              >
                <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] relative flex-1 [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-4 z-0" />
      </footer>
    </div>
  );
};
