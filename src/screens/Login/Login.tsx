import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const Login = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full bg-white"
      data-model-id="40000001:45998"
    >
        <Link
          className="w-full flex flex-col items-start gap-2.5 bg-white"
          to="/"
        >
          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-black text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>

            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/FyEwllI9/img/icon---mobile-signal-8.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/FyEwllI9/img/wifi-7.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/FyEwllI9/img/battery-8.svg"
            />
          </div>
        </Link>

        <nav className="flex flex-col items-start relative self-stretch w-full flex-none">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-none">
            <div className="nav-header relative self-stretch w-full flex items-center justify-between px-1.5 bg-white">
              <Link to="/" className="flex items-center justify-center w-8 h-8">
                <ChevronLeftIcon className="w-8 h-8 text-variable-collection-grayscale-01-0b0c0e" />
              </Link>
              <img
                className="h-8"
                alt="Mini"
                src="https://c.animaapp.com/FyEwllI9/img/mini-8@2x.png"
              />
            </div>
          </div>
        </nav>

        <main className="flex flex-col items-start bg-white w-full flex-1">
          <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
            <div className="flex flex-col items-start w-full">
              <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                안녕하세요!
                <br />
                로그인 정보를 입력해주세요.
              </h1>
            </div>
          </section>

          <section className="flex flex-col items-start gap-3.5 pt-[42px] pb-14 px-6 w-full">
            <div className="flex flex-col items-start gap-[30px] w-full">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                            <div className="items-center flex-1 flex">
                              <div className="items-center gap-2 flex-1 flex">
                                <Input
                                  type="text"
                                  placeholder="휴대전화 또는 이메일"
                                  className="border-0 border-b-2 border-[#f10000] rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col w-full items-start pt-2 pb-0 px-0">
                    <p className="mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#f10000] text-[13px] tracking-[-0.26px] leading-[16.9px]">
                      로그인 정보를 입력해주세요
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                            <div className="items-center flex-1 flex">
                              <div className="items-center gap-2 flex-1 flex">
                                <Input
                                  type="password"
                                  placeholder="비밀번호"
                                  className="border-0 border-b-2 border-[#f10000] rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col w-full items-start pt-2 pb-0 px-0">
                    <p className="mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#f10000] text-[13px] tracking-[-0.26px] leading-[16.9px]">
                      8자 이상, 영어, ;숫자;, 특수 문자(;!@#$%^_*;)가 각각
                      포함돼야 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <Button className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto px-[26px] py-1.5 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  로그인
                </Button>

                <div className="flex flex-wrap w-full items-center justify-center gap-[20px]">
                  <Button
                    variant="link"
                    className="h-auto p-0 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]"
                  >
                    비밀번호 찾기
                  </Button>

                  <div className="w-px h-3.5 bg-[#5e616b]" />

                  <Button
                    variant="link"
                    className="h-auto p-0 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]"
                  >
                    고객센터 문의
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-end px-6 py-0 w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <Button
                  variant="outline"
                  className="min-h-[54px] w-full border-[#b7ccf7] hover:bg-white rounded-xl h-auto px-2 py-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
                >
                  회원가입
                </Button>

                <div className="w-full min-h-[74px] flex items-center pl-4 pr-0 py-0">
                  <div className="flex flex-col items-start gap-0.5 px-0 py-2.5 flex-1">
                    <div className="flex items-center w-full">
                      <p className="flex-1 font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#0d1458] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] mt-[-1.00px] [font-style:var(--navigation-12-r-font-style)]">
                        신규고객 첫송금은 더블혜택!
                      </p>
                    </div>

                    <div className="flex items-center w-full">
                      <p className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1b3bab] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] mt-[-1.00px] [font-style:var(--body-14-b-font-style)]">
                        수수료무료 + 환율 우대
                      </p>
                    </div>
                  </div>

                  <div className="relative w-[86px] h-[74px]">
                    <img
                      className="absolute w-[66px] h-[55px] top-[9px] left-2.5"
                      alt="Group"
                      src="https://c.animaapp.com/FyEwllI9/img/group@2x.png"
                    />
                  </div>
                </div>
              </div>

              <p className="flex items-center justify-center font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#a2a8bf] text-[length:var(--navigation-12-r-font-size)] text-center tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] [font-style:var(--navigation-12-r-font-style)]">
                ver 5.0.15
              </p>
            </div>

            <div className="w-full h-4" />

            <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
              <div className="flex flex-col w-[134px] items-center gap-2.5">
                <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
              </div>
            </div>
          </section>
        </main>
    </div>
  );
};
