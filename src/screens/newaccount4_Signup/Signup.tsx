import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ViewSubsection } from "./sections/ViewSubsection";

export const Signup = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="40000001:46500"
    >
      <div className="flex flex-col flex-1 w-[375px] bg-white">
        <BackSubHeader />

        <main className="flex flex-col flex-1 bg-white">
          <div className="flex flex-col items-start pt-[22px] pb-0 px-6">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호
            </h1>
          </div>

          <div className="flex flex-col flex-1 items-start gap-9 pt-[42px] pb-0 px-6">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="h-[42px] flex flex-col items-start w-full">
                      <div className="flex-1 w-full flex items-center">
                        <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                          <div className="items-center flex-1 flex">
                            <Input
                              type="password"
                              placeholder="비밀번호를 입력해주세요."
                              className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
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
        </main>

        <ViewSubsection />
      </div>
    </div>
  );
};
