import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46420"
    >
      <div className="flex w-full h-screen items-center justify-center gap-2.5 px-6 py-12 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              개인정보를 업데이트 해주세요!
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              안전한 금융거래를 위해 정보를 확인하고 있어요. 본인의 한국어 이름,
              주소를 입력해주세요.
            </p>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button className="flex min-h-12 items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-[14px] h-auto hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  등록하기
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <header className="flex flex-col w-full items-start absolute top-0 left-0">
          <Link
            className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]"
            to="/x5u46-u4359u4457u4363u4469u4361u4467u4369u4469u4361u4469u4540"
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
