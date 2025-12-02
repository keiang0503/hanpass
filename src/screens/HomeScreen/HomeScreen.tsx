import React from "react";
import { AmountInputSection } from "./sections/AmountInputSection";
import { ExchangeRateSection } from "./sections/ExchangeRateSection";

export const HomeScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full bg-white"
      data-model-id="40000001:46356"
    >
      <ExchangeRateSection />
      <AmountInputSection />
    </div>
  );
};
