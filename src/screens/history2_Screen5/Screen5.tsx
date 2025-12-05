import { ChevronLeftIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { AmountDetailsSection } from "./sections/AmountDetailsSection";
import { ReceiverInformationSection } from "./sections/ReceiverInformationSection";
import { SenderInformationSection } from "./sections/SenderInformationSection";
import { StatusBarSection } from "./sections/StatusBarSection";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection";

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white"
      data-model-id="35176:69129"
    >
      <StatusBarSection />

      <header className="flex flex-col items-start relative w-full bg-white">
        <div className="flex flex-col items-start gap-2 relative w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 relative w-full bg-white">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/yNx7OGE7/img/wechat-hd-6.svg"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreVerticalIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/yNx7OGE7/img/mini-6@2x.png"
            />
          </div>
        </div>
      </header>

      <section className="flex flex-col items-start relative w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 relative w-full">
          <div className="flex flex-col items-start relative w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              송금 내역
            </h1>
          </div>
        </div>
      </section>

      <TransactionDetailsSection />
      <SenderInformationSection />
      <ReceiverInformationSection />
      <AmountDetailsSection />

      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col relative w-full mt-auto">
        <div className="relative w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
