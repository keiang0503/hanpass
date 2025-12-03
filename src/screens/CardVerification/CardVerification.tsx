import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const cardOptions = [
  {
    id: "samsung",
    name: "SAMSUNG CARD",
    logo: "https://c.animaapp.com/UrLjfz9Z/img/samsung-card.svg",
  },
  {
    id: "hyundai",
    name: "Hyundai Card",
    logo: "https://c.animaapp.com/UrLjfz9Z/img/hyundai-card.svg",
  },
  {
    id: "nh",
    name: "NH농협카드",
    logo: "https://c.animaapp.com/UrLjfz9Z/img/nh-card.svg",
  },
  {
    id: "shinhan",
    name: "신한카드",
    logo: "https://c.animaapp.com/UrLjfz9Z/img/shinhan-card.svg",
  },
];

const infoTexts = [
  "※ 본인 명의의 개인 신용카드 또는 체크카드로 본인확인 가능합니다.",
  "※ 법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.",
  "※ BC · KB국민 · 롯데 · 하나카드는 서비스 이용이 불가하니 타 카드 이용 바랍니다.",
];

export const CardVerification = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88072"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex items-center justify-between px-5 py-4 w-full">
          <div className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
            9:41
          </div>
          <div className="flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/UrLjfz9Z/img/icon---mobile-signal-6.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/UrLjfz9Z/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/UrLjfz9Z/img/battery-6.svg"
            />
          </div>
        </div>

        <nav className="flex items-center justify-between px-5 py-4 w-full">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreVerticalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <CircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        <div className="flex items-center justify-between px-5 py-4 w-full">
          <h1 className="[font-family:'Pretendard',Helvetica] font-semibold text-black text-lg tracking-[-0.36px] leading-normal">
            카드본인확인서비스
          </h1>
          <div className="[font-family:'Pretendard',Helvetica] font-bold text-[#0066CC] text-sm tracking-[-0.28px] leading-normal">
            KG 이니시스
          </div>
        </div>
      </header>

      <main className="flex flex-col flex-1 px-5 py-6 w-full">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {cardOptions.map((card) => (
            <Button
              key={card.id}
              variant="outline"
              className="h-auto py-6 px-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="[font-family:'Pretendard',Helvetica] font-medium text-black text-sm tracking-[-0.28px] leading-normal">
                {card.name}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-2 mb-8">
          {infoTexts.map((text, index) => (
            <p
              key={index}
              className="[font-family:'Pretendard',Helvetica] font-normal text-gray-600 text-xs tracking-[-0.24px] leading-[1.3]"
            >
              {text}
            </p>
          ))}
        </div>

        <Button className="w-full h-auto py-4 bg-[#4A4A4A] hover:bg-[#3A3A3A] text-white rounded-lg [font-family:'Pretendard',Helvetica] font-medium text-base tracking-[-0.32px] leading-normal">
          취소
        </Button>
      </main>

      <footer className="flex items-center justify-center gap-2 px-5 py-4 w-full border-t border-gray-100">
        <span className="[font-family:'Pretendard',Helvetica] font-normal text-gray-500 text-xs tracking-[-0.24px] leading-normal">
          고객지원 1588-4954
        </span>
        <span className="text-gray-300">|</span>
        <span className="[font-family:'Pretendard',Helvetica] font-normal text-gray-500 text-xs tracking-[-0.24px] leading-normal">
          개인정보처리방침
        </span>
      </footer>
    </div>
  );
};
