import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const LoginScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="40000003:465827"
    >
      <header className="w-full flex flex-col items-start relative flex-[0_0_auto]">
        <div className="w-full bg-white flex flex-col items-start relative flex-[0_0_auto]">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 relative w-full bg-white">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </div>
                  <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </div>
                </div>
              </div>
              <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[-49420.00%] left-[-5988.89%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-4.png"
                />
                <img
                  className="h-[60.00%] top-[-49440.00%] left-[-5961.11%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-5.png"
                />
                <img
                  className="h-[80.00%] top-[-49460.00%] left-[-5933.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-5.png"
                />
                <img
                  className="h-full top-[-49480.00%] left-[-5905.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-3.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-42508.61%] left-[-6853.18%]"
                  alt="Bar"
                  src="/img/bar-1-5.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-42544.72%] left-[-6868.75%]"
                  alt="Bar"
                  src="/img/bar-2-6.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-42578.44%] left-[-6887.52%]"
                  alt="Bar"
                  src="/img/bar-3-6.png"
                />
              </div>

              <div className="relative w-fit [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-41225.00%] left-[-4858.34%]"
                  alt="Border"
                  src="/img/border-3.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-41191.67%] left-[-4766.67%]"
                  alt="Cap"
                  src="/img/cap-3.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-4 relative w-full flex-[0_0_auto]">
          <div className="relative flex-1 h-5 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
            9:41
          </div>

          <div className="flex items-center gap-1.5">
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/shEJQFEJ/img/icon---mobile-signal-4.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/shEJQFEJ/img/wifi-4.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/shEJQFEJ/img/battery-4.svg"
            />
          </div>
        </div>
      </header>

      <nav className="flex flex-col items-start relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative w-full flex-[0_0_auto]">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 relative w-full">
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
              className="w-[87px] h-[21px]"
              alt="Mini"
              src="https://c.animaapp.com/shEJQFEJ/img/mini-5@2x.png"
            />
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center gap-[41px] pt-3.5 pb-0 px-0 w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[7px] px-6 py-0 w-full flex-[0_0_auto]">
          <h1 className="relative w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            셀카 촬영
          </h1>
          <p className="relative w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            가이드라인에 얼굴을 맞추고 촬영버튼을 눌러 주세요.
          </p>
        </div>
      </section>

      <main className="flex items-center justify-center pt-[50px] pb-0 px-0 relative flex-1 w-full grow">
        <div className="relative w-[260px] h-[290px] bg-white rounded-[160px]" />
      </main>

      <footer className="flex flex-col items-center justify-between pt-0 pb-[30px] px-0 w-full flex-[0_0_auto] gap-6">
        <p className="relative w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
          촬영이 끝날 때까지 그대로 유지해주세요.
        </p>

        <div className="relative w-[72px] h-[70px]">
          <div className="absolute top-[calc(50.00%_-_16px)] left-[calc(50.00%_-_7px)] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap [font-style:var(--title-24-b-font-style)]">
            1
          </div>
          <img
            className="absolute top-0 left-[calc(50.00%_-_33px)] w-[67px] h-[70px]"
            alt="Ellipse"
            src="https://c.animaapp.com/shEJQFEJ/img/ellipse-4638.svg"
          />
        </div>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative w-full flex-[0_0_auto]">
          <div className="w-[134px] flex flex-col items-center gap-2.5 flex-[0_0_auto]">
            <div className="relative w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
