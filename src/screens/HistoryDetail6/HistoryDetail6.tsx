import { ChevronLeftIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export const HistoryDetail6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35087:108482"
    >
      {/* Header */}
      <header className="flex flex-col items-start w-full bg-white">
        <div className="flex h-14 items-center justify-between px-4 w-full">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVerticalIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 pt-6 pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            취소/환불 상세
          </h1>
        </div>
      </header>

      {/* Cancellation Status Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              취소 정보
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                취소 상태
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#e45d0d] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                환불 처리 중
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                취소 요청일
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                2025.11.02 15:30:00
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                취소 사유
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                고객 요청
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Details Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              환불 정보
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                환불 예정 계좌
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                신한은행 110-***-456789
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                환불 예정일
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                2025.11.05 이내
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Amount Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              환불 금액
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                원래 송금액
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                ₩1,355,000
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                취소 수수료
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                ₩0
              </span>
            </div>
            <div className="flex items-center justify-between w-full pt-2 border-t border-gray-200">
              <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                환불 예정액
              </span>
              <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                ₩1,355,000
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full mt-auto">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
