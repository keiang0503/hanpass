import { InfoIcon } from "lucide-react";
import React, { useState } from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const Servicecert = (): JSX.Element => {
  const [selectedMethod, setSelectedMethod] = useState<"email" | "pdf">(
    "email",
  );

  return (
    <div
      className="flex flex-col min-h-screen items-end bg-white"
      data-model-id="40000008:1186774"
    >
      <BackSubHeader />

      <main className="flex-col items-start bg-white flex w-full">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 w-full flex items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              서비스 이용 확인증 발급
            </h1>
          </div>

          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                발급 방법을 선택해주세요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 flex-1 w-full">
        <div className="flex-col items-start gap-2 bg-white flex w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    발급 방법
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 w-full">
            <div className="flex items-center flex-1 rounded-[10px] overflow-hidden border border-solid border-[#dfe3ec]">
              <Button
                variant="ghost"
                className={`flex items-center justify-center flex-1 h-auto px-3.5 py-2.5 rounded-none ${
                  selectedMethod === "email" ? "bg-[#e9f1ff]" : "bg-white"
                }`}
                onClick={() => setSelectedMethod("email")}
              >
                <div className="flex items-center justify-center gap-[11px]">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Check"
                    src={
                      selectedMethod === "email"
                        ? "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01.svg"
                        : "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01-1.svg"
                    }
                  />
                  <div className="inline-flex flex-col items-center justify-center gap-2.5">
                    <span
                      className={`font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                        selectedMethod === "email"
                          ? "text-[#0d56e4]"
                          : "text-[#5e616b]"
                      }`}
                    >
                      이메일
                    </span>
                  </div>
                </div>
              </Button>

              <div className="w-px h-full bg-[#dfe3ec]" />

              <Button
                variant="ghost"
                className={`flex items-center justify-center flex-1 h-auto px-3.5 py-2.5 rounded-none ${
                  selectedMethod === "pdf" ? "bg-[#e9f1ff]" : "bg-white"
                }`}
                onClick={() => setSelectedMethod("pdf")}
              >
                <div className="flex items-center justify-center gap-[11px]">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Check"
                    src={
                      selectedMethod === "pdf"
                        ? "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01.svg"
                        : "https://c.animaapp.com/yNx7OGE7/img/ico26-check-01-1.svg"
                    }
                  />
                  <div className="inline-flex flex-col items-center justify-center gap-2.5">
                    <span
                      className={`font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                        selectedMethod === "pdf"
                          ? "text-[#0d56e4]"
                          : "text-[#5e616b]"
                      }`}
                    >
                      PDF
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[22px] w-full">
          <div className="flex flex-col w-full items-start gap-1.5">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      이메일
                    </Label>
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
                              type="email"
                              defaultValue="example@emil.com"
                              className="flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#dfe3ec] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
                            />
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
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="gap-0.5 w-full flex items-center">
            <InfoIcon className="w-5 h-5 text-[#757b88]" />
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </span>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="relative w-2 h-3.5">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                이메일을 못 받으신 경우 스팸메일함도 확인해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
            <div className="min-h-[54px] flex-1 flex items-start">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 h-auto bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  발급하기
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-4 z-0" />
      </footer>
    </div>
  );
};
