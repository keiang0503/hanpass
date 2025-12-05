import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { PopupHeader } from "../../components/PopupHeader";

const tabItems = [
  { value: "invite-link", label: "초대 링크 보내기" },
  { value: "my-code", label: "나의 초대코드" },
  { value: "qr-invite", label: "QR 초대" },
];

export const MypageScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="36848:76927"
    >
      <PopupHeader />

      <section className="flex flex-col items-center justify-end gap-1.5 px-6 py-0 relative w-full bg-white rounded-[30px_30px_0px_0px]">
        <header className="flex-col items-start w-full flex relative">
          <div className="flex items-end w-full flex-col relative">
            <div className="relative w-full h-[22px]" />

            <Button
              variant="ghost"
              size="icon"
              className="relative w-[18px] h-[18px] p-0 hover:bg-transparent"
              aria-label="Close"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex items-center w-full flex-col relative">
            <div className="relative w-full max-h-3.5 h-3.5 opacity-30" />
          </div>
        </header>

        <Tabs defaultValue="qr-invite" className="w-full">
          <TabsList className="w-full h-auto bg-transparent gap-2.5 p-0 justify-end">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-col items-center gap-0 data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent p-0 rounded-none border-b-0 h-auto"
              >
                <div className="inline-flex flex-col items-center justify-center pt-[7.5px] pb-[5.5px] px-3 rounded-[18px]">
                  <span
                    className={`font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] whitespace-nowrap [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)] data-[state=active]:text-[#1c253f] data-[state=inactive]:text-[#a2a8bf]`}
                  >
                    {tab.label}
                  </span>
                </div>
                <div
                  className={`w-full h-1 rounded-2xl data-[state=active]:bg-[#acb2c1] data-[state=inactive]:bg-transparent`}
                />
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="invite-link" className="mt-3.5">
            <div className="flex flex-col items-center gap-2.5 p-5 w-full bg-[#f7f7f8] rounded-xl overflow-hidden">
              <p className="text-center">초대 링크 보내기 content</p>
            </div>
          </TabsContent>

          <TabsContent value="my-code" className="mt-3.5">
            <div className="flex flex-col items-center gap-2.5 p-5 w-full bg-[#f7f7f8] rounded-xl overflow-hidden">
              <p className="text-center">나의 초대코드 content</p>
            </div>
          </TabsContent>

          <TabsContent value="qr-invite" className="mt-3.5">
            <Card className="bg-[#f7f7f8] border-0 rounded-xl overflow-hidden">
              <CardContent className="flex flex-col items-center gap-2.5 p-5">
                <div className="items-start gap-1.5 w-full flex flex-col relative">
                  <h2 className="relative flex items-center justify-center w-full font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                    QR로 초대하기
                  </h2>

                  <p className="text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] relative w-full font-body-14-r font-[number:var(--body-14-r-font-weight)] [font-style:var(--body-14-r-font-style)]">
                    아래 QR코드를 친구에게 보여주세요.
                  </p>
                </div>

                <p className="text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] relative w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] [font-style:var(--caption-title-13-r-font-style)]">
                  만약 QR 연결 후 바로 회원가입을 하지 않을 경우, 회원가입 시
                  초대한 친구의 초대코드를 직접 입력해주셔야 혜택을 받을 수
                  있어요.
                </p>

                <div className="relative w-[148px] h-[148px] bg-[url(https://c.animaapp.com/pWVLYNoL/img/mask-group-1@2x.png)] bg-[100%_100%]" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="items-start gap-4 w-full flex flex-col relative">
          <Button className="h-auto min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#0d56e4] hover:bg-[#0d56e4]/90 px-[26px] py-1.5">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              QR 이미지 저장하기
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
};
