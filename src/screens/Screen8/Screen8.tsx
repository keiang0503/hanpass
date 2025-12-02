import React from "react";
import { CurrencySelectionSection } from "./sections/CurrencySelectionSection";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection";

export const Screen8 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center w-full bg-white"
      data-model-id="40000001:46294"
    >
      <TransactionDetailsSection />
      <CurrencySelectionSection />
    </div>
  );
};
