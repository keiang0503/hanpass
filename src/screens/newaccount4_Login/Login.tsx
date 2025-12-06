import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const passwordRequirements = [
  { id: 1, text: "10자리 이상 입력" },
  { id: 2, text: "문자, 숫자 포함" },
  { id: 3, text: "연속되거나, 4자리 이상 동일한 문자 입력 불가" },
  { id: 4, text: "로그인 ID 입력 불가" },
];

export const Login = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="40000001:46471"
    >
      <BackSubHeader />

      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-none">
        <div className="flex-col gap-2 pt-22 pb-0 px-6 self-stretch w-full flex-none flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-none">
            <h1 className="relative self-stretch mt-neg-1 text-title-24-b-style text-grayscale-01">
              안전한 이용을 위해 비밀번호를 <br />
              다시 설정해주세요.
            </h1>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-start gap-9 pt-42 pb-10 px-6 relative flex-1 self-stretch w-full grow">
        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-none">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
            <div className="relative self-stretch w-full h-17">
              <Label className="inline-flex items-center gap-1 relative">
                <span className="inline-flex items-center gap-0.5 relative flex-none">
                  <span className="relative w-fit mt-neg-1 text-body-14-m-style text-grayscale-06 whitespace-nowrap">
                    내ID (휴대폰번호 또는 이메일주소)
                  </span>
                </span>
              </Label>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
              <div className="flex flex-col min-h-42 items-start gap-2.5 relative self-stretch w-full flex-none">
                <div className="flex flex-col h-42 items-start relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 self-stretch w-full grow">
                    <div className="gap-7 pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                      <div className="flex items-center relative flex-1 grow">
                        <Input
                          type="text"
                          placeholder="아이디를 입력해주세요"
                          className="flex-1 border-0 border-b-2 border-grayscale-bg-09 rounded-none px-0 py-0 h-auto text-body-20-r-style text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-18 relative self-stretch w-full flex-none">
          <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-none">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
              <div className="relative self-stretch w-full h-17">
                <Label className="inline-flex items-center gap-1 relative">
                  <span className="inline-flex items-center gap-0.5 relative flex-none">
                    <span className="relative w-fit mt-neg-1 text-body-14-m-style text-grayscale-06 whitespace-nowrap">
                      새 비밀번호 등록
                    </span>
                  </span>
                </Label>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
                <div className="flex flex-col min-h-42 items-start gap-2.5 relative self-stretch w-full flex-none">
                  <div className="flex flex-col h-42 items-start relative self-stretch w-full">
                    <div className="flex items-center relative flex-1 self-stretch w-full grow">
                      <div className="gap-7 pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                        <div className="flex items-center relative flex-1 grow">
                          <Input
                            type="password"
                            placeholder="새 비밀번호를 입력해주세요"
                            className="flex-1 border-0 border-b-2 border-grayscale-bg-09 rounded-none px-0 py-0 h-auto text-body-20-r-style text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-col items-start gap-1 relative self-stretch w-full flex-none">
            {passwordRequirements.map((requirement) => (
              <li
                key={requirement.id}
                className="flex items-start gap-2.5 relative self-stretch w-full flex-none"
              >
                <img
                  className="relative w-5 h-5"
                  alt="Check"
                  src="https://c.animaapp.com/shEJQFEJ/img/ico20-check-3.svg"
                />

                <div className="flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 relative flex-1 grow">
                  <p className="flex-1 text-caption-13-r-style text-grayscale-05 relative mt-neg-1">
                    {requirement.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-none">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
            <div className="relative self-stretch w-full h-17">
              <Label className="inline-flex items-center gap-1 relative">
                <span className="inline-flex items-center gap-0.5 relative flex-none">
                  <span className="relative w-fit mt-neg-1 text-body-14-m-style text-grayscale-06 whitespace-nowrap">
                    새 비밀번호 확인
                  </span>
                </span>
              </Label>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-none">
              <div className="flex flex-col min-h-42 items-start gap-2.5 relative self-stretch w-full flex-none bg-light-gray">
                <div className="flex flex-col h-42 items-start relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 self-stretch w-full grow">
                    <div className="gap-7 pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                      <div className="flex items-center relative flex-1 grow">
                        <Input
                          type="password"
                          placeholder="새 비밀번호를 다시 입력해주세요."
                          disabled
                          className="flex-1 border-0 border-b-2 border-grayscale-bg-09 rounded-none px-0 py-0 h-auto text-body-20-r-style text-placeholder bg-light-gray focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-none bg-white">
        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-none z-0">
          <div className="min-h-54 items-center justify-center gap-2 rounded-xl shadow-white-up flex relative self-stretch w-full flex-none">
            <div className="min-h-54 flex-1 grow flex items-start relative">
              <Button
                disabled
                className="h-auto flex items-center justify-center gap-2 px-26 py-1.5 relative flex-1 self-stretch grow bg-btn-disabled-blue rounded-xl hover:bg-btn-disabled-blue"
              >
                <span className="relative flex-1 text-title-16-b-style text-white text-center">
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
