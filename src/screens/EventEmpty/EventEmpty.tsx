import { ChevronLeftIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
};

const tabsData = [
  { value: "ongoing", label: "진행 중인 이벤트" },
  { value: "past", label: "지난 이벤트" },
];

export const EventEmpty = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34877:79297"
    >
      <header className="flex flex-col w-full bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center">
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[0]}
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </span>
                <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  {statusBarData.time.split(":")[1]}
                </span>
              </div>
            </div>
            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.date}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/dhMJne4N/img/icon---mobile-signal-2.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/dhMJne4N/img/wifi-2.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/dhMJne4N/img/battery-2.svg"
            />
          </div>
        </div>
      </header>

      <nav className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <ChevronLeftIcon className="h-8 w-8" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreHorizontalIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0 rounded-full border-2 border-black"
              >
                <div className="h-4 w-4 rounded-full bg-black" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            이벤트
          </h1>
        </div>

        <Tabs defaultValue="past" className="w-full pt-[22px]">
          <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec] rounded-none">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=inactive]:border-[#dfe3ec] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#003fbb] data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value="ongoing"
            className="flex flex-col items-center gap-[42px] pt-0 pb-[50px] px-6 flex-1 w-full"
          >
            <div className="flex flex-col items-center justify-center gap-[30px] flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <img
                      className="w-12 h-12"
                      alt="Empty"
                      src="https://c.animaapp.com/dhMJne4N/img/ico48-empty.svg"
                    />
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <p className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근 종료된 이벤트가 없습니다
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="past"
            className="flex flex-col items-center gap-[42px] pt-0 pb-[50px] px-6 flex-1 w-full"
          >
            <div className="flex flex-col items-center justify-center gap-[30px] flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <img
                      className="w-12 h-12"
                      alt="Empty"
                      src="https://c.animaapp.com/dhMJne4N/img/ico48-empty.svg"
                    />
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <p className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근 종료된 이벤트가 없습니다
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

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5 ml-[-8.50px] mr-[-8.50px]">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
