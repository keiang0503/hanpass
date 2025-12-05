import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ScrollArea } from "../../components/ui/scroll-area";

export const SettingsScreen = (): JSX.Element => {
  const termsContent = [
    {
      title: "제1조 (목적)",
      content:
        '이 약관은 한패스 주식회사(이하 "회사"라 합니다)가 제공하는 전자금융거래(이하 "전자금융거래서비스"라 합니다)에 대한 기본적인 사항을 정함으로써 전자금융거래를 이용하고자 하는 이용자와 회사 사이의 권리와 의무 관계를 명확하게 정함을 목적으로 합니다.',
    },
    {
      title: "제2조 (용어의 정의)",
      paragraphs: [
        "본 약관에서 정하는 용어의 정의는 다음과 같으며, 본 조 및 본 약관에서 별도로 정의하지 아니한 용어의 정의는 전자금융거래법 등 관련법령이 정한 바에 의합니다.",
        '"회사"의 고의 또는 과실 없이 "서비스"를 제공할 수 없는 경우에는 "서비스"  제공에 관한 책임이 면제됩니다.',
        '"회사"는 "이용자" 또는 제3자 측의 사정으로 인한 "서비스" 이용의 장애에  대하여 책임을 지지 않습니다.',
        '"회사"는 고의 또는 중과실이 없는 한 "이용자"가 "서비스"를이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 "서비스" 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.',
      ],
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:80744"
    >
      <BackSubHeader />

      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            [필수] 전자금융거래 이용약관
          </h1>
        </div>

        <ScrollArea className="flex-1 w-full">
          <div className="flex flex-col items-start gap-5 pt-[22px] pb-6 px-6">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h2 className="w-full font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                {'<한패스 전자금융거래이용약관>'}
              </h2>

              <h3 className="w-full font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0b0c0e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
                제1장 총칙
              </h3>

              <h4 className="w-full font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
                {termsContent[0].title}
              </h4>

              <div className="flex flex-col items-start gap-2 w-full">
                <p className="w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {termsContent[0].content}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3.5 w-full">
              <h4 className="w-full font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
                {termsContent[1].title}
              </h4>

              <div className="flex flex-col items-start gap-2 w-full">
                {termsContent[1].paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
