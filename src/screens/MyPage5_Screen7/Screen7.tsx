import { ChevronLeftIcon, MoreVerticalIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
};

const stepCards = [
  {
    id: 1,
    title: "신분증 앞면",
    completed: true,
    icon: "check",
  },
  {
    id: 2,
    title: "신분증 뒷면(선택)",
    completed: false,
    active: true,
    icon: "number",
  },
];

const inputFields = [
  {
    label: "외국인등록번호",
    placeholder: "- 없이 입력해주세요.",
  },
  {
    label: "외국인등록증 발급일",
    placeholder: "YYYY/MM/DD",
  },
];

const noticeItems = [
  "정상적으로 신분증 촬영 후 이상이 없는 사진을 업로드 했는데도 불구하고 신분증 승인이 계속해서 거절되는 경우 신분증 타입을 변경해 주세요.",
  "한패스가입시 선택한 신분증의 종류와 시중은행 계좌를 개설할 때 제출한 신분증의 종류가 동일해야 합니다.",
];

export const Screen7 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="36848:68037"
    >
      <Link
        className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white"
        to="/mypageu95108u95u4361u4469u4523u4359u4462u4523u4364u4467u4540-u4366u4458u4527u4363u4455u4540-u4364u4462u4523u4359u4469u95u4363u4460u4352u4462u4520u4363u4469u4523u4355u4467u4540u4357u4457u4520u4364u4467u4540u47u4352u4462u4520u4354u4450u4352u4453u4361u4457u4361u4469u4523u4352u4457u4364u4467u4540u40u4363u4460u4352u4462u4520u4363u4469u4523u41"
      >
        <div className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {statusBarData.time.split(":")[0]}
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {statusBarData.time.split(":")[1]}
                  </div>
                </div>
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                {statusBarData.date}
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[-125060.00%] left-[-33800%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-4.png"
                />
                <img
                  className="h-[60.00%] top-[-125080.00%] left-[-33772.22%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-5.png"
                />
                <img
                  className="h-[80.00%] top-[-125100%] left-[-33744.44%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-5.png"
                />
                <img
                  className="h-full top-[-125120.00%] left-[-33716.67%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-3.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-38140.68%]"
                  alt="Bar"
                  src="/img/bar-1-5.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-38156.25%]"
                  alt="Bar"
                  src="/img/bar-2-6.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-38175.02%]"
                  alt="Bar"
                  src="/img/bar-3-6.png"
                />
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                {statusBarData.battery}
              </div>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-25716.67%]"
                  alt="Border"
                  src="/img/border-3.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-25625.00%]"
                  alt="Cap"
                  src="/img/cap-3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <header className="flex items-center justify-between px-5 py-4 relative self-stretch w-full">
        <Button variant="ghost" size="icon" className="h-auto p-0">
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </Button>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <MoreVerticalIcon className="w-6 h-6 text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <TargetIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </header>

      <main className="flex flex-col items-start w-full flex-1">
        <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            신분증 관리
          </h1>
          <p className="relative self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            신분증 앞면 사진을 업로드 해주세요
          </p>
        </section>

        <section className="flex flex-col items-start gap-14 pt-[42px] pb-3.5 px-6 w-full">
          <div className="flex flex-col items-start gap-9 w-full">
            <div className="flex flex-col items-start gap-[22px] relative w-full">
              <img
                className="absolute h-[calc(100%_-_130px)] top-[29px] left-[29px] w-px object-cover"
                alt="Line"
                src="https://c.animaapp.com/KuxympCS/img/line-209-4.svg"
              />

              {stepCards.map((step) => (
                <Card
                  key={step.id}
                  className={`w-full ${
                    step.active
                      ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                      : "border border-[#dfe3ec]"
                  }`}
                >
                  <CardContent className="flex items-center justify-center gap-5 px-4 py-3.5">
                    {step.completed ? (
                      <img
                        className="w-[26px] h-[26px]"
                        alt="Step"
                        src="https://c.animaapp.com/KuxympCS/img/ico28-step-5.svg"
                      />
                    ) : (
                      <div className="flex w-[26px] h-[26px] items-center justify-center gap-[10.77px] bg-[#0d56e4] rounded-[1075.85px]">
                        <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-[15.1px] tracking-[-0.30px] leading-[19.6px]">
                          {step.id}
                        </span>
                      </div>
                    )}

                    <div className="flex-1">
                      <h3
                        className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                          step.active ? "text-[#0d56e4]" : "text-[#5e616b]"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <img
                      className="w-[26px] h-[26px]"
                      alt="Camera"
                      src={
                        step.active
                          ? "https://c.animaapp.com/KuxympCS/img/ico32-camera-7.svg"
                          : "https://c.animaapp.com/KuxympCS/img/ico32-camera-6.svg"
                      }
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {inputFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-1.5 w-full"
              >
                <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  {field.label}
                </label>
                <div className="flex flex-col w-full">
                  <div className="flex items-center h-[42px] pl-1">
                    <Input
                      placeholder={field.placeholder}
                      className="flex-1 border-0 border-b border-[#dfe3ec] rounded-none px-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col gap-2 w-full">
              {noticeItems.map((notice, index) => (
                <div key={index} className="flex items-start gap-[5px] w-full">
                  <div className="relative w-2 h-3.5">
                    <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                  </div>
                  <p className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    {notice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <Button
            className="w-full min-h-[54px] h-auto bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
            disabled
          >
            다음
          </Button>
        </div>
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
