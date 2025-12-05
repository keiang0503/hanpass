import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

export const Settings = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:80306"
    >
      <BackSubHeader />

      {/* Page Title */}
      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              휴대전화번호 변경
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-6 relative flex-1 self-stretch w-full grow">
        {/* Current Phone Number */}
        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[17px]">
              <Label className="inline-flex items-center gap-1 relative">
                <span className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    현재 휴대전화번호
                  </span>
                </span>
              </Label>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 self-stretch w-full grow">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow">
                      <button className="inline-flex items-center gap-0.5 relative flex-[0_0_auto] bg-transparent border-none cursor-pointer">
                        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                          +62
                        </span>
                        <ChevronDownIcon className="relative w-4 h-4 text-[#5e616b]" />
                      </button>
                    </div>
                  </div>
                  <div className="relative self-stretch w-full h-0.5">
                    <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Phone Number */}
        <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[17px]">
                <Label className="inline-flex items-center gap-1 relative">
                  <span className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      새 휴대전화번호
                    </span>
                  </span>
                </Label>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                    <div className="flex items-center relative flex-1 self-stretch w-full grow">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                            +82
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch w-full h-0.5">
                      <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Verification Button */}
          <div className="items-start justify-center gap-2.5 flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="min-h-[46px] justify-center flex-1 grow flex items-start relative">
              <Button
                variant="outline"
                className="h-auto flex flex-col min-h-[46px] items-center justify-center gap-2.5 px-[26px] py-1 relative flex-1 grow bg-white rounded-[30px] border border-solid border-[#d0d7d7]"
                disabled
              >
                <div className="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="flex items-center justify-center w-fit mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#acb2c1] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap relative text-center [font-style:var(--title-15-SB-font-style)]">
                      인증 문자 발송
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="flex flex-col items-center justify-end pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button
              className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#b7ccf7] rounded-xl hover:bg-[#b7ccf7]/90"
              disabled
            >
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] relative text-center [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
