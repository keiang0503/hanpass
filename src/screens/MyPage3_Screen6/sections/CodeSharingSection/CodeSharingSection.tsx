import { CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const tabItems = [
  { value: "invite-link", label: "초대링크" },
  { value: "my-code", label: "나의 초대 코드" },
  { value: "qr-invite", label: "QR 초대" },
];

export const CodeSharingSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("my-code");

  return (
    <section className="flex flex-col items-start gap-[42px] w-full">
      <div className="flex flex-col items-start gap-3.5 w-full">
        <header className="flex flex-col items-start pt-[22px] pb-0 px-6 bg-white w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h2 className="mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                원하시는 방법을
                <br />
                선택해주세요.
              </h2>
            </div>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center w-full border-b border-[#dfe3ec]">
            <TabsList className="inline-flex items-center gap-4 px-6 py-0 bg-transparent h-auto">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`inline-flex min-h-11 items-center justify-center pt-2 pb-2.5 px-2.5 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                    activeTab === tab.value
                      ? "border-b-2 border-[#003fbb] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#003fbb] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]"
                      : "font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]"
                  }`}
                >
                  <span
                    className={activeTab === tab.value ? "" : "mt-[-1.50px]"}
                  >
                    {tab.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="invite-link" className="mt-0">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
                <Card className="w-full bg-[#f7f7f8] rounded-xl border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center gap-2.5 p-5">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <h3 className="flex items-center justify-center font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] mt-[-1.00px] [font-style:var(--title-15-b-font-style)] w-full">
                        초대링크 공유하기
                      </h3>
                      <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        초대링크 내용
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="my-code" className="mt-0">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
                <Card className="w-full bg-[#f7f7f8] rounded-xl border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center gap-2.5 p-5">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <h3 className="flex items-center justify-center font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] mt-[-1.00px] [font-style:var(--title-15-b-font-style)] w-full">
                        나의 초대코드 공유하기
                      </h3>
                      <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        아래 초대코드를 친구에게 보여주세요.
                      </p>
                    </div>

                    <div className="flex flex-col w-[287px] items-center justify-center gap-1 px-4 py-3.5 bg-white rounded-xl border border-solid border-[#dfe3ec]">
                      <div className="mt-[-1.00px] font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#1c253f] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] text-center [font-style:var(--navigation-12-SB-font-style)] w-full">
                        나의 초대코드
                      </div>

                      <div className="flex flex-col items-center gap-0.5 w-full">
                        <div className="text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0d56e4] text-center [font-style:var(--title-18-b-font-style)] w-full">
                          KR1149582
                        </div>

                        <button className="inline-flex items-center gap-0.5 cursor-pointer">
                          <CopyIcon className="w-4 h-4 text-[#a2a8bf]" />
                          <span className="w-fit mt-[-1.00px] font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#a2a8bf] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap text-center [font-style:var(--navigation-12-r-font-style)]">
                            초대코드 복사하기
                          </span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qr-invite" className="mt-0">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
                <Card className="w-full bg-[#f7f7f8] rounded-xl border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center gap-2.5 p-5">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <h3 className="flex items-center justify-center font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] mt-[-1.00px] [font-style:var(--title-15-b-font-style)] w-full">
                        QR 초대
                      </h3>
                      <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        QR 코드 내용
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
