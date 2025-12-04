import { ChevronLeftIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const CouponListSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[30px] w-full">
      <div className="flex flex-col items-start w-full">
        <header className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreVerticalIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-start w-full bg-white">
          <div className="flex-col pt-[22px] pb-0 px-6 flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                내 쿠폰
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 px-6 py-0 w-full">
        <div className="flex flex-col h-[54px] items-center gap-1 w-full">
          <div className="w-full h-[19px]">
            <div className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              할인 받은 총 금액
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-[11px] w-full">
            <div className="font-pentendard-titlte-24-b font-[number:var(--pentendard-titlte-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--pentendard-titlte-24-b-font-size)] tracking-[var(--pentendard-titlte-24-b-letter-spacing)] leading-[var(--pentendard-titlte-24-b-line-height)] [font-style:var(--pentendard-titlte-24-b-font-style)]">
              100,000 KRW
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[102px] items-start gap-2 p-4 w-full bg-[#f7f7f8] rounded-[10px]">
          <div className="text-[#84878d] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] [font-style:var(--caption-title-13-r-font-style)]">
            쿠폰등록
          </div>

          <div className="h-10 flex items-start gap-2 w-full">
            <div className="flex flex-col h-10 items-start justify-center flex-1">
              <Input
                placeholder="쿠폰번호를 입력해주세요"
                className="h-10 px-3 rounded-[10px] border border-solid border-[#afb4ca] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] placeholder:text-[#acb2c1]"
              />
            </div>

            <Button
              variant="outline"
              className="h-10 min-w-[54px] px-2.5 py-1.5 rounded-lg border border-solid border-[#afb4ca] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#acb2c1] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              등록
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
