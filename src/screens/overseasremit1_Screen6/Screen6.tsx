import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { AdditionalNotesSection } from "./sections/AdditionalNotesSection";
import { PaymentMethodSection } from "./sections/PaymentMethodSection";
import { ReceiveCountrySection } from "./sections/ReceiveCountrySection";
import { SenderInformationSection } from "./sections/SenderInformationSection";

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white w-full min-h-screen"
      data-model-id="34822:589587"
    >
      <BackSubHeader />

      <section className="flex flex-col items-start bg-white relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 self-stretch w-full">
          <h1 className="relative self-stretch font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 대상자 등록
          </h1>
        </div>
      </section>

      <ReceiveCountrySection />
      <Separator className="h-3 bg-[#f7f7f8]" />

      <PaymentMethodSection />
      <Separator className="h-3 bg-[#f7f7f8]" />

      <SenderInformationSection />
      <Separator className="h-3 bg-[#f7f7f8]" />

      <AdditionalNotesSection />

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full mt-auto">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex relative self-stretch w-full">
          <Button
            className="h-auto min-h-[54px] flex-1 bg-[#b7ccf7] hover:bg-[#a3bef5] rounded-xl px-[26px] py-1.5"
            disabled
          >
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              송금대상자 등록
            </span>
          </Button>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
