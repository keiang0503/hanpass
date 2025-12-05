import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const Login = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="40000008:1156008"
    >
      <header className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
        <div className="w-full bg-white flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
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
                <img
                  className="h-[40.00%] top-[-32540.00%] left-[-17716.67%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-10.png"
                />
                <img
                  className="h-[60.00%] top-[-32560.00%] left-[-17688.89%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-11.png"
                />
                <img
                  className="h-[80.00%] top-[-32580.00%] left-[-17661.11%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-11.png"
                />
                <img
                  className="h-full top-[-32600%] left-[-17633.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-6.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-27980.68%] left-[-20046.93%]"
                  alt="Bar"
                  src="/img/bar-1-11.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-28016.79%] left-[-20062.50%]"
                  alt="Bar"
                  src="/img/bar-2-12.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-28050.51%] left-[-20081.27%]"
                  alt="Bar"
                  src="/img/bar-3-12.png"
                />
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-27158.33%] left-[-13654.17%]"
                  alt="Border"
                  src="/img/border-6.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-27125.00%] left-[-13562.50%]"
                  alt="Cap"
                  src="/img/cap-6.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
            9:41
          </div>

          <div className="flex items-center gap-1.5">
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/ELrb3VWQ/img/icon---mobile-signal-7.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/ELrb3VWQ/img/wifi-5.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/ELrb3VWQ/img/battery-5.svg"
            />
          </div>
        </div>
      </header>

      <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 relative self-stretch w-full">
            <Button
              variant="ghost"
              size="icon"
              className="h-auto w-8 p-0"
              asChild
            >
              <Link to="/loginu95007-u4366u4458u4527u4363u4455u4540u4361u4449u4364u4469u4523u4370u4458u4520u4363u4469u4523">
                <XIcon className="w-8 h-8 text-white" />
              </Link>
            </Button>

            <img
              className="w-[87px] h-8"
              alt="Mini"
              src="https://c.animaapp.com/ELrb3VWQ/img/mini-7@2x.png"
            />
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center gap-[41px] pt-3.5 pb-0 px-0 self-stretch w-full flex-1">
        <section className="flex flex-col items-start gap-[7px] px-6 py-0 self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            셀카 촬영
          </h1>

          <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            가이드라인에 얼굴을 맞추고 촬영버튼을 눌러 주세요.
          </p>
        </section>

        <section className="flex items-center justify-center pt-[50px] pb-0 px-0 relative self-stretch w-full flex-1">
          <div className="relative w-[260px] h-[290px] bg-white rounded-[160px]" />
        </section>

        <section className="flex flex-col items-center justify-between gap-4 pt-0 pb-[30px] px-0 self-stretch w-full">
          <p className="relative self-stretch mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            촬영이 끝날 때까지 그대로 유지해주세요.
          </p>

          <div className="relative w-[72px] h-[70px]">
            <div className="absolute top-[calc(50.00%_-_16px)] left-[calc(50.00%_-_7px)] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap [font-style:var(--title-24-b-font-style)]">
              1
            </div>
            <img
              className="absolute top-0 left-[calc(50.00%_-_33px)] w-[67px] h-[70px]"
              alt="Ellipse"
              src="https://c.animaapp.com/ELrb3VWQ/img/ellipse-4638.svg"
            />
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-[134px] items-center gap-2.5 flex-[0_0_auto] flex flex-col relative">
          <div className="relative w-[134px] h-[5px] bg-white rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
