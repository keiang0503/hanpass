import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { PopupHeader } from "../../components/PopupHeader";

const paymentMethods = [
  {
    type: "auto",
    badges: [
      {
        label: "Auto",
        variant: "outline" as const,
        textColor: "text-[#003fbb]",
      },
      {
        label: "주계좌",
        variant: "default" as const,
        textColor: "text-[#003fbb]",
        bgColor: "bg-[#e9f1ff]",
      },
    ],
    bankIcon:
      "https://c.animaapp.com/Fk3yL3l2/img/bank32-round-bank-045-round.svg",
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    balanceLabel: "계좌 잔액",
    balance: "29,038,028원",
    showDelete: false,
  },
  {
    type: "manual",
    badges: [
      {
        label: "Manual",
        variant: "outline" as const,
        textColor: "text-[#0b0c0e]",
      },
    ],
    bankIcon: "https://c.animaapp.com/Fk3yL3l2/img/group-1261168561@2x.png",
    bankName: "하나은행",
    accountNumber: "10191060427607",
    balanceLabel: null,
    balance: null,
    showDelete: true,
  },
  {
    type: "wallet",
    badges: [],
    bankIcon:
      "https://c.animaapp.com/Fk3yL3l2/img/bank32-round-bank-wallet.svg",
    bankName: "Hanpass Pay Wallet",
    accountNumber: "LOLX47225105",
    balanceLabel: "월렛 잔액",
    balance: "29,038,028원",
    showDelete: false,
  },
];

export const Overseasremit = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="2674:66176"
    >
      <PopupHeader />

      <main className="flex flex-col items-center gap-1.5 pt-0 pb-5 px-6 w-full bg-white rounded-[30px_30px_0px_0px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-end w-full">
            <div className="w-full h-[22px]" />
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex flex-col w-full items-center">
            <div className="items-start gap-2 w-full flex">
              <div className="items-center gap-1 px-0 py-1.5 flex-1 flex">
                <h1 className="flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                  출금 수단을 선택해주세요.
                </h1>
              </div>
            </div>
            <div className="w-full max-h-[26px] h-[26px] opacity-30" />
          </div>
        </div>

        <ScrollArea className="w-full">
          <div className="flex-col items-start gap-3 w-full flex">
            <div className="flex-col items-start gap-4 w-full flex">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="w-full border-[#dfe3ec] rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start w-full">
                      <div className="flex-col items-start justify-center gap-2.5 pt-5 pb-4 px-0 w-full flex">
                        <div className="items-center gap-1.5 px-5 py-0 w-full flex">
                          <div className="items-center justify-between flex-1 flex">
                            <div className="flex-wrap items-center gap-[8px_8px] flex-1 flex">
                              {method.badges.map((badge, badgeIndex) => (
                                <Badge
                                  key={badgeIndex}
                                  variant={badge.variant}
                                  className={`inline-flex justify-center gap-2.5 px-2.5 py-1 rounded-[50px] ${
                                    badge.bgColor || "bg-white"
                                  } ${
                                    badge.variant === "outline"
                                      ? "border border-solid border-[#dfe3ec]"
                                      : ""
                                  }`}
                                >
                                  <span
                                    className={`font-navigation-12-${
                                      badge.variant === "default" ? "SB" : "b"
                                    } font-[number:var(--navigation-12-${
                                      badge.variant === "default" ? "SB" : "b"
                                    }-font-weight)] ${
                                      badge.textColor
                                    } text-[length:var(--navigation-12-${
                                      badge.variant === "default" ? "SB" : "b"
                                    }-font-size)] tracking-[var(--navigation-12-${
                                      badge.variant === "default" ? "SB" : "b"
                                    }-letter-spacing)] leading-[var(--navigation-12-${
                                      badge.variant === "default" ? "SB" : "b"
                                    }-line-height)] whitespace-nowrap [font-style:var(--navigation-12-${
                                      badge.variant === "default" ? "SB" : "b"
                                    }-font-style)]`}
                                  >
                                    {badge.label}
                                  </span>
                                </Badge>
                              ))}
                            </div>
                            {method.showDelete && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-auto w-auto p-0"
                              >
                                <img
                                  className="w-5 h-5"
                                  alt="Delete"
                                  src="/img/delete.png"
                                />
                              </Button>
                            )}
                          </div>
                        </div>

                        <div className="items-center gap-1.5 px-5 py-0 w-full flex">
                          {method.type === "manual" ? (
                            <div className="w-8 h-8 bg-[url(https://c.animaapp.com/Fk3yL3l2/img/group-1261168561@2x.png)] bg-[100%_100%]" />
                          ) : (
                            <img
                              className="w-8 h-8"
                              alt={method.bankName}
                              src={method.bankIcon}
                            />
                          )}
                          <div className="flex flex-col items-start gap-1.5 flex-1">
                            <div className="flex flex-col items-start gap-1.5 w-full">
                              <div className="flex items-start gap-2 w-full">
                                <div className="flex-col items-start gap-0.5 flex-1 flex">
                                  <div className="w-full font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                                    {method.bankName}
                                  </div>
                                  <div className="w-full font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                                    {method.accountNumber}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {method.balance && (
                        <div className="flex-col items-start gap-4 pt-0 pb-5 px-5 w-full flex">
                          <img
                            className="w-full h-px object-cover"
                            alt="Vector"
                            src="https://c.animaapp.com/Fk3yL3l2/img/frame-1261169143-4.svg"
                          />
                          <div className="items-center gap-3 w-full flex">
                            <div className="flex items-center justify-end gap-1.5 flex-1">
                              <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap w-fit [font-style:var(--caption-title-13-r-font-style)]">
                                {method.balanceLabel}
                              </div>
                              <div className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#5c6580] text-[length:var(--title-15-SB-font-size)] text-right tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap w-fit [font-style:var(--title-15-SB-font-style)]">
                                {method.balance}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-start w-full">
              <div className="flex items-start gap-[5px] flex-1">
                <div className="relative w-2 h-3.5">
                  <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  월렛 자동충전은 마이페이지에서 설정/변경하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};
