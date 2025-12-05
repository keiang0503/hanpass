import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";

const passwordDots = Array(10).fill(null);

const passwordRequirements = [
  { text: "10자리 이상 입력", checked: true },
  { text: "문자, 숫자 포함문자", checked: true },
  { text: "연속되거나, 4자리 이상 동일한 문자 입력 불가", checked: true },
  { text: "로그인 ID 입력 불가", checked: true },
];

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="36848:77695"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 w-full">
        <div className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full bg-white">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            비밀번호를 변경해주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 items-start gap-9 pt-[42px] pb-[30px] px-6 w-full">
          <section className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                현재 비밀번호
              </label>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="gap-2.5 px-1.5 py-0 flex-1 flex items-center">
                      {passwordDots.map((_, index) => (
                        <div
                          key={`current-${index}`}
                          className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2.5 w-full">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center justify-end gap-2.5 w-full">
                  <div className="flex items-center justify-end flex-1">
                    <div className="flex flex-col items-end justify-center gap-2.5 flex-1 rounded-lg">
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
            </div>
          </section>

          <section className="flex flex-col items-start gap-[18px] w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  새 비밀번호 등록
                </label>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="gap-2.5 px-1.5 py-0 flex-1 flex items-center">
                        {passwordDots.map((_, index) => (
                          <div
                            key={`new-${index}`}
                            className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 w-full">
              {passwordRequirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-2.5 w-full">
                  <div className="flex items-start gap-2.5 flex-1">
                    <div className="w-5 h-5 bg-[url(https://c.animaapp.com/w2kCT5wM/img/ico20-check-11.svg)] bg-[100%_100%]" />
                    <div className="flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 flex-1">
                      <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        {requirement.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                새 비밀번호 확인
              </label>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="gap-2.5 px-1.5 py-0 flex-1 flex items-center">
                      {passwordDots.map((_, index) => (
                        <div
                          key={`confirm-${index}`}
                          className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-center gap-6 w-full z-0">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
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
