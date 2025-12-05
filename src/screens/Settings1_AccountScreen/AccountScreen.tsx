import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { PopupHeader } from "../../components/PopupHeader";

export const AccountScreen = (): JSX.Element => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-overlay-dark"
      data-model-id="36848:78592"
    >
      <PopupHeader />
      <Card className="flex flex-col max-w-[432px] w-full mx-6 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29]">
        <CardContent className="items-center pt-8 pb-9 px-[22px] flex flex-col gap-2.5">
              <h1 className="self-stretch font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                사진 확인
              </h1>

              <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                촬영하신 사진을 확인해주세요.
              </p>

              <div className="flex flex-col items-start gap-6 pt-[18px] pb-0 px-0 self-stretch w-full rounded-xl">
                <div className="items-start flex flex-col gap-2.5 self-stretch w-full">
                  <div className="self-stretch w-full h-[152px] bg-[#393939] rounded-[20px]" />
                </div>
              </div>
            </CardContent>

            <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 w-full rounded-xl">
              <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
                <Button
                  variant="secondary"
                  className="w-[100px] h-auto px-2 py-1 bg-[#afb4ca] min-h-12 rounded-[14px] hover:bg-[#9fa4ba]"
                >
                  <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                    재시도
                  </span>
                </Button>

                <Button className="h-auto px-[26px] py-1.5 flex-1 bg-[#0d56e4] min-h-12 rounded-[14px] hover:bg-[#0c4dc8]">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    확인
                  </span>
                </Button>
              </div>
            </div>
      </Card>
    </div>
  );
};
