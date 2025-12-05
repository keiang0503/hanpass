import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
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
      <BackSubHeader />

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

      </footer>
    </div>
  );
};
