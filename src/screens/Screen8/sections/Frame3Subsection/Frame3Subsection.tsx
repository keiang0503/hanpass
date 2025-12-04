import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const coupons = [
  {
    id: 1,
    icon: "https://c.animaapp.com/emBHvnWi/img/ico-coupon.svg",
    badge: { text: "NEW", color: "border-[#0d56e4] text-[#0d56e4]" },
    title: "신규가입 웰컴쿠폰",
    discount: "5,000원 할인",
    expiryDate: "2024.12.12",
    status: "사용가능",
    statusColor: "text-[#0d56e4]",
    opacity: "opacity-100",
  },
  {
    id: 2,
    icon: "https://c.animaapp.com/emBHvnWi/img/ico-coupon-1.svg",
    badge: { text: "VIP", color: "border-[#ffbe00] text-[#ffbe00]" },
    title: "VIP 쿠폰 수수료 할인",
    discount: "첫 송금 무료",
    expiryDate: "2024.12.12",
    status: "사용가능",
    statusColor: "text-[#0d56e4]",
    opacity: "opacity-100",
  },
  {
    id: 3,
    icon: "https://c.animaapp.com/emBHvnWi/img/ico-coupon-2.svg",
    badge: { text: "EVENT", color: "border-[#ff7089] text-[#ff7089]" },
    title: "무료 송금 쿠폰",
    discount: "송금 수수료 무료",
    expiryDate: "2024.12.12",
    status: "사용가능",
    statusColor: "text-[#0d56e4]",
    opacity: "opacity-100",
  },
  {
    id: 4,
    icon: "https://c.animaapp.com/emBHvnWi/img/ico-coupon-3.svg",
    badge: { text: "NEW", color: "border-[#0d56e4] text-[#0d56e4]" },
    title: "신규가입 웰컴쿠폰",
    discount: "5,000원 할인",
    expiryDate: "2024.12.12",
    status: "사용완료",
    statusColor: "text-[#0d56e4]",
    opacity: "opacity-30",
  },
  {
    id: 5,
    icon: "https://c.animaapp.com/emBHvnWi/img/ico-coupon-4.svg",
    badge: { text: "EVENT", color: "border-[#ff7089] text-[#ff7089]" },
    title: "생일축하 쿠폰",
    discount: "5,000원 할인",
    expiryDate: "2024.12.12",
    status: "사용기간 만료",
    statusColor: "text-[#0d56e4]",
    opacity: "opacity-30",
  },
];

const notices = [
  "1회 결제 시 1개의 쿠폰만 사용 가능합니다.",
  "할인액이 결제금액보다 큰 경우 차액은 환불되지 않습니다.",
  "결제 취소 시, 적용된 쿠폰은 반환되지 않습니다.",
  "일부 쿠폰은 정해진 수량에 따라 선착순 마감될 수 있습니다.",
];

export const Frame3Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-end gap-[22px] pt-[22px] pb-[30px] px-6 w-full">
      <header className="flex items-center justify-center w-full">
        <div className="inline-flex items-center gap-2.5">
          <div className="w-[46px] mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            쿠폰 수 :
          </div>
        </div>

        <div className="inline-flex flex-col items-start justify-center gap-2.5 pl-1 pr-0 py-0">
          <div className="self-stretch mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#003cff] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
            3
          </div>
        </div>

        <div className="inline-flex flex-col items-center justify-center gap-2.5">
          <div className="self-stretch mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            장
          </div>
        </div>

        <div className="flex items-start justify-end gap-1.5 flex-1">
          <img
            className="w-5 h-5"
            alt="Icon"
            src="https://c.animaapp.com/emBHvnWi/img/icon-1.svg"
          />

          <button className="w-fit mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
            조회 설정
          </button>
        </div>
      </header>

      <div className="flex flex-col items-start gap-4 w-full">
        {coupons.map((coupon) => (
          <Card
            key={coupon.id}
            className="w-full bg-white rounded-2xl shadow-[0px_6px_20px_4px_#b4bfe745] border-0"
          >
            <CardContent className="p-5">
              <div
                className={`flex flex-col items-start gap-4 w-full ${coupon.opacity}`}
              >
                <div className="flex items-center gap-2 w-full">
                  <img
                    className="w-11 h-11"
                    alt="Ico coupon"
                    src={coupon.icon}
                  />

                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Badge
                      variant="outline"
                      className={`${coupon.badge.color} bg-white rounded-[50px] px-2.5 py-1 h-auto font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]`}
                    >
                      {coupon.badge.text}
                    </Badge>

                    <h3 className="self-stretch font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                      {coupon.title}
                    </h3>

                    <p className="flex items-center justify-center self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {coupon.discount}
                    </p>
                  </div>
                </div>

                <Separator className="w-full" />

                <div className="flex items-end gap-1 w-full">
                  <div className="flex flex-wrap items-center gap-[4px_4px] flex-1">
                    <span className="w-fit mt-[-1.00px] font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#85888e] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap [font-style:var(--navigation-12-r-font-style)]">
                      만료일
                    </span>

                    <span className="w-fit mt-[-1.00px] font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#5e616b] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--navigation-12-r-font-style)]">
                      {coupon.expiryDate}
                    </span>
                  </div>

                  <div className="flex items-center justify-end flex-1">
                    <span
                      className={`w-fit mt-[-1.00px] font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] ${coupon.statusColor} text-[length:var(--navigation-12-r-font-size)] text-right tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--navigation-12-r-font-style)]`}
                    >
                      {coupon.status}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ul className="flex flex-col items-start gap-2 w-full">
        {notices.map((notice, index) => (
          <li key={index} className="flex items-start w-full">
            <div className="flex items-start gap-[5px] flex-1">
              <div className="w-2 h-3.5 relative">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>

              <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] mt-[-1.00px] [font-style:var(--caption-title-13-r-font-style)]">
                {notice}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
