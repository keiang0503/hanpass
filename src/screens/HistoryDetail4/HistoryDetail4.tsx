import { ChevronLeftIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export const HistoryDetail4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="35176:68934"
    >
      {/* Status Bar */}
      <div className="flex flex-col w-full items-start gap-2.5 bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              9:41
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/u8GhiXiH/img/icon---mobile-signal-1.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/u8GhiXiH/img/wifi-1.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/u8GhiXiH/img/battery-1.svg"
            />
          </div>
        </div>
      </div>

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
            송금 내역
          </h1>
        </div>
      </header>

      {/* Transaction Details Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              거래 상세
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                거래일시
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                2025.11.03 11:29:35
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                처리상태
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0d56e4] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                송금 완료
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recipient Info Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              받는 분
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                성명
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                JOHN DOE
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                수취 국가
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                미국
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sender Info Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              보내는 분
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                성명
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                홍길동
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Amount Info Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              금액 정보
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                수취 금액
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                $1,000.00 USD
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                송금 수수료
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                ₩5,000
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                적용 환율
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                1 USD = 1,350 KRW
              </span>
            </div>
            <div className="flex items-center justify-between w-full pt-2 border-t border-gray-200">
              <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                원화 송금액
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
