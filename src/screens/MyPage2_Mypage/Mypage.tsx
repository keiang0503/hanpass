import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
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
      <BackSubHeader />

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
      </footer>
    </div>
  );
};
