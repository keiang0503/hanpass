import React from "react";
import { Button } from "../../../../components/ui/button";

// 키보드 레이아웃 데이터
const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export const ViewSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-end gap-2.5 w-full items-center">
      <div className="flex flex-col items-start w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 h-auto rounded-none">
              <span className="flex-1 text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] font-title-16-b font-[number:var(--title-16-b-font-weight)] [font-style:var(--title-16-b-font-style)]">
                발급하기
              </span>
            </Button>
          </div>
        </div>

        {/* 키보드 영역 */}
        <div className="flex flex-col w-full bg-[#d0d3da] pt-2 pb-1">
          {/* 첫 번째 행 (Q-P) */}
          <div className="flex justify-center gap-[6px] px-[3px] mb-[11px]">
            {keyboardRows[0].map((key) => (
              <div
                key={key}
                className="w-[32px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center"
              >
                <span className="font-sf-pro-regular text-[22.8px] text-[#000000] tracking-[-0.55px] leading-[27px]">
                  {key}
                </span>
              </div>
            ))}
          </div>

          {/* 두 번째 행 (A-L) */}
          <div className="flex justify-center gap-[6px] px-[22px] mb-[11px]">
            {keyboardRows[1].map((key) => (
              <div
                key={key}
                className="w-[32px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center"
              >
                <span className="font-sf-pro-regular text-[22.8px] text-[#000000] tracking-[-0.55px] leading-[27px]">
                  {key}
                </span>
              </div>
            ))}
          </div>

          {/* 세 번째 행 (Z-M + 특수키) */}
          <div className="flex justify-center gap-[6px] px-[3px] mb-[10px]">
            {/* Shift 키 */}
            <div className="w-[42px] h-[42px] bg-[#aeb3bd] rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 9.5L8 5L12.5 9.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9.5V12.5H10V9.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {keyboardRows[2].map((key) => (
              <div
                key={key}
                className="w-[32px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center"
              >
                <span className="font-sf-pro-regular text-[22.8px] text-[#000000] tracking-[-0.55px] leading-[27px]">
                  {key}
                </span>
              </div>
            ))}

            {/* 백스페이스 키 */}
            <div className="w-[42px] h-[42px] bg-[#aeb3bd] rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center">
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
                <path d="M7 1L1 8.5L7 16H21V1H7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 5L11 11M11 5L17 11" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* 네 번째 행 (숫자/스페이스바/리턴) */}
          <div className="flex justify-center gap-[6px] px-[3px]">
            {/* 123 키 */}
            <div className="w-[42px] h-[42px] bg-[#aeb3bd] rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center">
              <span className="font-sf-pro-regular text-[15px] text-[#000000]">123</span>
            </div>

            {/* 이모지 키 */}
            <div className="w-[38px] h-[42px] bg-[#aeb3bd] rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center">
              <span className="text-[20px]">😊</span>
            </div>

            {/* 스페이스바 */}
            <div className="flex-1 h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center mx-1">
              <span className="font-sf-pro-regular text-[16px] text-[#000000]">space</span>
            </div>

            {/* 리턴 키 */}
            <div className="w-[88px] h-[42px] bg-[#aeb3bd] rounded-[5px] shadow-[0px_1px_0px_#898a8d] flex items-center justify-center">
              <span className="font-sf-pro-regular text-[16px] text-[#000000]">return</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
