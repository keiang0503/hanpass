import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const accountsData = [
  {
    id: 1,
    type: "Auto",
    isPrimary: true,
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    accountHolder: "홍길동",
    bankIcon:
      "https://c.animaapp.com/ELrb3VWQ/img/bank32-round-bank-045-round.svg",
    actionText: "계좌거래내역 조회",
    actionColor: "text-[#0b0c0e]",
  },
  {
    id: 2,
    type: "Manual",
    isPrimary: false,
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    accountHolder: "홍길동",
    bankIcon:
      "https://c.animaapp.com/ELrb3VWQ/img/bank32-round-bank-045-round-1.svg",
    actionText: "자동출금계좌 등록중 : 승인거절",
    actionColor: "text-[#f10000]",
  },
  {
    id: 3,
    type: "Manual",
    isPrimary: false,
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    accountHolder: "홍길동",
    bankIcon:
      "https://c.animaapp.com/ELrb3VWQ/img/bank32-round-bank-045-round-2.svg",
    actionText: "자동출금계좌로 전환하기",
    actionColor: "text-[#0d56e4]",
  },
];

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 px-6 py-0 w-full">
      {accountsData.map((account) => (
        <Card
          key={account.id}
          className="w-full bg-white rounded-2xl border border-solid border-[#dfe3ec] overflow-hidden"
        >
          <CardContent className="p-0">
            <div className="flex flex-col items-start pt-5 pb-0 px-0">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col items-start justify-center gap-2.5 pt-0 pb-4 px-0 w-full">
                  <div className="flex items-center gap-1.5 px-5 py-0 w-full">
                    <div className="flex items-center justify-between flex-1">
                      <div className="flex flex-wrap items-center gap-2 flex-1">
                        <Badge
                          variant="outline"
                          className="inline-flex justify-center gap-2.5 px-2.5 py-1 rounded-[50px] border border-solid border-[#dfe3ec] bg-white"
                        >
                          <span className="font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]">
                            {account.type}
                          </span>
                        </Badge>

                        {account.isPrimary && (
                          <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#e9f1ff] rounded-[50px] border-0 hover:bg-[#e9f1ff]">
                            <span className="font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] [font-style:var(--navigation-12-SB-font-style)]">
                              주계좌
                            </span>
                          </Badge>
                        )}
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-5 h-5 p-0 hover:bg-transparent"
                      >
                        <img
                          className="w-5 h-5"
                          alt="Delete"
                          src="https://c.animaapp.com/ELrb3VWQ/img/ico20-delete-3.svg"
                        />
                      </Button>
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
                            <div className="w-full mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                              {account.bankName}
                            </div>

                            <div className="w-full font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                              {account.accountNumber}
                            </div>

                            <div className="w-full font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                              {account.accountHolder}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <Separator className="bg-[#e9e9e9]" />
                <Button
                  variant="ghost"
                  className="flex h-[60px] w-full items-center justify-center p-2.5 bg-white hover:bg-gray-50 rounded-none h-auto"
                >
                  <span
                    className={`flex items-center justify-center flex-1 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] text-center tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] ${account.actionColor}`}
                  >
                    {account.actionText}
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec]">
        <CardContent className="p-0">
          <Button
            variant="ghost"
            className="flex h-[100px] w-full items-center gap-1.5 px-4 py-6 hover:bg-gray-50 rounded-xl h-auto"
          >
            <div className="flex flex-col items-center justify-center gap-2 flex-1">
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/ELrb3VWQ/img/frame-1597887207-1.svg"
              />

              <img
                className="w-[46.83px] h-[12.36px]"
                alt="Image"
                src="https://c.animaapp.com/ELrb3VWQ/img/----@4x.png"
              />
            </div>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
