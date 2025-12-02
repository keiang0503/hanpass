import React from "react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ElementWrapper = (): JSX.Element => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46422"
    >
      <div className="flex w-full h-screen items-center justify-center gap-2.5 px-6 py-12 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <Card className="flex flex-col max-w-[432px] items-center justify-center relative flex-1 grow bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
        <CardContent className="flex items-center pt-8 pb-4 px-[22px] self-stretch w-full flex-col gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-[60px] h-[60px]">
            <img
              className="absolute top-0 left-0.5 w-[58px] h-[60px]"
              alt="Shutterstock"
              src="https://c.animaapp.com/FyEwllI9/img/shutterstock-2219429455-1@2x.png"
            />
          </div>

          <h1 className="relative self-stretch font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] text-center tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
            보이스피싱 주의 안내
          </h1>

          <p className="relative self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] text-center tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            가족, 지인, 한패스 직원을 사칭한 보이스피싱에 주의하세요!
          </p>

          <Alert className="flex flex-col items-center gap-6 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#fff6f8] rounded-xl border-0">
            <AlertDescription className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#f10000] text-sm text-center tracking-[-0.28px] leading-[18.2px]">
                <span className="tracking-[var(--body-14-r-letter-spacing)] font-body-14-r [font-style:var(--body-14-r-font-style)] font-[number:var(--body-14-r-font-weight)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)]">
                  한패스 직원은 절대 고객님의{" "}
                </span>
                <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] tracking-[var(--body-14-b-letter-spacing)] [font-style:var(--body-14-b-font-style)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)]">
                  아이디, 비밀번호, 핀번호
                </span>
                <span className="tracking-[var(--body-14-r-letter-spacing)] font-body-14-r [font-style:var(--body-14-r-font-style)] font-[number:var(--body-14-r-font-weight)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)]">
                  를 요구하지 않습니다.
                </span>
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>

        <div className="flex min-h-[54px] items-center justify-center gap-2 px-3.5 py-0 relative self-stretch w-full flex-[0_0_auto] rounded-xl">
          <div className="flex min-h-12 max-h-12 items-start gap-[7px] relative flex-1 grow">
            <Button className="flex min-h-12 items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-[14px] h-auto hover:bg-[#0d56e4]/90">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                닫기
              </span>
            </Button>
          </div>
        </div>

        <footer className="inline-flex items-start pt-3 pb-[22px] px-0 flex-col gap-2.5 relative flex-[0_0_auto]">
          <button className="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto] bg-transparent border-0 cursor-pointer">
            <span className="relative w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
              오늘 하루 보지 않기
            </span>
          </button>
        </footer>
      </Card>

      <header className="flex flex-col w-full items-start absolute top-0 left-0">
        <Link
          className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]"
          to="/x6u46-u4358u4454u4363u4469u4523-u4357u4450u4523u4355u4469u4540-u4369u4449u4536u4363u4453u4536"
        >
          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <time className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </time>

            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/FyEwllI9/img/icon---mobile-signal-3.svg"
            />

            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/FyEwllI9/img/wifi-2.svg"
            />

            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/FyEwllI9/img/battery-3.svg"
            />
          </div>
        </Link>

        <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/FyEwllI9/img/mini-8@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>
      </div>
    </div>
  );
};
