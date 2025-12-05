import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

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
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="2674:66176"
    >
      <header className="flex flex-col w-full items-start">
        <div className="w-full flex flex-col items-start gap-2.5">
          <div className="w-full bg-white flex flex-col items-start gap-2.5">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </div>
                  </div>
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  Sat Jun 11
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] absolute top-0 left-0 w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-12.png"
                  />
                  <img
                    className="h-[60.00%] absolute top-0 left-[5px] w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-13.png"
                  />
                  <img
                    className="h-[80.00%] absolute top-0 left-[10px] w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-13.png"
                  />
                  <img
                    className="h-full absolute top-0 left-[15px] w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-7.png"
                  />
                </div>
                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-1-13.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-2-14.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-0 left-0"
                    alt="Bar"
                    src="/img/bar-3-14.png"
                  />
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>
                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-0 left-0"
                    alt="Border"
                    src="/img/border-7.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-0 right-0"
                    alt="Cap"
                    src="/img/cap-7.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/Fk3yL3l2/img/icon---mobile-signal-2.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/Fk3yL3l2/img/wifi-2.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/Fk3yL3l2/img/battery-2.svg"
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] justify-around px-5 py-0 w-full items-center relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/Fk3yL3l2/img/mini-7@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

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

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
        <div className="flex-col w-[134px] items-center gap-2.5 flex">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
