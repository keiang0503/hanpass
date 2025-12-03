import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export const WithdrawFailed = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="40000008:1184839"
    >
      <header className="w-full flex flex-col items-start relative self-stretch bg-white">
      </header>

      <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5" />

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/X2DaSZUE/img/mini-7@2x.png"
            />
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-start gap-2.5 px-6 py-0 relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
              alt="Group"
              src="https://c.animaapp.com/X2DaSZUE/img/group-1261168836@2x.png"
            />
          </div>

          <div className="gap-[30px] self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]">
            <div className="gap-3 self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                출금계좌 등록에 실패했어요.
              </h1>

              <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                실패 사유 : 6자리 비밀번호가 일치하지 않아요 (1/6)
                <br />
                (A10039)
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="gap-6 self-stretch w-full z-0 flex flex-col items-center relative flex-[0_0_auto]">
          <div className="flex min-h-[54px] items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-[54px] items-start relative flex-1 grow">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
                <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다시하기
                </span>
              </Button>
            </div>
          </div>

          <button className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
            <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap relative w-fit mt-[-1.00px] [font-style:var(--body-15-r-font-style)]">
              나중에 할게요
            </span>

            <ChevronRightIcon className="relative w-[18px] h-[18px] text-[#717682]" />
          </button>
        </div>

        <div className="relative self-stretch w-full h-4 z-[-1]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] z-[-2] bg-white">
          <div className="w-[134px] gap-2.5 ml-[-8.50px] mr-[-8.50px] flex flex-col items-center relative flex-[0_0_auto]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
