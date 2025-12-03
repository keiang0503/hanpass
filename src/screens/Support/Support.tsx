import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const socialMediaIcons = [
  {
    src: "https://c.animaapp.com/fz9Fo3ua/img/sns-logo.svg",
    alt: "WeChat",
  },
  {
    src: "https://c.animaapp.com/fz9Fo3ua/img/asset-name-instagram--size-46@2x.png",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/fz9Fo3ua/img/asset-name-kakaotalk--size-46@2x.png",
    alt: "KakaoTalk",
  },
];

const operatingHours = [
  { label: "평일 09:00 - 12:00" },
  { label: "주말 10:00 - 22:00" },
];

export const Support = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34958:294668"
    >
      <header className="flex flex-col bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  9
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  :
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
                  41
                </div>
              </div>
            </div>
            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/fz9Fo3ua/img/icon---mobile-signal-1.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/fz9Fo3ua/img/wifi-1.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/fz9Fo3ua/img/battery-1.svg"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 bg-white">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/fz9Fo3ua/img/icon---mobile-signal-1.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/fz9Fo3ua/img/wifi-1.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/fz9Fo3ua/img/battery-1.svg"
          />
        </div>

        <nav className="flex items-center justify-between px-5 py-3 bg-white">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-auto p-0 rounded-full border-2 border-black"
            >
              <div className="w-6 h-6" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 bg-white">
        <section className="pt-[22px] pb-0 px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            고객센터
          </h1>

          <p className="mt-2 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            도움이 필요하시면 문의해주세요.
          </p>
        </section>

        <section className="flex flex-col pt-[34px] pb-6 px-6 flex-1">
          <Button
            variant="outline"
            className="h-auto justify-start gap-2 px-6 py-3 bg-white rounded-lg border-[#b7ccf7] hover:bg-white"
          >
            <img
              className="w-4 h-4"
              alt="Center faq"
              src="https://c.animaapp.com/fz9Fo3ua/img/ico18-center-faq.svg"
            />
            <span className="flex-1 text-[#0d56e4] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              자주 묻는 질문
            </span>
            <ChevronRightIcon className="w-4 h-4 text-[#0d56e4]" />
          </Button>

          <div className="flex flex-col py-3">
            <div className="flex flex-col gap-1 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 flex-1">
                  <div className="w-6 h-6 bg-[url(https://c.animaapp.com/fz9Fo3ua/img/country.svg)] bg-[100%_100%]" />
                  <div className="flex flex-col justify-center gap-0.5 flex-1">
                    <div className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#111111] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                      중국
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-end justify-center gap-3.5">
                  {socialMediaIcons.map((icon, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="h-auto p-0"
                    >
                      <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[13px]">
                <div className="flex flex-col gap-1">
                  <h2 className="font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#111111] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                    02-3409-1156
                  </h2>

                  <div className="flex flex-col gap-1">
                    {operatingHours.map((hour, index) => (
                      <div key={index} className="flex items-start gap-[5px]">
                        <div className="relative w-2 h-3.5">
                          <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                        </div>
                        <div className="flex-1 text-[#717682] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                          {hour.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-end px-6 py-0 bg-white">
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
