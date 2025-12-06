import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { PopupHeader } from "../../components/PopupHeader";

export const DivWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full h-screen items-center justify-center gap-2.5 px-6 py-12 bg-overlay-dark"
      data-model-id="40000003:466993"
    >
      <PopupHeader />
      <Card className="flex flex-col max-w-432 w-full bg-white rounded-22 shadow-card border-0">
        <CardContent className="items-center pt-8 pb-9 px-22 flex flex-col gap-2.5">
          <h1 className="self-stretch mt-neg-1 font-title-18-b text-title-18-b-style text-blue-primary">
            사진 확인
          </h1>

          <p className="self-stretch font-body-16-r text-body-16-r-style text-dark-blue">
            촬영하신 사진을 확인해주세요.
          </p>

          <div className="flex flex-col items-start gap-6 pt-18 pb-0 px-0 self-stretch w-full rounded-xl">
            <div className="items-start flex flex-col gap-2.5 self-stretch w-full">
              <div className="self-stretch w-full h-152 bg-dark-gray rounded-20" />
            </div>
          </div>
        </CardContent>

        <div className="min-h-54 items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl flex self-stretch w-full">
          <div className="flex min-h-12 max-h-12 items-start gap-7 flex-1 grow">
            <Button className="w-100 px-2 py-1 bg-btn-gray hover:bg-btn-gray-hover flex min-h-12 h-auto items-center justify-center gap-2 rounded-14">
              <span className="flex-1 font-title-15-b text-title-15-b-style text-white text-center">
                재시도
              </span>
            </Button>

            <Button className="px-26 py-1.5 flex-1 self-stretch grow bg-btn-blue hover:bg-btn-blue-hover flex min-h-12 h-auto items-center justify-center gap-2 rounded-14">
              <span className="flex-1 font-title-16-b text-title-16-b-style text-white text-center">
                확인
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
