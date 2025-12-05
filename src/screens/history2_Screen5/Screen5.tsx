import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { AmountDetailsSection } from "./sections/AmountDetailsSection";
import { ReceiverInformationSection } from "./sections/ReceiverInformationSection";
import { SenderInformationSection } from "./sections/SenderInformationSection";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection";

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35176:69129"
    >
      <BackSubHeader />

      <section className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              송금 내역
            </h1>
          </div>
        </div>
      </section>

      <TransactionDetailsSection />
      <SenderInformationSection />
      <ReceiverInformationSection />
      <AmountDetailsSection />

      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full mt-auto">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
