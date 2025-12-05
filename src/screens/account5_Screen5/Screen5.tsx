import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const statusBarData = {
  time: "9:41",
  date: "Sat Jun 11",
  battery: "100%",
};

const formFields = [
  {
    label: "여권번호",
    value: "M12345667",
  },
  {
    label: "여권 만료일",
    value: "1994/01/22",
  },
];

export const Screen5 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88245"
    >
      <header className="flex flex-col bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 bg-white">
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
              {statusBarData.date}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[-102560.00%] left-[-58961.11%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1-8.png"
              />
              <img
                className="h-[60.00%] top-[-102580.00%] left-[-58933.33%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2-9.png"
              />
              <img
                className="h-[80.00%] top-[-102600%] left-[-58905.56%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3-9.png"
              />
              <img
                className="h-full top-[-102620.00%] left-[-58877.78%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4-5.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-66446.93%]"
                alt="Bar"
                src="/img/bar-1-9.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-66462.50%]"
                alt="Bar"
                src="/img/bar-2-10.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-66481.27%]"
                alt="Bar"
                src="/img/bar-3-10.png"
              />
            </div>

            <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              {statusBarData.battery}
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-44587.50%]"
                alt="Border"
                src="/img/border-5.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-44495.83%]"
                alt="Cap"
                src="/img/cap-5.png"
              />
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-between px-5 py-4 bg-white">
          <Link to="/accountu95001-u4352u4456u4364u4458-u4352u4458u4523u4357u4469">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>

          <div className="flex items-center gap-4">
            <MoreHorizontalIcon className="w-6 h-6 text-black" />
            <CircleIcon className="w-6 h-6 text-black" />
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 bg-white">
        <div className="flex flex-col px-6 pt-[22px]">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            <span className="text-[#0b0c0e]">
              계좌 실명 확인에 실패했습니다.
              <br />
              계좌등록을 위해{" "}
            </span>
            <span className="text-[#0d56e4]">
              신분증 정보를 다시 입력해 주세요.
            </span>
          </h1>
        </div>

        <div className="flex flex-col flex-1 gap-9 px-6 pt-[42px] pb-5">
          {formFields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                {field.label}
              </label>

              <div className="flex flex-col">
                <div className="flex items-center h-[42px]">
                  <div className="flex-1 pl-1">
                    <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                      {field.value}
                    </div>
                  </div>
                </div>
                <div className="h-0.5">
                  <div className="h-px bg-[#dfe3ec]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex flex-col px-6 bg-white">
        <div className="flex flex-col gap-6">
          <Button className="min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] h-auto shadow-[0px_-20px_20px_#ffffff]">
            다음
          </Button>
        </div>

        <div className="h-4" />

        <div className="flex justify-center py-2">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
