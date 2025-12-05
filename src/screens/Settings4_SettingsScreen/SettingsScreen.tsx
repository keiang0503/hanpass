import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";

export const SettingsScreen = (): JSX.Element => {
  const statusBarData = {
    time: "9:41",
    date: "Sat Jun 11",
    battery: "100%",
  };

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
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[0]}
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[1]}
                </span>
              </div>
            </div>
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.date}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-208140.00%] left-[-14072.22%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-6.png"
              />
              <img
                className="h-[60.00%] top-[-208160.00%] left-[-14044.44%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-7.png"
              />
              <img
                className="h-[80.00%] top-[-208180.00%] left-[-14016.67%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-7.png"
              />
              <img
                className="h-full top-[-208200%] left-[-13988.89%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-179112.45%] left-[-15946.93%]"
                alt="Bar"
                src="/img/bar-1-7.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-179148.56%] left-[-15962.50%]"
                alt="Bar"
                src="/img/bar-2-8.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-179182.28%] left-[-15981.27%]"
                alt="Bar"
                src="/img/bar-3-8.png"
              />
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.battery}
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-173491.67%] left-[-10920.84%]"
                alt="Border"
                src="/img/border-4.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-173458.33%] left-[-10829.17%]"
                alt="Cap"
                src="/img/cap-4.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <span className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            {statusBarData.time}
          </span>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/MgOgZxnr/img/icon---mobile-signal-7.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/MgOgZxnr/img/wifi-7.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/MgOgZxnr/img/battery-7.svg"
          />
        </div>

        <nav className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 absolute left-1.5 top-[calc(50%-16px)]"
            asChild
          >
            <Link to="/">
              <ChevronLeftIcon className="h-8 w-8" />
            </Link>
          </Button>

          <img
            className="absolute h-[calc(100%-22px)] top-[11px] right-1.5 w-[87px]"
            alt="Mini"
            src="https://c.animaapp.com/MgOgZxnr/img/mini-7@2x.png"
          />
        </nav>
      </header>

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
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
