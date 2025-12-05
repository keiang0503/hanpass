import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

const periodOptions = [
  { id: "3months", label: "3개월3개월", active: true },
  { id: "6months", label: "6개월6개월", active: false },
  { id: "12months", label: "12개월12개월", active: false },
  { id: "custom", label: "직접입력직접입력직접입력", active: false },
];

const noticeItems = [
  "조회 기간은 최대 12개월까지 조회할 수 있어요.",
  "거래내역은 최대 5년 전까지 조회할 수 있어요.",
];

export const Screen6 = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("3months");

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:89288"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            서비스 이용 확인증 발급
          </h1>
          <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            발급받으실 서비스의 조회 기간을 선택해 주세요.
          </p>
        </section>

        <section className="flex flex-col gap-9 pt-[42px] pb-14 px-6 flex-1 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              서비스
            </label>
            <div className="flex flex-col min-h-[42px] w-full bg-[#f7f7f8]">
              <div className="flex items-center h-[42px] w-full">
                <div className="flex items-center gap-2 flex-1 pl-1">
                  <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                    해외송금 내역
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-[#dfe3ec]" />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              조회기간
            </label>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-wrap gap-2 w-full">
                {periodOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    onClick={() => setSelectedPeriod(option.id)}
                    className={`h-auto px-4 py-3 rounded-[22px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)] ${
                      selectedPeriod === option.id
                        ? "bg-[#e9f1ff] text-[#0d56e4] border-[#b7ccf7]"
                        : "bg-white text-[#5e616b] border-[#dfe3ec]"
                    }`}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              <div className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex flex-col min-h-[42px] w-full bg-[#f7f7f8]">
                    <div className="flex items-center h-[42px] w-full">
                      <div className="flex items-center flex-1 pl-1">
                        <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                          2024/10/02
                        </div>
                      </div>
                      <div className="flex items-center pr-2">
                        <CalendarIcon className="w-6 h-6 text-[#5e616b]" />
                      </div>
                    </div>
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>

                <div className="flex items-center py-5 w-2.5">
                  <img
                    className="w-full h-[1.5px]"
                    alt="Line"
                    src="https://c.animaapp.com/Oax14zk6/img/line-437-2.svg"
                  />
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex flex-col min-h-[42px] w-full bg-[#f7f7f8]">
                    <div className="flex items-center h-[42px] w-full">
                      <div className="flex items-center flex-1 pl-1">
                        <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                          2025/10/02
                        </div>
                      </div>
                      <div className="flex items-center pr-2">
                        <CalendarIcon className="w-6 h-6 text-[#5e616b]" />
                      </div>
                    </div>
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col px-6 py-0 w-full bg-white">
        <div className="flex flex-col gap-1.5 pb-3.5 w-full">
          <div className="flex items-center gap-0.5 w-full">
            <img
              className="w-5 h-5"
              alt="Img ars notice"
              src="https://c.animaapp.com/Oax14zk6/img/img-ars-notice-3.svg"
            />
            <div className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            {noticeItems.map((notice, index) => (
              <div key={index} className="flex items-start gap-[5px] w-full">
                <div className="relative w-2 h-3.5">
                  <div className="absolute top-[calc(50%-1px)] left-[calc(50%-2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] flex-1 [font-style:var(--caption-title-13-r-font-style)]">
                  {notice}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-center min-h-[54px] rounded-xl shadow-[0px_-20px_20px_#ffffff] w-full">
            <Button className="h-auto min-h-[54px] flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl px-[26px] py-1.5 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </Button>
          </div>
        </div>

        <div className="h-4 w-full" />
      </footer>
    </div>
  );
};
