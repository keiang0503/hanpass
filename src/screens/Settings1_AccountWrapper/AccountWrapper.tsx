import React from "react";
import { Button } from "../../components/ui/button";

export const AccountWrapper = (): JSX.Element => {
  const statusBarIcons = [
    {
      src: "/img/bar-1-14.png",
      className:
        "h-[40.00%] top-[-169820.00%] left-[-17994.44%] absolute w-[16.67%]",
      alt: "Bar",
    },
    {
      src: "/img/bar-2-15.png",
      className:
        "h-[60.00%] top-[-169840.00%] left-[-17966.67%] absolute w-[16.67%]",
      alt: "Bar",
    },
    {
      src: "/img/bar-3-15.png",
      className:
        "h-[80.00%] top-[-169860.00%] left-[-17938.89%] absolute w-[16.67%]",
      alt: "Bar",
    },
    {
      src: "/img/bar-4-8.png",
      className:
        "h-full top-[-169880.00%] left-[-17911.11%] absolute w-[16.67%]",
      alt: "Bar",
    },
  ];

  const wifiBarIcons = [
    {
      src: "/img/bar-1-15.png",
      className:
        "absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-20359.43%]",
      alt: "Bar",
    },
    {
      src: "/img/bar-2-16.png",
      className:
        "absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-20375.00%]",
      alt: "Bar",
    },
    {
      src: "/img/bar-3-16.png",
      className:
        "absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-20393.77%]",
      alt: "Bar",
    },
  ];

  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="36848:78594"
    >
      <div className="w-[375px] h-[800px] items-start bg-white flex relative flex-col">
        <header className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto] bg-white">
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
                  {wifiBarIcons.map((icon, index) => (
                    <img
                      key={`wifi-bar-${index}`}
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
                    className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-13862.50%]"
                    alt="Border"
                    src="/img/border-8.png"
                  />

                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-13770.83%]"
                    alt="Cap"
                    src="/img/cap-8.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-black text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>

            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/w2kCT5wM/img/icon---mobile-signal-7.svg"
            />

            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/w2kCT5wM/img/wifi-7.svg"
            />

            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/w2kCT5wM/img/battery-7.svg"
            />
          </div>
        </header>

        <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
              <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5" />

              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/w2kCT5wM/img/mini-7@2x.png"
              />
            </div>
          </div>
        </nav>

        <main className="flex flex-col items-start gap-2.5 pt-0 pb-5 px-6 relative flex-1 self-stretch w-full grow">
          <section className="flex flex-col items-center gap-3.5 px-0 py-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-60 h-[154px] bg-[#ff00001a]">
              <img
                className="absolute w-[25.42%] h-[39.61%] top-[34.90%] left-[40.46%]"
                alt="Ellipse"
                src="https://c.animaapp.com/w2kCT5wM/img/ellipse-4759.svg"
              />

              <div className="absolute w-[10.19%] h-[15.87%] top-[46.61%] left-[44.91%] rounded-[12.22px] bg-[linear-gradient(135deg,rgba(71,122,253,1)_3%,rgba(58,55,237,1)_48%,rgba(124,79,249,1)_100%)]" />

              <img
                className="absolute w-[41.67%] h-[64.94%] top-[22.08%] left-[29.17%]"
                alt="Exclude"
                src="https://c.animaapp.com/w2kCT5wM/img/exclude.svg"
              />

              <img
                className="absolute w-[6.67%] h-[24.89%] top-[35.93%] left-[42.18%]"
                alt="Vector"
                src="https://c.animaapp.com/w2kCT5wM/img/vector-993.svg"
              />

              <div className="absolute w-[10.00%] h-[12.99%] top-[15.58%] left-[45.00%] bg-[#0044eb] rounded-[20px]" />

              <div className="absolute top-1.5 left-2.5 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-white text-[length:var(--title-20-b-font-size)] tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] whitespace-nowrap [font-style:var(--title-20-b-font-style)]">
                Lottie
              </div>
            </div>

            <div className="items-center gap-[30px] self-stretch w-full flex-[0_0_auto] flex relative flex-col">
              <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative flex-col">
                <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  셀카인증 진행중 이예요.
                </h1>

                <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                  셀카 인증이 완료되어야 자동출금계좌를 이용할 수 있어요.
                  수동계좌는 계속 이용 가능해요.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 relative self-stretch w-full flex-[0_0_auto] z-[3]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-2 h-3.5">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>

                <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  셀카인증은 업무 시간 내 처리되며, 업무가 종료된 후에는 다음날
                  처리되어요. (평일 09:00 ~ 22:00) / 주말 및 공휴일 10:00 ~
                  19:00)
                </p>
              </div>
            </div>
          </div>

          <div className="items-center gap-6 self-stretch w-full flex-[0_0_auto] z-[1] flex relative flex-col">
            <div className="flex min-h-[54px] items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-xl shadow-[0px_-20px_20px_#ffffff]">
              <div className="flex min-h-[54px] items-start relative flex-1 grow">
                <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
                  <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    확인
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative self-stretch w-full h-4 z-0" />

          <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] z-[-1] bg-white">
            <div className="w-[134px] items-center gap-2.5 flex-[0_0_auto] ml-[-8.50px] mr-[-8.50px] flex relative flex-col">
              <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
