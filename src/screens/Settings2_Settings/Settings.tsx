import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const accountsData = [
  {
    id: 1,
    badges: [
      {
        text: "Auto",
        variant: "outline" as const,
        textColor: "text-[#003fbb]",
      },
      {
        text: "주계좌",
        variant: "default" as const,
        bgColor: "bg-[#e9f1ff]",
        textColor: "text-[#003fbb]",
      },
    ],
    bankIcon:
      "https://c.animaapp.com/kp7cm7rf/img/bank32-round-bank-045-round.svg",
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
  },
  {
    id: 2,
    badges: [
      {
        text: "Auto",
        variant: "outline" as const,
        textColor: "text-[#003fbb]",
      },
    ],
    bankIcon:
      "https://c.animaapp.com/kp7cm7rf/img/bank32-round-bank-045-round-1.svg",
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
  },
  {
    id: 3,
    badges: [
      {
        text: "Manual",
        variant: "outline" as const,
        textColor: "text-[#0b0c0e]",
      },
    ],
    bankIcon:
      "https://c.animaapp.com/kp7cm7rf/img/bank32-round-bank-045-round-2.svg",
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
  },
];

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
};

export const Settings = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79152"
    >
      <BackSubHeader />

      <section className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              1원 인증을 위해 계좌를 선택해 주세요.
            </h1>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 flex-1 w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          {accountsData.map((account) => (
            <Card
              key={account.id}
              className="w-full bg-white rounded-2xl border border-solid border-[#dfe3ec] overflow-hidden"
            >
              <CardContent className="pt-5 pb-4 px-0">
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                    <div className="flex items-center gap-1.5 px-5 py-0 w-full">
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex flex-wrap items-center gap-2 flex-1">
                          {account.badges.map((badge, index) => (
                            <Badge
                              key={index}
                              variant={badge.variant}
                              className={`h-auto px-2.5 py-1 rounded-[50px] ${
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
                                }-line-height)] [font-style:var(--navigation-12-${
                                  badge.variant === "default" ? "SB" : "b"
                                }-font-style)]`}
                              >
                                {badge.text}
                              </span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-5 py-0 w-full">
                      <img
                        className="w-8 h-8"
                        alt="Round bank"
                        src={account.bankIcon}
                      />
                      <div className="flex flex-col items-start gap-1.5 flex-1">
                        <div className="flex flex-col items-start gap-1.5 w-full">
                          <div className="flex items-start gap-2 w-full">
                            <div className="flex flex-col items-start gap-0.5 flex-1">
                              <div className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                                {account.bankName}
                              </div>
                              <div className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                                {account.accountNumber}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="flex flex-col w-full items-center justify-end px-6 py-0 bg-white">
        <div className="w-full h-4" />
      </footer>

      <aside className="flex flex-col w-full items-start gap-2.5 px-6 py-0 fixed left-0 bottom-[37px]">
        <div className="flex h-[38px] items-center justify-center gap-2.5 px-4 py-2.5 w-full bg-[#252e33d6] rounded-xl">
          <div className="flex items-center justify-center flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            휴대폰 인증이 완료되었습니다.
          </div>
        </div>
      </aside>
    </div>
  );
};
