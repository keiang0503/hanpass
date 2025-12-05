import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const passwordRequirements = [
  { id: 1, text: "10자리 이상 입력", checked: false },
  { id: 2, text: "문자, 숫자 포함", checked: false },
  {
    id: 3,
    text: "연속되거나, 4자리 이상 동일한 문자 입력 불가",
    checked: false,
  },
  { id: 4, text: "로그인 ID 입력 불가", checked: false },
];

export const Settings = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:77668"
    >
      <BackSubHeader />

      <main className="flex flex-col items-start gap-9 pt-6 pb-[30px] px-6 relative flex-1 w-full">
        <div className="flex flex-col items-start w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            비밀번호를 변경해주세요.
          </h1>
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              현재 비밀번호
            </Label>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center w-full">
                  <div className="flex items-center gap-2 flex-1 pl-1">
                    <Input
                      type="password"
                      placeholder="현재 비밀번호를 입력해주세요."
                      className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:border-[#003fbb] h-auto py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2.5 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-end w-full">
                <Link
                  to="#"
                  className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]"
                >
                  혹시 비밀번호를 잊으셨나요?
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[18px] w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                새 비밀번호 등록
              </Label>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-2 flex-1 pl-1">
                      <Input
                        type="password"
                        placeholder="새 비밀번호를 입력해주세요."
                        className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:border-[#003fbb] h-auto py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            {passwordRequirements.map((requirement) => (
              <div
                key={requirement.id}
                className="flex items-start gap-2.5 w-full"
              >
                <img
                  className="w-5 h-5"
                  alt="Check"
                  src="https://c.animaapp.com/w2kCT5wM/img/ico20-check-3.svg"
                />
                <div className="flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 flex-1">
                  <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    {requirement.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              새 비밀번호 확인
            </Label>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full bg-[#f7f7f8]">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center w-full">
                  <div className="flex items-center gap-2 flex-1 pl-1">
                    <Input
                      type="password"
                      placeholder="비밀번호를 다시 한번 입력해주세요."
                      disabled
                      className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:border-[#003fbb] h-auto py-2 bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <Button
            disabled
            className="min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl shadow-[0px_-20px_20px_#ffffff] h-auto"
          >
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>

        <div className="w-full h-4" />

      </footer>
    </div>
  );
};
