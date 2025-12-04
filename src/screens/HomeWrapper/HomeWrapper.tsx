import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ActionBar } from "../../components/common/ActionBar";
import { CurrencyExchangeSection } from "./sections/CurrencyExchangeSection";

export const HomeWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-white pb-20"
      data-model-id="40000001:46032"
    >
      <BackSubHeader backTo="/" />
      <CurrencyExchangeSection />
      <ActionBar activeId="transfer" />
    </div>
  );
};
