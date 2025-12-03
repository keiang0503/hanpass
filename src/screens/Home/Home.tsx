import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ActionBar } from "../../components/common/ActionBar";
import { CurrencyExchangeSection } from "../HomeWrapper/sections/CurrencyExchangeSection";

export const Home = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full bg-white pb-20"
      data-model-id="40000001:46231"
    >
      <BackSubHeader backTo="/" />
      <CurrencyExchangeSection />
      <ActionBar activeId="transfer" />
    </div>
  );
};
