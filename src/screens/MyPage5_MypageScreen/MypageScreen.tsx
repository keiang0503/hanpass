import {
  CameraIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MypageScreen = (): JSX.Element => {
  const idNumberDots = Array(10).fill(null);

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:72208"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex items-center justify-between px-5 py-4 w-full">
          <div className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
            9:41
          </div>

          <div className="flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/KuxympCS/img/icon---mobile-signal-7.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/KuxympCS/img/wifi-7.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/KuxympCS/img/battery-7.svg"
            />
          </div>
        </div>

        <nav className="flex items-center justify-between px-5 py-4 w-full">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <CircleIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 w-full">
        <section className="flex flex-col px-6 pt-[22px] pb-0 w-full bg-white">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            신분증 관리
          </h1>

          <p className="mt-2 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            신분증 앞면 사진을 업로드 해주세요
          </p>
        </section>

        <section className="flex flex-col flex-1 px-6 pt-[42px] pb-[30px] gap-9 w-full">
          <div className="flex flex-col gap-[22px] w-full">
            <Card className="border border-[#dfe3ec] rounded-lg overflow-hidden">
              <CardContent className="flex items-center justify-between p-4 gap-5">
                <CheckCircle2Icon className="w-[26px] h-[26px] text-[#0d56e4]" />

                <div className="flex-1">
                  <h2 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#5e616b] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    신분증 앞면
                  </h2>
                </div>

                <CameraIcon className="w-[26px] h-[26px] text-[#5e616b]" />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              신분증 번호 입력
            </label>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2.5 px-1.5 py-3">
                {idNumberDots.map((_, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                  />
                ))}
              </div>

              <div className="w-full h-px bg-[#dfe3ec]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center px-6 pb-0 w-full bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <Button className="w-full min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl shadow-[0px_-20px_20px_#ffffff] h-auto">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </span>
          </Button>
        </div>

        <div className="w-full h-4" />

        <div className="flex justify-center py-2 w-full">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
