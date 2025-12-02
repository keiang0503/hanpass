import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const slides = [
  { id: 1, src: "https://c.animaapp.com/FyEwllI9/img/image-871@2x.png" },
  { id: 2, src: "https://c.animaapp.com/FyEwllI9/img/image-871@2x.png" },
  { id: 3, src: "https://c.animaapp.com/FyEwllI9/img/image-871@2x.png" },
];

export const ElementScreen = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46437"
    >
      <div className="flex flex-col w-full h-screen items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col w-full max-w-[432px] bg-white rounded-[20px_20px_0px_0px] overflow-hidden border-0">
          <CardContent className="p-0 w-full">
            <div
              className="relative w-full overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="relative w-full flex-shrink-0">
                    <img
                      className="w-full aspect-[1.48]"
                      alt={`Slide ${index + 1}`}
                      src={slide.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 py-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-5 bg-[#7F8DC0]/80"
                      : "w-2 bg-[#d9d9d9]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-start gap-3 px-6 py-0 w-full">
              <Button
                variant="ghost"
                className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)] h-auto p-0 justify-start hover:bg-transparent"
              >
                오늘 하루 보지 않기
              </Button>

              <Button
                variant="ghost"
                className="w-fit font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)] h-auto p-0 hover:bg-transparent"
              >
                닫기
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 w-full max-w-[432px] bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>

        <header className="flex flex-col w-full items-start absolute top-0 left-0">
          <Link
            className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]"
            to="/x5u46-u4359u4457u4363u4469u4361u4467u4369u4469u4361u4469u4540"
          >
            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
              <time className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                9:41
              </time>

              <img
                className="relative w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/FyEwllI9/img/icon---mobile-signal-3.svg"
              />

              <img
                className="relative w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/FyEwllI9/img/wifi-2.svg"
              />

              <img
                className="relative w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/FyEwllI9/img/battery-3.svg"
              />
            </div>
          </Link>

          <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/FyEwllI9/img/mini-8@2x.png"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
