import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[22px] w-full bg-white">
      <div className="flex flex-col items-start w-full bg-white">
        <div className="gap-2 pt-[22px] pb-0 px-6 flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              해외송금 내역
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-between px-6 py-[18px] w-full border-b border-solid border-[#dfe3ec] items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-auto p-0 hover:bg-transparent"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#0b0c0e]" />
            </Button>

            <div className="inline-flex justify-center gap-4 items-center">
              <div className="w-fit mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                2024.10
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-auto p-0 hover:bg-transparent"
            >
              <ChevronRightIcon className="w-6 h-6 text-[#0b0c0e]" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-end gap-2 pt-5 pb-3 px-6 w-full bg-white">
              <Select defaultValue="latest">
                <SelectTrigger className="w-auto h-auto border-0 gap-1 p-0 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] focus:ring-0 focus:ring-offset-0">
                  <SelectValue />
                  <ChevronDownIcon className="w-4 h-4 opacity-100" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">최신순</SelectItem>
                  <SelectItem value="oldest">오래된순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
