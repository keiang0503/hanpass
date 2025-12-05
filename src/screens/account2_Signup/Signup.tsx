import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Signup = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="40000008:1182598"
    >
      <BackSubHeader />

      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-transparent text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              <span className="text-[#0d56e4] tracking-[var(--title-24-b-letter-spacing)] font-title-24-b [font-style:var(--title-24-b-font-style)] font-[number:var(--title-24-b-font-weight)] leading-[var(--title-24-b-line-height)] text-[length:var(--title-24-b-font-size)]">
                보낸사람 HA 뒤 숫자 3자리
              </span>
              <span className="text-[#0b0c0e] tracking-[var(--title-24-b-letter-spacing)] font-title-24-b [font-style:var(--title-24-b-font-style)] font-[number:var(--title-24-b-font-weight)] leading-[var(--title-24-b-line-height)] text-[length:var(--title-24-b-font-size)]">
                를{" "}
              </span>
              <span className="text-[#0d56e4] tracking-[var(--title-24-b-letter-spacing)] font-title-24-b [font-style:var(--title-24-b-font-style)] font-[number:var(--title-24-b-font-weight)] leading-[var(--title-24-b-line-height)] text-[length:var(--title-24-b-font-size)]">
                15분 안에 입력
              </span>
              <span className="text-[#0b0c0e] tracking-[var(--title-24-b-letter-spacing)] font-title-24-b [font-style:var(--title-24-b-font-style)] font-[number:var(--title-24-b-font-weight)] leading-[var(--title-24-b-line-height)] text-[length:var(--title-24-b-font-size)]">
                해 주세요.
              </span>
            </h1>
          </div>

          <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center justify-center relative flex-1 grow">
              <p className="self-stretch text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] relative mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] [font-style:var(--body-16-r-font-style)]">
                본인 계좌 확인을 위해 입력하신 계좌로 1원을 보내드렸어요
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-center gap-8 pt-[34px] pb-0 px-6 relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-center gap-2.5 px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative min-w-[260px] max-w-[480px] w-full h-[90px] ml-[-16.50px] mr-[-16.50px]">
            <div className="w-[calc(100%_-_24px)] left-3 h-[74px] bg-[#e9f1ff] rounded-[10px] absolute bottom-0" />
            <Card className="absolute top-0 left-0 w-full bg-[#f4f7fd] rounded-[10px] shadow-[0px_4px_4px_#00000026] border-0">
              <CardContent className="flex flex-col items-start justify-center gap-1 px-4 py-3">
                <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-1 self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap relative mt-[-1.00px] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                    입금자명
                  </div>
                  <div className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] relative mt-[-1.00px] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                    입금
                  </div>
                </div>
                <div className="flex h-[30px] items-center gap-1 relative self-stretch w-full">
                  <div className="relative w-[134px] h-[30px]">
                    <div className="flex w-full items-center gap-1 relative h-full">
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] whitespace-nowrap [font-style:var(--body-20-r-font-style)]">
                          HA
                        </div>
                      </div>
                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Frame"
                        src="https://c.animaapp.com/X2DaSZUE/img/frame-1261169704.svg"
                      />
                    </div>
                  </div>
                  <div className="relative flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] text-right tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                    1KRW
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[17px]">
              <div className="inline-flex items-center gap-1 relative">
                <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <label className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    숫자 3자리 입력
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col h-[42px] items-start relative self-stretch w-full">
                  <div className="relative flex-1 self-stretch w-full grow flex items-center">
                    <div className="gap-[7px] pl-1 pr-0 py-0 relative flex-1 self-stretch grow flex items-center">
                      <div className="flex items-center relative flex-1 grow">
                        <div className="flex items-center gap-2 relative flex-1 grow">
                          <Input
                            placeholder="3자리 숫자"
                            className="[display:-webkit-box] items-center justify-center flex-1 text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center w-fit font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
                      15:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="items-center justify-end px-6 py-0 bg-white flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-start gap-1.5 pt-0 pb-3.5 px-0 z-[3] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-2 h-3.5">
                <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                입금내역이 없다면 등록하신 계좌 정보를 다시 확인해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto] z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="min-h-[54px] flex-1 grow flex items-start relative">
              <Button className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
                <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-full h-4 z-0" />

      </footer>
    </div>
  );
};
