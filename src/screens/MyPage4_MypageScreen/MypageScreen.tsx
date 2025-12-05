import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const passportInfoRows = [
  { label: "여권번호", value: "M12345678", isHighlighted: true },
  { label: "국적", value: "CN", isHighlighted: false },
  { label: "여권만료일", value: "2025/09/09", isHighlighted: false },
];

export const MypageScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="35313:99217"
    >
      <BackSubHeader />

      <section className="flex-col items-start bg-white w-full">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 w-full flex items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              여권 정보
            </h1>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-center pt-[22px] pb-5 px-6 flex-1 w-full grow">
        <div className="flex-col items-start gap-2.5 w-full flex">
          <Card className="w-full rounded-xl border-[#dfe3ec]">
            <CardContent className="p-4">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-1 w-full">
                  <div className="flex-wrap items-center gap-[4px_4px] flex-1 flex">
                    <div className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
                      인증 상태
                    </div>
                  </div>
                  <Badge className="bg-[#f4f7fd] text-[#003fbb] hover:bg-[#f4f7fd] rounded-[50px] px-2.5 py-1 font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] [font-style:var(--navigation-12-SB-font-style)]">
                    등록완료
                  </Badge>
                </div>

                <img
                  className="w-full h-px object-cover"
                  alt="Vector"
                  src="https://c.animaapp.com/2nKnhQUO/img/vector-1236-1.svg"
                />

                <div className="flex-col items-start gap-2 w-full flex">
                  {passportInfoRows.map((row, index) => (
                    <div key={index} className="flex items-start gap-1 w-full">
                      <div className="flex-1 mt-[-1.00px] font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#5c6580] text-[length:var(--navigation-12-m-font-size)] tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                        {row.label}
                      </div>
                      <div
                        className={`flex-1 mt-[-1.00px] text-right tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] text-[length:var(--navigation-12-m-font-size)] [font-style:var(--navigation-12-m-font-style)] ${
                          row.isHighlighted
                            ? "font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[#0d56e4]"
                            : "font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#1c253f]"
                        }`}
                      >
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="flex items-center gap-0.5 w-full">
            <img
              className="w-5 h-5"
              alt="Img ars notice"
              src="https://c.animaapp.com/2nKnhQUO/img/img-ars-notice.svg"
            />
            <div className="w-fit font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="relative w-2 h-3.5">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] flex-1 [font-style:var(--caption-title-13-r-font-style)]">
                여권 만료일이 얼마 안 남았어요.
                <br />
                여권을 새로 갱신하셨다면 다시 등록해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-col items-center gap-6 w-full z-[1] flex">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
            <Button className="min-h-[54px] flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto px-[26px] py-1.5 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다시 등록하기
            </Button>
          </div>
        </div>

        <div className="w-full h-4 z-0" />

      </footer>
    </div>
  );
};
