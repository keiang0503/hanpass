import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ViewSubsection } from "./sections/ViewSubsection";

export const Signup = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-375 min-h-800 flex"
      data-model-id="40000001:46500"
    >
      <div className="flex flex-col flex-1 w-375 bg-white">
        <BackSubHeader />

        <main className="flex flex-col flex-1 bg-white">
          <div className="flex flex-col items-start pt-22 pb-0 px-6">
            <h1 className="font-title-24-b text-title-24-b-style text-grayscale-01">
              비밀번호
            </h1>
          </div>

          <div className="flex flex-col flex-1 items-start gap-9 pt-42 pb-0 px-6">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-42 items-start gap-2.5 w-full">
                    <div className="h-42 flex flex-col items-start w-full">
                      <div className="flex-1 w-full flex items-center">
                        <div className="gap-7 pl-1 pr-0 py-0 flex-1 flex items-center">
                          <div className="items-center flex-1 flex">
                            <Input
                              type="password"
                              placeholder="비밀번호를 입력해주세요."
                              className="border-0 border-b-2 border-grayscale-bg-09 rounded-none px-0 h-auto pb-0 font-body-20-r text-body-20-r-style placeholder:text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
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
