import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const rewardItems = [
  {
    label: "쿠폰 금액",
    amount: "0 KRW",
    image: "https://c.animaapp.com/pWVLYNoL/img/------1@4x.png",
    imageWidth: "w-[49.01px]",
    imageHeight: "h-[12.14px]",
  },
  {
    label: "캐시백 금액",
    amount: "0 KRW",
    image: "https://c.animaapp.com/pWVLYNoL/img/-------1@4x.png",
    imageWidth: "w-[60.75px]",
    imageHeight: "h-[12.18px]",
  },
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-between relative bg-white"
      data-model-id="36848:76855"
    >
      <div className="flex-col items-start flex-1 self-stretch w-full grow flex relative">
        <BackSubHeader />

        <section className="flex-col items-start bg-white flex relative self-stretch w-full">
          <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex items-start relative">
            <div className="items-start flex flex-col relative self-stretch w-full">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                친구 초대 내역
              </h1>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start justify-end gap-[42px] pt-[35px] pb-0 px-6 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full">
            <div className="items-center flex flex-col relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex relative">
                <div className="items-center justify-center gap-2.5 px-0 py-1.5 flex-1 grow flex relative">
                  <h2 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    누적 리워드 금액
                  </h2>
                </div>
              </div>
            </div>

            <Card className="self-stretch w-full bg-[#f4f7fd] border-0 rounded-xl">
              <CardContent className="flex items-start gap-1.5 px-5 py-[22px]">
                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                    <div className="flex-col flex items-start gap-2.5 relative self-stretch w-full">
                      {rewardItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 relative self-stretch w-full"
                        >
                          <img
                            className={`relative ${item.imageWidth} ${item.imageHeight}`}
                            alt={item.label}
                            src={item.image}
                          />
                          <div className="items-center justify-end gap-0.5 flex-1 grow flex relative">
                            <div className="relative flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                              {item.amount}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] px-0 relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <div className="flex flex-col items-center justify-center relative self-stretch w-full">
              <div className="flex-col items-center justify-center gap-6 px-0 py-14 self-stretch w-full flex relative">
                <img
                  className="relative w-12 h-12"
                  alt="Empty"
                  src="https://c.animaapp.com/pWVLYNoL/img/ico48-empty.svg"
                />
                <div className="flex-col items-center gap-1 self-stretch w-full flex relative">
                  <div className="items-start gap-1 self-stretch w-full flex relative">
                    <p className="mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] relative flex-1 text-center [font-style:var(--body-15-r-font-style)]">
                      아직 초대된 친구가 없습니다.
                      <br />
                      친구를 초대해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white">
        <div className="flex-col items-center gap-6 self-stretch w-full z-0 flex relative">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full">
            <Button className="min-h-[54px] flex-1 grow h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              지금 친구초대 하기
            </Button>
          </div>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
