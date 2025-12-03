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
