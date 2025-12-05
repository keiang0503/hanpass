import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const MypageWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="36848:75801"
    >
      <PopupHeader />

      <div className="flex flex-col items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-[30px] px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />

              <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <h2 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    송금 한도 안내
                  </h2>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="gap-[22px] relative self-stretch flex-[0_0_auto] flex flex-col items-start w-full">
            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] relative mt-[-1.00px] [font-style:var(--body-16-r-font-style)]">
              지금 보시는 해외송금 한도는 통합 한도예요.
              <br />
              2026년 1월 1일부터 한국은행이 개인별 해외송금 한도를 모든
              금융기관을 합해서 관리해요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
