import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ReferralInfoSection } from "./sections/ReferralInfoSection";
import { TransactionSummarySection } from "./sections/TransactionSummarySection";
import { UserInfoSection } from "./sections/UserInfoSection";
import { WalletSection } from "./sections/WalletSection";

export const Mypage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white min-h-screen"
      data-model-id="36848:76489"
    >
      <BackSubHeader />
      <WalletSection />
      <TransactionSummarySection />
      <ReferralInfoSection />

      <section className="flex flex-col items-center gap-3 px-6 py-0 relative self-stretch w-full">
        <Card className="w-full border-[#dfe3ec] rounded-2xl">
          <CardContent className="flex min-h-[72px] items-center gap-1.5 p-4">
            <img
              className="relative w-12 h-12"
              alt="Img friend"
              src="https://c.animaapp.com/pWVLYNoL/img/img-friend-02.svg"
            />

            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <h3 className="relative self-stretch font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                친구 초대 내역
              </h3>
            </div>

            <ChevronRightIcon className="relative w-4 h-4" />
          </CardContent>
        </Card>
      </section>

      <UserInfoSection />

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full">
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
