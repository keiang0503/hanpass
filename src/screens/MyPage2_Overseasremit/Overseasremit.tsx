import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const Overseasremit = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="36848:88195"
    >
      <PopupHeader />

      <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-4 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />

              <Button
                variant="ghost"
                size="icon"
                className="relative w-[18px] h-[18px] p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <h2 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    한국어 이름 작성 시 유의사항
                  </h2>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="self-stretch w-full flex-[0_0_auto] flex items-start relative">
              <div className="flex min-h-8 items-center relative flex-1 self-stretch grow">
                <div className="flex items-center gap-1.5 relative flex-1 grow">
                  <p className="mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] relative flex-1 text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                    - 주민등록증 또는 여권의 한국어 이름과 일치해야 합니다.
                    <br />- 한국어 이름은 한글만 입력이 가능하며 특수문자는 입력
                    불가합니다.
                    <br />- 한국어 이름은 한 번만 수정할 수 있습니다. 1회 이상
                    수정이 필요할 경우 고객센터로 문의해주세요.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-col items-start gap-3.5 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex min-h-[54px] items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-xl">
                <div className="min-h-[54px] flex-1 grow flex items-start relative">
                  <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90 h-auto">
                    <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-center relative flex-1 text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      확인
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
