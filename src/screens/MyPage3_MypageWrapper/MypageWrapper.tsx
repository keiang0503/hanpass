import { CopyIcon, XIcon } from "lucide-react";
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

export const MypageWrapper = (): JSX.Element => {
  const tabItems = [
    { value: "invite-link", label: "초대 링크 보내기" },
    { value: "my-code", label: "나의 초대코드" },
    { value: "qr-invite", label: "QR 초대" },
  ];

  return (
    <div
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="36848:76917"
    >
      <PopupHeader />

      {/* Bottom Sheet */}
      <div className="items-center gap-1.5 px-6 py-0 relative self-stretch flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
        <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[22px]" />
            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <XIcon className="w-[18px] h-[18px] text-[#a2a8bf]" />
            </Button>
          </div>

          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full max-h-3.5 h-3.5 opacity-30" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3.5 self-stretch w-full relative flex-[0_0_auto]">
          <Tabs defaultValue="my-code" className="w-full">
            <div className="items-start gap-2.5 flex relative self-stretch w-full flex-[0_0_auto]">
              <TabsList className="items-center gap-2.5 flex-1 grow flex relative bg-transparent h-auto p-0">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="inline-flex flex-col items-center relative flex-[0_0_auto] data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent p-0 h-auto"
                  >
                    <div className="inline-flex flex-col items-center justify-center pt-[7.5px] pb-[5.5px] px-3 relative flex-[0_0_auto] rounded-[18px]">
                      <div className="font-body-16-r data-[state=active]:font-title-16-b font-[number:var(--body-16-r-font-weight)] data-[state=active]:font-[number:var(--title-16-b-font-weight)] text-[#a2a8bf] data-[state=active]:text-[#1c253f] relative flex items-center justify-center w-fit mt-[-1.00px] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] whitespace-nowrap [font-style:var(--body-16-r-font-style)]">
                        {tab.label}
                      </div>
                    </div>
                    <div className="relative self-stretch w-full h-1 data-[state=active]:bg-[#acb2c1] rounded-2xl" />
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="absolute h-full top-0 right-0 w-6 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
            </div>

            <TabsContent value="my-code" className="mt-0">
              <div className="flex flex-col items-center gap-2.5 p-5 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f8] rounded-xl overflow-hidden">
                <div className="flex flex-col items-start gap-1.5 self-stretch w-full relative flex-[0_0_auto]">
                  <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                    나의 초대코드 입력
                  </h2>
                  <p className="relative self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    아래 초대코드를 친구에게 보여주세요.
                  </p>
                </div>

                <Card className="flex flex-col items-center justify-center gap-1 px-4 py-3.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#dfe3ec]">
                  <CardContent className="p-0 w-full">
                    <div className="font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#1c253f] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] relative self-stretch mt-[-1.00px] text-center [font-style:var(--navigation-12-SB-font-style)]">
                      나의 초대코드
                    </div>
                    <div className="flex flex-col items-center gap-0.5 self-stretch w-full relative flex-[0_0_auto]">
                      <div className="font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0d56e4] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] relative self-stretch mt-[-1.00px] text-center [font-style:var(--title-18-b-font-style)]">
                        KR1149582
                      </div>
                      <button className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                        <CopyIcon className="w-4 h-4 text-[#a2a8bf]" />
                        <div className="relative w-fit mt-[-1.00px] font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#a2a8bf] text-[length:var(--navigation-12-r-font-size)] text-center tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap [font-style:var(--navigation-12-r-font-style)]">
                          초대코드 복사하기
                        </div>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="invite-link" className="mt-0">
              <div className="flex flex-col items-center gap-2.5 p-5 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f8] rounded-xl">
                <p className="text-center text-[#5e616b]">
                  초대 링크 보내기 content
                </p>
              </div>
            </TabsContent>

            <TabsContent value="qr-invite" className="mt-0">
              <div className="flex flex-col items-center gap-2.5 p-5 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f8] rounded-xl">
                <p className="text-center text-[#5e616b]">QR 초대 content</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex flex-col items-center gap-4 self-stretch w-full relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 self-stretch w-full relative flex-[0_0_auto]">
            <Button className="min-h-[54px] h-auto w-full items-center justify-center gap-2 rounded-xl bg-[#0d56e4] hover:bg-[#0d56e4]/90">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                초대코드 공유하기
              </span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};
