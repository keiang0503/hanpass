import { ChevronDownIcon, ChevronRightIcon, InfoIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CodeSharingSection } from "./sections/CodeSharingSection";
import { CouponSection } from "./sections/CouponSection";
import { QRCodeSection } from "./sections/QRCodeSection";
import { ReferralSection } from "./sections/ReferralSection";
import { WalletSection } from "./sections/WalletSection";

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white min-h-screen"
      data-model-id="36848:76611"
    >
      <WalletSection />

      <header className="flex flex-col items-start relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
              <img
                className="relative w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/pWVLYNoL/img/wechat-hd-4.svg"
              />
            </div>

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/pWVLYNoL/img/mini-6@2x.png"
            />
          </div>
        </div>
      </header>

      <main className="flex flex-col items-start gap-[42px] pt-0 pb-6 px-0 relative self-stretch w-full">
        <CouponSection />
        <QRCodeSection />
        <ReferralSection />
        <CodeSharingSection />

        <section className="flex flex-col items-center gap-3 px-6 py-0 relative self-stretch w-full">
          <Card className="min-h-[72px] self-stretch w-full border-[#dfe3ec] rounded-2xl">
            <CardContent className="flex items-center gap-1.5 p-4">
              <img
                className="relative w-12 h-12"
                alt="Img friend"
                src="https://c.animaapp.com/pWVLYNoL/img/img-friend-02-1.svg"
              />

              <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                <h3 className="self-stretch font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] relative mt-[-1.00px] [font-style:var(--title-16-b-font-style)]">
                  친구 초대 내역
                </h3>
              </div>

              <ChevronRightIcon className="relative w-4 h-4" />
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col items-start gap-2 px-6 py-0 relative self-stretch w-full">
          <button className="flex items-center gap-0.5 relative self-stretch w-full bg-transparent border-0 p-0 cursor-pointer">
            <InfoIcon className="relative w-5 h-5 text-[#717682]" />

            <div className="flex items-center justify-center gap-2.5 px-0 py-[1.5px] relative flex-1 grow">
              <p className="flex-1 font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#717682] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] relative mt-[-1.00px] [font-style:var(--caption-title-13-b-font-style)] text-left">
                친구초대 유의사항
              </p>
            </div>

            <ChevronDownIcon className="relative w-4 h-4 text-[#717682]" />
          </button>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white mt-auto">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full">
          <div className="flex min-h-[54px] items-start relative flex-1 grow">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90 h-auto">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                친구 초대하기
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative ml-[-8.50px] mr-[-8.50px]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
