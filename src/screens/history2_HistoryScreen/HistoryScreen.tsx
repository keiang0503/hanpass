import { ChevronLeftIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { AdditionalInfoSection } from "./sections/AdditionalInfoSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverviewSection } from "./sections/OverviewSection";
import { StatusBarWrapperSection } from "./sections/StatusBarWrapperSection";
import { TransactionSummarySection } from "./sections/TransactionSummarySection";

export const HistoryScreen = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-start bg-white"
      data-model-id="35176:69519"
    >
      <StatusBarWrapperSection />

      <header className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <nav className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreVerticalIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              송금 내역
            </h1>
          </div>
        </div>
      </section>

      <OverviewSection />
      <AdditionalInfoSection />
      <MainContentSection />
      <TransactionSummarySection />

      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full">
        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </main>
  );
};
