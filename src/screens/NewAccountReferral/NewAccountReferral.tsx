import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const NewAccountReferral = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45911"
    >
      {/* Status Bar Section */}
      <header className="w-full bg-white">
        <div className="flex items-center justify-between px-5 py-3">
          <time className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-normal">
            9:41
          </time>

          <div className="flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <div className="absolute h-[40%] w-[16.67%] top-0 left-0 bg-black rounded-sm" />
              <div className="absolute h-[60%] w-[16.67%] top-[40%] left-[5px] bg-black rounded-sm" />
              <div className="absolute h-[80%] w-[16.67%] top-[20%] left-[10px] bg-black rounded-sm" />
              <div className="absolute h-full w-[16.67%] top-0 left-[15px] bg-black rounded-sm" />
            </div>

            <div className="w-4 h-3 flex items-center justify-center">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 2.5C10.5 2.5 12.7 3.6 14.2 5.4L15.6 4C13.8 1.9 11.1 0.5 8 0.5C4.9 0.5 2.2 1.9 0.4 4L1.8 5.4C3.3 3.6 5.5 2.5 8 2.5ZM8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C11.9 4.3 10 3.5 8 3.5C6 3.5 4.1 4.3 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5ZM8 8.5C7.2 8.5 6.5 8.8 5.9 9.4L8 11.5L10.1 9.4C9.5 8.8 8.8 8.5 8 8.5Z" fill="black"/>
              </svg>
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-normal">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <div className="w-[22px] h-3 border border-black rounded-sm" />
              <div className="absolute w-[17px] h-[8px] top-[2px] left-[2px] bg-black rounded-[1px]" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Header */}
      <header className="flex items-center justify-end h-[54px] px-5 bg-white relative">
        <img
          className="h-8 w-[87px]"
          alt="Mini"
          src="/img/mini.png"
        />
      </header>

      {/* Title Section */}
      <section className="px-6 pt-[22px] bg-white">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          추천인 초대 코드 또는
          <br />
          파트너 코드를 입력해 주세요.
        </h1>
      </section>

      {/* Referral Code Input Section */}
      <main className="flex flex-col flex-1 px-6 pt-[42px] gap-9">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="referral-code"
            className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
          >
            추천인 초대코드/파트너 코드 (선택)
          </Label>

          <div className="relative">
            <Input
              id="referral-code"
              type="text"
              defaultValue="Wechat"
              className="h-[42px] bg-[#f7f7f8] border-0 border-b-2 border-b-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="flex flex-col items-center px-6">
        <Button
          className="w-full min-h-[54px] h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
          asChild
        >
          <Link to="/newaccountpasswordwechatu95018">
            다음
          </Link>
        </Button>

        <div className="w-full h-4" />

        {/* Home Indicator */}
        <div className="w-full flex justify-center py-2 bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
