import { BackSubHeader } from "../../components/BackSubHeader";
import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Keypad } from "../../components/common/Keypad";

export const VerificationCodeWechat = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white" data-model-id="40000001:45838">
      {/* Navigation Header with WeChat Logo */}
      <BackSubHeader backTo="/" />

      {/* Title Section */}
      <section className="flex flex-col w-full bg-white pt-[22px] px-6">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          인증번호를 입력해 주세요.
        </h1>
      </section>

      {/* Input Section */}
      <section className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                    인증 번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex flex-1 w-full items-center">
                    <div className="flex gap-[7px] pl-1 pr-0 py-0 flex-1 items-center">
                      <div className="flex items-center flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            placeholder="4자리 숫자"
                            defaultValue="3288"
                            className="border-0 border-b-0 rounded-none p-0 h-auto shadow-none font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex justify-end gap-2.5 pl-0 pr-2 py-0 items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto w-auto p-0 hover:bg-transparent"
                      >
                        <XIcon className="w-[18px] h-[18px] text-[#85888e]" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
                      02:49
                    </div>
                  </div>

                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2.5 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-end gap-2.5 w-full items-center">
                <div className="flex items-center justify-end flex-1">
                  <div className="flex flex-col items-end justify-center gap-2.5 flex-1 rounded-lg">
                    <Button
                      variant="link"
                      className="h-auto p-0 font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]"
                    >
                      시간연장
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keypad Section */}
      <section className="flex flex-col justify-end gap-2.5 w-full">
        <Keypad submitButtonColor="#0d56e4" />
      </section>
    </div>
  );
};
