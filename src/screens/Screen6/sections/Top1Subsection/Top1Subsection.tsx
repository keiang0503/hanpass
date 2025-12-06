import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const actionItems = [
  {
    icon: "https://c.animaapp.com/emBHvnWi/img/chatgpt-image-2025----9----10---------05-28-23-1-3@2x.png",
    label: "내 쿠폰",
  },
  {
    icon: "https://c.animaapp.com/emBHvnWi/img/event-3@2x.png",
    label: "친구초대",
  },
];

export const Top1Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2 px-5 py-0 w-full">
      <Card className="w-full border-card-light shadow-card-soft">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <div className="flex h-52px items-center gap-3 w-full">
            <div className="relative country-flag bg-[url(https://c.animaapp.com/emBHvnWi/img/country-2.svg)] bg-[100%_100%] flex-shrink-0" />

            <h2 className="flex-1 text-title-18-b-style text-primary-dark overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              HanpassName 이름이 길어질 경우 2줄 까지 노출HanpassName 이름이
              길어질 경우 2줄 까지 노출HanpassName 이름이 길어질 경우 2줄 까지
              노출
            </h2>

            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 p-0 flex-shrink-0 h-auto"
            >
              <img
                className="w-6 h-6"
                alt="Mypage edit"
                src="https://c.animaapp.com/emBHvnWi/img/ico24-mypage-edit-2.svg"
              />
            </Button>
          </div>

          <div className="flex items-center gap-4 px-2 py-3 w-full bg-gray-light-bg rounded-lg">
            {actionItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-auto bg-separator-alt"
                  />
                )}
                <Button
                  variant="ghost"
                  className="flex flex-col items-center justify-center gap-1 flex-1 h-auto p-0"
                >
                  <div
                    className="w-8 h-8 bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <span className="text-body-14-SB-style text-gray-medium overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                    {item.label}
                  </span>
                </Button>
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
