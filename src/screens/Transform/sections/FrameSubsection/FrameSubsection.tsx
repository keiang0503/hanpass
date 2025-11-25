import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start pt-0 pb-6 px-0 w-full bg-variable-collection-basic-white rounded-[0px_0px_16px_16px] overflow-hidden shadow-[0px_4px_10px_#0000001a]">
        <header className="flex flex-col items-start w-full bg-variable-collection-basic-white">
          <Link
            className="flex flex-col items-start gap-2.5 w-full"
            to="/favoriteu95375"
          >
            <div className="w-full h-[47px] relative">
              <div className="absolute top-[calc(50.00%_-_10px)] left-[26px] w-[333px] h-5">
                <div className="absolute top-[calc(50.00%_-_10px)] left-0 w-[54px] font-body-bold font-[number:var(--body-bold-font-weight)] text-variable-collection-basic-black text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                  9:41
                </div>

                <img
                  className="absolute top-[calc(50.00%_-_6px)] right-0.5 w-[27px] h-[13px]"
                  alt="Battery"
                  src="https://c.animaapp.com/ppTMEOHB/img/battery-2.svg"
                />

                <img
                  className="absolute top-[calc(50.00%_-_5px)] right-9 w-[17px] h-3"
                  alt="Wifi"
                  src="https://c.animaapp.com/ppTMEOHB/img/wifi-2.svg"
                />
              </div>

              <img
                className="absolute top-[19px] right-[77px] w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/ppTMEOHB/img/icon---mobile-signal-2.svg"
              />
            </div>
          </Link>

          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="w-full h-[54px] relative">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] left-1.5 w-8"
                  alt="Wechat hd"
                  src="https://c.animaapp.com/ppTMEOHB/img/wechat-hd-2.svg"
                />

                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/ppTMEOHB/img/mini-2@2x.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="bg-variable-collection-basic-white w-full h-[54px] relative">
                <Button
                  variant="outline"
                  className="h-auto absolute top-[calc(50.00%_-_15px)] right-[23px] px-2 py-1.5 bg-variable-collection-basic-white border-variable-collection-primary-primary-0d56e4 rounded overflow-hidden"
                >
                  <span className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-variable-collection-primary-primary-0d56e4 text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                    즐겨찾기
                  </span>
                </Button>

                <h1 className="absolute top-[calc(50.00%_-_10px)] left-6 h-[21px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-variable-collection-grayscale-01-0b0c0e text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--body-16-r-font-style)]">
                  송금액 입력
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-start gap-10 w-full">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-end justify-center gap-2.5 px-6 py-0 w-full">
                <div className="flex h-[50px] items-center gap-[5px] px-3 py-0 w-full bg-variable-collection-BG-03-f4f7fd rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      className="w-6 h-6 aspect-[1]"
                      alt="Wallet"
                      src="https://c.animaapp.com/ppTMEOHB/img/bank120-wallet-1.svg"
                    />

                    <div className="[display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-variable-collection-grayscale-02-1c253f text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--body-14-r-font-style)]">
                      Hanpass Pay wallet
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <div className="flex items-center justify-center w-fit font-title-16-b font-[number:var(--title-16-b-font-weight)] text-variable-collection-grayscale-02-1c253f text-[length:var(--title-16-b-font-size)] text-right tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] whitespace-nowrap [font-style:var(--title-16-b-font-style)]">
                      XANL87349609
                    </div>

                    <ChevronDownIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex flex-col items-end gap-[3px] w-full">
                  <div className="inline-flex items-center justify-end gap-1.5">
                    <span className="w-fit mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-variable-collection-grayscale-06-85888e text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--caption-title-13-r-font-style)]">
                      계좌 잔액 :
                    </span>

                    <span className="w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-variable-collection-grayscale-06-85888e text-[length:var(--caption-title-13-b-font-size)] text-right tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--caption-title-13-b-font-style)]">
                      27,000원
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-1.5 w-full">
                    <span className="w-fit mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-variable-collection-grayscale-06-85888e text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--caption-title-13-r-font-style)]">
                      출금 가능 금액 :
                    </span>

                    <span className="w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-variable-collection-grayscale-06-85888e text-[length:var(--caption-title-13-b-font-size)] text-right tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--caption-title-13-b-font-style)]">
                      27,000원
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[13px] px-6 py-0 w-full">
                <div className="flex flex-col items-start gap-[13px] w-full">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <p className="self-stretch mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-variable-collection-grayscale-06-85888e text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] flex items-center justify-center [font-style:var(--caption-title-13-r-font-style)]">
                        보내는 금액(수수료 별도)
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-[8px_91px] w-full">
                        <div className="inline-flex items-center gap-3">
                          <div className="bg-[url(https://c.animaapp.com/ppTMEOHB/img/vector-5.svg)] bg-[100%_100%] w-10 h-10 relative">
                            <img
                              className="absolute w-0 h-[13.97%] top-[63.41%] left-[70.54%]"
                              alt="Vector"
                              src="/img/vector.png"
                            />

                            <img
                              className="absolute w-[57.50%] h-[40.00%] top-[30.00%] left-[22.50%]"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-6.svg"
                            />

                            <img
                              className="absolute w-0 h-[14.00%] top-[62.92%] left-[69.80%]"
                              alt="Vector"
                              src="/img/image.png"
                            />

                            <img
                              className="absolute w-[70.00%] h-[54.43%] top-[22.50%] left-[15.00%]"
                              alt="Subtract"
                              src="https://c.animaapp.com/ppTMEOHB/img/subtract-2.svg"
                            />

                            <img
                              className="absolute w-[33.59%] h-[33.59%] top-[32.92%] left-[33.20%]"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-7.svg"
                            />

                            <img
                              className="absolute w-[25.19%] h-[33.59%] top-[40.40%] left-[33.20%]"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-8.svg"
                            />

                            <img
                              className="absolute w-[58.23%] h-[38.82%] top-[29.14%] left-[22.64%]"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-9.svg"
                            />

                            <img
                              className="absolute w-[70.00%] h-[54.43%] top-[22.50%] left-[15.00%]"
                              alt="Subtract"
                              src="https://c.animaapp.com/ppTMEOHB/img/subtract-3.svg"
                            />
                          </div>

                          <span className="flex items-center justify-center w-fit text-variable-collection-grayscale-01-0b0c0e text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] whitespace-nowrap font-title-18-b font-[number:var(--title-18-b-font-weight)] [font-style:var(--title-18-b-font-style)]">
                            KRW
                          </span>
                        </div>

                        <span className="w-fit font-title-24-b font-[number:var(--title-24-b-font-weight)] text-variable-collection-primary-primary-0d56e4 text-[length:var(--title-24-b-font-size)] text-right tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--title-24-b-font-style)]">
                          1,010,970
                        </span>
                      </div>
                    </div>

                    <p className="flex items-center justify-center self-stretch font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-variable-collection-error-color-red text-[length:var(--navigation-12-r-font-size)] text-right tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] [font-style:var(--navigation-12-r-font-style)]">
                      잔액이 부족합니다. 출금 수단을 변경하시거나 금액을 다시
                      입력해주세요.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-5 w-full">
                    <img
                      className="w-10"
                      alt="Frame"
                      src="https://c.animaapp.com/ppTMEOHB/img/frame-1597886781-1.svg"
                    />

                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Button
                        variant="default"
                        className="h-auto flex items-center justify-between px-5 py-[7px] w-full bg-variable-collection-blue-01-0d1458 rounded-[20px] overflow-hidden hover:bg-variable-collection-blue-01-0d1458"
                      >
                        <span className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-variable-collection-basic-white text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] flex items-center justify-center [font-style:var(--body-14-r-font-style)]">
                          받는 방법을 선택해주세요.
                        </span>

                        <ChevronDownIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <p className="self-stretch mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-variable-collection-grayscale-06-85888e text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] flex items-center justify-center [font-style:var(--caption-title-13-r-font-style)]">
                        받는금액
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-[8px_91px] w-full">
                        <div className="inline-flex items-center gap-3">
                          <img
                            className="w-10 h-10"
                            alt="Flag ellipse"
                            src="https://c.animaapp.com/ppTMEOHB/img/flag-ellipse-1.svg"
                          />

                          <span className="flex items-center justify-center w-fit text-variable-collection-grayscale-01-0b0c0e text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] whitespace-nowrap font-title-18-b font-[number:var(--title-18-b-font-weight)] [font-style:var(--title-18-b-font-style)]">
                            NPR
                          </span>

                          <ChevronDownIcon className="w-6 h-6" />
                        </div>

                        <span className="w-fit font-title-24-b font-[number:var(--title-24-b-font-weight)] text-variable-collection-primary-primary-0d56e4 text-[length:var(--title-24-b-font-size)] text-right tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--title-24-b-font-style)]">
                          100,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
                <Card className="w-full bg-variable-collection-BG-03-f4f7fd rounded-xl border-0">
                  <CardContent className="flex flex-col items-start gap-2.5 p-5">
                    <div className="flex items-start gap-4 w-full">
                      <span className="w-fit mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-variable-collection-grayscale-03-5e616b text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap [font-style:var(--body-14-r-font-style)]">
                        송금 환율
                      </span>

                      <span className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-variable-collection-grayscale-02-1c253f text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                        10.11 KRW = 1 NPR
                      </span>
                    </div>

                    <div className="flex-col gap-2.5 flex items-center w-full">
                      <div className="flex w-full h-[18px] items-start gap-4">
                        <span className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-variable-collection-grayscale-03-5e616b text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                          송금 수수료
                        </span>

                        <div className="inline-flex items-center gap-0.5">
                          <div className="inline-flex items-center gap-2.5">
                            <span className="w-fit mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-variable-collection-grayscale-02-1c253f text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                              5,000
                            </span>
                          </div>

                          <span className="w-8 mt-[-1.00px] text-variable-collection-grayscale-02-1c253f text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] font-body-14-b font-[number:var(--body-14-b-font-weight)] [font-style:var(--body-14-b-font-style)]">
                            KRW
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col h-[68px] items-start gap-2.5 w-full">
                        <div className="inline-flex h-[18px] items-start gap-4">
                          <span className="w-[63px] mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-variable-collection-grayscale-03-5e616b text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                            쿠폰
                          </span>
                        </div>

                        <Button
                          variant="outline"
                          className="h-10 gap-2 px-3 py-0 bg-variable-collection-basic-white rounded-lg border-variable-collection-BG-09-dfe3ec flex items-center w-full justify-between"
                        >
                          <div className="flex items-center gap-1 flex-1">
                            <span className="flex items-center justify-center flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-variable-collection-grayscale-03-5e616b text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                              <span className="text-[#5e616b] tracking-[var(--body-14-b-letter-spacing)] font-body-14-b [font-style:var(--body-14-b-font-style)] font-[number:var(--body-14-b-font-weight)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)]">
                                쿠폰{" "}
                              </span>

                              <span className="text-[#0d56e4] tracking-[var(--body-14-b-letter-spacing)] font-body-14-b [font-style:var(--body-14-b-font-style)] font-[number:var(--body-14-b-font-weight)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)]">
                                2장
                              </span>

                              <span className="text-[#5e616b] tracking-[var(--body-14-b-letter-spacing)] font-body-14-b [font-style:var(--body-14-b-font-style)] font-[number:var(--body-14-b-font-weight)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)]">
                                {" "}
                                보유
                              </span>
                            </span>
                          </div>

                          <ChevronRightIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 w-full">
                      <span className="w-fit mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-variable-collection-grayscale-03-5e616b text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap [font-style:var(--body-14-r-font-style)]">
                        예상 소요 시간
                      </span>

                      <span className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-variable-collection-grayscale-02-1c253f text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                        depending on local circumstances
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="px-6 py-0 flex items-start gap-[5px] w-full">
                <div className="w-2 h-3.5 relative">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-variable-collection-grayscale-10-d3d6e2 rounded-sm" />
                </div>

                <p
                  className="text-variable-collection-grayscale-05-717682 flex-1 mt-[-1.00px] font-caption-title-13-r font-[number
:var(--caption-title-13-r-font-weight)] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]"
                >
                  지금 보시는 환율과 송금한도는 &quot;캐시픽업&quot; 기준으로
                  계산되었어요.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
            <Button className="h-auto flex items-center justify-center gap-2.5 px-5 py-[15px] w-full bg-variable-collection-primary-primary-0d56e4 rounded-[100px] overflow-hidden hover:bg-variable-collection-primary-primary-0d56e4">
              <span className="flex items-center justify-center w-fit mt-[-1.00px] font-title-20-b font-[number:var(--title-20-b-font-weight)] text-variable-collection-basic-white text-[length:var(--title-20-b-font-size)] tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] whitespace-nowrap [font-style:var(--title-20-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2.5 px-[8.5px] py-0 w-full">
        <div className="w-full h-[23px] bg-[#ffffff4c] rounded-[0px_0px_16px_16px] shadow-[0px_4px_10px_#0000001a]" />
      </div>

      <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
        <div className="w-full h-4 bg-[#ffffff4c] rounded-[0px_0px_16px_16px] shadow-[0px_4px_10px_#0000001a]" />
      </div>
    </section>
  );
};
