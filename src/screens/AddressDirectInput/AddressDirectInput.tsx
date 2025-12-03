import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const AddressDirectInput = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34978:32092"
    >
      <header className="flex flex-col w-full bg-white">
      </header>

      <nav className="flex items-center justify-between px-5 py-4 w-full bg-white">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontalIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <CircleIcon className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            주소 입력 방법을 선택해 주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 items-start gap-3.5 pt-[42px] pb-6 px-6 w-full">
          <Card className="w-full border-[#dfe3ec] rounded-xl overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
            <CardContent className="flex items-center justify-between p-4 h-[62px]">
              <div className="flex items-center gap-2 flex-1">
                <img
                  className="w-7 h-7"
                  alt="Search group"
                  src="https://c.animaapp.com/Kel660N3/img/img28-search-group-1.svg"
                />
                <div className="flex flex-col items-start gap-0.5 flex-1">
                  <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    직접 입력 하기
                  </span>
                </div>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end w-full bg-white">
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
