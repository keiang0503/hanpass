import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const SettingsScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79128"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            휴대폰 번호를 입력해주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 gap-9 pt-[42px] pb-6 px-6 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              국가번호
            </Label>

            <div className="flex flex-col w-full">
              <button className="flex items-center w-full h-[42px] border-b-2 border-[#4c67f1] bg-transparent">
                <div className="inline-flex items-center gap-2.5 pl-0 pr-1 py-0">
                  <div className="w-[30px] h-[30px] bg-[url(https://c.animaapp.com/kp7cm7rf/img/country.svg)] bg-[100%_100%]" />
                </div>

                <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                      대한민국
                    </span>
                    <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                      KR +82
                    </span>
                  </div>
                </div>

                <ChevronDownIcon className="w-[15px] h-[9px] text-black" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              휴대폰번호
            </Label>

            <div className="flex flex-col w-full">
              <div className="flex items-center w-full h-[42px] border-b border-[#dfe3ec]">
                <Input
                  type="tel"
                  placeholder="숫자만 입력하세요"
                  className="flex-1 border-0 bg-transparent px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center pt-6 pb-0 px-6 w-full">
        <Button
          disabled
          className="w-full min-h-[54px] bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl h-auto"
        >
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            인증번호 요청
          </span>
        </Button>

        <div className="w-full h-4" />

      </footer>
    </div>
  );
};
