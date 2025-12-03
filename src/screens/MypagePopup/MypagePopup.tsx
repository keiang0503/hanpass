import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MypagePopup = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="36848:90439"
    >
      <div className="flex w-[375px] h-[800px] relative items-center justify-center gap-2.5 px-6 py-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <div className="relative self-stretch mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              유효한 쿠폰번호가 아닙니다.
              <br />
              확인 후 다시 등록해주세요.
            </div>

            <div className="relative self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#acb2c1] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              Error : A80009
            </div>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button className="flex min-h-12 h-auto items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-[14px] hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <header className="flex flex-col w-full items-start absolute top-0 left-0">
          <Link
            className="w-full flex flex-col items-start gap-2.5"
            to="/mypageu95018u95u4354u4450-u4367u4462u4369u4457u4523u95u4364u4457u4370u4460u4361u4453u4527u4364u4453u4540"
          >
            <div className="w-[360px] bg-white flex flex-col items-start gap-2.5">
              <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
                <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center">
                      <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        9
                      </div>

                      <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        :
                      </div>

                      <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        41
                      </div>
                    </div>
                  </div>

                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    Sat Jun 11
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 mt-[-0.50px] mb-[-0.50px]">
                  <div className="relative w-[18px] h-2.5">
                    <img
                      className="h-[40.00%] top-[170.00%] left-[-19161.11%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-1-4.png"
                    />

                    <img
                      className="h-[60.00%] top-[150.00%] left-[-19133.33%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-2-5.png"
                    />

                    <img
                      className="h-[80.00%] top-[130.00%] left-[-19105.56%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-3-5.png"
                    />

                    <img
                      className="h-full top-[110.00%] left-[-19077.78%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-4-3.png"
                    />
                  </div>

                  <div className="relative w-4 h-[11.62px] overflow-hidden">
                    <img
                      className="absolute w-[31.30%] h-[30.17%] top-[171.48%] left-[-21671.93%]"
                      alt="Bar"
                      src="/img/bar-1-5.png"
                    />

                    <img
                      className="absolute w-[62.57%] h-[34.44%] top-[135.37%] left-[-21687.50%]"
                      alt="Bar"
                      src="/img/bar-2-6.png"
                    />

                    <img
                      className="absolute w-[100.01%] h-[43.03%] top-[101.65%] left-[-21706.27%]"
                      alt="Bar"
                      src="/img/bar-3-6.png"
                    />
                  </div>

                  <div className="w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    100%
                  </div>

                  <div className="relative w-6 h-3 overflow-hidden">
                    <img
                      className="absolute w-[87.51%] h-full top-full left-[-14737.50%]"
                      alt="Border"
                      src="/img/border-3.png"
                    />

                    <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                    <img
                      className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-14645.83%]"
                      alt="Cap"
                      src="/img/cap-3.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
              <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                9:41
              </div>

              <img
                className="w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/emBHvnWi/img/icon---mobile-signal-2.svg"
              />

              <img
                className="w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/emBHvnWi/img/wifi-1.svg"
              />

              <img
                className="w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/emBHvnWi/img/battery-1.svg"
              />
            </div>
          </Link>

          <nav className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/emBHvnWi/img/mini-7@2x.png"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
