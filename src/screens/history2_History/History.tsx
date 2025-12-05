import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { BankDetailsSection } from "../history2_HistoryWrapper/sections/BankDetailsSection";
import { RecipientInfoSection } from "../history2_Screen4/sections/RecipientInfoSection";
import { AmountDetailsSection } from "../history2_Screen6/sections/AmountDetailsSection";
import { SenderInfoSection } from "../history2_Screen6/sections/SenderInfoSection";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection";

export const History = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35176:69324"
    >
      <BackSubHeader />

      <section className="flex flex-col w-full bg-white items-start">
        <div className="flex flex-col items-start gap-2 pt-6 pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 내역
          </h1>
        </div>
      </section>

      <TransactionDetailsSection />

      <RecipientInfoSection />
      <SenderInfoSection />
      <BankDetailsSection />
      <AmountDetailsSection />

      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full mt-auto">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
