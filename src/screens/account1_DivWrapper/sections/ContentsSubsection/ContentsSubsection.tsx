import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const transactionData = [
  {
    date: "2024. 10. 08 06:15:04",
    type: "출금",
    typeColor: "text-[#0d56e4]",
    title: "한패스",
    amount: "10,000",
    amountColor: "text-[#0d56e4]",
    balance: "잔액 : 62,946원",
  },
  {
    date: "2024. 10. 07 06:15:04",
    type: "입금",
    typeColor: "text-[#f10000]",
    title: "입출금통장 이자",
    amount: "10,000",
    amountColor: "text-[#f10000]",
    balance: "잔액 : 72,946원",
  },
  {
    date: "2024. 09.28 06:15:04",
    type: "입금",
    typeColor: "text-[#f10000]",
    title: "",
    amount: "2",
    amountColor: "text-[#f10000]",
    balance: "잔액 : 62,948원",
  },
];

export const ContentsSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 pt-[34px] pb-0 px-6 flex-1 self-stretch w-full">
      <div className="flex flex-col items-start self-stretch w-full">
        {transactionData.map((transaction, index) => (
          <Card
            key={index}
            className="border-0 border-b border-solid border-[#dfe3ec] rounded-none shadow-none"
          >
            <CardContent className="justify-center gap-1.5 px-0 py-[22px] flex flex-col items-start">
              <div className="flex items-center gap-1 self-stretch w-full">
                <div
                  className={`flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]`}
                >
                  {transaction.date}
                </div>

                <div
                  className={`w-fit font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] ${transaction.typeColor} text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]`}
                >
                  {transaction.type}
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-stretch w-full">
                {transaction.title && (
                  <div className="flex-1 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                    {transaction.title}
                  </div>
                )}

                <div
                  className={`inline-flex items-center ${transaction.title ? "justify-end" : "justify-start"} gap-0.5 ${transaction.title ? "flex-[0_0_auto]" : "flex-1"}`}
                >
                  <div
                    className={`flex items-center justify-center w-fit font-title-18-b font-[number:var(--title-18-b-font-weight)] ${transaction.amountColor} text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] whitespace-nowrap [font-style:var(--title-18-b-font-style)]`}
                  >
                    {transaction.amount}
                  </div>

                  <div
                    className={`w-fit font-title-16-SB font-[number:var(--title-16-SB-font-weight)] ${transaction.amountColor} text-[length:var(--title-16-SB-font-size)] text-right tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]`}
                  >
                    원
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 self-stretch w-full">
                <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {transaction.balance}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
