import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

export const OverseasremitScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:66327"
    >
      <BackSubHeader />

      <main className="flex flex-col items-start gap-2.5 px-6 py-0 flex-1 w-full grow">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 w-full">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
              alt="Group"
              src="https://c.animaapp.com/vuYaFJZH/img/group-1261168836@2x.png"
            />
          </div>

          <div className="gap-[30px] w-full flex flex-col items-center">
            <div className="gap-3 w-full flex flex-col items-center">
              <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                송금 신청 완료
              </h1>

              <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                송금 결과를 포함한 자세한 내용은 내역관리 페이지에서
                확인해주세요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl">
          <div className="flex min-h-[54px] items-start flex-1 grow">
            <Button
              asChild
              className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 w-full h-auto bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90"
            >
              <Link to="/overseasremitu95022-u4361u4457u4540u4352u4467u4535u4352u4455u4527u4352u4458u95u4352u4449u4361u4449u4540u4352u4456u4364u4458-u4363u4469u4536u4352u4467u4535-u4363u4449u4523u4354u4450">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
