import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ScrollArea } from "../../components/ui/scroll-area";

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
      <BackSubHeader />

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
      </footer>
    </div>
  );
};
