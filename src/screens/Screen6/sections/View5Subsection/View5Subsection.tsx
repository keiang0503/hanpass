import { InfoIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";

const limitData = {
  title: "송금 한도 안내",
  viewHistoryLabel: "내역 보기",
  annualLimit: {
    label: "연간 한도",
    value: "50,000.000 USD",
  },
  progressValue: 50,
  details: [
    {
      label: "송금액",
      value: "25,000.00 USD",
      valueColor: "text-[#0d56e4]",
    },
    {
      label: "잔여 한도",
      value: "25,000.00 USD",
      valueColor: "text-[#0b0c0e]",
    },
  ],
  disclaimer:
    "송금 신청 시점과 한도조회 시점 간의 시간 차이로 인하여, 송금 한도액은 실제와 다를 수 있습니다.",
};

export const View5Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 px-6 py-8 w-full">
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex items-center gap-1 w-full">
          <div className="flex items-center gap-1 flex-1">
            <h2 className="mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
              {limitData.title}
            </h2>

            <InfoIcon className="w-4 h-4 text-[#85888e]" />
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-0 bg-[#f4f7fd] rounded-lg hover:bg-[#e8eef9]"
          >
            <div className="inline-flex items-center justify-center gap-2 px-0 py-2">
              <span className="font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#0d56e4] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] whitespace-nowrap [font-style:var(--navigation-12-SB-font-style)]">
                {limitData.viewHistoryLabel}
              </span>
            </div>
          </Button>
        </div>

        <Card className="w-full bg-white rounded-2xl border border-solid border-[#e6eaec]">
          <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-wrap items-center gap-[4px_4px] w-full">
                <div className="w-[120px] mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#5c6580] text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                  {limitData.annualLimit.label}
                </div>

                <div className="flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                  {limitData.annualLimit.value}
                </div>
              </div>

              <Progress
                value={limitData.progressValue}
                className="h-2 w-full bg-[#dfe3ec] rounded-[999px]"
                indicatorClassName="bg-[#45a6ff] rounded-[999px]"
              />
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-3 p-4 w-full bg-[#f7f7f8] rounded-lg">
                {limitData.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-1 w-full">
                    <div className="w-[120px] mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {detail.label}
                    </div>

                    <div
                      className={`flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] ${detail.valueColor} text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]`}
                    >
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                {limitData.disclaimer}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
