import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, MoreHorizontalIcon, CircleIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const addressOptions = [
  {
    id: "direct-input",
    icon: "https://c.animaapp.com/Kel660N3/img/img28-search-group-1.svg",
    title: "직접 입력 하기",
    alt: "Search group",
  },
  {
    id: "photo-upload",
    icon: "https://c.animaapp.com/Kel660N3/img/img28-direct-address.svg",
    title: "주소 사진 업로드",
    alt: "Direct address",
  },
];

export const AddressInputMethod = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-white" data-model-id="40000003:763991">
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
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
                className="h-[40.00%] top-[-1010.00%] left-[-48305.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-14.png"
              />
              <img
                className="h-[60.00%] top-[-1030.00%] left-[-48277.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-15.png"
              />
              <img
                className="h-[80.00%] top-[-1050.00%] left-[-48250.00%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-15.png"
              />
              <img
                className="h-full top-[-1070.00%] left-[-48222.22%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-8.png"
              />
            </div>
            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-844.10%] left-[-54459.43%]"
                alt="Bar"
                src="/img/bar-1-15.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-880.20%] left-[-54475.00%]"
                alt="Bar"
                src="/img/bar-2-16.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-913.93%] left-[-54493.77%]"
                alt="Bar"
                src="/img/bar-3-16.png"
              />
            </div>
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </span>
            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-883.33%] left-[-36595.84%]"
                alt="Border"
                src="/img/border-8.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-850.00%] left-[-36504.17%]"
                alt="Cap"
                src="/img/cap-8.png"
              />
            </div>
          </div>
        </div>
        <nav className="flex items-center justify-between px-5 py-4 w-full">
          <Button variant="ghost" size="icon" className="h-auto p-0" asChild>
            <Link to="/">
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <CircleIcon className="w-6 h-6" />
            </Button>
          </div>
        </nav>
        <div className="flex items-center px-5 py-4 w-full">
          <div className="flex items-center gap-2.5 w-full">
            <span className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </span>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/Kel660N3/img/icon---mobile-signal-7.svg"
            />
            <img className="w-[17px] h-[11.83px]" alt="Wifi" src="https://c.animaapp.com/Kel660N3/img/wifi-1.svg" />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/Kel660N3/img/battery-1.svg"
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            주소 입력 방법을 선택해 주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 items-start gap-3.5 pt-[42px] pb-6 px-6 w-full">
          {addressOptions.map((option) => (
            <Card key={option.id} className="w-full border-[#dfe3ec] rounded-xl overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="flex items-center justify-between p-4 h-[62px]">
                <div className="flex items-center gap-2 flex-1">
                  <img
                    className="w-7 h-7"
                    alt={option.alt}
                    src={option.icon}
                  />
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      {option.title}
                    </span>
                  </div>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
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
