import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { PopupHeader } from "../../components/PopupHeader";

export const SignupHistoryDialog = (): JSX.Element => {
  return (
    <div
      className="w-full h-screen flex"
      data-model-id="34958:264282"
    >
      <div className="flex w-full h-screen relative items-center justify-center gap-2.5 px-6 py-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <p className="self-stretch mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              이전 회원가입을 진행하던 이력이 있습니다. 이어서 진행할까요?
            </p>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button
                variant="secondary"
                className="w-[100px] h-auto px-2 py-1 bg-[#afb4ca] hover:bg-[#afb4ca]/90 min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                  취소
                </span>
              </Button>

              <Button
                variant="default"
                className="h-auto px-[26px] py-1.5 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <PopupHeader />
      </div>
    </div>
  );
};
