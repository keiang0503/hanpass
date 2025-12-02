import React from "react";
import { BankDetailsSection } from "./sections/BankDetailsSection";
import { CurrencyExchangeSection } from "./sections/CurrencyExchangeSection";

export const HomeWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full bg-white"
      data-model-id="40000001:46032"
    >
      <CurrencyExchangeSection />
      <BankDetailsSection />
    </div>
  );
};
