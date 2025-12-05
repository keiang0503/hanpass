import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const bankDetails = [
  {
    label: "출금은행",
    value: "우리은행",
    accountNumber: "1002843678105",
  },
  {
    label: "입금 은행",
    value: "전북은행",
    subValue: "Jeonbuk Bank",
    accountNumber: "1002843678105",
  },
  {
    label: "예금주명",
    value: "민세정",
    subValue: "HANPASS",
  },
];

export const TransactionSummarySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 pt-9 pb-0 px-6 w-full">
      <div className="flex flex-col items-center gap-3.5 w-full">
        <header className="flex flex-col items-center w-full">
          <div className="flex items-start gap-2 w-full">
            <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
              <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                입금액
              </h2>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-start gap-[22px] w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            {bankDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2.5 w-full"
              >
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="flex items-start gap-2 w-full">
                    <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {detail.label}
                    </div>

                    <div className="font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] flex-1 mt-[-1.00px] [font-style:var(--body-14-SB-font-style)]">
                      {detail.value}
                    </div>
                  </div>

                  {detail.subValue && (
                    <div className="flex items-center gap-1 w-full">
                      <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        {detail.subValue}
                      </div>
                    </div>
                  )}

                  {detail.accountNumber && (
                    <div className="flex items-center gap-1 w-full">
                      <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        {detail.accountNumber}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Card className="w-full bg-[#f4f7fd] rounded-xl border-0">
            <CardContent className="flex flex-col items-start gap-4 px-5 py-[22px]">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="flex items-start gap-2 w-full">
                    <div className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] flex-1 mt-[-1.00px] [font-style:var(--body-14-b-font-style)]">
                      입금액
                    </div>

                    <div className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] text-right tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] flex-1 mt-[-1.00px] [font-style:var(--title-16-b-font-style)]">
                      15,000 KRW
                    </div>
                  </div>

                  <div className="flex items-center gap-1 w-full">
                    <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      5,000원 수수료 포함
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="w-full h-px bg-[#e5e7eb]" />

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-0.5 w-full">
                    <div className="flex items-start gap-2 w-full">
                      <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        입금 만료일
                      </div>

                      <div className="font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] flex-1 mt-[-1.00px] [font-style:var(--body-14-SB-font-style)]">
                        2025.11.03 13:29:35 KST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button
        variant="link"
        className="inline-flex items-center gap-2 h-auto p-0 text-[#717682] hover:no-underline"
      >
        <img
          className="w-[30px] h-[30px]"
          alt="Logo moneygram"
          src="https://c.animaapp.com/yNx7OGE7/img/img30-logo-moneygram-5.svg"
        />

        <div className="inline-flex items-center gap-0.5">
          <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap mt-[-1.00px] [font-style:var(--body-15-r-font-style)]">
            [머니그램] 픽업장소를 확인해주세요.
          </span>

          <ChevronRightIcon className="w-[18px] h-[18px]" />
        </div>
      </Button>

      <Button
        variant="outline"
        className="inline-flex min-h-[46px] items-center justify-center gap-2.5 pl-[26px] pr-5 py-1 h-auto bg-white rounded-[30px] border border-solid border-[#979797] hover:bg-white"
      >
        <div className="inline-flex items-center justify-center gap-2">
          <div className="inline-flex items-center gap-1">
            <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#979797] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] mt-[-1.00px] whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
              환불 처리 완료
            </span>

            <img
              className="w-4 h-4"
              alt="Btn arrow"
              src="https://c.animaapp.com/yNx7OGE7/img/ico16-btn-arrow-right-1.svg"
            />
          </div>
        </div>
      </Button>
    </section>
  );
};
