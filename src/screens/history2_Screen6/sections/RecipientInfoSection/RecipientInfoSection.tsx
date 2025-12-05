import React from "react";

export const RecipientInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 pt-9 pb-0 px-6 w-full">
      <div className="flex flex-col items-center gap-3.5 w-full">
        <header className="flex flex-col items-center w-full">
          <div className="flex items-start gap-2 w-full">
            <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
              <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                받는 사람
              </h2>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-0.5 w-full">
              <div className="flex items-start gap-2 w-full">
                <span className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  휴대전화번호
                </span>

                <span className="font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] flex-1 mt-[-1.00px] [font-style:var(--body-14-SB-font-style)]">
                  9851000144
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
