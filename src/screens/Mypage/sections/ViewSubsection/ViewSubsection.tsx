import { InfoIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";

const limitData = {
  title: "송금 한도 안내",
  annualLimit: "150,000.000 USD",
  transferAmount: "0 USD",
  remainingLimit: "25,000.00 USD",
  disclaimer:
    "송금 신청 시점과 한도조회 시점 간의 시간 차이로 인하여, 송금 한도액은 실제와 다를 수 있습니다.",
};

const tooltipData = {
  message: "회원가입하면 나의 한도를 확인할 수 있어요!",
};

export const ViewSubsection = (): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <section className="flex flex-col items-start gap-8 px-6 py-8 w-full">
      <div className="flex-col items-start gap-4 w-full flex">
        <div className="flex items-center gap-1 w-full">
          <div className="items-center gap-1 flex-1 flex">
            <div className="w-fit mt-[-1.00px] text-caption-title-13-b-style text-gray-secondary whitespace-nowrap">
              {limitData.title}
            </div>
            <InfoIcon className="w-4 h-4 text-gray-secondary" />
          </div>
        </div>

        <div className="relative w-full">
          <Card className="w-full bg-white rounded-2xl border border-solid border-card-light">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-wrap items-center gap-1px w-full">
                  <div className="w-120 mt-[-1.00px] text-body-14-SB-style text-gray-slate">
                    연간 한도
                  </div>
                  <div className="flex-1 mt-[-1.00px] text-body-14-SB-style text-primary-dark text-right">
                    {limitData.annualLimit}
                  </div>
                </div>

                <Progress value={0} className="w-full h-2 bg-gray-progress" />
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex-col items-start gap-3 p-4 w-full bg-gray-light-bg rounded-lg flex">
                  <div className="flex items-center gap-1 w-full">
                    <div className="w-120 mt-[-1.00px] text-caption-title-13-r-style text-gray-muted">
                      송금액
                    </div>
                    <div className="flex-1 mt-[-1.00px] text-caption-title-13-r-style text-primary-blue text-right">
                      {limitData.transferAmount}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 w-full">
                    <div className="w-120 mt-[-1.00px] text-caption-title-13-r-style text-gray-muted">
                      잔여 한도
                    </div>
                    <div className="flex-1 mt-[-1.00px] text-caption-title-13-r-style text-primary-dark text-right">
                      {limitData.remainingLimit}
                    </div>
                  </div>
                </div>

                <p className="text-caption-title-13-r-style text-gray-light">
                  {limitData.disclaimer}
                </p>
              </div>
            </CardContent>
          </Card>

          {showTooltip && (
            <div className="inline-flex flex-col items-start absolute left-0 bottom-tooltip">
              <div className="flex h-1.5 items-center pl-[34px] pr-0 py-0 w-full z-[1]">
                <img
                  className="w-[11px] h-1.5"
                  alt="Img tooltip arrow"
                  src="https://c.animaapp.com/emBHvnWi/img/img-tooltip-arrow-3.svg"
                />
              </div>

              <div className="flex items-center justify-end gap-0.5 px-4 py-3 w-full -mt-0.5 z-0 bg-white rounded-20 border-2 border-solid border-tooltip shadow-card-soft">
                <div className="flex items-center justify-center w-fit mt-[-2.00px] text-caption-title-13-b-style text-tooltip whitespace-nowrap">
                  {tooltipData.message}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => setShowTooltip(false)}
                >
                  <XIcon className="w-4 h-4 text-tooltip" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
