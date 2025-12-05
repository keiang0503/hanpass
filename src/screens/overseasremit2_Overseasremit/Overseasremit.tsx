import { ChevronLeftIcon, MoreVerticalIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export const Overseasremit = (): JSX.Element => {
  const statusBarIcons = [
    {
      src: "/img/bar-1.png",
      height: "h-[40.00%]",
      top: "top-[-310.00%]",
      left: "left-[-26955.56%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-2.png",
      height: "h-[60.00%]",
      top: "top-[-330.00%]",
      left: "left-[-26927.78%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-3.png",
      height: "h-[80.00%]",
      top: "top-[-350.00%]",
      left: "left-[-26900%]",
      width: "w-[16.67%]",
    },
    {
      src: "/img/bar-4.png",
      height: "h-full",
      top: "top-[-370.00%]",
      left: "left-[-26872.22%]",
      width: "w-[16.67%]",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:65905"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                {statusBarIcons.map((icon, index) => (
                  <img
                    key={`bar-${index}`}
                    className={`${icon.height} ${icon.top} ${icon.left} absolute ${icon.width}`}
                    alt="Bar"
                    src={icon.src}
                  />
                ))}
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-241.64%] left-[-30440.68%]"
                  alt="Bar"
                  src="/img/image.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-277.74%] left-[-30456.25%]"
                  alt="Bar"
                  src="/img/bar-2-2.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-311.47%] left-[-30475.02%]"
                  alt="Bar"
                  src="/img/bar-3-2.png"
                />
              </div>

              <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-300%] left-[-20583.34%]"
                  alt="Border"
                  src="/img/border.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-20491.67%]"
                  alt="Cap"
                  src="/img/cap.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/vuYaFJZH/img/icon---mobile-signal-9.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/vuYaFJZH/img/wifi-9.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/vuYaFJZH/img/battery-9.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVerticalIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <TargetIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex-col items-start w-full bg-white flex">
        <div className="flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full flex">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              송금 대상자 수정
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 pt-[22px] pb-0 px-0 w-full">
        <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
          <Card className="w-full bg-[#f4f7fd] border-0 rounded-xl">
            <CardContent className="p-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex-col flex gap-2.5">
                    <div className="flex items-start gap-4 w-full">
                      <img
                        className="w-[101.74px] h-[12.54px]"
                        alt="송금받는 국가/통화"
                        src="https://c.animaapp.com/vuYaFJZH/img/----------@4x.png"
                      />
                      <div className="flex items-center justify-end gap-0.5 flex-1">
                        <div className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                          중국 / CNY
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-0.5 w-full">
                      <div className="flex items-start gap-2.5 w-full">
                        <img
                          className="w-[72.41px] h-[12.15px]"
                          alt="송금받는 방법"
                          src="https://c.animaapp.com/vuYaFJZH/img/-------@4x.png"
                        />
                        <div className="flex-1 h-[18px] mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                          Wechat
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
        <div className="flex flex-col items-start gap-9 flex-1">
          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex-col w-full items-start gap-1.5 flex">
              <div className="flex-col items-start gap-2.5 w-full flex">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        수취인 이름 (이름)
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col items-start gap-2.5 w-full flex">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full">
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="flex items-center flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                placeholder="영문 대문자만 입력가능, 띄어쓰기 1칸만 가능합니다."
                                className="flex-1 border-0 border-b border-[#dfe3ec] rounded-none px-0 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
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
          </div>

          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex-col w-full items-start gap-1.5 flex">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        수취인 이름 (성)
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full">
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="flex items-center flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                placeholder="영문 대문자만 입력가능, 띄어쓰기 1칸만 가능합니다."
                                className="flex-1 border-0 border-b border-[#dfe3ec] rounded-none px-0 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
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
          </div>

          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex-col w-full items-start gap-1.5 flex">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        휴대전화번호
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full">
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="inline-flex items-center gap-0.5">
                            <div className="flex text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                              +82
                            </div>
                            <img
                              className="w-4 h-4"
                              alt="Btn arrow"
                              src="https://c.animaapp.com/vuYaFJZH/img/ico16-btn-arrow-down1.svg"
                            />
                          </div>

                          <div className="flex items-center flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                placeholder="전화번호는 8 ~ 11 자리만 가능합니다."
                                className="flex-1 border-0 border-b border-[#dfe3ec] rounded-none px-0 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
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
          </div>
        </div>
      </section>

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
        <div className="flex flex-col items-start gap-9 flex-1">
          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex-col w-full items-start gap-1.5 flex">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        송금 목적
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full border-b border-[#dfe3ec]">
                        <Select>
                          <SelectTrigger className="border-0 rounded-none px-1 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] text-[#acb2c1] focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="선택해주세요" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">옵션 1</SelectItem>
                            <SelectItem value="option2">옵션 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex-col w-full items-start gap-1.5 flex">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        자금 원천
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full border-b border-[#dfe3ec]">
                        <Select>
                          <SelectTrigger className="border-0 rounded-none px-1 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] text-[#acb2c1] focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="선택해주세요" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">옵션 1</SelectItem>
                            <SelectItem value="option2">옵션 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
        <div className="flex flex-col w-full items-start gap-1.5">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    닉네임
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <div className="flex items-center flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            placeholder="닉네임을 입력해주세요(선택사항)"
                            className="flex-1 border-0 border-b border-[#dfe3ec] rounded-none px-0 h-auto pb-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col items-end gap-2.5 w-full flex">
            <div className="flex flex-col items-start pt-2 pb-0 px-0 w-full">
              <div
                className="mt-[-
1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]"
              >
                0/100
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 w-full rounded-xl flex">
          <div className="min-h-[54px] items-start flex-1 flex">
            <Button className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#b7ccf7] rounded-xl hover:bg-[#a3bef5]">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                등록
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
