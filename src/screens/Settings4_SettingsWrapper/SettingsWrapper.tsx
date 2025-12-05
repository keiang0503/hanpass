import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const termsItems = [
  {
    id: 1,
    title: "전자금융거래 이용약관",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right.svg",
  },
  {
    id: 2,
    title: "서비스 이용약관",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right-1.svg",
  },
  {
    id: 3,
    title: "카드 서비스 이용약관",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right-2.svg",
  },
  {
    id: 4,
    title: "오픈뱅킹 금융정보조회 약관",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right-3.svg",
  },
  {
    id: 5,
    title: "플랫폼 서비스 이용 약관",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right-4.svg",
  },
  {
    id: 6,
    title: "위치기반 서비스 이용약관",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right-5.svg",
  },
  {
    id: 7,
    title: "개인정보 처리방침",
    icon: "https://c.animaapp.com/MgOgZxnr/img/ico16-btn-arrow-right-6.svg",
  },
];

export const SettingsWrapper = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="36848:80728"
    >
      <header className="w-full flex flex-col items-start bg-white">
        <div className="w-full flex items-center justify-between px-4 py-3 bg-white">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreHorizontalIcon className="w-6 h-6 text-black" />
            </Button>
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <CircleIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-col w-full flex-1">
        <div className="pt-[22px] pb-0 px-6 flex flex-col items-start w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            약관
          </h1>
        </div>

        <nav className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full flex-1">
          {termsItems.map((item) => (
            <Link
              key={item.id}
              to="#"
              className="flex min-h-16 max-h-16 items-center gap-1.5 px-0 py-4 w-full"
            >
              <span className="flex-1 font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
                {item.title}
              </span>
              <ChevronRightIcon className="w-4 h-4 text-[#0b0c0e]" />
            </Link>
          ))}
        </nav>
      </main>

      <footer className="flex flex-col justify-end px-6 py-0 w-full items-center">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
