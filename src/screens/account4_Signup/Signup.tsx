import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const authServices = [
  {
    id: 1,
    name: "토스 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/toss-icon.svg",
    bgColor: "bg-[#0064FF]",
  },
  {
    id: 2,
    name: "우리WON인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/woori-icon.svg",
    bgColor: "bg-[#0099CC]",
  },
  {
    id: 3,
    name: "카카오뱅크",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/kakao-bank-icon.svg",
    bgColor: "bg-[#FFEB00]",
  },
  {
    id: 4,
    name: "PASS 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/pass-icon.svg",
    bgColor: "bg-[#FF4444]",
  },
  {
    id: 5,
    name: "신한 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/shinhan-icon.svg",
    bgColor: "bg-[#0046FF]",
  },
  {
    id: 6,
    name: "삼성패스 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/samsung-pass-icon.svg",
    bgColor: "bg-[#5B5FFF]",
  },
  {
    id: 7,
    name: "하나 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/hana-icon.svg",
    bgColor: "bg-[#00857D]",
  },
  {
    id: 8,
    name: "금융인증서",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/finance-cert-icon.svg",
    bgColor: "bg-[#0080C6]",
  },
  {
    id: 9,
    name: "네이버 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/naver-icon.svg",
    bgColor: "bg-[#00C73C]",
  },
  {
    id: 10,
    name: "KB국민인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/kb-icon.svg",
    bgColor: "bg-[#FFBB00]",
  },
  {
    id: 11,
    name: "카카오톡 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/kakao-talk-icon.svg",
    bgColor: "bg-[#FFE812]",
  },
];

const infoTexts = [
  "본인 명의의 인증서로 간편인증이 가능합니다.",
  "인력한 정보는 간편인증을 위해서만 활용됩니다.",
  "각 인증서는 해당 인증서의 앱 설치 후 발급 가능 (금융인증서는 각 은행에서 발급 가능)",
];

export const Signup = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88025"
    >
      <header className="w-full flex flex-col bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
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
              Sat Jun 11
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-102560.00%] left-[-44627.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-2.png"
              />
              <img
                className="h-[60.00%] top-[-102580.00%] left-[-44600%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-3.png"
              />
              <img
                className="h-[80.00%] top-[-102600%] left-[-44572.22%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-3.png"
              />
              <img
                className="h-full top-[-102620.00%] left-[-44544.44%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-2.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-50321.93%]"
                alt="Bar"
                src="/img/bar-1-3.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-50337.50%]"
                alt="Bar"
                src="/img/bar-2-4.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-50356.27%]"
                alt="Bar"
                src="/img/bar-3-4.png"
              />
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-33837.50%]"
                alt="Border"
                src="/img/border-2.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-33745.83%]"
                alt="Cap"
                src="/img/cap-2.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4">
          <span className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </span>
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
      </header>

      <nav className="flex flex-col items-start w-full bg-white">
        <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <CircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col w-full bg-white px-5 pt-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[#6B3FA0] [font-family:'Pretendard',Helvetica] font-bold text-lg tracking-[-0.36px] leading-[normal]">
            KG 이니시스
          </h1>
          <span className="[font-family:'Pretendard',Helvetica] font-medium text-black text-base tracking-[-0.32px] leading-[normal]">
            간편인증
          </span>
        </div>

        <section className="grid grid-cols-4 gap-4 mb-6">
          {authServices.map((service) => (
            <Button
              key={service.id}
              variant="ghost"
              className="h-auto flex flex-col items-center gap-2 p-2 hover:bg-gray-50"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg" />
              </div>
              <span className="[font-family:'Pretendard',Helvetica] font-normal text-xs text-black tracking-[-0.24px] leading-[normal] text-center">
                {service.name}
              </span>
            </Button>
          ))}
        </section>

        <section className="flex flex-col gap-2 mb-8">
          {infoTexts.map((text, index) => (
            <p
              key={index}
              className="[font-family:'Pretendard',Helvetica] font-normal text-xs text-gray-600 tracking-[-0.24px] leading-[1.3]"
            >
              · {text}
            </p>
          ))}
        </section>
      </main>

      <footer className="flex flex-col items-center gap-4 px-5 pb-8 bg-white">
        <Button
          variant="secondary"
          className="w-full h-14 rounded-xl bg-gray-200 hover:bg-gray-300 [font-family:'Pretendard',Helvetica] font-semibold text-base text-black tracking-[-0.32px]"
        >
          취소
        </Button>
        <p className="[font-family:'Pretendard',Helvetica] font-normal text-xs text-gray-500 tracking-[-0.24px] leading-[normal]">
          고객지원 1588-4954 | 개인정보처리방침
        </p>
      </footer>
    </div>
  );
};
