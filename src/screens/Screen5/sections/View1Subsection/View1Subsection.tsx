import { ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const idManagementItems = [
  {
    title: "여권 인증",
    status: "미등록",
    statusColor: "bg-[#0d56e4]",
    statusTextColor: "text-white",
    showTooltip: true,
  },
  {
    title: "여권 인증",
    status: "등록완료",
    statusColor: "bg-[#f4f7fd]",
    statusTextColor: "text-[#003fbb]",
    showTooltip: false,
  },
];

export const View1Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-1.5 px-6 py-8 w-full">
      <header className="flex items-center gap-1 w-full">
        <div className="flex items-center gap-1 flex-1">
          <h2 className="mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
            신분증 관리
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start w-full relative">
        <div className="flex flex-col items-start w-full">
          {idManagementItems.map((item, index) => (
            <div key={index} className="flex h-16 items-center gap-3 w-full">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-1.5 flex-1">
                  <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#1a1a1a] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
                    {item.title}
                  </span>

                  <Badge
                    className={`${item.statusColor} rounded-[50px] rotate-180 px-2.5 py-1 h-auto border-0 hover:${item.statusColor}`}
                  >
                    <span
                      className={`-rotate-180 ${item.statusTextColor} font-navigation-12-${item.status === "미등록" ? "b" : "SB"} font-[number:var(--navigation-12-${item.status === "미등록" ? "b" : "SB"}-font-weight)] text-[length:var(--navigation-12-${item.status === "미등록" ? "b" : "SB"}-font-size)] tracking-[var(--navigation-12-${item.status === "미등록" ? "b" : "SB"}-letter-spacing)] leading-[var(--navigation-12-${item.status === "미등록" ? "b" : "SB"}-line-height)] whitespace-nowrap [font-style:var(--navigation-12-${item.status === "미등록" ? "b" : "SB"}-font-style)]`}
                    >
                      {item.status}
                    </span>
                  </Badge>
                </div>

                {index === 0 && (
                  <ChevronRightIcon className="w-4 h-4 text-[#1a1a1a]" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex flex-col items-start absolute top-[46px] -left-1">
          <div className="flex h-1.5 items-center pl-[34px] pr-0 py-0 w-full z-[1]">
            <img
              className="w-[11px] h-1.5"
              alt="Img tooltip arrow"
              src="https://c.animaapp.com/emBHvnWi/img/img-tooltip-arrow-3.svg"
            />
          </div>

          <div className="inline-flex items-center justify-center gap-0.5 px-4 py-3 -mt-0.5 z-0 bg-white rounded-[20px] border-2 border-solid border-[#6df1c3] shadow-[0px_4px_8px_#00000014]">
            <span className="flex items-center justify-center mt-[-2.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#37373d] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
              여권을 등록하면 송금이 쉬워져요!
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="w-4 h-4 p-0 hover:bg-transparent"
            >
              <XIcon className="w-4 h-4 text-[#37373d]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
