import React from "react";
import { BankDetailsSection } from "../HomeWrapper/sections/BankDetailsSection";
import { CurrencyExchangeSection } from "../HomeWrapper/sections/CurrencyExchangeSection";

export const Home = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full bg-white"
      data-model-id="40000001:46231"
    >
      <CurrencyExchangeSection />
      <BankDetailsSection />
    </div>
  );
};
