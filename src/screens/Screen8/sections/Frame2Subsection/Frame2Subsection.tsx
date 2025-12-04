import { ChevronLeftIcon, MoreVerticalIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const couponData = [
  {
    id: 1,
    badge: "NEW",
    badgeVariant: "default" as const,
    icon: "https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg",
    title: "신규가입 할인쿠폰",
    amount: "5,000원 할인",
    expiry: "만료일 2024.12.12",
    actionText: "사용가능",
    actionVariant: "link" as const,
  },
  {
    id: 2,
    badge: "VIP",
    badgeVariant: "secondary" as const,
    icon: "https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg",
    title: "VIP 쿠폰 수수료 할인",
    amount: "첫 송금 무료",
    expiry: "만료일 2024.12.12",
    actionText: "사용가능",
    actionVariant: "link" as const,
  },
  {
    id: 3,
    badge: "EVENT",
    badgeVariant: "destructive" as const,
    icon: "https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg",
    title: "무료 송금 쿠폰",
    amount: "송금 수수료 무료",
    expiry: "만료일 2024.12.12",
    actionText: "사용가능",
    actionVariant: "link" as const,
  },
  {
    id: 4,
    badge: "NEW",
    badgeVariant: "default" as const,
    icon: "https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg",
    title: "신규가입 할인쿠폰",
    amount: "5,000원 할인",
    expiry: "만료일 2024.12.12",
    actionText: "사용완료",
    actionVariant: "ghost" as const,
  },
  {
    id: 5,
    badge: "",
    badgeVariant: "default" as const,
    icon: "https://c.animaapp.com/emBHvnWi/img/wechat-hd-5.svg",
    title: "생일축하 쿠폰",
    amount: "5,000원 할인",
    expiry: "만료일 2024.12.12",
    actionText: "사용기간만료",
    actionVariant: "ghost" as const,
  },
];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[30px] w-full">
      <header className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2.5 w-full bg-white">
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
                  className="h-[40.00%] top-[170.00%] left-[-13883.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-10.png"
                />
                <img
                  className="h-[60.00%] top-[150.00%] left-[-13855.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-11.png"
                />
                <img
                  className="h-[80.00%] top-[130.00%] left-[-13827.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-11.png"
                />
                <img
                  className="h-full top-[110.00%] left-[-13800%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-6.png"
                />
              </div>
              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[171.48%] left-[-15734.43%]"
                  alt="Bar"
                  src="/img/bar-1-11.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[135.37%] left-[-15750.00%]"
                  alt="Bar"
                  src="/img/bar-2-12.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[101.65%] left-[-15768.77%]"
                  alt="Bar"
                  src="/img/bar-3-12.png"
                />
              </div>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </span>
              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-full left-[-10779.17%]"
                  alt="Border"
                  src="/img/border-6.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-10687.50%]"
                  alt="Cap"
                  src="/img/cap-6.png"
                />
              </div>
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-between px-5 py-4 w-full bg-white h-[54px]">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreVerticalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <SettingsIcon className="h-6 w-6" />
            </Button>
          </div>
        </nav>

        <div className="flex flex-col items-start w-full bg-white pt-[22px] px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            내 쿠폰
          </h1>
        </div>
      </header>

      <section className="flex flex-col items-center gap-5 px-6 w-full">
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="w-full">
            <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              할인 받은 총 금액
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[11px] w-full">
            <p className="font-pentendard-titlte-24-b font-[number:var(--pentendard-titlte-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--pentendard-titlte-24-b-font-size)] tracking-[var(--pentendard-titlte-24-b-letter-spacing)] leading-[var(--pentendard-titlte-24-b-line-height)] [font-style:var(--pentendard-titlte-24-b-font-style)]">
              100,000 KRW
            </p>
          </div>
        </div>

        <Card className="w-full bg-[#f7f7f8] border-0 rounded-[10px]">
          <CardContent className="flex flex-col items-start gap-2 p-4">
            <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#84878d] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              쿠폰등록
            </p>
            <div className="flex items-start gap-2 w-full h-10">
              <div className="flex flex-col h-10 items-start justify-center flex-1">
                <Input
                  placeholder="쿠폰번호를 입력해주세요"
                  className="h-10 rounded-[10px] border-[#afb4ca] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]"
                />
              </div>
              <Button
                variant="outline"
                className="h-10 min-w-[54px] rounded-lg border-[#afb4ca] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#acb2c1] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
              >
                등록
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col items-start gap-4 px-6 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
            쿠폰 수 : 3장
          </p>
          <Button variant="ghost" size="sm" className="h-auto p-0">
            <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
              조회 설정
            </span>
          </Button>
        </div>

        <div className="flex flex-col items-start gap-3 w-full">
          {couponData.map((coupon) => (
            <Card
              key={coupon.id}
              className="w-full bg-white border border-[#e5e7eb] rounded-[12px] cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex items-center justify-center w-10 h-10 bg-[#f0f4ff] rounded-full flex-shrink-0">
                  <img
                    src={coupon.icon}
                    alt="Coupon icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {coupon.badge && (
                      <Badge
                        variant={coupon.badgeVariant}
                        className="h-5 px-2 text-xs font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]"
                      >
                        {coupon.badge}
                      </Badge>
                    )}
                    <h3 className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)] truncate">
                      {coupon.title}
                    </h3>
                  </div>
                  <p className="font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
                    {coupon.amount}
                  </p>
                  <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    {coupon.expiry}
                  </p>
                </div>
                <Button
                  variant={coupon.actionVariant}
                  size="sm"
                  className="h-auto p-0 flex-shrink-0 font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
                >
                  {coupon.actionText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center gap-2 px-6 pb-6 w-full">
        <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] text-center [font-style:var(--caption-title-13-r-font-style)]">
          1회 결제 시 1개의 쿠폰만 사용가능합니다.
        </p>
        <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] text-center [font-style:var(--caption-title-13-r-font-style)]">
          일부상품 쿠폰사용이 불가할 수 있으며 상품상세에서 확인하실 수
          있습니다.
        </p>
        <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] text-center [font-style:var(--caption-title-13-r-font-style)]">
          결제 취소 시, 적용된 쿠폰은 반환되지 않습니다.
        </p>
        <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] text-center [font-style:var(--caption-title-13-r-font-style)]">
          일부 쿠폰은 전화번 수정없이 바로 사용이 가능합니다.
        </p>
        <div className="w-[134px] h-[5px] bg-black rounded-full mt-4" />
      </footer>
    </div>
  );
};
