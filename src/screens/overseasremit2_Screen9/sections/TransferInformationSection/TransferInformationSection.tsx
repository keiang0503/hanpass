import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const TransferInformationSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full bg-white">
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <div className="flex items-center gap-1">
          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm">
            9:41
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-2.5"
            alt="Mobile signal"
            src="https://c.animaapp.com/vuYaFJZH/img/icon---mobile-signal-9.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/vuYaFJZH/img/wifi-9.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/vuYaFJZH/img/battery-9.svg"
          />
        </div>
      </div>

      <nav className="flex items-center justify-between px-4 py-3 bg-white">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-auto p-0"
          asChild
        >
          <Link to="/overseasremitu95013-u4366u4460u4352u4467u4523-u4361u4457u4540u4352u4467u4535u4354u4450u4363u4455u4520">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <MoreHorizontalIcon className="w-6 h-6 text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <CircleIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
