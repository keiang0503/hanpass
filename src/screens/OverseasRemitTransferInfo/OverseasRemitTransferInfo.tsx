import React from "react";
import { AccountDetailsSection } from "./sections/AccountDetailsSection";
import { CurrencySelectionSection } from "./sections/CurrencySelectionSection";
import { TransferInformationSection } from "./sections/TransferInformationSection";

export const OverseasRemitTransferInfo = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white" data-model-id="35154:42942">
      <TransferInformationSection />
      <CurrencySelectionSection />
      <AccountDetailsSection />
    </div>
  );
};
