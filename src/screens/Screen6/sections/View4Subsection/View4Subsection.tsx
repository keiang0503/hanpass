import { ChevronRightIcon, InfoIcon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

const idManagementItems = [
  {
    title: "여권 인증",
    badgeText: "미등록",
    hasTooltip: true,
  },
  {
    title: "신분증 인증",
    badgeText: "재등록",
    hasTooltip: false,
  },
];

export const View4Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-1.5 px-6 py-8 w-full">
      <header className="flex items-center gap-1 w-full">
        <div className="flex items-center gap-1 flex-1">
          <h2 className="mt-[-1.00px] text-caption-title-13-b-style text-gray-secondary whitespace-nowrap">
            신분증 관리
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start w-full relative">
        <div className="flex flex-col items-start w-full">
          {idManagementItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <button className="flex h-16 items-center gap-3 w-full hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex items-center gap-1.5 flex-1">
                    <span className="text-title-15-SB-style text-title-dark whitespace-nowrap">
                      {item.title}
                    </span>

                    <Badge className="bg-primary-blue hover:bg-primary-blue text-white rounded-full px-2.5 py-1 h-auto text-navigation-12-b-style">
                      {item.badgeText}
                    </Badge>
                  </div>

                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              {index === 1 && (
                <div className="flex items-start gap-1 px-3 py-3.5 w-full bg-gray-light-bg rounded-xl">
                  <InfoIcon className="w-4 h-4 text-gray-muted flex-shrink-0 mt-0.5" />
                  <p className="flex-1 mt-[-1.00px] text-caption-title-13-r-style text-gray-muted">
                    실물 신분증만 승인이 가능합니다. (셀카, 임시발급확인서, 사물
                    사진 등
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="inline-flex flex-col items-start absolute pos-top-46 -left-1">
          <div className="flex h-1.5 items-center pl-[34px] pr-0 py-0 w-full z-[1]">
            <img
              className="w-[11px] h-1.5"
              alt="Tooltip arrow"
              src="https://c.animaapp.com/emBHvnWi/img/img-tooltip-arrow-3.svg"
            />
          </div>

          <div className="inline-flex items-center justify-center gap-0.5 px-4 py-3 -mt-0.5 z-0 bg-white rounded-20 border-2 border-solid border-tooltip shadow-card-soft">
            <span className="flex items-center justify-center mt-[-2.00px] text-caption-title-13-b-style text-tooltip whitespace-nowrap">
              여권을 등록하면 송금이 쉬워져요!
            </span>

            <button
              className="flex items-center justify-center w-4 h-4"
              aria-label="Close tooltip"
            >
              <XIcon className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
