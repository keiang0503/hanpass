import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const idTypeOptions = [
  { id: "resident", label: "주민등록증", selected: true },
  { id: "driver", label: "운전면허증", selected: false },
];

const inputFields = [
  { label: "주민등록번번호", placeholder: "- 없이 입력해주세요." },
  { label: "주민등록증 발급일자", placeholder: "- 없이 입력해주세요." },
];

export const Screen7 = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] relative bg-white"
      data-model-id="34892:275632"
    >
      <div className="flex flex-col w-full h-full bg-white">
        <BackSubHeader />

        <main className="flex flex-col flex-1 w-full bg-white">
          <section className="flex flex-col items-start bg-white w-full">
            <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
              <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                고객정보를 등록해주세요.
              </h1>

              <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                2026년 1월부터는 신분증번호를 등록하셔야 해외송금 할 수 있어요.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 flex-1 w-full">
            <div className="flex flex-col items-start gap-2 bg-white w-full">
              <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                신분증 종류
              </Label>

              <div className="flex items-start gap-2.5 w-full bg-white">
                <div className="flex items-center flex-1 rounded-[10px] overflow-hidden border-[10px] border-solid border-[#dfe3ec]">
                  {idTypeOptions.map((option, index) => (
                    <React.Fragment key={option.id}>
                      {index > 0 && (
                        <div className="w-px h-full bg-[#dfe3ec]" />
                      )}
                      <button
                        className={`flex items-center justify-center flex-1 ${
                          option.selected ? "bg-[#e9f1ff]" : "bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-[11px] px-3.5 py-2.5">
                          <img
                            className="w-[26px] h-[26px]"
                            alt="Check"
                            src={
                              option.selected
                                ? "https://c.animaapp.com/Fk3yL3l2/img/ico26-check-01.svg"
                                : "https://c.animaapp.com/Fk3yL3l2/img/ico26-check-01-1.svg"
                            }
                          />
                          <div
                            className={`${
                              option.selected
                                ? "text-[#0d56e4]"
                                : "text-[#5e616b]"
                            } text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap font-title-15-b font-[number:var(--title-15-b-font-weight)] [font-style:var(--title-15-b-font-style)]`}
                          >
                            {option.label}
                          </div>
                        </div>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {inputFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-[22px] w-full"
              >
                <div className="flex flex-col w-full items-start gap-1.5">
                  <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                    {field.label}
                  </Label>

                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                            <Input
                              className="flex-1 border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
                              placeholder={field.placeholder}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>

        <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
          <div className="flex flex-col items-center gap-6 w-full z-0">
            <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
              <button
                disabled
                className="min-h-[54px] flex-1 bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl h-auto px-4 py-2"
              >
                <span className="flex-1 text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] font-title-16-b font-[number:var(--title-16-b-font-weight)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </button>
            </div>
          </div>

          <div className="w-full h-4 z-[-1]" />
        </footer>
      </div>
    </div>
  );
};
