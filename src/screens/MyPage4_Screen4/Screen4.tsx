import {
  ChevronLeftIcon,
  CircleIcon,
  InfoIcon,
  MoreVerticalIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const passportInfoData = [
  {
    label: "여권번호",
    value: "M12345678",
    valueColor: "text-[#0d56e4]",
    valueWeight: "font-navigation-12-b",
  },
  {
    label: "국적",
    value: "CN",
    valueColor: "text-[#1c253f]",
    valueWeight: "font-navigation-12-m",
  },
  {
    label: "여권만료일",
    value: "2025/09/09",
    valueColor: "text-[#1c253f]",
    valueWeight: "font-navigation-12-m",
  },
];

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="35313:100077"
    >
      <header className="w-full flex flex-col items-start bg-white">
        <div className="w-full flex items-center justify-between px-5 py-4 h-auto">
          <div className="flex-1 flex items-center gap-2">
            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
              9:41
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/2nKnhQUO/img/icon---mobile-signal-6.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/2nKnhQUO/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/2nKnhQUO/img/battery-6.svg"
            />
          </div>
        </div>

        <nav className="w-full flex items-center justify-between px-5 py-4 h-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-0"
            asChild
          >
            <Link to="/mypageu95066-u4363u4455u4352u4463u4523u4364u4453u4540u4359u4457-u4370u4458u4520u4363u4469u4523-u45-u4363u4460u4352u4462u4520u4363u4469u4523">
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <MoreVerticalIcon className="w-6 h-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <CircleIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col w-full flex-1">
        <div className="flex flex-col items-start px-6 pt-[22px] pb-0 w-full bg-white">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            여권 정보
          </h1>
        </div>

        <div className="flex flex-col items-center pt-[22px] pb-5 px-6 flex-1 w-full">
          <Card className="w-full rounded-xl border-[#dfe3ec]">
            <CardContent className="p-4 flex flex-col gap-2.5">
              <div className="flex items-center gap-1 w-full">
                <div className="flex-1 flex items-center gap-1">
                  <span className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                    인증 상태
                  </span>
                </div>

                <Badge className="bg-[#0d56e4] hover:bg-[#0d56e4] rounded-[50px] px-2.5 py-1 h-auto">
                  <span className="font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-white text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]">
                    재등록
                  </span>
                </Badge>
              </div>

              <img
                className="w-full h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/2nKnhQUO/img/vector-1236-1.svg"
              />

              <div className="flex flex-col items-start gap-2 w-full">
                {passportInfoData.map((item, index) => (
                  <div key={index} className="flex items-start gap-1 w-full">
                    <span className="flex-1 font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#5c6580] text-[length:var(--navigation-12-m-font-size)] tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                      {item.label}
                    </span>
                    <span
                      className={`flex-1 ${item.valueWeight} font-[number:var(--navigation-12-b-font-weight)] ${item.valueColor} text-[length:var(--navigation-12-b-font-size)] text-right tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full">
          <div className="flex items-center gap-0.5 w-full">
            <InfoIcon className="w-5 h-5 text-[#757b88]" />
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </span>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="w-2 h-3.5 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                여권 등록이 거절되었어요.
                <br />
                거절 사유 : 실제 사진 아님 (캡쳐본)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] w-full min-h-[54px]">
            <Button className="flex-1 min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다시 등록하기
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
