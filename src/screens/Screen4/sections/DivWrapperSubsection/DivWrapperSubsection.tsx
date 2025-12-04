import { ChevronRightIcon, InfoIcon, XIcon } from "lucide-react";
import React from "react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Badge } from "../../../../components/ui/badge";

const identityItems = [
  {
    title: "여권 인증",
    status: "미등록",
    hasTooltip: true,
  },
  {
    title: "신분증 인증",
    status: "미등록",
    hasTooltip: false,
  },
];

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-1.5 px-6 py-8 w-full">
      <div className="flex items-center gap-1 w-full">
        <div className="flex items-center gap-1 flex-1">
          <h2 className="mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
            신분증 관리
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          {identityItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full relative"
            >
              <button className="flex h-16 items-center gap-3 w-full hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex items-center gap-1.5 flex-1">
                    <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#1a1a1a] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
                      {item.title}
                    </span>

                    <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#0d56e4] rounded-[50px] h-auto border-0 hover:bg-[#0d56e4]">
                      <span className="font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-white text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] whitespace-nowrap [font-style:var(--navigation-12-b-font-style)]">
                        {item.status}
                      </span>
                    </Badge>
                  </div>

                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              {item.hasTooltip && (
                <div className="inline-flex flex-col items-start absolute top-[46px] -left-1 z-10">
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

                    <button
                      className="flex items-center justify-center w-4 h-4"
                      aria-label="Close tooltip"
                    >
                      <XIcon className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              )}

              {index === identityItems.length - 1 && (
                <Alert className="flex items-start gap-1 px-3 py-3.5 w-full bg-[#fff6f8] rounded-xl border-0 mt-0">
                  <InfoIcon className="w-4 h-4 text-[#ff7089] flex-shrink-0" />
                  <AlertDescription className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#ff7089] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    회원가입이 마무리되지 않았어요. 1분이면 완료하실 수 있어요!
                  </AlertDescription>
                </Alert>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
