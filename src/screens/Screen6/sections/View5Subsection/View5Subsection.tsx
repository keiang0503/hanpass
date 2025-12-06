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
      valueColor: "text-primary-blue",
    },
    {
      label: "잔여 한도",
      value: "25,000.00 USD",
      valueColor: "text-primary-dark",
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
            <h2 className="mt-[-1.00px] text-caption-title-13-b-style text-gray-secondary whitespace-nowrap">
              {limitData.title}
            </h2>

            <InfoIcon className="w-4 h-4 text-gray-secondary" />
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex flex-col items-center justify-center gap-2.5 px-2.5 py-0 bg-blue-light rounded-lg hover:bg-blue-light-hover"
          >
            <div className="inline-flex items-center justify-center gap-2 px-0 py-2">
              <span className="text-navigation-12-SB-style text-primary-blue whitespace-nowrap">
                {limitData.viewHistoryLabel}
              </span>
            </div>
          </Button>
        </div>

        <Card className="w-full bg-white rounded-2xl border border-solid border-card-light">
          <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-wrap items-center gap-1 w-full">
                <div className="w-[120px] mt-[-1.00px] text-body-14-SB-style text-gray-label">
                  {limitData.annualLimit.label}
                </div>

                <div className="flex-1 mt-[-1.00px] text-body-14-SB-style text-primary-dark text-right">
                  {limitData.annualLimit.value}
                </div>
              </div>

              <Progress
                value={limitData.progressValue}
                className="h-2 w-full bg-progress-track rounded-full-999"
                indicatorClassName="bg-progress-fill rounded-full-999"
              />
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-3 p-4 w-full bg-gray-light-bg rounded-lg">
                {limitData.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-1 w-full">
                    <div className="w-[120px] mt-[-1.00px] text-caption-title-13-r-style text-gray-muted">
                      {detail.label}
                    </div>

                    <div
                      className={`flex-1 mt-[-1.00px] text-caption-title-13-r-style ${detail.valueColor} text-right`}
                    >
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-caption-title-13-r-style text-gray-disclaimer">
                {limitData.disclaimer}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
