import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const passwordRules = [
  { id: 1, text: "10자리 이상 입력", isValid: false },
  { id: 2, text: "문자, 숫자 포함", isValid: false },
  {
    id: 3,
    text: "연속되거나, 4자리 이상 동일한 문자 입력 불가",
    isValid: false,
  },
  { id: 4, text: "로그인 ID 입력 불가", isValid: false },
];

export const SettingsWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:77706"
    >
      <BackSubHeader />

      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호를 변경해주세요.
            </h1>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-start gap-9 pt-[42px] pb-[30px] px-6 relative flex-1 self-stretch w-full grow">
        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[17px]">
              <div className="inline-flex items-center gap-1 relative">
                <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <Label className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    새 비밀번호 확인
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 self-stretch w-full grow">
                    <div className="gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                      <div className="flex items-center relative flex-1 grow">
                        <div className="flex items-center gap-2 relative flex-1 grow">
                          <Input
                            type="password"
                            placeholder="현재 비밀번호를 입력해주세요."
                            className="relative [display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#f10000] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                현재 비밀번호를 입력해주세요.
              </p>

              <div className="justify-end gap-2.5 pl-2.5 pr-1 py-0 relative self-stretch w-full flex-[0_0_auto] flex items-center">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-2.5 relative self-stretch flex-[0_0_auto] rounded-lg">
                    <div className="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                        <Link
                          to="#"
                          className="relative flex items-center justify-center w-fit mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline whitespace-nowrap [font-style:var(--title-15-SB-font-style)]"
                        >
                          혹시 비밀번호를 잊으셨나요?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[17px]">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <Label className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      새 비밀번호 등록
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                    <div className="flex items-center relative flex-1 self-stretch w-full grow">
                      <div className="gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                        <div className="flex items-center relative flex-1 grow">
                          <div className="flex items-center gap-2 relative flex-1 grow">
                            <Input
                              type="password"
                              placeholder="새 비밀번호를 입력해주세요."
                              className="relative [display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)] border-0 border-b border-[#dfe3ec] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            {passwordRules.map((rule) => (
              <div
                key={rule.id}
                className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="flex items-start gap-2.5 relative flex-1 grow">
                  <img
                    className="relative w-5 h-5"
                    alt="Pw check"
                    src="https://c.animaapp.com/w2kCT5wM/img/ico20-pw-check-3.svg"
                  />
                  <div className="flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 relative flex-1 grow">
                    <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {rule.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[17px]">
              <div className="inline-flex items-center gap-1 relative">
                <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <Label className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    새 비밀번호 확인
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 self-stretch w-full grow">
                    <div className="gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                      <div className="flex items-center relative flex-1 grow">
                        <div className="flex items-center gap-2 relative flex-1 grow">
                          <Input
                            type="password"
                            placeholder="비밀번호를 다시 한번 입력해주세요."
                            className="relative [display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#f10000] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                새 비밀번호를 다시 입력해주세요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto] z-0">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="min-h-[54px] flex-1 grow flex items-start relative">
              <Button
                disabled
                className="flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#b7ccf7] rounded-xl h-auto hover:bg-[#b7ccf7]"
              >
                <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-full h-4 z-[-1]" />

      </footer>
    </div>
  );
};
