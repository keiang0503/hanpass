import { ChevronDownIcon, ChevronRightIcon, InfoIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { GiftCardSection } from "./sections/GiftCardSection";
import { MainContentSection } from "./sections/MainContentSection";
import { QRCodeSection } from "./sections/QRCodeSection";
import { WalletSection } from "./sections/WalletSection";

export const Screen7 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white"
      data-model-id="36848:76733"
    >
      <BackSubHeader />

      <main className="flex flex-col items-start gap-[42px] pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <MainContentSection />
        <GiftCardSection />
        <WalletSection />
        <QRCodeSection />

        <section className="flex flex-col items-center gap-3 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <Card className="self-stretch w-full border-[#dfe3ec]">
            <CardContent className="flex min-h-[72px] items-center gap-1.5 p-4">
              <img
                className="relative w-12 h-12"
                alt="Img friend"
                src="https://c.animaapp.com/pWVLYNoL/img/img-friend-02-2.svg"
              />
              <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                <h3 className="self-stretch font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] relative [font-style:var(--title-16-b-font-style)]">
                  친구 초대 내역
                </h3>
              </div>
              <ChevronRightIcon className="relative w-4 h-4 text-[#0b0c0e]" />
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col items-start gap-2 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center gap-0.5 relative self-stretch w-full">
              <InfoIcon className="relative w-5 h-5 text-[#717682]" />
              <div className="flex items-center justify-center gap-2.5 px-0 py-[1.5px] relative flex-1 grow">
                <p className="flex-1 font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#717682] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] relative [font-style:var(--caption-title-13-b-font-style)]">
                  친구초대 유의사항
                </p>
              </div>
              <ChevronDownIcon className="relative w-4 h-4 text-[#717682]" />
            </CollapsibleTrigger>
            <CollapsibleContent></CollapsibleContent>
          </Collapsible>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
          <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90 h-auto">
            <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              친구 초대하기
            </span>
          </Button>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
