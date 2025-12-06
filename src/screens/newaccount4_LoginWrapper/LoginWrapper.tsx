import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

export const LoginWrapper = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000003:467891"
    >
      <BackSubHeader showRightButtons={true} />

      <section className="flex flex-col items-start gap-2.5 pt-0 pb-5 px-6 flex-1 w-full">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 w-full">
          <div className="relative w-60 h-154 bg-lottie-placeholder">
            <img
              className="absolute w-[25.42%] h-[39.61%] top-[34.90%] left-[40.46%]"
              alt="Ellipse"
              src="https://c.animaapp.com/shEJQFEJ/img/ellipse-4759.svg"
            />
            <div className="absolute w-[10.19%] h-[15.87%] top-[46.61%] left-[44.91%] rounded-12 bg-gradient-lottie" />
            <img
              className="absolute w-[41.67%] h-[64.94%] top-[22.08%] left-[29.17%]"
              alt="Exclude"
              src="https://c.animaapp.com/shEJQFEJ/img/exclude.svg"
            />
            <img
              className="absolute w-[6.67%] h-[24.89%] top-[35.93%] left-[42.18%]"
              alt="Vector"
              src="https://c.animaapp.com/shEJQFEJ/img/vector-993.svg"
            />
            <div className="absolute w-[10.00%] h-[12.99%] top-[15.58%] left-[45.00%] bg-accent-blue rounded-20" />
            <div className="absolute top-1.5 left-2.5 text-title-20-b-style text-white whitespace-nowrap">
              Lottie
            </div>
          </div>

          <div className="gap-30 w-full flex flex-col items-center">
            <div className="gap-3 w-full flex flex-col items-center">
              <h1 className="w-full font-title-24-b text-title-24-b-style text-grayscale-01 text-center">
                셀카인증 진행중 이예요.
              </h1>

              <p className="w-full font-body-15-r text-body-15-r-style text-gray-secondary text-center">
                셀카 인증이 완료되어야 자동출금계좌를 이용할 수 있어요.
                수동계좌는 계속 이용 가능해요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-5 w-full">
              <div className="relative w-2 h-3.5">
                <div className="relative pos-center-y-1 pos-center-x-2 w-1 h-1 bg-bullet-gray rounded-sm" />
              </div>
              <p className="flex-1 font-caption-title-13-r text-caption-13-r-style text-gray-secondary">
                셀카인증은 업무 시간 내 처리되며, 업무가 종료된 후에는 다음날
                처리되어요. (평일 09:00 ~ 22:00) / 주말 및 공휴일 10:00 ~ 19:00)
              </p>
            </div>
          </div>
        </div>

        <div className="gap-6 w-full z-[1] flex flex-col items-center">
          <div className="flex min-h-54 items-center justify-center gap-2 w-full rounded-xl shadow-white-top">
            <div className="flex min-h-54 items-start flex-1">
              <Button className="flex min-h-54 items-center justify-center gap-2 px-26 py-1.5 flex-1 h-auto bg-btn-blue rounded-xl hover:bg-btn-blue-hover">
                <span className="flex-1 font-title-16-b text-title-16-b-style text-white text-center">
                  확인
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-4 z-0" />

      </footer>
    </main>
  );
};
