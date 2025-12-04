import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ViewWrapperSubsection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start bg-white">
      <div className="flex h-11 items-center justify-between px-4 w-full bg-white">
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex items-center gap-1">
            <div className="inline-flex items-center">
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                9
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                :
              </span>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                41
              </span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5">
          <div className="relative w-[18px] h-2.5">
            <div className="absolute h-[40%] top-0 left-0 w-[16.67%] bg-black rounded-[1px]" />
            <div className="absolute h-[60%] top-0 left-[22.22%] w-[16.67%] bg-black rounded-[1px]" />
            <div className="absolute h-[80%] top-0 left-[44.44%] w-[16.67%] bg-black rounded-[1px]" />
            <div className="absolute h-full top-0 left-[66.67%] w-[16.67%] bg-black rounded-[1px]" />
          </div>

          <svg
            className="w-4 h-[11.62px]"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.5C0 3.67157 0.671573 3 1.5 3H2.5C3.32843 3 4 3.67157 4 4.5V7.5C4 8.32843 3.32843 9 2.5 9H1.5C0.671573 9 0 8.32843 0 7.5V4.5Z"
              fill="black"
            />
            <path
              d="M6 2.5C6 1.67157 6.67157 1 7.5 1H8.5C9.32843 1 10 1.67157 10 2.5V9.5C10 10.3284 9.32843 11 8.5 11H7.5C6.67157 11 6 10.3284 6 9.5V2.5Z"
              fill="black"
            />
            <path
              d="M12 0.5C12 -0.328427 12.6716 -1 13.5 -1H14.5C15.3284 -1 16 -0.328427 16 0.5V11.5C16 12.3284 15.3284 13 14.5 13H13.5C12.6716 13 12 12.3284 12 11.5V0.5Z"
              fill="black"
            />
          </svg>

          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
            100%
          </span>

          <div className="relative w-6 h-3 overflow-hidden">
            <div className="absolute w-[87.51%] h-full top-0 left-0 border border-black rounded-[2px]" />
            <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
            <div className="absolute w-[8.33%] h-[33.33%] top-[33.33%] right-0 bg-black rounded-r-[2px]" />
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between px-4 py-3 w-full bg-white">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-auto p-0"
          asChild
        >
          <Link to="/mypageu95108u95u4361u4469u4523u4359u4462u4523u4364u4467u4540-u4366u4458u4527u4363u4455u4540-u4364u4462u4523u4359u4469u95u4363u4460u4352u4462u4520u4363u4469u4523u4355u4467u4540u4357u4457u4520u4364u4467u4540u47u4352u4462u4520u4354u4450u4352u4453u4361u4457u4361u4469u4523u4352u4457u4364u4467u4540u40u4363u4460u4352u4462u4520u4363u4469u4523u41u95bs">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <MoreHorizontalIcon className="w-6 h-6 text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <CircleIcon className="w-6 h-6 text-black fill-black" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
