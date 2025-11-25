import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

const transferHistoryData = [
  {
    id: 1,
    countryFlag: "https://c.animaapp.com/ppTMEOHB/img/country.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
  },
  {
    id: 2,
    countryFlag: "https://c.animaapp.com/ppTMEOHB/img/country-1.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
  },
  {
    id: 3,
    countryFlag: "https://c.animaapp.com/ppTMEOHB/img/country-2.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
  },
];

export const Favorite = (): JSX.Element => {
  return (
    <div
      className="min-h-[773px] w-full flex items-start gap-2.5 relative min-w-[375px]"
      data-model-id="3:29689"
    >
      <div className="flex-col items-center justify-center flex-1 grow bg-variable-collection-basic-white flex relative">
          {/* Status Bar */}
          <header className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[47px]">
              <div className="absolute top-[calc(50.00%_-_10px)] left-[26px] w-[333px] h-5">
                <div className="absolute top-[calc(50.00%_-_10px)] left-0 w-[54px] font-body-bold font-[number:var(--body-bold-font-weight)] text-variable-collection-basic-black text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                  9:41
                </div>

                <img
                  className="absolute top-[calc(50.00%_-_6px)] right-0.5 w-[27px] h-[13px]"
                  alt="Battery"
                  src="https://c.animaapp.com/ppTMEOHB/img/battery-2.svg"
                />

                <img
                  className="absolute top-[calc(50.00%_-_5px)] right-9 w-[17px] h-3"
                  alt="Wifi"
                  src="https://c.animaapp.com/ppTMEOHB/img/wifi.svg"
                />
              </div>

              <img
                className="absolute top-[19px] right-[77px] w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/ppTMEOHB/img/icon---mobile-signal-2.svg"
              />
            </div>
          </header>

          {/* Navigation Header */}
          <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="h-[54px] relative self-stretch w-full flex items-center justify-between px-1.5">
                <Link
                  to="/transformu95750"
                  className="flex items-center justify-center w-8 h-8"
                >
                  <ChevronLeftIcon className="w-8 h-8 text-variable-collection-grayscale-01-0b0c0e" />
                </Link>

                <img
                  className="h-8"
                  alt="Mini"
                  src="https://c.animaapp.com/ppTMEOHB/img/mini-2@2x.png"
                />

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <MoreVerticalIcon className="w-6 h-6 text-variable-collection-grayscale-01-0b0c0e" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <CircleIcon className="w-8 h-8 text-variable-collection-grayscale-01-0b0c0e" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-col items-start gap-[22px] self-stretch w-full flex-[0_0_auto] flex relative">
            {/* Title Section */}
            <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="pt-[22px] pb-0 px-6 flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start flex-[0_0_auto] relative self-stretch w-full">
                  <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-variable-collection-grayscale-01-0b0c0e text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                    즐겨찾는 내역을
                    <br />
                    관리해보세요
                  </h1>
                </div>
              </div>
            </section>

            {/* Tabs Navigation */}
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="flex items-center relative self-stretch w-full flex-[0_0_auto] h-auto bg-transparent p-0 rounded-none">
                <TabsTrigger
                  value="favorites"
                  className="flex items-start justify-center px-3 py-[9px] relative flex-1 grow border-b-2 border-variable-collection-BG-09-dfe3ec data-[state=active]:border-variable-collection-sub-title01-003fbb rounded-none bg-transparent"
                >
                  <span className="relative w-[136px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-variable-collection-grayscale-07-a3a8bf text-[length:var(--body-16-r-font-size)] text-center tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-variable-collection-sub-title01-003fbb data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]">
                    즐겨찾기
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="recent"
                  className="flex items-start justify-center px-3 py-[9px] relative flex-1 grow border-b-2 border-variable-collection-BG-09-dfe3ec data-[state=active]:border-variable-collection-sub-title01-003fbb rounded-none bg-transparent"
                >
                  <span className="relative w-[136px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-variable-collection-grayscale-07-a3a8bf text-[length:var(--body-16-r-font-size)] text-center tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-variable-collection-sub-title01-003fbb data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]">
                    최근 송금내역
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </main>

          {/* Transfer History Cards */}
          <section className="flex-col items-end gap-2.5 pt-[22px] pb-4 px-6 self-stretch w-full flex-[0_0_auto] flex relative">
            {transferHistoryData.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-variable-collection-basic-white rounded-xl border border-solid border-variable-collection-BG-09-dfe3ec"
              >
                <CardContent className="p-0 w-full">
                  <div className="flex-col items-start gap-1.5 p-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="items-center gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                      <div
                        className="relative w-[30px] h-[30px] bg-[100%_100%]"
                        style={{ backgroundImage: `url(${item.countryFlag})` }}
                      />

                      <div className="flex items-center gap-2.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                            <div className="items-center gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
                              <div className="relative w-fit mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-variable-collection-grayscale-01-0b0c0e text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] whitespace-nowrap [font-style:var(--body-14-SB-font-style)]">
                                {item.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col items-start gap-0.5 self-stretch w-full flex-[0_0_auto] flex relative">
                      <div className="relative self-stretch mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-variable-collection-grayscale-01-0b0c0e text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        {item.phone}
                      </div>

                      <div className="relative self-stretch font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-variable-collection-grayscale-05-717682 text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        {item.bankInfo}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col h-10 items-center justify-center relative self-stretch w-full overflow-hidden border-t [border-top-style:solid] border-variable-collection-BG-09-dfe3ec">
                    <div className="flex h-[29.69px] self-stretch w-full items-center relative">
                      <Button
                        variant="ghost"
                        className="h-auto items-center justify-center gap-2.5 px-1.5 py-0 flex-1 self-stretch grow flex relative rounded-none hover:bg-transparent"
                      >
                        <span className="[display:-webkit-box] justify-center flex-1 font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-variable-collection-grayscale-03-5e616b text-[length:var(--navigation-12-r-font-size)] text-center tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] items-center relative [font-style:var(--navigation-12-r-font-style)]">
                          즐겨찾기 등록하기
                        </span>
                      </Button>

                      <img
                        className="relative w-px h-[19.8px]"
                        alt="Vector"
                        src="https://c.animaapp.com/ppTMEOHB/img/vector-1134-2.svg"
                      />

                      <img
                        className="relative w-px h-[19.8px]"
                        alt="Vector"
                        src="https://c.animaapp.com/ppTMEOHB/img/vector-1134-2.svg"
                      />

                      <Button
                        variant="ghost"
                        className="h-auto items-center justify-center gap-2.5 px-1.5 py-0 flex-1 self-stretch grow flex relative rounded-none hover:bg-transparent"
                      >
                        <span className="relative [display:-webkit-box] items-center justify-center flex-1 font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-variable-collection-primary-primary-0d56e4 text-[length:var(--navigation-12-SB-font-size)] text-center tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--navigation-12-SB-font-style)]">
                          송금하기
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Bottom Navigation Bar */}
          <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

            <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-variable-collection-basic-white">
              <div className="flex-col w-[134px] items-center gap-2.5 flex-[0_0_auto] ml-[-8.50px] mr-[-8.50px] flex relative">
                <div className="relative w-[134px] h-[5px] bg-variable-collection-basic-black rounded-[100px]" />
              </div>
            </div>
          </footer>
        </div>
    </div>
  );
};
