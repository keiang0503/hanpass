import {
  CameraIcon,
} from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="36848:68869"
    >
      <BackSubHeader />

      <section className="w-full max-w-[375px] bg-white pt-[22px] px-6">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            신분증 관리
          </h1>
          <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            신분증 앞면 사진을 업로드 해주세요
          </p>
        </div>
      </section>

      <main className="flex flex-col flex-1 w-full max-w-[375px] gap-9 pt-[42px] pb-[30px] px-6">
        <div className="flex flex-col items-start gap-[22px] relative">
          <img
            className="absolute h-[calc(100%_-_54px)] top-7 left-[5px] w-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/KuxympCS/img/line-209-1.svg"
          />

          <Card className="w-full border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-5 px-4 py-3.5">
                <div className="flex w-[26px] h-[26px] items-center justify-center bg-[#0d56e4] rounded-full">
                  <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-[15.1px] tracking-[-0.30px] leading-[19.6px]">
                    1
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    신분증 앞면
                  </h3>
                </div>

                <CameraIcon className="w-[26px] h-[26px] text-[#0d56e4]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-1.5">
          <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
            신분증 번호 입력
          </Label>

          <div className="w-full">
            <Input
              placeholder="신분증 번호를 입력해 주세요"
              className="h-[42px] border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:border-[#0d56e4]"
            />
          </div>
        </div>
      </main>

      <footer className="w-full max-w-[375px] flex flex-col items-center px-6 bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <Button
            disabled
            className="w-full h-auto min-h-[54px] bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl shadow-[0px_-20px_20px_#ffffff] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] px-[26px] py-1.5"
          >
            확인
          </Button>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
