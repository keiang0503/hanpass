import {
  ChevronDownIcon,
  ChevronLeftIcon,
  CircleIcon,
  MoreVerticalIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Label } from "../../../../components/ui/label";

const bankOptions = [
  {
    name: "토스뱅크",
    icon: "https://c.animaapp.com/X2DaSZUE/img/rectangle@2x.png",
  },
  {
    name: "새마을금고",
    icon: "https://c.animaapp.com/X2DaSZUE/img/bank-ico-ibk-square-20.svg",
  },
  {
    name: "카카오뱅크",
    icon: "https://c.animaapp.com/X2DaSZUE/img/recbank.svg",
  },
];

const keypadButtons = [
  { number: "1", letters: "" },
  { number: "2", letters: "ABC" },
  { number: "3", letters: "DEF" },
  { number: "4", letters: "GHI" },
  { number: "5", letters: "JKL" },
  { number: "6", letters: "MNO" },
  { number: "7", letters: "PGRS" },
  { number: "8", letters: "TUV" },
  { number: "9", letters: "WXYZ" },
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative w-full bg-white">
      <header className="flex items-center justify-between px-5 py-4 relative w-full bg-white">
        <Button variant="ghost" size="icon" className="h-auto p-0">
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </Button>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <MoreVerticalIcon className="w-6 h-6 text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <CircleIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </header>

      <main className="flex flex-col items-start gap-9 px-6 py-0 relative w-full">
        <h1 className="relative w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          계좌정보를 등록해주세요.
        </h1>

        <div className="flex flex-col items-start gap-9 relative w-full">
          <div className="flex flex-col items-start gap-1.5 relative w-full">
            <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              계좌번호
            </Label>

            <div className="flex flex-col items-start relative w-full">
              <div className="flex items-center relative w-full">
                <div className="flex items-center gap-2 pl-1 pr-0 py-0 relative flex-1">
                  <div className="relative flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                    0987654321
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-auto p-2">
                  <XIcon className="w-[18px] h-[18px] text-[#85888e]" />
                </Button>
              </div>
              <div className="relative w-full h-0.5 bg-[#4c67f1]" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-3.5 relative w-full">
            <div className="flex flex-col items-start gap-1.5 relative w-full">
              <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                은행선택
              </Label>

              <div className="flex flex-col items-start relative w-full">
                <button className="flex items-center relative w-full">
                  <div className="flex items-center pl-1 pr-0 py-0 relative flex-1">
                    <div className="relative flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] text-left">
                      은행을 선택해 주세요
                    </div>
                  </div>
                  <div className="relative w-[25px] h-[41px] flex items-center justify-center">
                    <ChevronDownIcon className="w-[15px] h-[9px] text-[#85888e]" />
                  </div>
                </button>
                <div className="relative w-full h-px bg-[#dfe3ec]" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 relative w-full">
              {bankOptions.map((bank, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="h-8 inline-flex items-center gap-[5px] px-2.5 py-[5px] bg-white rounded-[30px] border border-solid border-[#dfe3ec] cursor-pointer hover:bg-gray-50"
                >
                  <div className="relative w-5 h-5">
                    {bank.name === "토스뱅크" ? (
                      <div className="relative top-[calc(50.00%_-_7px)] left-[calc(50.00%_-_8px)] w-4 h-[13px] bg-[url(https://c.animaapp.com/X2DaSZUE/img/rectangle@2x.png)] bg-[100%_100%]" />
                    ) : (
                      <img
                        className="relative w-5 h-5"
                        alt={bank.name}
                        src={bank.icon}
                      />
                    )}
                  </div>
                  <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    {bank.name}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col items-center w-full mt-auto">
        <Button className="w-full h-14 bg-[#4c67f1] hover:bg-[#3d52c0] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] rounded-none">
          다음
        </Button>

        <div className="grid grid-cols-3 gap-2 w-full p-2 bg-[#d1d5db]">
          {keypadButtons.map((key, index) => (
            <Button
              key={index}
              variant="secondary"
              className="h-16 bg-white hover:bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-0 p-0"
            >
              <span className="text-[28px] font-normal text-black leading-none">
                {key.number}
              </span>
              {key.letters && (
                <span className="text-[10px] font-medium text-black leading-none mt-0.5">
                  {key.letters}
                </span>
              )}
            </Button>
          ))}
          <div className="col-start-2">
            <Button
              variant="secondary"
              className="h-16 w-full bg-white hover:bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <span className="text-[28px] font-normal text-black">0</span>
            </Button>
          </div>
          <Button
            variant="secondary"
            className="h-16 bg-[#acb2c1] hover:bg-[#9ca2b1] rounded-lg flex items-center justify-center"
          >
            <XIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};
