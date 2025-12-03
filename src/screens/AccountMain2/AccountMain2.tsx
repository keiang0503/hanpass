import {
  ChevronDownIcon,
  ChevronLeftIcon,
  CircleIcon,
  MoreVerticalIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

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

const keypadData = [
  { number: "1", letters: "", className: "w-[98.32%]" },
  { number: "2", letters: "ABC", className: "w-[96.69%]" },
  { number: "3", letters: "DEF", className: "w-[96.69%]" },
  { number: "4", letters: "GHI", className: "w-[96.69%]" },
  { number: "5", letters: "JKL", className: "w-[96.69%]" },
  { number: "6", letters: "MNO", className: "w-[96.69%]" },
  { number: "7", letters: "PQRS", className: "w-[96.69%]" },
  { number: "8", letters: "TUV", className: "w-[96.69%]" },
  { number: "9", letters: "WXYZ", className: "w-[96.69%]" },
];

export const AccountMain2 = (): JSX.Element => {
  return (
    <main
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="2674:67602"
    >
      {/* FrameSubsection */}
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

        <div className="flex flex-col items-start gap-9 px-6 py-0 relative w-full">
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
        </div>

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

      {/* ViewSubsection */}
      <section className="flex flex-col items-center justify-end w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 flex rounded-xl w-full">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-2 py-1 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-none h-auto">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

        <div className="gap-10 w-full flex flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="w-full gap-2.5 flex flex-col items-start bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)] grid grid-cols-3 gap-0 p-0">
              {keypadData.slice(0, 3).map((key, index) => (
                <button
                  key={`key-${index}`}
                  className="relative flex flex-col items-center justify-center h-[46px] bg-transparent"
                >
                  <img
                    className={`absolute ${key.className} h-full top-0 left-0`}
                    alt="Key background"
                    src={
                      index === 0
                        ? "https://c.animaapp.com/X2DaSZUE/img/key-background-8.svg"
                        : index === 1
                          ? "https://c.animaapp.com/X2DaSZUE/img/key-background-7.svg"
                          : "https://c.animaapp.com/X2DaSZUE/img/key-background-6.svg"
                    }
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      {key.number}
                    </div>
                    {key.letters && (
                      <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                        {key.letters}
                      </div>
                    )}
                  </div>
                </button>
              ))}

              {keypadData.slice(3, 6).map((key, index) => (
                <button
                  key={`key-${index + 3}`}
                  className="relative flex flex-col items-center justify-center h-[47px] bg-transparent"
                >
                  <img
                    className={`absolute ${key.className} h-full top-0 left-0`}
                    alt="Key background"
                    src={
                      index === 0
                        ? "https://c.animaapp.com/X2DaSZUE/img/key-background-5.svg"
                        : index === 1
                          ? "https://c.animaapp.com/X2DaSZUE/img/key-background-4.svg"
                          : "https://c.animaapp.com/X2DaSZUE/img/key-background-3.svg"
                    }
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      {key.number}
                    </div>
                    {key.letters && (
                      <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                        {key.letters}
                      </div>
                    )}
                  </div>
                </button>
              ))}

              {keypadData.slice(6, 9).map((key, index) => (
                <button
                  key={`key-${index + 6}`}
                  className="relative flex flex-col items-center justify-center h-[47px] bg-transparent"
                >
                  <img
                    className={`absolute ${key.className} h-full top-0 left-0`}
                    alt="Key background"
                    src={
                      index === 0
                        ? "https://c.animaapp.com/X2DaSZUE/img/rectangle-1.svg"
                        : index === 1
                          ? "https://c.animaapp.com/X2DaSZUE/img/key-background-2.svg"
                          : "https://c.animaapp.com/X2DaSZUE/img/key-background-1.svg"
                    }
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                      {key.number}
                    </div>
                    {key.letters && (
                      <div className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
                        {key.letters}
                      </div>
                    )}
                  </div>
                </button>
              ))}

              <div className="relative flex flex-col items-center justify-center h-[46px] bg-transparent"></div>

              <button className="relative flex flex-col items-center justify-center h-[46px] bg-transparent">
                <img
                  className="absolute w-[98.32%] h-full top-0 left-0"
                  alt="Key background"
                  src="https://c.animaapp.com/X2DaSZUE/img/key-background.svg"
                />
                <div className="relative z-10 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
                  0
                </div>
              </button>

              <button className="relative flex items-center justify-center h-[46px] bg-transparent">
                <img
                  className="w-[22.63px] h-[18px]"
                  alt="Delete"
                  src="https://c.animaapp.com/X2DaSZUE/img/delete@2x.png"
                />
              </button>
            </div>
          </div>

          <div className="w-full h-[34px] flex items-end justify-center pb-2">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </section>
    </main>
  );
};
