import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const authenticationOptions = [
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40.svg",
    title: "휴대폰 문자(SMS) 인증",
    description: "한패스에 등록된 휴대폰번호로 인증",
    arrowIcon:
      "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-5.svg",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40-1.svg",
    title: "휴대폰 PASS 인증",
    description: "PASS앱에서 PIN번호, 지문 등으로 인증",
    arrowIcon:
      "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-6.svg",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40-2.svg",
    title: "공동인증서 본인 인증",
    description: "공동인인증기관의 인증서를 통한 인증",
    arrowIcon:
      "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-7.svg",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40-3.svg",
    title: "신용카드 본인 인증",
    description: "본인명의 신용카드, 체크카드로 인증",
    arrowIcon:
      "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-8.svg",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico-sns-certification-40.svg",
    title: "간편 인증",
    description: "네이버, 토스, 페이코, PASS 등 인증기관을 통한 인증",
    arrowIcon:
      "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-9.svg",
  },
];

export const AccountScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35202:90825"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  9
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  :
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  41
                </span>
              </div>
            </div>
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              Sat Jun 11
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-102560.00%] left-[-12438.89%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-6.png"
              />
              <img
                className="h-[60.00%] top-[-102580.00%] left-[-12411.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-7.png"
              />
              <img
                className="h-[80.00%] top-[-102600%] left-[-12383.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-7.png"
              />
              <img
                className="h-full top-[-102620.00%] left-[-12355.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-14109.43%]"
                alt="Bar"
                src="/img/bar-1-7.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-14125.00%]"
                alt="Bar"
                src="/img/bar-2-8.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-14143.77%]"
                alt="Bar"
                src="/img/bar-3-8.png"
              />
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-9695.84%]"
                alt="Border"
                src="/img/border-4.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-9604.17%]"
                alt="Cap"
                src="/img/cap-4.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-4 w-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-0"
            asChild
          >
            <Link to="/accountu95016-u40u4354u4450u4352u4462u4520u4363u4469u4523u41-u4359u4457u4523u4363u4469u4523u4363u4469u4523u4364u4467u45402">
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <CircleIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-0 w-full h-[54px] bg-white">
          <img
            className="w-8 h-8"
            alt="Wechat hd"
            src="https://c.animaapp.com/sCCrT5uL/img/wechat-hd-6.svg"
          />
          <img
            className="w-[87px] h-8"
            alt="Mini"
            src="https://c.animaapp.com/sCCrT5uL/img/mini-7@2x.png"
          />
        </div>
      </header>

      <main className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            본인인증을 위한
            <br />
            방법을 선택해주세요.
          </h1>
        </section>

        <section className="flex flex-col items-start gap-2.5 pt-[34px] pb-4 px-6 flex-1 w-full">
          {authenticationOptions.map((option, index) => (
            <Card
              key={index}
              className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec] overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <CardContent className="flex items-center justify-between p-0 py-[27px] pl-4 pr-2.5">
                <div className="flex items-start gap-3 flex-1">
                  <img
                    className="w-10 h-10"
                    alt={option.title}
                    src={option.icon}
                  />
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <h2 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#5e616b] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      {option.title}
                    </h2>
                    <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {option.description}
                    </p>
                  </div>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-[#5e616b]" />
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
