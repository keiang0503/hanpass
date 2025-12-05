import React from "react";
import { AmountDetailsSection } from "./sections/AmountDetailsSection";
import { RecipientInfoSection } from "./sections/RecipientInfoSection";
import { SenderInfoSection } from "./sections/SenderInfoSection";
import { StatusBarSection } from "./sections/StatusBarSection";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection";

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35087:108482"
    >
      <StatusBarSection />

      <header className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/yNx7OGE7/img/wechat-hd-6.svg"
              />
            </div>

            <img
              className="h-8 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/yNx7OGE7/img/mini-6@2x.png"
            />
          </div>
        </div>
      </header>

      <section className="flex flex-col w-full bg-white items-start">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              송금 내역
            </h1>
          </div>
        </div>
      </section>

      <TransactionDetailsSection />
      <RecipientInfoSection />
      <SenderInfoSection />
      <AmountDetailsSection />

      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full mt-auto">
        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
