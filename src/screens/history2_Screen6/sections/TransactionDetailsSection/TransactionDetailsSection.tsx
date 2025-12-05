import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const TransactionDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 pt-9 pb-0 px-6 w-full">
      <Card className="bg-[#fe397e] border-0 w-full">
        <CardContent className="p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-0.5 w-full">
            <div className="flex items-center gap-0.5 w-full">
              <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#ffffff99] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                2024.08.27 17:18:58 KST
              </div>

              <Badge className="bg-[#ffffff4c] hover:bg-[#ffffff4c] text-white border-0 rounded-[50px] px-2.5 py-1 h-auto font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]">
                캐시 픽업
              </Badge>
            </div>

            <div className="h-[19px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-white text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] whitespace-nowrap [font-style:var(--body-14-SB-font-style)]">
              FTKK VDCC
            </div>

            <div className="flex items-center justify-start w-fit font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-right tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap [font-style:var(--title-24-b-font-style)]">
              5 USD
            </div>

            <div className="w-fit font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#ffffff99] text-[length:var(--navigation-12-r-font-size)] text-right tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap [font-style:var(--navigation-12-r-font-style)]">
              12,500 (1KRW = 0.00070369 USD)
            </div>
          </div>

          <div className="flex flex-col min-h-[42px] items-start justify-center gap-0.5 px-5 py-1 w-full bg-white rounded-xl">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mt-[-1.00px] [font-style:var(--body-14-r-font-style)]">
                송금번호
              </div>

              <div className="w-fit mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                218159612
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
