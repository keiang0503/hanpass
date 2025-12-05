import { XIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const BottomsheetSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[3px] pt-0 pb-6 px-6 w-full bg-white rounded-[30px_30px_0px_0px]">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-end w-full">
          <div className="w-full h-[22px]" />
          <button className="w-[18px] h-[18px] p-0 border-0 bg-transparent cursor-pointer">
            <XIcon className="w-[18px] h-[18px] text-gray-600" />
          </button>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="flex items-start gap-2 w-full">
            <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
              <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                인증서 비밀번호를 입력해 주세요
              </h2>
            </div>
          </div>

          <div className="w-full max-h-[26px] h-[26px] opacity-30" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-1.5 w-full">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
              <div className="flex flex-col h-[42px] items-start w-full">
                <div className="flex items-center flex-1 w-full">
                  <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                    <div className="flex items-center flex-1">
                      <div className="flex items-center gap-2 flex-1">
                        <Input
                          type="password"
                          placeholder="인증서 비밀번호를 입력해 주세요"
                          className="flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 border-b-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#acb2c1] h-auto"
                        />
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
    </section>
  );
};
