import {
  CameraIcon,
  CheckCircle2Icon,
} from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
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
      <BackSubHeader />

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

      </footer>
    </div>
  );
};
