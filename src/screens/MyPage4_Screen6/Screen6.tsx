import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

const passportFields = [
  {
    label: "여권번호",
    value: "M12345678",
  },
  {
    label: "여권발급일",
    value: "2025/01/01",
  },
  {
    label: "여권만료일",
    value: "2030/01/01",
  },
];

export const Screen6 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="36848:90835"
    >
      <header className="flex flex-col items-start w-full bg-white">
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
                className="h-[40.00%] top-[-125060.00%] left-[-10944.44%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-10.png"
              />
              <img
                className="h-[60.00%] top-[-125080.00%] left-[-10916.67%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-11.png"
              />
              <img
                className="h-[80.00%] top-[-125100%] left-[-10888.89%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-11.png"
              />
              <img
                className="h-full top-[-125120.00%] left-[-10861.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-6.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-12428.18%]"
                alt="Bar"
                src="/img/bar-1-11.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-12443.75%]"
                alt="Bar"
                src="/img/bar-2-12.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-12462.52%]"
                alt="Bar"
                src="/img/bar-3-12.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-8575.00%]"
                alt="Border"
                src="/img/border-6.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-8483.33%]"
                alt="Cap"
                src="/img/cap-6.png"
              />
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-between px-5 py-4 w-full">
          <Link to="/mypageu95067-u4363u4455u4352u4463u4523u4355u4467u4540u4357u4457u4520-u4363u4458u4523u4357u4461">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <CircleIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 w-full">
        <div className="flex flex-col items-start px-6 pt-[22px] pb-0 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            여권정보를 확인해주세요.
          </h1>
        </div>

        <div className="flex flex-col items-center pt-[22px] pb-5 px-6 flex-1 w-full">
          <img
            className="flex-[0_0_auto]"
            alt="Box"
            src="https://c.animaapp.com/2nKnhQUO/img/box-1.svg"
          />

          <div className="flex flex-col items-start gap-9 pt-[42px] w-full">
            {passportFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-1.5 w-full"
              >
                <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  {field.label}
                </Label>

                <div className="flex flex-col w-full">
                  <div className="flex items-center h-[42px] w-full">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <div className="flex items-center gap-2.5 flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <div className="[display:-webkit-box] items-center justify-center flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                            {field.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center px-6 py-0 w-full">
        <Button className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            다음
          </span>
        </Button>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
