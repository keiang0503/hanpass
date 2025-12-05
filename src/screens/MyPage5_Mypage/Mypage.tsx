import React, { useState } from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const idTypes = [
  {
    id: "passport",
    label: "여권",
    icon: "https://c.animaapp.com/KuxympCS/img/ico26-check-01.svg",
    iconInactive: "https://c.animaapp.com/KuxympCS/img/ico26-check-01-2.svg",
  },
  {
    id: "alien-registration",
    label: "외국인등록증",
    icon: "https://c.animaapp.com/KuxympCS/img/ico26-check-01.svg",
    iconInactive: "https://c.animaapp.com/KuxympCS/img/ico26-check-01-2.svg",
  },
  {
    id: "domestic-residence",
    label: "국내거소신고증",
    icon: "https://c.animaapp.com/KuxympCS/img/ico26-check-01.svg",
    iconInactive: "https://c.animaapp.com/KuxympCS/img/ico26-check-01-2.svg",
  },
];

const bulletPoints = [
  "정상적으로 신분증 촬영 후 이상이 없는 사진을 업로드 했는데도 불구하고 신분증 승인이 계속해서 거절되는 경우 신분증 타입을 변경해 주세요.",
  "한패스가입시 선택한 신분증의 종류와 시중은행 계좌를 개설할 때 제출한 신분증의 종류가 동일해야 합니다.",
];

export const Mypage = (): JSX.Element => {
  const [selectedId, setSelectedId] = useState("passport");

  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="34877:79756"
    >
      <BackSubHeader />

      <section className="flex-col items-start bg-white flex relative w-full">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 w-full flex items-start relative">
          <div className="flex-col flex items-start relative w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              신분증 관리
            </h1>
          </div>
          <div className="gap-2 flex items-start relative w-full">
            <div className="justify-center flex-1 grow flex flex-col items-center relative">
              <p className="relative w-full mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                인증할 신분증 종류 3개 중 1개를 선택하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-start gap-3.5 pt-[42px] pb-14 px-6 relative flex-1 w-full grow">
        {idTypes.map((idType) => (
          <Card
            key={idType.id}
            className={`w-full cursor-pointer transition-all ${
              selectedId === idType.id
                ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                : "border border-[#dfe3ec] shadow-[0px_4px_4px_-4px_#0c0c0d0d]"
            }`}
            onClick={() => setSelectedId(idType.id)}
          >
            <CardContent className="flex min-h-[68px] items-center p-4">
              <div className="flex items-center gap-5 relative flex-1">
                <img
                  className="relative w-[26px] h-[26px]"
                  alt="Check"
                  src={
                    selectedId === idType.id ? idType.icon : idType.iconInactive
                  }
                />
                <div className="flex items-start gap-3 relative flex-1 grow">
                  <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                    <div className="flex flex-col items-start gap-1 relative w-full">
                      <div className="flex flex-col items-start gap-0.5 relative w-full">
                        <div
                          className={`relative w-full mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                            selectedId === idType.id
                              ? "text-[#0d56e4]"
                              : "text-[#5e616b]"
                          }`}
                        >
                          {idType.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 relative w-full z-[3]">
          <div className="flex-col gap-2 flex items-start relative w-full">
            {bulletPoints.map((point, index) => (
              <div
                key={index}
                className="gap-[5px] flex items-start relative w-full"
              >
                <div className="relative w-2 h-3.5">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="gap-6 w-full z-[1] flex flex-col items-center relative">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative w-full">
            <Button className="min-h-[54px] flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                완료
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-4 z-0" />

      </footer>
    </div>
  );
};
