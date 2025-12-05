import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MypageWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:90855"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 px-6 pt-0 pb-2 gap-2.5">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 flex-1">
          <Card className="w-full max-w-[240px] bg-[#ff00001a] border-0 overflow-hidden">
            <CardContent className="relative h-[154px] p-0">
              <img
                className="absolute w-[25.42%] h-[39.61%] top-[34.90%] left-[40.46%]"
                alt="Ellipse"
                src="https://c.animaapp.com/2nKnhQUO/img/ellipse-4759.svg"
              />
              <div className="absolute w-[10.19%] h-[15.87%] top-[46.61%] left-[44.91%] rounded-[12.22px] bg-[linear-gradient(135deg,rgba(71,122,253,1)_3%,rgba(58,55,237,1)_48%,rgba(124,79,249,1)_100%)]" />
              <img
                className="absolute w-[41.67%] h-[64.94%] top-[22.08%] left-[29.17%]"
                alt="Exclude"
                src="https://c.animaapp.com/2nKnhQUO/img/exclude.svg"
              />
              <img
                className="absolute w-[6.67%] h-[24.89%] top-[35.93%] left-[42.18%]"
                alt="Vector"
                src="https://c.animaapp.com/2nKnhQUO/img/vector-993.svg"
              />
              <div className="absolute w-[10.00%] h-[12.99%] top-[15.58%] left-[45.00%] bg-[#0044eb] rounded-[20px]" />
              <div className="absolute top-2.5 left-2.5 [font-family:'Pretendard-Black',Helvetica] font-black text-white text-xl tracking-[-0.40px] leading-[26.0px] whitespace-nowrap">
                Lottie
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                여권 등록 처리중이예요
              </h1>
              <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                여권등록 승인은 업무 시간 내 처리되며, 업무가 종료된 후에는
                다음날 처리됩니다.
                <br />
                (평일 09:00~22:00 / 주말 및 공휴일 10:00~19:00)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#e9f1ff] rounded-xl">
            <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0d56e4] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap [font-style:var(--body-14-r-font-style)]">
              여권 승인 완료 시 해외 송금이 가능해요!
            </p>
          </div>
          <div className="flex items-center pl-5 pr-0 py-0 w-full">
            <img
              className="w-[13px] h-2"
              alt="Vector"
              src="https://c.animaapp.com/2nKnhQUO/img/vector.svg"
            />
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center px-6 py-0">
        <Link
          to="/mypageu95066-u4363u4455u4352u4463u4523u4364u4453u4540u4359u4457-u4370u4458u4520u4363u4469u4523-u45-u4363u4460u4352u4462u4520u4363u4469u45232"
          className="w-full"
        >
          <Button className="w-full min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              마이페이지로 이동
            </span>
          </Button>
        </Link>

        <div className="h-4 w-full" />

      </footer>
    </div>
  );
};
