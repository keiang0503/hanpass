import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
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
      <BackSubHeader />

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
      </footer>
    </div>
  );
};
