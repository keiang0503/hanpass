import {
  ChevronLeftIcon,
  CircleIcon,
  InfoIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const carrierOptions = [
  { id: 1, name: "SKT", isMvno: false },
  { id: 2, name: "KT", isMvno: false },
  { id: 3, name: "LG U+", isMvno: false },
  { id: 4, name: "SKT", subtitle: "알뜰폰", isMvno: true },
  { id: 5, name: "KT", subtitle: "알뜰폰", isMvno: true },
  { id: 6, name: "LG U+", subtitle: "알뜰폰", isMvno: true },
];

export const CarrierSelect = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88115"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex items-center justify-between px-2.5 py-1 h-6 w-full bg-white">
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
                className="h-[40.00%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-6.png"
              />
              <img
                className="h-[60.00%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-7.png"
              />
              <img
                className="h-[80.00%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-7.png"
              />
              <img
                className="h-full absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%]"
                alt="Bar"
                src="/img/bar-1-7.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%]"
                alt="Bar"
                src="/img/bar-2-8.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%]"
                alt="Bar"
                src="/img/bar-3-8.png"
              />
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full"
                alt="Border"
                src="/img/border-4.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%]"
                alt="Cap"
                src="/img/cap-4.png"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-4 w-full">
          <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
            9:41
          </span>

          <div className="flex items-center gap-2">
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

        <nav className="flex items-center justify-between px-5 py-4 w-full bg-white">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <CircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 px-5 pt-8 pb-6 w-full">
        <div className="flex items-center justify-between mb-8">
          <img
            className="h-12"
            alt="PASS Logo"
            src="https://c.animaapp.com/UrLjfz9Z/img/img-4819.png"
          />
          <div className="text-right">
            <div className="[font-family:'Pretendard',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[130%]">
              인증을 넘어
            </div>
            <div className="[font-family:'Pretendard',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[130%]">
              일상으로 PASS
            </div>
          </div>
        </div>

        <h1 className="[font-family:'Pretendard',Helvetica] font-bold text-black text-2xl tracking-[-0.48px] leading-[130%] mb-2">
          이용중인 통신사를
        </h1>
        <h1 className="[font-family:'Pretendard',Helvetica] font-bold text-black text-2xl tracking-[-0.48px] leading-[130%] mb-8">
          선택해 주세요
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {carrierOptions.map((carrier) => (
            <Card
              key={carrier.id}
              className="cursor-pointer hover:bg-gray-50 transition-colors border border-gray-200 rounded-2xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 min-h-[120px]">
                <div className="[font-family:'Pretendard',Helvetica] font-semibold text-black text-lg tracking-[-0.36px] leading-[130%] text-center">
                  {carrier.name}
                </div>
                {carrier.subtitle && (
                  <div className="[font-family:'Pretendard',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[130%] text-center mt-1">
                    {carrier.subtitle}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-500">
          <InfoIcon className="h-4 w-4" />
          <span className="[font-family:'Pretendard',Helvetica] font-normal text-sm tracking-[-0.28px] leading-[130%]">
            알뜰폰 사업자 확인
          </span>
        </div>
      </main>

      <footer className="flex flex-col items-center px-5 py-6 w-full bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="[font-family:'Pretendard',Helvetica] font-normal text-gray-600 text-xs tracking-[-0.24px] leading-[130%]">
            이용약관 개인정보처리방침 API 도입문의
          </div>
          <div className="px-2 py-1 bg-white border border-gray-300 rounded">
            <span className="[font-family:'Pretendard',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[130%]">
              NICE평가정보
            </span>
          </div>
        </div>
        <div className="[font-family:'Pretendard',Helvetica] font-normal text-gray-600 text-xs tracking-[-0.24px] leading-[130%]">
          VeriSign 256-bit SSL 안호화 적용
        </div>
      </footer>
    </div>
  );
};
