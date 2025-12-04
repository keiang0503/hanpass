import {
  CameraIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  CircleIcon,
  MoreVerticalIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
};

const uploadCards = [
  {
    id: 1,
    title: "신분증 앞면",
    hasLine: true,
  },
  {
    id: 2,
    title: "신분증 뒷면(선택)",
    hasLine: false,
  },
];

const formFields = [
  {
    label: "외국인등록번호",
    value: "M12345689",
  },
  {
    label: "외국인등록증 발급일",
    value: "2025/11/28",
  },
];

const infoItems = [
  "정상적으로 신분증 촬영 후 이상이 없는 사진을 업로드 했는데도 불구하고 신분증 승인이 계속해서 거절되는 경우 신분증 타입을 변경해 주세요.",
  "한패스가입시 선택한 신분증의 종류와 시중은행 계좌를 개설할 때 제출한 신분증의 종류가 동일해야 합니다.",
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="36848:68543"
    >
      {/* Status Bar - iOS Style */}
      <header className="w-full flex flex-col items-start bg-white">
        <div className="w-full flex items-center justify-between px-2.5 py-1 h-6 bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  {statusBarData.time.split(":")[0]}
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  :
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  {statusBarData.time.split(":")[1]}
                </div>
              </div>
            </div>
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              {statusBarData.date}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-125060.00%] left-[-36088.89%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-6.png"
              />
              <img
                className="h-[60.00%] top-[-125080.00%] left-[-36061.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-7.png"
              />
              <img
                className="h-[80.00%] top-[-125100%] left-[-36033.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-7.png"
              />
              <img
                className="h-full top-[-125120.00%] left-[-36005.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-40715.68%]"
                alt="Bar"
                src="/img/bar-1-7.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-40731.25%]"
                alt="Bar"
                src="/img/bar-2-8.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-40750.02%]"
                alt="Bar"
                src="/img/bar-3-8.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              {statusBarData.battery}
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-27433.34%]"
                alt="Border"
                src="/img/border-4.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-27341.67%]"
                alt="Cap"
                src="/img/cap-4.png"
              />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <Link
            to="/mypageu95108u95u4361u4469u4523u4359u4462u4523u4364u4467u4540-u4366u4458u4527u4363u4455u4540-u4364u4462u4523u4359u4469u95u4363u4460u4352u4462u4520u4363u4469u4523u4355u4467u4540u4357u4457u4520u4364u4467u4540u47u4352u4462u4520u4354u4450u4352u4453u4361u4457u4361u4469u4523u4352u4457u4364u4467u4540u40u4363u4460u4352u4462u4520u4363u4469u4523u412"
            className="flex-1"
          >
            <div className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
              {statusBarData.time}
            </div>
          </Link>

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
        </nav>
      </header>

      {/* App Header */}
      <div className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreVerticalIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0 rounded-full border-2 border-black"
              >
                <CircleIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <section className="flex flex-col items-start bg-white w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              신분증 관리
            </h1>
          </div>

          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                신분증 앞면 사진을 업로드 해주세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-start gap-14 pt-[42px] pb-3.5 px-6 w-full">
        <div className="flex flex-col items-start gap-9 w-full">
          {/* Upload Cards Section */}
          <div className="flex flex-col items-start gap-[22px] w-full relative">
            <img
              className="absolute h-[calc(100%_-_130px)] top-[29px] left-[29px] w-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/KuxympCS/img/line-209-4.svg"
            />

            {uploadCards.map((card) => (
              <div key={card.id} className="flex items-start gap-2.5 w-full">
                <Card className="flex-1 min-h-[54px] border-[#dfe3ec] rounded-lg overflow-hidden">
                  <CardContent className="flex items-center justify-center gap-5 px-4 py-3.5 p-0">
                    <CheckCircle2Icon className="w-[26px] h-[26px] text-blue-600" />

                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex flex-col items-start gap-3 flex-1">
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="flex flex-col items-start gap-0.5 w-full">
                            <p className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#5e616b] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                              {card.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CameraIcon className="w-[26px] h-[26px] text-gray-400" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Form Fields */}
          {formFields.map((field, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-1.5 w-full"
            >
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                        {field.label}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex-1 w-full flex items-center">
                        <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                          <div className="flex items-center gap-2.5 flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <div className="[display:-webkit-box] items-center justify-center flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                                {field.value}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-0.5">
                        <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col gap-2 items-start w-full">
            {infoItems.map((item, index) => (
              <div key={index} className="gap-[5px] flex items-start w-full">
                <div className="relative w-2 h-3.5">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white mt-auto">
        <div className="flex flex-col items-center gap-6 w-full z-0">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
            <Button className="min-h-[54px] flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4 z-[-1]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-2] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
