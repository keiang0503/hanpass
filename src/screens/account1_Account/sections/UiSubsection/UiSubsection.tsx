import React from "react";
import { Button } from "../../../../components/ui/button";

export const UiSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex flex-col items-start w-full">
        <header className="flex h-[54px] items-center justify-between px-5 w-full bg-white">
          <h2 className="font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
            계좌관리
          </h2>

          <Button
            variant="outline"
            className="h-auto px-2 py-1.5 bg-white border-[#0d56e4] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)] hover:bg-[#0d56e4]/5"
          >
            주계좌 설정
          </Button>
        </header>
      </div>
    </section>
  );
};
