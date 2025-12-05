import { ChevronLeftIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { AmountDetailsSection } from "./sections/AmountDetailsSection";
import { BankDetailsSection } from "./sections/BankDetailsSection";
import { NotificationStatusBarSection } from "./sections/NotificationStatusBarSection";
import { RecipientInfoSection } from "./sections/RecipientInfoSection";
import { SenderInfoSection } from "./sections/SenderInfoSection";

export const HistoryWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35176:68739"
    >
      <NotificationStatusBarSection />

      <header className="flex flex-col items-start w-full bg-white">
        <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreVerticalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <XIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 내역
          </h1>
        </div>
      </header>

      <main className="flex flex-col w-full">
        <RecipientInfoSection />
        <SenderInfoSection />
        <BankDetailsSection />
        <AmountDetailsSection />
      </main>

      <footer className="flex flex-col items-center justify-end pt-6 pb-0 px-6 w-full mt-auto">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
