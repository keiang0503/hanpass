import { InfoIcon, TargetIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const accountsData = [
  {
    id: 1,
    type: "Auto",
    isPrimary: true,
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    hasBalance: true,
    balance: "29,038,028원",
    actionText: "",
    actionColor: "",
  },
  {
    id: 2,
    type: "Manual",
    isPrimary: false,
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    hasBalance: false,
    balance: "",
    actionText: "자동출금계좌 등록중 : 승인거절",
    actionColor: "text-[#f10000]",
  },
  {
    id: 3,
    type: "Manual",
    isPrimary: false,
    bankName: "새마을 금고",
    accountNumber: "9002029482947",
    hasBalance: false,
    balance: "",
    actionText: "자동출금계좌로 전환하기",
    actionColor: "text-[#0d56e4]",
  },
];

export const Account = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34978:31881"
    >
      <header className="flex flex-col w-full bg-white">
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
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/ELrb3VWQ/img/icon---mobile-signal-6.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/ELrb3VWQ/img/wifi-6.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/ELrb3VWQ/img/battery-6.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link to="/accountu95048">
                <img
                  className="w-8 h-8"
                  alt="Wechat hd"
                  src="https://c.animaapp.com/ELrb3VWQ/img/wechat-hd-3.svg"
                />
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontalIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <TargetIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* UiSubsection */}
      <section className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          <header className="flex h-[54px] items-center justify-between px-5 w-full bg-white">
            <h2 className="font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
              계좌관리
            </h2>

            <Button
              variant="outline"
              className="h-auto px-2 py-1.5 bg-white border-[#0d56e4] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)] hover:bg-[#0d56e4]/5"
            >
              주계좌 설정
            </Button>
          </header>
        </div>
      </section>

      {/* FrameSubsection */}
      <section className="flex flex-col items-start gap-2.5 pt-1.5 pb-[22px] px-6 w-full">
        <div className="flex min-h-[52px] items-center gap-1 pl-4 pr-3 py-3 w-full bg-[#f4f7fd] rounded-xl overflow-hidden border border-solid border-[#e9f1ff]">
          <div className="flex flex-wrap items-center gap-[4px_4px] flex-1 grow">
            <span className="w-full font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
              계좌내역조회 무료제공 횟수
            </span>
            <span className="w-fit font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0d56e4] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
              8회
            </span>
          </div>
          <InfoIcon className="w-5 h-5 text-[#0d56e4]" />
        </div>
      </section>

      {/* FrameWrapperSubsection */}
      <section className="flex flex-col items-start gap-2.5 pt-0 pb-2 px-6 flex-1 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          {accountsData.map((account) => (
            <Card
              key={account.id}
              className="w-full rounded-xl border border-solid border-[#dfe3ec]"
            >
              <CardContent className="flex flex-col items-start p-0">
                <div className="flex flex-col items-start justify-center gap-2.5 pt-5 pb-4 px-0 w-full">
                  <div className="flex items-center gap-1.5 px-5 py-0 w-full">
                    <div className="flex items-center justify-between flex-1">
                      <div className="flex flex-wrap items-center gap-[8px_8px]">
                        <Badge
                          variant="outline"
                          className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-white rounded-[50px] border border-solid border-[#dfe3ec] h-auto"
                        >
                          <span className="font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] whitespace-nowrap [font-style:var(--navigation-12-b-font-style)]">
                            {account.type}
                          </span>
                        </Badge>

                        {account.isPrimary && (
                          <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#e9f1ff] rounded-[50px] h-auto hover:bg-[#e9f1ff]">
                            <span className="font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] whitespace-nowrap [font-style:var(--navigation-12-SB-font-style)]">
                              주계좌
                            </span>
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-5 py-0 w-full">
                    <img
                      className="w-8 h-8"
                      alt="Bank icon"
                      src="https://c.animaapp.com/ELrb3VWQ/img/bank32-round-bank-045-round-3.svg"
                    />

                    <div className="flex flex-col items-start gap-1.5 flex-1">
                      <div className="flex flex-col items-start gap-0.5 w-full">
                        <div className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                          {account.bankName}
                        </div>
                        <div className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                          {account.accountNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {account.hasBalance && (
                  <div className="flex flex-col items-start gap-4 pt-0 pb-5 px-5 w-full">
                    <Separator className="w-full" />

                    <div className="flex items-center gap-3 w-full">
                      <div className="flex items-center justify-end gap-1.5 flex-1">
                        <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
                          계좌 잔액
                        </div>
                        <div className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#5c6580] text-[length:var(--title-15-SB-font-size)] text-right tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
                          {account.balance}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {account.actionText && (
                  <div className="flex items-start px-5 pb-5 w-full">
                    <div className="flex items-center gap-2.5 flex-1">
                      <span
                        className={`flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] ${account.actionColor}`}
                      >
                        {account.actionText}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
        <div className="flex-col w-[134px] items-center gap-2.5 flex">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
