import {
  ChevronLeftIcon,
  InfoIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TargetIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const OverseasremitScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="2674:65882"
    >
      <header className="flex flex-col items-start w-full">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="w-full max-w-[360px] flex flex-col items-start gap-2.5 bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </div>
                  </div>
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  Sat Jun 11
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] top-[-310.00%] left-[-15077.78%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-2.png"
                  />
                  <img
                    className="h-[60.00%] top-[-330.00%] left-[-15050.00%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-3.png"
                  />
                  <img
                    className="h-[80.00%] top-[-350.00%] left-[-15022.22%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-3.png"
                  />
                  <img
                    className="h-full top-[-370.00%] left-[-14994.44%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-2.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-241.64%] left-[-17078.18%]"
                    alt="Bar"
                    src="/img/bar-1-3.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-277.74%] left-[-17093.75%]"
                    alt="Bar"
                    src="/img/bar-2-4.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-311.47%] left-[-17112.52%]"
                    alt="Bar"
                    src="/img/bar-3-4.png"
                  />
                </div>

                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-300%] left-[-11675.00%]"
                    alt="Border"
                    src="/img/border-2.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-11583.33%]"
                    alt="Cap"
                    src="/img/cap-2.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </div>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/Fk3yL3l2/img/icon---mobile-signal-7.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/Fk3yL3l2/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/Fk3yL3l2/img/battery-7.svg"
            />
          </div>
        </div>

        <nav className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <MoreHorizontalIcon className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <TargetIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec] rounded-none">
            <TabsTrigger
              value="favorites"
              className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=active]:shadow-none font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] data-[state=active]:text-[#003fbb] data-[state=inactive]:text-[#a2a8bf] data-[state=inactive]:font-body-16-r data-[state=inactive]:font-[number:var(--body-16-r-font-weight)]"
            >
              즐겨찾기
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=active]:shadow-none font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] data-[state=active]:text-[#003fbb] data-[state=inactive]:text-[#a2a8bf] data-[state=inactive]:font-body-16-r data-[state=inactive]:font-[number:var(--body-16-r-font-weight)]"
            >
              최근 송금내역
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="mt-0 w-full">
            <div className="flex flex-col items-end gap-2.5 pt-[22px] pb-0 px-6 w-full">
              <Link
                to="/overseasremitu95003-u4361u4457u4540u4352u4467u4535u4355u4450u4361u4449u4540u4364u4449-u4355u4467u4540u4357u4457u4520"
                className="w-full"
              >
                <Card className="h-[100px] bg-white rounded-xl border border-solid border-[#dfe3ec]">
                  <CardContent className="flex items-center gap-1.5 px-4 py-6 h-full">
                    <div className="flex flex-col items-center justify-center gap-2 flex-1">
                      <div className="w-12 h-12 rounded-full bg-[#003fbb] flex items-center justify-center">
                        <PlusIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)] text-black text-center">
                        대상자 등록
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] px-0 flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <div className="w-12 h-12 rounded-full bg-[#e8eaf0] flex items-center justify-center">
                      <InfoIcon className="w-6 h-6 text-[#a2a8bf]" />
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <div className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          아직 등록된 즐겨찾기가 없습니다
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0 w-full">
            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] px-0 flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <div className="w-12 h-12 rounded-full bg-[#e8eaf0] flex items-center justify-center">
                      <InfoIcon className="w-6 h-6 text-[#a2a8bf]" />
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <div className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근 송금내역이 없습니다
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </header>
    </div>
  );
};
