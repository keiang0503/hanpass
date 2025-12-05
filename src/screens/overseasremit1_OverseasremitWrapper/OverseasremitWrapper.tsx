import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const OverseasremitWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="2674:66266"
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
                className="h-auto w-auto p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px] text-gray-400" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <div className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    FRAUD WARNING
                  </div>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="self-stretch w-full flex-[0_0_auto] flex items-start relative">
              <div className="flex min-h-8 items-center relative flex-1 self-stretch grow">
                <div className="flex items-center gap-1.5 relative flex-1 grow">
                  <div className="mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-transparent relative flex-1 text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                    <span className="text-[#1c253f] tracking-[var(--body-16-r-letter-spacing)] font-body-16-r [font-style:var(--body-16-r-font-style)] font-[number:var(--body-16-r-font-weight)] leading-[var(--body-16-r-line-height)] text-[length:var(--body-16-r-font-size)]">
                      송금 사기에 주의하세요. 친구나 가족 등 수취인 신분이
                      확실한 경우에만 한패스 송금을 이용하시기 바랍니다. 직접
                      만난 적이 없는 사람에게는 절대 송금하지 마십시오. 특히,
                      긴급 위기상황, 온라인 구매, 투자기회 제안, 신용카드나 대출
                      수수료 선금, 복권 또는 경품 당첨 수수료, 컴퓨터 바이러스
                      해결, 부동산 보증금, 취업 제공, 자선단체 기부금, 세금
                      납부, 이민금 문제 해결을 빙자한 송금요청에는 각별히
                      주의하시기 바랍니다.
                      <br />
                      <br />
                      한패스 송금은 수취인에게 송금액이 신속하게 지급될 수
                      있으며, 지급이 완료되면 사기 피해라 할지라도 자금 반환이
                      불가능할 수 있습니다. 송금 사기의 피해자라고 생각되시면,
                      한패스 고객센터 (
                    </span>

                    <span className="text-[#0d56e4] tracking-[var(--body-16-r-letter-spacing)] font-body-16-r [font-style:var(--body-16-r-font-style)] font-[number:var(--body-16-r-font-weight)] leading-[var(--body-16-r-line-height)] text-[length:var(--body-16-r-font-size)]">
                      1522-0767
                    </span>

                    <span className="text-[#1c253f] tracking-[var(--body-16-r-letter-spacing)] font-body-16-r [font-style:var(--body-16-r-font-style)] font-[number:var(--body-16-r-font-weight)] leading-[var(--body-16-r-line-height)] text-[length:var(--body-16-r-font-size)]">
                      ) 로 연락하시거나, 한패스 홈페이{" "}
                    </span>

                    <span className="text-[#0d56e4] tracking-[var(--body-16-r-letter-spacing)] font-body-16-r [font-style:var(--body-16-r-font-style)] font-[number:var(--body-16-r-font-weight)] leading-[var(--body-16-r-line-height)] text-[length:var(--body-16-r-font-size)]">
                      https://hanpass.com/kr/reportRemittance
                    </span>

                    <span className="text-[#1c253f] tracking-[var(--body-16-r-letter-spacing)] font-body-16-r [font-style:var(--body-16-r-font-style)] font-[number:var(--body-16-r-font-weight)] leading-[var(--body-16-r-line-height)] text-[length:var(--body-16-r-font-size)]">
                      {" "}
                      또는 한패스 본사를 방문하시기 바랍니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col items-start gap-3.5 self-stretch w-full flex-[0_0_auto] flex relative">
              <Button className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
                <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-center text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
