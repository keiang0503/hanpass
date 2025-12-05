import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const OverseasremitWrapper = (): JSX.Element => {
  const statusBarIcons = [
    {
      type: "signal",
      src: "https://c.animaapp.com/vuYaFJZH/img/icon---mobile-signal-9.svg",
      alt: "Icon mobile signal",
      className: "w-[18px] h-3",
    },
    {
      type: "wifi",
      src: "https://c.animaapp.com/vuYaFJZH/img/wifi-9.svg",
      alt: "Wifi",
      className: "w-[17px] h-[11.83px]",
    },
    {
      type: "battery",
      src: "https://c.animaapp.com/vuYaFJZH/img/battery-9.svg",
      alt: "Battery",
      className: "w-[27.4px] h-[13px]",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:66167"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-[360px] flex flex-col items-start gap-2.5 bg-white">
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
                  className="h-[40.00%] top-[-310.00%] left-[-32233.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-4.png"
                />
                <img
                  className="h-[60.00%] top-[-330.00%] left-[-32205.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-5.png"
                />
                <img
                  className="h-[80.00%] top-[-350.00%] left-[-32177.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-5.png"
                />
                <img
                  className="h-full top-[-370.00%] left-[-32150.00%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-3.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-241.64%] left-[-36378.18%]"
                  alt="Bar"
                  src="/img/bar-1-5.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-277.74%] left-[-36393.75%]"
                  alt="Bar"
                  src="/img/bar-2-6.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-311.47%] left-[-36412.52%]"
                  alt="Bar"
                  src="/img/bar-3-6.png"
                />
              </div>

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-300%] left-[-24541.67%]"
                  alt="Border"
                  src="/img/border-3.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-24450.00%]"
                  alt="Cap"
                  src="/img/cap-3.png"
                />
              </div>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            9:41
          </div>
          {statusBarIcons.map((icon, index) => (
            <img
              key={`status-icon-${index}`}
              className={icon.className}
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </nav>
      </header>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white relative">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link to="/overseasremitu95013-u4366u4460u4352u4467u4523-u4361u4457u4540u4352u4467u4535u4354u4450u4363u4455u45202">
                <ChevronLeftIcon className="h-6 w-6" />
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVerticalIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <CircleIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

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
            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] px-0 flex-1 w-full">
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
            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] px-0 flex-1 w-full">
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

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
        <div className="flex-col w-[134px] items-center gap-2.5 flex">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
