import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";

const reasonOptions = [
  { id: 1, label: "아이디 변경" },
  { id: 2, label: "아이디 변경" },
  { id: 3, label: "다른 송금서비스 이용" },
  { id: 4, label: "서비스 불만족" },
  { id: 5, label: "환율 및 혜택 불만족" },
  { id: 6, label: "고객 응대 불만족" },
  { id: 7, label: "한패스 이용 불가 (한도 초과)" },
  { id: 8, label: "한패스 이용 불가 (해외 이민 등)" },
  { id: 9, label: "기타" },
];

export const ContentsSubsection = (): JSX.Element => {
  const [selectedReason, setSelectedReason] = useState<number>(9);

  return (
    <section className="flex flex-col items-center justify-end gap-3.5 pt-[42px] pb-[30px] px-6 w-full">
      <div className="flex flex-col items-start gap-3.5 w-full">
        {reasonOptions.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className={`h-auto min-h-[54px] w-full px-4 py-4 rounded-lg border ${
              selectedReason === option.id
                ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                : "border border-[#dfe3ec]"
            } bg-white hover:bg-white`}
            onClick={() => setSelectedReason(option.id)}
          >
            <span
              className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                selectedReason === option.id
                  ? "text-[#0d56e4]"
                  : "text-[#5e616b]"
              }`}
            >
              {option.label}
            </span>
          </Button>
        ))}

        {selectedReason === 9 && (
          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full min-h-[42px]">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center gap-2.5 px-0 py-[7px] flex-1">
                          <div className="flex items-center gap-2 flex-1 self-stretch">
                            <Textarea
                              defaultValue="탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까탈퇴가 하고싶으니까"
                              className="flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] text-[#0b0c0e] border-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 min-h-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-0.5 bg-[#4c67f1]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
