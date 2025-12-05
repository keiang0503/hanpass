import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
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
      <BackSubHeader />

      <div className="px-6 pt-[22px] pb-0 bg-white">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          내 쿠폰
        </h1>
      </div>

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
              <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                쿠폰등록
              </p>
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
  );
};
