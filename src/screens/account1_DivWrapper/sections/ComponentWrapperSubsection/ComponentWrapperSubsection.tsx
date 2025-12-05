import React from "react";

export const ComponentWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full bg-white">
      <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
        <div className="flex flex-col items-start w-full">
          <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            계좌거래내역 조회
          </h1>
        </div>

        <div className="flex items-start gap-2 w-full">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="w-full font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              2024.07.07 ~ 2024.10.08
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
