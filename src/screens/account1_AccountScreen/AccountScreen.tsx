import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const AccountScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end gap-2.5 relative bg-overlay-dark"
      data-model-id="2674:67358"
    >
      {/* Header */}
      <PopupHeader />

      <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col items-center gap-1.5 px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />

              <Button
                variant="ghost"
                size="icon"
                className="relative w-[18px] h-[18px] p-0 h-auto"
              >
                <XIcon className="w-[18px] h-[18px] text-gray-400" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <div className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    계좌내역조회 무료제공 횟수
                  </div>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="pt-0 pb-[18px] px-0 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex min-h-8 items-center relative flex-1 self-stretch grow">
              <div className="flex items-center gap-1.5 relative flex-1 grow">
                <div className="relative flex-1 mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                  ※ 계좌거래내역은 자동계좌인 경우에만 조회할 수 있습니다.
                  <br />※ 계좌거래내역은 월 10회 까지 무료로 조회할 수 있으며,
                  매월 1일 초기화됩니다.
                  <br />※ 무료제공 횟수가 모두 소진될 경우, 건 당 100원의
                  수수료가 발생합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
