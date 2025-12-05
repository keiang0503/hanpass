import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";

const statusBarIcons = [
  {
    alt: "Bar",
    src: "/img/bar-1.png",
    className:
      "h-[40.00%] top-[-102560.00%] left-[-4522.22%] absolute w-[16.67%]",
  },
  {
    alt: "Bar",
    src: "/img/bar-2.png",
    className:
      "h-[60.00%] top-[-102580.00%] left-[-4494.44%] absolute w-[16.67%]",
  },
  {
    alt: "Bar",
    src: "/img/bar-3.png",
    className: "h-[80.00%] top-[-102600%] left-[-4466.67%] absolute w-[16.67%]",
  },
  {
    alt: "Bar",
    src: "/img/bar-4.png",
    className: "h-full top-[-102620.00%] left-[-4438.89%] absolute w-[16.67%]",
  },
];

const wifiIcons = [
  {
    alt: "Bar",
    src: "/img/image.png",
    className:
      "absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-5203.18%]",
  },
  {
    alt: "Bar",
    src: "/img/bar-2-2.png",
    className:
      "absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-5218.75%]",
  },
  {
    alt: "Bar",
    src: "/img/bar-3-2.png",
    className:
      "absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-5237.52%]",
  },
];

const consentItems = [
  {
    id: "service-terms",
    label: "[필수] 서비스 이용 및 개인정보처리 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right.svg",
  },
  {
    id: "third-party",
    label: "[필수] 개인정보 제 3자 제공 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-1.svg",
  },
  {
    id: "withdrawal-service",
    label: "[필수] 출금서비스(은행) 약관 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-2.svg",
  },
  {
    id: "financial-info",
    label: "[필수] 금웅정보조회 이용 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-3.svg",
  },
  {
    id: "financial-third-party",
    label: "[필수] 금융정보 제3자 제공 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-4.svg",
  },
];

export const Account = (): JSX.Element => {
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreements, setAgreements] = useState<Record<string, boolean>>({
    "service-terms": false,
    "third-party": false,
    "withdrawal-service": false,
    "financial-info": false,
    "financial-third-party": false,
  });

  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked);
    const newAgreements: Record<string, boolean> = {};
    consentItems.forEach((item) => {
      newAgreements[item.id] = checked;
    });
    setAgreements(newAgreements);
  };

  const handleIndividualAgreement = (id: string, checked: boolean) => {
    const newAgreements = { ...agreements, [id]: checked };
    setAgreements(newAgreements);
    const allChecked = Object.values(newAgreements).every((val) => val);
    setAgreeAll(allChecked);
  };

  const allAgreed = Object.values(agreements).every((val) => val);

  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="2674:67388"
    >
      <header className="flex-col items-start self-stretch w-full bg-white flex relative">
        <Link
          className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white"
          to="/accountu95015-u4363u4469u4358u4454u4363u4469u4527u4363u4469u4536u4357u4455u4520"
        >
          <div className="w-[360px] flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
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
                  {statusBarIcons.map((icon, index) => (
                    <img
                      key={`status-bar-${index}`}
                      className={icon.className}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  {wifiIcons.map((icon, index) => (
                    <img
                      key={`wifi-${index}`}
                      className={icon.className}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>
                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-3758.34%]"
                    alt="Border"
                    src="/img/border.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-3666.67%]"
                    alt="Cap"
                    src="/img/cap.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </div>
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/sCCrT5uL/img/icon---mobile-signal-7.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/sCCrT5uL/img/wifi-7.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/sCCrT5uL/img/battery-7.svg"
            />
          </div>
        </Link>
        <nav className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
          <div className="flex-col gap-2 self-stretch w-full flex-[0_0_auto] mb-[-14.00px] flex items-start relative">
            <div className="h-[54px] items-center justify-around px-5 py-0 w-full bg-white flex relative self-stretch">
              <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <ChevronLeftIcon className="h-8 w-8" />
                </Button>
              </div>
              <div className="absolute top-[11px] right-1.5 flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <MoreHorizontalIcon className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <CircleIcon className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex-col items-start w-full flex-[0_0_auto] flex relative self-stretch">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              자동출금 동의를 위해 고객님의 이용 동의 및 본인인증을 진행할게요.
            </h1>
          </div>
        </div>
      </section>
      <main className="flex-col items-start gap-2.5 pt-[34px] pb-6 px-6 flex-1 self-stretch w-full grow flex relative">
        <Card className="items-start bg-white rounded-lg border border-solid border-[#dfe3ec] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <CardContent className="p-0 w-full">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => handleAgreeAll(!agreeAll)}
                className="items-center gap-2 px-4 py-3 flex-1 grow border-b [border-bottom-style:solid] border-[#dfe3ec] flex relative self-stretch w-full"
              >
                <Checkbox
                  checked={agreeAll}
                  onCheckedChange={handleAgreeAll}
                  className="h-[26px] w-[26px]"
                />
                <span className="text-[#1c253f] relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] text-left">
                  모두 동의합니다.
                </span>
              </button>
            </div>
            <div className="items-start gap-[22px] px-2.5 py-[30px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
              {consentItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start relative self-stretch w-full flex-[0_0_auto]"
                >
                  <button
                    onClick={() =>
                      handleIndividualAgreement(item.id, !agreements[item.id])
                    }
                    className="flex items-start gap-1.5 relative flex-1 grow w-full"
                  >
                    <Checkbox
                      checked={agreements[item.id]}
                      onCheckedChange={(checked) =>
                        handleIndividualAgreement(item.id, checked as boolean)
                      }
                      className="h-5 w-5"
                    />
                    <div className="items-start justify-center gap-[5px] px-0 py-px flex-1 grow flex relative">
                      <span className="relative flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] text-left">
                        {item.label}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2.5 px-0 py-[3px] relative flex-[0_0_auto]">
                      <ChevronRightIcon className="relative w-4 h-4 text-[#85888e]" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="items-center px-6 py-0 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button
              disabled={!allAgreed}
              className={`flex items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow rounded-xl h-auto ${
                allAgreed ? "bg-[#4285f4]" : "bg-[#b7ccf7]"
              }`}
            >
              <span className="text-white text-center relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>
        <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex-col w-[134px] items-center gap-2.5 flex-[0_0_auto] ml-[-8.50px] mr-[-8.50px] flex relative">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
