import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const menuItems = [
  {
    icon: "https://c.animaapp.com/emBHvnWi/img/chatgpt-image-2025----9----10---------05-28-23-1-3@2x.png",
    label: "내 쿠폰",
  },
  {
    icon: "https://c.animaapp.com/emBHvnWi/img/event-3@2x.png",
    label: "친구초대",
  },
];

export const TopSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 pt-0 pb-8 px-5 w-full">
      <Card className="w-full bg-white rounded-2xl border border-solid border-card-light shadow-card-soft">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <div className="flex h-52px items-center gap-3 w-full">
            <h2 className="flex-1 text-title-18-b-style text-primary-dark overflow-hidden text-ellipsis line-clamp-2">
              로그인을 해주세요
            </h2>
          </div>

          <div className="flex items-center gap-4 px-2 py-3 w-full bg-gray-light-bg rounded-lg">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <img
                    className="self-stretch w-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/emBHvnWi/img/line-216-3.svg"
                  />
                )}
                <button className="flex flex-col items-center justify-center gap-1 flex-1">
                  <div
                    className="w-8 h-8 bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <div className="self-stretch text-body-14-SB-style text-gray-medium text-center overflow-hidden text-ellipsis line-clamp-3">
                    {item.label}
                  </div>
                </button>
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-blue-light rounded-2xl overflow-hidden border-0">
        <CardContent className="flex items-center p-0">
          <div className="flex items-center justify-center gap-2 flex-1 self-stretch">
            <div className="flex flex-col items-start justify-center gap-1 px-4 py-3 flex-1">
              <h3 className="text-title-16-SB-style text-primary-dark self-stretch">
                가입이 어렵다면?
              </h3>
              <p className="text-caption-title-13-r-style text-gray-dark self-stretch">
                간편하게 상담해 보세요
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-22">
            <div
              className="w-10 h-10 aspect-[1] bg-cover bg-[50%_50%]"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/emBHvnWi/img/free-icon-consulting-services-14274100-1-3@2x.png)",
              }}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
