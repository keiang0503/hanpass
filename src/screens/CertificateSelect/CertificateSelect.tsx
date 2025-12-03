import {
  ChevronLeftIcon,
  CircleIcon,
  MoreVerticalIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const certificates = [
  {
    id: 1,
    name: "변우석(BYEON WOOSEOCK)",
    type: "개인범용",
    issuer: "한국정보인증",
    expiryDate: "2026.01.14",
    icon: "https://c.animaapp.com/sCCrT5uL/img/frame-1261169793-1.svg",
  },
  {
    id: 2,
    name: "변우석(BYEON WOOSEOCK)",
    type: "개인범용",
    issuer: "한국정보인증",
    expiryDate: "2026.01.14",
    icon: "https://c.animaapp.com/sCCrT5uL/img/frame-1261169793-1.svg",
  },
];

export const CertificateSelect = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="35202:92185"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-14.png"
                />
                <img
                  className="h-[60.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-15.png"
                />
                <img
                  className="h-[80.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-15.png"
                />
                <img
                  className="h-full absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-8.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%]"
                  alt="Bar"
                  src="/img/bar-1-15.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%]"
                  alt="Bar"
                  src="/img/bar-2-16.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%]"
                  alt="Bar"
                  src="/img/bar-3-16.png"
                />
              </div>
              <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full"
                  alt="Border"
                  src="/img/border-8.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%]"
                  alt="Cap"
                  src="/img/cap-8.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/sCCrT5uL/img/icon---mobile-signal-7.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/sCCrT5uL/img/wifi-7.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/sCCrT5uL/img/battery-7.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <ChevronLeftIcon className="w-8 h-8" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <MoreVerticalIcon className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <CircleIcon className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              인증서를 선택해주세요.
            </h1>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-start gap-[22px] pt-[42px] pb-0 px-6 flex-1 w-full grow">
        <div className="flex flex-col items-start gap-3.5 w-full">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="w-full bg-[#f4f7fd] rounded-2xl border-0 overflow-hidden"
            >
              <CardContent className="flex flex-col items-center gap-2 pt-5 pb-4 px-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex items-start gap-1.5 w-full">
                    <div className="flex items-start gap-1 flex-1 grow">
                      <img className="w-10 h-10" alt="Frame" src={cert.icon} />
                      <div className="flex flex-col items-start gap-2 flex-1 grow">
                        <div className="flex items-center gap-1.5 w-full">
                          <div className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--title-16-b-font-style)]">
                            {cert.name}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-auto p-0"
                          >
                            <Trash2Icon className="w-5 h-5" />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="flex items-center w-full">
                            <div className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                              {cert.type}
                            </div>
                          </div>
                          <div className="flex flex-col items-start gap-1 w-full">
                            <div className="flex items-center w-full">
                              <div className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                                {cert.issuer}
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-[6px_6px] w-full">
                              <div className="inline-flex items-center">
                                <div className="w-fit font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                                  만료일
                                </div>
                              </div>
                              <div className="inline-flex items-center justify-center gap-2.5">
                                <div className="w-fit font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                                  {cert.expiryDate}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec]">
          <CardContent className="flex items-center gap-1.5 px-4 py-6">
            <div className="flex flex-col items-center justify-center gap-2 flex-1 grow">
              <div className="flex items-center justify-center w-6 h-6 bg-[#2563eb] rounded-full">
                <PlusIcon className="w-4 h-4 text-white" />
              </div>
              <div className="inline-flex flex-col items-start gap-1">
                <div className="w-[295px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-center tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                  인증서 가져오기
                </div>
                <div className="w-[295px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  가져오기를 통해 새로운 인증서를 등록합니다
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
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
