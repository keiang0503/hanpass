import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const withdrawalReasons = [
  { id: 1, text: "아이디 변경", selected: false },
  { id: 2, text: "아이디 변경", selected: false },
  { id: 3, text: "다른 송금서비스 이용", selected: false },
  { id: 4, text: "서비스 불만족", selected: false },
  { id: 5, text: "환율 및 혜택 불만족", selected: false },
  { id: 6, text: "고객 응대 불만족", selected: false },
  { id: 7, text: "한패스 이용 불가 (한도 초과)", selected: false },
  { id: 8, text: "한패스 이용 불가 (해외 이민 등)", selected: false },
  { id: 9, text: "기타", selected: true },
];

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="35166:94904"
    >
      <BackSubHeader />

      <main className="flex flex-col items-center justify-end gap-3.5 pt-[42px] pb-6 px-6 relative flex-1 w-full">
        {withdrawalReasons.map((reason) => (
          <Button
            key={reason.id}
            variant="outline"
            className={`h-auto min-h-[54px] w-full px-4 py-4 rounded-lg ${
              reason.selected
                ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                : "border border-[#dfe3ec]"
            }`}
          >
            <span
              className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                reason.selected ? "text-[#0d56e4]" : "text-[#5e616b]"
              }`}
            >
              {reason.text}
            </span>
          </Button>
        ))}

        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col items-start relative w-full">
              <Input
                placeholder="탈퇴 이유를 작성해주세요."
                className="h-[42px] w-full border-0 border-b border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col justify-end px-6 py-0 relative w-full">
        <Button
          disabled
          className="h-auto min-h-[54px] w-full rounded-xl bg-[#b7ccf7] hover:bg-[#b7ccf7] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
        >
          탈퇴하기
        </Button>

        <div className="relative w-full h-4" />

      </footer>
    </div>
  );
};
