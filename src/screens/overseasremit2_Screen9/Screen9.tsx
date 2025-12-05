import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { AccountDetailsSection } from "./sections/AccountDetailsSection";
import { CurrencySelectionSection } from "./sections/CurrencySelectionSection";

export const Screen9 = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white" data-model-id="35154:42942">
      <BackSubHeader />
      <CurrencySelectionSection />
      <AccountDetailsSection />
    </div>
  );
};
