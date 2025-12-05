import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const AccountScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="2674:67678"
    >
      <header className="w-full flex flex-col items-start relative self-stretch bg-white">
        <div className="w-full flex flex-col items-start bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>

                  <div className="w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] relative mt-[-1.00px]">
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
                <img
                  className="h-[40.00%] top-[-67240.00%] left-[-20355.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-2.png"
                />

                <img
                  className="h-[60.00%] top-[-67260.00%] left-[-20327.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-3.png"
                />

                <img
                  className="h-[80.00%] top-[-67280.00%] left-[-20300%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-3.png"
                />

                <img
                  className="h-full top-[-67300%] left-[-20272.22%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-2.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-57845.56%] left-[-23015.68%]"
                  alt="Bar"
                  src="/img/bar-1-3.png"
                />

                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-57881.67%] left-[-23031.25%]"
                  alt="Bar"
                  src="/img/bar-2-4.png"
                />

                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-57915.39%] left-[-23050.02%]"
                  alt="Bar"
                  src="/img/bar-3-4.png"
                />
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-56075.00%] left-[-15633.34%]"
                  alt="Border"
                  src="/img/border-2.png"
                />

                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-56041.67%] left-[-15541.67%]"
                  alt="Cap"
                  src="/img/cap-2.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full">
          <div className="relative flex-1 h-5 mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>

          <img
            className="relative w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/X2DaSZUE/img/icon---mobile-signal-7.svg"
          />

          <img
            className="relative w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/X2DaSZUE/img/wifi-7.svg"
          />

          <img
            className="relative w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/X2DaSZUE/img/battery-7.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5" />

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/X2DaSZUE/img/mini-7@2x.png"
            />
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-start gap-2.5 pt-0 pb-3.5 px-6 relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 relative flex-1 self-stretch w-full grow">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[124px] h-20 top-[34px] left-[47px]"
              alt="Group"
              src="https://c.animaapp.com/X2DaSZUE/img/group-1261168122@2x.png"
            />

            <img
              className="absolute w-[20.83%] h-[32.47%] top-[53.25%] left-[56.67%]"
              alt="Status"
              src="https://c.animaapp.com/X2DaSZUE/img/ico50-status.svg"
            />
          </div>

          <div className="gap-[30px] self-stretch w-full flex flex-col items-center relative">
            <div className="gap-3 self-stretch w-full flex flex-col items-center relative">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                출금계좌 등록이 완료되었어요.
              </h1>

              <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                회원님의 계좌에서 바로 송금하길 원하신다면 자동출금 동의 절차를
                진행해주세요.
              </p>
            </div>
          </div>
        </div>

        <Card className="flex min-h-[72px] items-center gap-2 p-4 relative self-stretch w-full bg-[#f7faff] rounded-2xl border border-solid border-[#b7ccf7] shadow-[0px_4px_8px_#63649e14]">
          <CardContent className="flex items-center gap-2 p-0 w-full">
            <img
              className="relative w-10 h-10"
              alt="Img main banner"
              src="https://c.animaapp.com/X2DaSZUE/img/img-main-banner-passport.svg"
            />

            <div className="flex items-center gap-1 relative flex-1 grow">
              <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                <p className="self-stretch font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] relative mt-[-1.00px] [font-style:var(--title-15-SB-font-style)]">
                  해외송금 전에 여권을 등록하면 더 빠르고 안전한 서비스 경험을
                  하실 수 있어요.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white">
        <div className="gap-6 self-stretch w-full z-0 flex flex-col items-center relative">
          <div className="flex min-h-[54px] items-center justify-center gap-2 relative self-stretch w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-[54px] items-start relative flex-1 grow">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto">
                <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  자동출금 동의하기
                </span>
              </Button>
            </div>
          </div>

          <button className="inline-flex items-center gap-0.5 relative">
            <span className="w-fit font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap relative mt-[-1.00px] [font-style:var(--body-15-r-font-style)]">
              나중에 할게요
            </span>

            <img
              className="relative w-[18px] h-[18px]"
              alt="Btn arrow"
              src="https://c.animaapp.com/X2DaSZUE/img/ico20-btn-arrow-right-blue.svg"
            />
          </button>
        </div>

        <div className="relative self-stretch w-full h-4 z-[-1]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full z-[-2] bg-white">
          <div className="w-[134px] gap-2.5 ml-[-8.50px] mr-[-8.50px] flex flex-col items-center relative">
            <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
