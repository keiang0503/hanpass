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
            <div className="w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
              {limitData.title}
            </div>
            <InfoIcon className="w-4 h-4 text-[#85888e]" />
          </div>
        </div>

        <div className="relative w-full">
          <Card className="w-full bg-white rounded-2xl border border-solid border-[#e6eaec]">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-wrap items-center gap-[4px_4px] w-full">
                  <div className="w-[120px] mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#5c6580] text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                    연간 한도
                  </div>
                  <div className="flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                    {limitData.annualLimit}
                  </div>
                </div>

                <Progress value={0} className="w-full h-2 bg-[#dfe3ec]" />
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex-col items-start gap-3 p-4 w-full bg-[#f7f7f8] rounded-lg flex">
                  <div className="flex items-center gap-1 w-full">
                    <div className="w-[120px] mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      송금액
                    </div>
                    <div className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {limitData.transferAmount}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 w-full">
                    <div className="w-[120px] mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      잔여 한도
                    </div>
                    <div className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0b0c0e] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {limitData.remainingLimit}
                    </div>
                  </div>
                </div>

                <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {limitData.disclaimer}
                </p>
              </div>
            </CardContent>
          </Card>

          {showTooltip && (
            <div className="inline-flex flex-col items-start absolute left-0 bottom-[215px]">
              <div className="flex h-1.5 items-center pl-[34px] pr-0 py-0 w-full z-[1]">
                <img
                  className="w-[11px] h-1.5"
                  alt="Img tooltip arrow"
                  src="https://c.animaapp.com/emBHvnWi/img/img-tooltip-arrow-3.svg"
                />
              </div>

              <div className="flex items-center justify-end gap-0.5 px-4 py-3 w-full -mt-0.5 z-0 bg-white rounded-[20px] border-2 border-solid border-[#6df1c3] shadow-[0px_4px_8px_#00000014]">
                <div className="flex items-center justify-center w-fit mt-[-2.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#37373d] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                  {tooltipData.message}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => setShowTooltip(false)}
                >
                  <XIcon className="w-4 h-4 text-[#37373d]" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
