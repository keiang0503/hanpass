import React from "react";
import { Link } from "react-router-dom";
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
      <header className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] relative mt-[-1.00px]">
                    :
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[-169820.00%] left-[-6216.67%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-4.png"
                />
                <img
                  className="h-[60.00%] top-[-169840.00%] left-[-6188.89%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-5.png"
                />
                <img
                  className="h-[80.00%] top-[-169860.00%] left-[-6161.11%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-5.png"
                />
                <img
                  className="h-full top-[-169880.00%] left-[-6133.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-3.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-7109.43%]"
                  alt="Bar"
                  src="/img/bar-1-5.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-7125.00%]"
                  alt="Bar"
                  src="/img/bar-2-6.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-7143.77%]"
                  alt="Bar"
                  src="/img/bar-3-6.png"
                />
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-5029.17%]"
                  alt="Border"
                  src="/img/border-3.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-4937.50%]"
                  alt="Cap"
                  src="/img/cap-3.png"
                />
              </div>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="relative w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/w2kCT5wM/img/icon---mobile-signal-7.svg"
          />
          <img
            className="relative w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/w2kCT5wM/img/wifi-7.svg"
          />
          <img
            className="relative w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/w2kCT5wM/img/battery-7.svg"
          />
        </nav>
      </header>

      <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
            <div className="w-[calc(100%_-_109px)] absolute top-[calc(50.00%_-_16px)] left-1.5 flex items-center">
              <img
                className="relative w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/w2kCT5wM/img/wechat-hd-5.svg"
              />
            </div>
            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/w2kCT5wM/img/mini-7@2x.png"
            />
          </div>
        </div>
      </nav>

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

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] z-[-2] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto] ml-[-8.50px] mr-[-8.50px]">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
