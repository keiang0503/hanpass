import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Screen7 = (): JSX.Element => {
  const couponRules = [
    "1회 결제 시 1개의 쿠폰만 사용 가능합니다.",
    "할인액이 결제금액보다 큰 경우 차액은 환불되지 않습니다.",
    "결제 취소 시, 적용된 쿠폰은 반환되지 않습니다.",
    "일부 쿠폰은 정해진 수량에 따라 선착순 마감될 수 있습니다.",
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:90384"
    >
      <div className="flex flex-col w-full">
        <header className="flex flex-col w-full bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <time className="inline-flex items-center">
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </span>
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </span>
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </span>
                </time>
              </div>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[170.00%] left-[-16522.22%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-2.png"
                />
                <img
                  className="h-[60.00%] top-[150.00%] left-[-16494.44%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-3.png"
                />
                <img
                  className="h-[80.00%] top-[130.00%] left-[-16466.67%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-3.png"
                />
                <img
                  className="h-full top-[110.00%] left-[-16438.89%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-2.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[171.48%] left-[-18703.18%]"
                  alt="Bar"
                  src="/img/bar-1-3.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[135.37%] left-[-18718.75%]"
                  alt="Bar"
                  src="/img/bar-2-4.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[101.65%] left-[-18737.52%]"
                  alt="Bar"
                  src="/img/bar-3-4.png"
                />
              </div>

              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </span>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-full left-[-12758.34%]"
                  alt="Border"
                  src="/img/border-2.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-12666.67%]"
                  alt="Cap"
                  src="/img/cap-2.png"
                />
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-between px-5 py-4 bg-white">
            <time className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px]">
              9:41
            </time>
            <div className="flex items-center gap-1.5">
              <img
                className="w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/emBHvnWi/img/icon---mobile-signal-7.svg"
              />
              <img
                className="w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/emBHvnWi/img/wifi-6.svg"
              />
              <img
                className="w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/emBHvnWi/img/battery-6.svg"
              />
            </div>
          </nav>

          <div className="flex items-center justify-between px-5 py-4 bg-white">
            <Link to="/mypageu95018u95u4354u4450-u4367u4462u4369u4457u4523u95popup">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVerticalIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <CircleIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex items-center px-6 pt-[22px] pb-0 bg-white">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg"
            />
            <img
              className="ml-auto w-[87px] h-[21px]"
              alt="Mini"
              src="https://c.animaapp.com/emBHvnWi/img/mini-7@2x.png"
            />
          </div>

          <div className="px-6 pt-[22px] pb-0 bg-white">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              내 쿠폰
            </h1>
          </div>
        </header>

        <main className="flex flex-col gap-[30px] px-6 py-[30px]">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                할인 받은 총 금액
              </p>
              <p className="font-pentendard-titlte-24-b font-[number:var(--pentendard-titlte-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--pentendard-titlte-24-b-font-size)] tracking-[var(--pentendard-titlte-24-b-letter-spacing)] leading-[var(--pentendard-titlte-24-b-line-height)] [font-style:var(--pentendard-titlte-24-b-font-style)]">
                100,000 KRW
              </p>
            </div>

            <Card className="bg-[#f7f7f8] border-0 rounded-[10px]">
              <CardContent className="p-4 flex flex-col gap-2">
                <img
                  className="w-full h-[10.99px]"
                  alt="Image"
                  src="https://c.animaapp.com/emBHvnWi/img/----@4x.png"
                />
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <Input
                      defaultValue="TAXI1128"
                      className="h-10 pr-10 bg-white rounded-[10px] border-[#0d56e4] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-[18px] w-[18px] p-0"
                    >
                      <img
                        className="w-[14px] h-[14px]"
                        alt="Input btn x"
                        src="https://c.animaapp.com/emBHvnWi/img/ico20-input-btn-x-2.svg"
                      />
                    </Button>
                  </div>
                  <Button className="h-10 min-w-[54px] px-2.5 bg-white text-[#0d56e4] border border-[#0d56e4] rounded-lg hover:bg-white/90 font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                    등록
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="flex flex-col gap-[22px] flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  쿠폰 수 :
                </span>
                <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#003cff] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                  0
                </span>
                <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  장
                </span>
              </div>
              <Button
                variant="ghost"
                className="h-auto p-0 gap-1.5 hover:bg-transparent"
              >
                <img
                  className="w-5 h-5"
                  alt="Icon"
                  src="https://c.animaapp.com/emBHvnWi/img/icon.svg"
                />
                <span className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  조회 설정
                </span>
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center py-14 gap-6">
              <img
                className="w-12 h-12"
                alt="Empty"
                src="https://c.animaapp.com/emBHvnWi/img/ico48-empty.svg"
              />
              <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                사용 가능한 쿠폰이 없습니다.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {couponRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-[5px]">
                  <div className="relative w-2 h-3.5 flex-shrink-0">
                    <div className="absolute top-[calc(50%-1px)] left-[calc(50%-2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                  </div>
                  <span className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <footer className="flex items-center justify-center px-[105px] py-2 bg-white">
        <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
      </footer>
    </div>
  );
};
