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

export const MypageWrapper = (): JSX.Element => {
  const tabItems = [
    { value: "invite-link", label: "초대 링크 보내기" },
    { value: "my-code", label: "나의 초대코드" },
    { value: "qr-invite", label: "QR 초대" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="36848:76917"
    >
      {/* Status Bar and Header */}
      <header className="absolute top-0 left-0 w-full flex flex-col items-start">
        <div className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
          <div className="w-full bg-white flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </div>
                  </div>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  Sat Jun 11
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] top-[-63850.00%] left-[-36911.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-12.png"
                  />
                  <img
                    className="h-[60.00%] top-[-63870.00%] left-[-36883.33%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-13.png"
                  />
                  <img
                    className="h-[80.00%] top-[-63890.00%] left-[-36855.56%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-13.png"
                  />
                  <img
                    className="h-full top-[-63910.00%] left-[-36827.78%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-7.png"
                  />
                </div>
                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-54927.93%] left-[-41640.68%]"
                    alt="Bar"
                    src="/img/bar-1-13.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-54964.03%] left-[-41656.25%]"
                    alt="Bar"
                    src="/img/bar-2-14.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-54997.75%] left-[-41675.02%]"
                    alt="Bar"
                    src="/img/bar-3-14.png"
                  />
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>
                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-53250.00%] left-[-28050.00%]"
                    alt="Border"
                    src="/img/border-7.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-53216.67%] left-[-27958.33%]"
                    alt="Cap"
                    src="/img/cap-7.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>
            <img
              className="relative w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/pWVLYNoL/img/icon---mobile-signal-3.svg"
            />
            <img
              className="relative w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/pWVLYNoL/img/wifi-3.svg"
            />
            <img
              className="relative w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/pWVLYNoL/img/battery-3.svg"
            />
          </div>
        </div>

        <div className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/pWVLYNoL/img/mini-6@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

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

          <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
            <div className="flex flex-col w-[134px] items-center gap-2.5 ml-[-8.50px] mr-[-8.50px] relative flex-[0_0_auto]">
              <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
