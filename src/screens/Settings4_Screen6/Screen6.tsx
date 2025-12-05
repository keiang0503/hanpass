import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
};

const signalBars = [
  { height: "h-[40.00%]", src: "/img/bar-1-8.png" },
  { height: "h-[60.00%]", src: "/img/bar-2-9.png" },
  { height: "h-[80.00%]", src: "/img/bar-3-9.png" },
  { height: "h-full", src: "/img/bar-4-5.png" },
];

const wifiBars = [
  { width: "w-[31.30%]", height: "h-[30.17%]", src: "/img/bar-1-9.png" },
  { width: "w-[62.57%]", height: "h-[34.44%]", src: "/img/bar-2-10.png" },
  { width: "w-[100.01%]", height: "h-[43.03%]", src: "/img/bar-3-10.png" },
];

const termsContent = [
  {
    title: "한패스 서비스 약관",
    sections: [
      {
        subtitle: "제1조(적용범위)",
        content: [
          {
            text: "이 약관은 ",
            bold: false,
          },
          {
            text: "한패스",
            bold: true,
          },
          {
            text: '(주)(이하 "회사"라 합니다)가 제공하는 전자금융거래(이하 "전자금융거래서비스"라 합니다)에 대한 기본적인 사항을 정함으로써 전자금융거래를 이용하고자 하는 이용자와 회사 사이의 권리와 의무 관계를 명확하게 정함을 목적으로 합니다.',
            bold: false,
          },
        ],
      },
      {
        subtitle: "제2조(실명거래)",
        content: [
          {
            text: "고객은 회사와의 ",
            bold: false,
          },
          {
            text: "소액해외송금거래시 실명으로 거래",
            bold: true,
          },
          {
            text: "하여야 하며, 회사가 실명확인을 위해 고객에게 실명확인증표 등 필요한 자룔르 요구할 경우 이에 따르기로 합니다.",
            bold: false,
          },
        ],
      },
      {
        subtitle: "제3조(송금한도)",
        content: [
          {
            text: "고객이 본 서비스를 통해 송금할 수 있는 한도는 다음 각호와 같습니다.",
            bold: false,
          },
        ],
        listItems: [
          "건당 지급 및 수령 한도는 각각 미화 5천달러",
          "연간 지급 및 수령 누계 한도는 각각 미화 5만달러",
        ],
      },
      {
        subtitle: "제4조(지정계좌)",
        content: [
          {
            text: "① 회사는 '소액해외송금업무에 사용할 계좌인 것으로 소액해외송금업 등록(변경등록 포함) 당시 지정한 ",
            bold: false,
          },
          {
            text: "회사명의 금융회사개설 계좌' (이하 '지정계좌'라 합니다.)를 통해서만 고객에게 자금을 지급하거나 고객으로부터 자금을",
            bold: true,
          },
        ],
      },
    ],
  },
];

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:80767"
    >
      <header className="w-full flex flex-col items-start relative bg-white">
        <Link
          className="w-full flex flex-col items-start gap-2.5 relative bg-white"
          to="/u4359u4453u4364u4453u4523u4364u4453u4540u4359u4457"
        >
          <div className="w-full flex flex-col items-start gap-2.5 relative bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 relative w-full bg-white">
              <div className="inline-flex items-center gap-2 relative">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="inline-flex items-center relative">
                    <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </span>
                    <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </span>
                    <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </span>
                  </div>
                </div>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.date}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 relative">
                <div className="relative w-[18px] h-2.5">
                  {signalBars.map((bar, index) => (
                    <img
                      key={`signal-bar-${index}`}
                      className={`${bar.height} absolute w-[16.67%]`}
                      style={{
                        top:
                          index === 0
                            ? "-208140.00%"
                            : index === 1
                              ? "-208160.00%"
                              : index === 2
                                ? "-208180.00%"
                                : "-208200%",
                        left:
                          index === 0
                            ? "-16405.56%"
                            : index === 1
                              ? "-16377.78%"
                              : index === 2
                                ? "-16350.00%"
                                : "-16322.22%",
                      }}
                      alt="Bar"
                      src={bar.src}
                    />
                  ))}
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  {wifiBars.map((bar, index) => (
                    <img
                      key={`wifi-bar-${index}`}
                      className={`absolute ${bar.width} ${bar.height}`}
                      style={{
                        top:
                          index === 0
                            ? "-179112.45%"
                            : index === 1
                              ? "-179148.56%"
                              : "-179182.28%",
                        left:
                          index === 0
                            ? "-18571.93%"
                            : index === 1
                              ? "-18587.50%"
                              : "-18606.27%",
                      }}
                      alt="Bar"
                      src={bar.src}
                    />
                  ))}
                </div>

                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.battery}
                </span>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full"
                    style={{ top: "-173491.67%", left: "-12670.84%" }}
                    alt="Border"
                    src="/img/border-5.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%]"
                    style={{ top: "-173458.33%", left: "-12579.17%" }}
                    alt="Cap"
                    src="/img/cap-5.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative w-full">
            <span className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              {statusBarData.time}
            </span>
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/MgOgZxnr/img/icon---mobile-signal-7.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/MgOgZxnr/img/wifi-7.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/MgOgZxnr/img/battery-7.svg"
            />
          </div>
        </Link>

        <nav className="flex flex-col items-start relative w-full bg-white">
          <div className="flex flex-col items-start gap-2 relative w-full">
            <div className="flex h-[54px] items-center justify-between px-5 py-0 relative w-full bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0"
                asChild
              >
                <Link to="/u4359u4453u4364u4453u4523u4364u4453u4540u4359u4457">
                  <ChevronLeftIcon className="h-8 w-8" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <MoreVerticalIcon className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <CircleIcon className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-start relative w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 relative w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            한패스 서비스 약관 동의
          </h1>
        </div>
      </main>

      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col items-start gap-5 pt-[22px] pb-6 px-6">
          {termsContent.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className="flex flex-col items-start gap-5 w-full"
            >
              <div className="flex flex-col items-start gap-2.5 w-full">
                <h2 className="font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                  {section.title}
                </h2>

                {section.sections.map((subsection, subsectionIndex) => (
                  <div
                    key={`subsection-${subsectionIndex}`}
                    className="flex flex-col items-start gap-3.5 w-full"
                  >
                    <h3 className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
                      {subsection.subtitle}
                    </h3>

                    <div className="flex flex-col items-start gap-2 w-full">
                      <p className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-[13px] tracking-[-0.26px] leading-[16.9px]">
                        {subsection.content.map((part, partIndex) => (
                          <span
                            key={`part-${partIndex}`}
                            className={
                              part.bold
                                ? "font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] tracking-[var(--caption-title-13-b-letter-spacing)] [font-style:var(--caption-title-13-b-font-style)] leading-[var(--caption-title-13-b-line-height)] text-[length:var(--caption-title-13-b-font-size)]"
                                : "text-[#717682] tracking-[var(--caption-title-13-r-letter-spacing)] font-caption-title-13-r [font-style:var(--caption-title-13-r-font-style)] font-[number:var(--caption-title-13-r-font-weight)] leading-[var(--caption-title-13-r-line-height)] text-[length:var(--caption-title-13-r-font-size)]"
                            }
                          >
                            {part.text}
                          </span>
                        ))}
                      </p>

                      {subsection.listItems && (
                        <>
                          {subsection.listItems.map((item, itemIndex) => (
                            <p
                              key={`list-item-${itemIndex}`}
                              className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]"
                            >
                              {itemIndex + 1}. {item}
                            </p>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative w-full">
        <div className="relative w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
