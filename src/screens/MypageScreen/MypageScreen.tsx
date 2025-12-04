import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const menuItems = [
  { id: 1, label: "모든쿠폰" },
  { id: 2, label: "사용가능쿠폰" },
  { id: 3, label: "사용 완료 쿠폰" },
  { id: 4, label: "만료된 쿠폰" },
];

export const MypageScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end gap-2.5 relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="36848:90425"
    >
      <header className="absolute w-full top-0 left-0 h-[106px] object-cover">
        <img
          className="w-full h-full"
          alt="Image"
          src="https://c.animaapp.com/emBHvnWi/img/--.svg"
        />
      </header>

      <section className="flex flex-col items-start self-stretch w-full relative">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-3.5 px-6 relative self-stretch w-full bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-end relative self-stretch w-full">
              <div className="relative self-stretch w-full h-[22px]" />

              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:bg-transparent"
                aria-label="Close"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex flex-col items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex">
                  <h1 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    선택해주세요
                  </h1>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <nav className="flex flex-col items-start gap-[18px] self-stretch w-full">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="flex h-8 items-center w-full justify-start px-0 hover:bg-transparent"
              >
                <span className="flex-1 text-left mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </section>
    </div>
  );
};
