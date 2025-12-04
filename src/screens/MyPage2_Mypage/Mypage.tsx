import { ChevronLeftIcon, CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const basicInfoData = [
  { label: "ID", value: "01028532326" },
  { label: "이름", value: "-" },
  { label: "영문 이름", value: "HAEJIN YI" },
  { label: "직업", value: "무직" },
  { label: "휴대전화번호", value: "+82 01028532326" },
  { label: "이메일", value: "-" },
];

const addressInfoData = [
  { label: "주소", value: "92, Achasan-ro, Seongdong-gu, Seoul, Korea" },
];

export const Mypage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="36848:88137"
    >
      <header className="w-full flex flex-col items-start relative self-stretch flex-[0_0_auto] bg-white">
        <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  9
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  :
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              Sat Jun 11
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
            <div className="relative w-[18px] h-2.5">
              <img
                className="h-[40.00%] top-[170.00%] left-[-33272.22%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-1.png"
              />
              <img
                className="h-[60.00%] top-[150.00%] left-[-33244.44%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-2.png"
              />
              <img
                className="h-[80.00%] top-[130.00%] left-[-33216.67%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-3.png"
              />
              <img
                className="h-full top-[110.00%] left-[-33188.89%] absolute w-[16.67%]"
                alt="Bar"
                src="/img/bar-4.png"
              />
            </div>

            <div className="relative w-4 h-[11.62px] overflow-hidden">
              <img
                className="absolute w-[31.30%] h-[30.17%] top-[171.48%] left-[-37546.93%]"
                alt="Bar"
                src="/img/image.png"
              />
              <img
                className="absolute w-[62.57%] h-[34.44%] top-[135.37%] left-[-37562.50%]"
                alt="Bar"
                src="/img/bar-2-2.png"
              />
              <img
                className="absolute w-[100.01%] h-[43.03%] top-[101.65%] left-[-37581.27%]"
                alt="Bar"
                src="/img/bar-3-2.png"
              />
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              100%
            </div>

            <div className="relative w-6 h-3 overflow-hidden">
              <img
                className="absolute w-[87.51%] h-full top-full left-[-25320.84%]"
                alt="Border"
                src="/img/border.png"
              />
              <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
              <img
                className="absolute w-[8.33%] h-[33.33%] top-[133.33%] left-[-25229.17%]"
                alt="Cap"
                src="/img/cap.png"
              />
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-between px-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
          <Link to="/" className="flex items-center">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
          <div className="flex items-center gap-4">
            <button className="flex items-center">
              <MoreVerticalIcon className="w-6 h-6 text-black" />
            </button>
            <button className="flex items-center">
              <CircleIcon className="w-6 h-6 text-black" />
            </button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-start px-6 py-0 relative flex-1 self-stretch w-full grow">
        <section className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            내 정보 관리
          </h1>
        </section>

        <section className="flex flex-col items-start gap-3.5 pt-9 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-full mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
              기본정보
            </h2>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            {basicInfoData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="relative flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  {item.label}
                </div>
                <div className="relative flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start gap-3.5 pt-9 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-full mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
              주소 정보
            </h2>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            {addressInfoData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="relative flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  {item.label}
                </div>
                <div className="relative flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <Button className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            수정하기
          </span>
        </Button>

        <div className="relative w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
