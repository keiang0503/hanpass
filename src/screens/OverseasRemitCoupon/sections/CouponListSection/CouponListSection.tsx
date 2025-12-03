import { ChevronLeftIcon, FilterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const CouponListSection = (): JSX.Element => {
  return (
    <header className="flex flex-col items-start w-full">
      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <FilterIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
