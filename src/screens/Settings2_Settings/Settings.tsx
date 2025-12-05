import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
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
      <header className="flex flex-col w-full bg-white">
        <Link
          className="flex flex-col items-start gap-2.5 w-full bg-white"
          to="/signupu95069u951u4363u4463u4523u4363u4469u4523u4364u4467u4540"
        >
          <div className="w-full max-w-[360px] flex flex-col items-start gap-2.5 bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                      9
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                      :
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                      41
                    </div>
                  </div>
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  Sat Jun 11
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] top-[-169820.00%] left-[-31994.44%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-6.png"
                  />
                  <img
                    className="h-[60.00%] top-[-169840.00%] left-[-31966.67%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-7.png"
                  />
                  <img
                    className="h-[80.00%] top-[-169860.00%] left-[-31938.89%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-7.png"
                  />
                  <img
                    className="h-full top-[-169880.00%] left-[-31911.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-4.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-36109.43%]"
                    alt="Bar"
                    src="/img/bar-1-7.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-36125.00%]"
                    alt="Bar"
                    src="/img/bar-2-8.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-36143.77%]"
                    alt="Bar"
                    src="/img/bar-3-8.png"
                  />
                </div>

                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-24362.50%]"
                    alt="Border"
                    src="/img/border-4.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-24270.83%]"
                    alt="Cap"
                    src="/img/cap-4.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              {statusBarData.time}
            </div>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/kp7cm7rf/img/icon---mobile-signal-6.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/kp7cm7rf/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/kp7cm7rf/img/battery-6.svg"
            />
          </div>
        </Link>

        <nav className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
              <ChevronLeftIcon className="w-8 h-8 text-black" />
              <img
                className="h-8 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/kp7cm7rf/img/mini-6@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>

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
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
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
