import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

const passportFields = [
  {
    label: "여권번호",
    value: "M12345678",
  },
  {
    label: "여권발급일",
    value: "2025/01/01",
  },
  {
    label: "여권만료일",
    value: "2030/01/01",
  },
];

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="36848:90835"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 w-full">
        <div className="flex flex-col items-start px-6 pt-[22px] pb-0 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            여권정보를 확인해주세요.
          </h1>
        </div>

        <div className="flex flex-col items-center pt-[22px] pb-5 px-6 flex-1 w-full">
          <img
            className="flex-[0_0_auto]"
            alt="Box"
            src="https://c.animaapp.com/2nKnhQUO/img/box-1.svg"
          />

          <div className="flex flex-col items-start gap-9 pt-[42px] w-full">
            {passportFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-1.5 w-full"
              >
                <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  {field.label}
                </Label>

                <div className="flex flex-col w-full">
                  <div className="flex items-center h-[42px] w-full">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
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
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center px-6 py-0 w-full">
        <Button className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            다음
          </span>
        </Button>

        <div className="w-full h-4" />

      </footer>
    </div>
  );
};
