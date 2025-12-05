import { ChevronLeftIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { BankDetailsSection } from "../history2_HistoryWrapper/sections/BankDetailsSection";
import { NotificationStatusBarSection } from "../history2_HistoryWrapper/sections/NotificationStatusBarSection";
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
      <NotificationStatusBarSection />

      <header className="flex flex-col items-start w-full bg-white">
        <div className="flex h-14 items-center justify-between px-4 w-full">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVerticalIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 pt-6 pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 내역
          </h1>
        </div>
      </header>

      <TransactionDetailsSection />

      <RecipientInfoSection />
      <SenderInfoSection />
      <BankDetailsSection />
      <AmountDetailsSection />

      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full mt-auto">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
