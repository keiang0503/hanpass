import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { AmountDetailsSection } from "./sections/AmountDetailsSection";
import { BankDetailsSection } from "./sections/BankDetailsSection";
import { RecipientInfoSection } from "./sections/RecipientInfoSection";
import { SenderInfoSection } from "./sections/SenderInfoSection";

export const HistoryWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35176:68739"
    >
      <BackSubHeader />

      <section className="flex flex-col w-full bg-white items-start">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 내역
          </h1>
        </div>
      </section>

      <main className="flex flex-col w-full">
        <RecipientInfoSection />
        <SenderInfoSection />
        <BankDetailsSection />
        <AmountDetailsSection />
      </main>

      <footer className="flex flex-col items-center justify-end pt-6 pb-0 px-6 w-full mt-auto">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
