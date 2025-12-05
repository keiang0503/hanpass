import { InfoIcon } from "lucide-react";
import React from "react";

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 pt-1.5 pb-[22px] px-6 w-full">
      <div className="flex min-h-[52px] items-center gap-1 pl-4 pr-3 py-3 w-full bg-[#f4f7fd] rounded-xl overflow-hidden border border-solid border-[#e9f1ff]">
        <div className="flex flex-wrap items-center gap-1 flex-1">
          <span className="flex-1 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#0b0c0e] text-sm tracking-[-0.28px] leading-[18.2px]">
            계좌내역조회 무료제공 횟수
          </span>

          <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0d56e4] whitespace-nowrap text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
            8회
          </span>
        </div>

        <InfoIcon className="w-5 h-5 text-[#0b0c0e]" />
      </div>
    </section>
  );
};
