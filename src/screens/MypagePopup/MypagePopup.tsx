import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { PopupHeader } from "../../components/PopupHeader";

export const MypagePopup = (): JSX.Element => {
  return (
    <div
      className="w-full min-h-screen flex"
      data-model-id="36848:90439"
    >
      <div className="flex w-full min-h-screen relative items-center justify-center gap-2.5 px-6 py-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <div className="relative self-stretch mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              유효한 쿠폰번호가 아닙니다.
              <br />
              확인 후 다시 등록해주세요.
            </div>

            <div className="relative self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#acb2c1] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              Error : A80009
            </div>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button className="flex min-h-12 h-auto items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-[14px] hover:bg-[#0d56e4]/90">
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
