import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const tabItems = [
  { value: "invite-link", label: "초대 링크 보내기" },
  { value: "my-code", label: "나의 초대코드" },
  { value: "qr-invite", label: "QR 초대" },
];

export const Screen4 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="36848:76906"
    >
      <PopupHeader />

      {/* Bottom Sheet */}
      <div className="items-center gap-1.5 px-6 py-0 relative self-stretch flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
        <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[22px]" />
            <Button
              variant="ghost"
              size="icon"
              className="relative w-[18px] h-[18px] p-0 h-auto"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full max-h-3.5 h-3.5 opacity-30" />
          </div>
        </div>

        <Tabs defaultValue="invite-link" className="w-full">
          <div className="items-start gap-3.5 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
            <div className="items-start gap-2.5 flex relative self-stretch w-full flex-[0_0_auto]">
              <TabsList className="items-center gap-2.5 flex-1 grow flex relative bg-transparent h-auto p-0">
                {tabItems.map((tab, index) => (
                  <div
                    key={tab.value}
                    className={`inline-flex flex-col items-center relative flex-[0_0_auto] ${
                      index === tabItems.length - 1 ? "mr-[-5.00px]" : ""
                    }`}
                  >
                    <TabsTrigger
                      value={tab.value}
                      className="inline-flex flex-col items-center justify-center pt-[7.5px] pb-[5.5px] px-3 relative flex-[0_0_auto] rounded-[18px] data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent h-auto"
                    >
                      <div className="font-title-16-b font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#1c253f] data-[state=inactive]:text-[#a2a8bf] relative flex items-center justify-center w-fit mt-[-1.00px] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] whitespace-nowrap [font-style:var(--title-16-b-font-style)]">
                        {tab.label}
                      </div>
                    </TabsTrigger>
                    <div className="relative self-stretch w-full h-1 data-[state=active]:bg-[#acb2c1] rounded-2xl" />
                  </div>
                ))}
              </TabsList>
              <div className="absolute h-full top-0 right-0 w-6 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
            </div>

            <TabsContent value="invite-link" className="mt-0 w-full">
              <Card className="bg-[#f7f7f8] border-0 rounded-xl overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2.5 p-5">
                  <div className="items-start gap-1.5 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
                    <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                      초대 링크 보내기
                    </div>
                    <div className="relative self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      친구에게 초대링크를 보내드립니다.
                    </div>
                  </div>
                  <div className="relative self-stretch font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    링크를 통해 가입하지 않는 경우, 회원가입 시 초대한 친구의
                    초대코드를 직접 입력해 주셔야 혜택을 받을 수 있어요.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="my-code" className="mt-0 w-full">
              <Card className="bg-[#f7f7f8] border-0 rounded-xl overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2.5 p-5">
                  <div className="relative self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    나의 초대코드 내용
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="qr-invite" className="mt-0 w-full">
              <Card className="bg-[#f7f7f8] border-0 rounded-xl overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2.5 p-5">
                  <div className="relative self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    QR 초대 내용
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        <div className="items-center gap-4 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
          <div className="items-start gap-2 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="min-h-[54px] h-auto w-full rounded-xl border-[#dfe3ec] bg-white"
            >
              <span className="text-[#5e616b] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                링크 복사하기
              </span>
            </Button>

            <Button className="min-h-[54px] h-auto w-full rounded-xl bg-[#0d56e4] hover:bg-[#0d56e4]/90">
              <span className="text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                초대링크 보내기
              </span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};
