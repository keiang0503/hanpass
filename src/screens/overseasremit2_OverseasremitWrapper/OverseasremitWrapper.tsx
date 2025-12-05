import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const OverseasremitWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:66167"
    >
      <BackSubHeader />

      <main className="flex-col items-start gap-[22px] w-full flex flex-1">
        <div className="flex-col bg-white flex items-start w-full">
          <div className="flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full flex">
            <div className="flex flex-col items-start w-full">
              <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                즐겨찾는 내역을 관리해보세요
              </h1>
            </div>
          </div>
        </div>

        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec] rounded-none">
            <TabsTrigger
              value="favorites"
              className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=inactive]:border-[#dfe3ec] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#003fbb] data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]"
            >
              즐겨찾기
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=inactive]:border-[#dfe3ec] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#003fbb] data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]"
            >
              최근 송금내역
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="w-full mt-0">
            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-0 px-0 flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex-col items-center justify-center gap-6 px-0 py-14 w-full flex">
                    <img
                      className="w-12 h-12"
                      alt="Empty"
                      src="https://c.animaapp.com/vuYaFJZH/img/ico48-empty.svg"
                    />
                    <div className="flex-col items-center gap-1 w-full flex">
                      <div className="items-start gap-1 w-full flex">
                        <p className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근에 송금한 내역이 없습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="w-full mt-0">
            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-0 px-0 flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex-col items-center justify-center gap-6 px-0 py-14 w-full flex">
                    <img
                      className="w-12 h-12"
                      alt="Empty"
                      src="https://c.animaapp.com/vuYaFJZH/img/ico48-empty.svg"
                    />
                    <div className="flex-col items-center gap-1 w-full flex">
                      <div className="items-start gap-1 w-full flex">
                        <p className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근에 송금한 내역이 없습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

    </div>
  );
};
