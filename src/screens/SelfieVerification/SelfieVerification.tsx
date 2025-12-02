import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const SelfieVerification = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000003:240090"
    >
      {/* Status Bar */}
      <header className="flex flex-col w-full items-start">
        <div className="flex h-[47px] items-start w-full">
          <div className="flex flex-1 grow flex-col items-start gap-2.5 py-3.5 relative">
            <div className="flex flex-col items-center gap-2.5 px-8 py-0 w-full relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'PingFang_SC-Semibold',Helvetica] font-semibold text-[#000000cc] text-base tracking-[0] leading-5 whitespace-nowrap">
                  9:41
                </div>
              </div>
            </div>
            <img
              className="absolute w-[76px] h-[13px] top-4 left-[290px]"
              alt="Status Icons"
              src="/img/wechat-hd.svg"
            />
          </div>
        </div>

        {/* Navigation Header */}
        <div className="flex h-12 items-center gap-[158px] px-4 py-2.5 w-full border-b border-[#f5f6f8]">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0" asChild>
            <Link to="/selfiecaptureu95021">
              <ChevronLeftIcon className="w-6 h-6 text-[#0b0c0e]" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              셀카인증 진행중
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="flex flex-col items-center gap-6 pt-[60px] pb-0 px-6 relative flex-1 w-full">
        {/* Lottie Animation Placeholder */}
        <div className="w-[200px] h-[200px] bg-[#f5f6f8] rounded-full flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-[#003fbb] border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Processing Message */}
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            셀카 인증을 진행하고 있습니다.
          </p>
          <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            잠시만 기다려주세요.
          </p>
        </div>

        {/* Notice */}
        <div className="flex flex-col items-center gap-1 mt-8 w-full">
          <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#acb2c1] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            영업시간 외에 신청하신 경우
          </p>
          <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#acb2c1] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            인증 처리에 시간이 소요될 수 있습니다.
          </p>
        </div>
      </main>

      {/* Bottom Button */}
      <section className="flex flex-col justify-end gap-2.5 pb-[34px] w-full items-center relative">
        <div className="flex flex-col items-start relative w-full">
          <div className="min-h-[54px] items-center justify-center gap-2 px-6 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative w-full">
            <div className="min-h-[54px] flex-1 grow flex items-start relative">
              <Button
                className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 grow bg-[#003fbb] hover:bg-[#002a7a] rounded-xl h-auto"
                asChild
              >
                <Link to="/passwordinputkeypadu95023">
                  <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    확인
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
