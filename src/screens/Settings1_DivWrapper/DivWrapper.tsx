import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
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
      <header className="w-full flex flex-col items-start bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-169820.00%] left-[-3883.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-2.png"
              />
              <img
                className="h-[60.00%] top-[-169840.00%] left-[-3855.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-3.png"
              />
              <img
                className="h-[80.00%] top-[-169860.00%] left-[-3827.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-3.png"
              />
              <img
                className="h-full top-[-169880.00%] left-[-3800%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-2.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-4484.43%]"
                alt="Bar"
                src="/img/bar-1-3.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-4500.00%]"
                alt="Bar"
                src="/img/bar-2-4.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-4518.77%]"
                alt="Bar"
                src="/img/bar-3-4.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-3279.17%]"
                alt="Border"
                src="/img/border-2.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-3187.50%]"
                alt="Cap"
                src="/img/cap-2.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5 px-5 py-4 w-full">
          <div className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>

          <div className="flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/w2kCT5wM/img/icon---mobile-signal-7.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/w2kCT5wM/img/wifi-7.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/w2kCT5wM/img/battery-7.svg"
            />
          </div>
        </div>
      </header>

      <nav className="flex items-center justify-between px-5 py-4 w-full bg-white">
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <MoreVerticalIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <CircleIcon className="h-6 w-6" />
          </Button>
        </div>
      </nav>

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

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-2] bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
