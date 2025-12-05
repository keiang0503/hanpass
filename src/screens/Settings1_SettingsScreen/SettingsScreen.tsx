import { CheckIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

const passwordDots = Array(10).fill(null);

const validationRules = [
  { text: "10자리 이상 입력", isValid: true },
  { text: "문자, 숫자 포함문자", isValid: true },
  { text: "연속되거나, 4자리 이상 동일한 문자 입력 불가", isValid: true },
  { text: "로그인 ID 입력 불가", isValid: true },
];

export const SettingsScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="36848:77717"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 w-full px-6 pt-6 pb-0">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)] mb-[42px]">
          비밀번호를 변경해주세요.
        </h1>

        <div className="flex flex-col gap-9">
          <section className="flex flex-col gap-1.5">
            <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              새 비밀번호 확인
            </label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 px-1.5 py-2.5 min-h-[42px]">
                {passwordDots.map((_, index) => (
                  <div
                    key={`password-1-${index}`}
                    className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                  />
                ))}
              </div>
              <div className="h-px bg-[#dfe3ec]" />
            </div>
            <div className="flex justify-end pt-2">
              <Link
                to="#"
                className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]"
              >
                혹시 비밀번호를 잊으셨나요?
              </Link>
            </div>
          </section>

          <section className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-1.5">
              <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                새 비밀번호 등록
              </label>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5 px-1.5 py-2.5 min-h-[42px]">
                  {passwordDots.map((_, index) => (
                    <div
                      key={`password-2-${index}`}
                      className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                    />
                  ))}
                </div>
                <div className="h-px bg-[#dfe3ec]" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {validationRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckIcon className="w-5 h-5 text-[#0d56e4] flex-shrink-0" />
                  <p className="flex-1 pt-0.5 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-1.5">
            <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              새 비밀번호 확인
            </label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 px-1.5 py-2.5 min-h-[42px]">
                {passwordDots.map((_, index) => (
                  <div
                    key={`password-3-${index}`}
                    className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                  />
                ))}
              </div>
              <div className="h-0.5 bg-[#f10000]" />
            </div>
            <p className="pt-2 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              비밀번호가 일치하지 않습니다.
            </p>
          </section>
        </div>
      </main>

      <footer className="flex flex-col w-full px-6 pb-0 bg-white mt-auto">
        <div className="flex flex-col gap-6">
          <Button className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl shadow-[0px_-20px_20px_#ffffff] h-auto">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>
        <div className="h-4" />
      </footer>
    </div>
  );
};
