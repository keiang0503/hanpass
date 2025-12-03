import { ChevronLeftIcon, ChevronDownIcon, CircleIcon, MoreHorizontalIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const NewAccountPhoneInput = (): JSX.Element => {
  return (
    <div className="flex flex-col bg-white" data-model-id="40000001:45841">
      {/* Status Bar Section */}
      <header className="w-full bg-white">
        <div className="flex items-center justify-between px-5 py-3">
          <time className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-normal">
            9:41
          </time>

          <div className="flex items-center gap-1.5">
            <div className="relative w-[18px] h-2.5">
              <div className="absolute h-[40%] w-[16.67%] top-0 left-0 bg-black rounded-sm" />
              <div className="absolute h-[60%] w-[16.67%] top-[40%] left-[5px] bg-black rounded-sm" />
              <div className="absolute h-[80%] w-[16.67%] top-[20%] left-[10px] bg-black rounded-sm" />
              <div className="absolute h-full w-[16.67%] top-0 left-[15px] bg-black rounded-sm" />
            </div>

            <div className="w-4 h-3 flex items-center justify-center">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 2.5C10.5 2.5 12.7 3.6 14.2 5.4L15.6 4C13.8 1.9 11.1 0.5 8 0.5C4.9 0.5 2.2 1.9 0.4 4L1.8 5.4C3.3 3.6 5.5 2.5 8 2.5ZM8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C11.9 4.3 10 3.5 8 3.5C6 3.5 4.1 4.3 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5ZM8 8.5C7.2 8.5 6.5 8.8 5.9 9.4L8 11.5L10.1 9.4C9.5 8.8 8.8 8.5 8 8.5Z" fill="black"/>
              </svg>
            </div>

            <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-normal">
              100%
            </span>

            <div className="relative w-6 h-3 overflow-hidden">
              <div className="w-[22px] h-3 border border-black rounded-sm" />
              <div className="absolute w-[17px] h-[8px] top-[2px] left-[2px] bg-black rounded-[1px]" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Header */}
      <header className="flex flex-col w-full bg-white">
        <div className="flex items-center justify-between h-[54px] px-5 relative w-full">
          <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
            <Link to="/signupemailinputu95010">
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MoreHorizontalIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <CircleIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="flex flex-col w-full bg-white pt-[22px] px-6">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          휴대폰번호를 입력해 주세요.
        </h1>
      </section>

      {/* Phone Input Section */}
      <section className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                    휴대폰 번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
              <div className="flex flex-col h-[42px] items-start w-full">
                <div className="flex flex-1 w-full items-center gap-2">
                  {/* Country Code Selector - China */}
                  <div className="flex items-center gap-1 px-3 py-2 border border-[#dfe3ec] rounded-lg bg-white">
                    {/* China Flag */}
                    <div className="w-6 h-4 flex items-center justify-center overflow-hidden rounded-sm">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <rect width="24" height="16" fill="#DE2910"/>
                        <g transform="translate(2, 2)">
                          <polygon points="4,0 5.2,3.8 1.3,1.5 6.7,1.5 2.8,3.8" fill="#FFDE00"/>
                          <polygon points="8,1 8.4,2.2 7.2,1.5 8.8,1.5 7.6,2.2" fill="#FFDE00" transform="rotate(23, 8, 1.5)"/>
                          <polygon points="9.5,3 9.9,4.2 8.7,3.5 10.3,3.5 9.1,4.2" fill="#FFDE00" transform="rotate(45, 9.5, 3.5)"/>
                          <polygon points="9,5.5 9.4,6.7 8.2,6 9.8,6 8.6,6.7" fill="#FFDE00" transform="rotate(70, 9, 6)"/>
                          <polygon points="7,7 7.4,8.2 6.2,7.5 7.8,7.5 6.6,8.2" fill="#FFDE00" transform="rotate(90, 7, 7.5)"/>
                        </g>
                      </svg>
                    </div>
                    <span className="font-body-14-m text-[#0b0c0e]">CH</span>
                    <span className="font-body-14-m text-[#0b0c0e]">+86</span>
                    <ChevronDownIcon className="w-4 h-4 text-[#85888e]" />
                  </div>

                  {/* Phone Input */}
                  <div className="flex-1 flex items-center">
                    <div className="flex gap-[7px] pl-1 pr-0 py-0 flex-1 items-center">
                      <div className="flex items-center flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            placeholder="휴대폰 번호를 입력하세요"
                            className="border-0 border-b-0 rounded-none p-0 h-auto font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex justify-end gap-2.5 pl-0 pr-2 py-0 items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto w-auto p-0 hover:bg-transparent"
                      >
                        <XIcon className="w-[18px] h-[18px] text-[#85888e]" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full h-0.5">
                  <div className="w-full h-px bg-[#dfe3ec]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Button Section */}
      <section className="flex flex-col items-start w-full mt-auto">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="min-h-[54px] items-start flex-1 grow flex">
            <Button
              className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#dfe3ec] hover:bg-[#c7ccd6] rounded-none h-auto"
              asChild
            >
              <Link to="/verificationcodeu95008">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#85888e] text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  인증번호 요청
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="relative w-full h-[34px] bg-white">
          <div className="absolute left-[calc(50.00%_-_66px)] bottom-2 w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </section>
    </div>
  );
};
