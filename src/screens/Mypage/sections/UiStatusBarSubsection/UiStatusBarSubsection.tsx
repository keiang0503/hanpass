import { ChevronLeftIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const UiStatusBarSubsection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col items-start bg-white">
      <div className="w-full flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-normal">
            9:41
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/emBHvnWi/img/icon---mobile-signal-7.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/emBHvnWi/img/wifi.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/emBHvnWi/img/battery-6.svg"
          />
        </div>
      </div>

      <nav className="w-full flex items-center justify-between px-5 py-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-auto p-0"
          asChild
        >
          <Link to="/mypageu95001u95u4354u4450-u4364u4453u4540u4359u4457-u4358u4454u4363u4469u45233">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <MoreVerticalIcon className="w-6 h-6 text-black" />
          </Button>

          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
          </Button>
        </div>
      </nav>
    </header>
  );
};
