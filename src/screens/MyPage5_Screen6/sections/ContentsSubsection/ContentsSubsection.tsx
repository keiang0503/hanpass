import { CameraIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const idCardItems = [
  {
    label: "신분증 앞면",
    stepIcon: "https://c.animaapp.com/KuxympCS/img/ico28-step-5.svg",
  },
  {
    label: "신분증 뒷면(선택)",
    stepIcon: "https://c.animaapp.com/KuxympCS/img/ico28-step-5.svg",
  },
];

const formFields = [
  {
    label: "외국인등록번호",
    value: "M12345689",
  },
  {
    label: "외국인등록증 발급일",
    value: "2025/11/28",
  },
];

export const ContentsSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-end gap-14 pt-[42px] pb-[30px] px-6 w-full">
      <div className="flex flex-col items-start gap-9 w-full">
        <div className="flex flex-col items-start gap-[22px] w-full relative">
          <img
            className="absolute h-[calc(100%_-_130px)] top-[29px] left-[29px] w-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/KuxympCS/img/line-209-4.svg"
          />

          {idCardItems.map((item, index) => (
            <Card
              key={index}
              className="w-full border-[#dfe3ec] rounded-lg overflow-hidden"
            >
              <CardContent className="flex min-h-[54px] items-center px-4 py-3.5">
                <div className="flex items-center justify-center gap-5 w-full">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Step"
                    src={item.stepIcon}
                  />

                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex flex-col items-start gap-3 flex-1">
                      <div className="flex flex-col items-start gap-1 w-full">
                        <div className="flex flex-col items-start gap-0.5 w-full">
                          <div className="w-full mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#5e616b] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CameraIcon className="w-[26px] h-[26px] text-[#5e616b]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {formFields.map((field, index) => (
          <div key={index} className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <div className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      {field.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <div className="[display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                              {field.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
