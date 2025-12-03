import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const AddressSearchApi = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34978:32183"
    >
      <header className="flex flex-col w-full bg-white">
      </header>

      <nav className="flex flex-col w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link to="/addressdetailinputu95045">
                <ChevronLeftIcon className="h-6 w-6" />
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontalIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <CircleIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex flex-col w-full bg-white">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              주소검색
            </h1>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-center justify-center gap-6 pt-[42px] pb-6 px-0 flex-1 w-full bg-[#ffdddd]">
        <div className="font-title-24-m font-[number:var(--title-24-m-font-weight)] text-white text-[length:var(--title-24-m-font-size)] text-center tracking-[var(--title-24-m-letter-spacing)] leading-[var(--title-24-m-line-height)] whitespace-nowrap [font-style:var(--title-24-m-font-style)]">
          API
        </div>
      </main>
    </div>
  );
};
