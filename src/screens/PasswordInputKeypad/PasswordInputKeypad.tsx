import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// Keypad data
const keypadData = [
  { value: "1", letters: "" },
  { value: "2", letters: "ABC" },
  { value: "3", letters: "DEF" },
  { value: "4", letters: "GHI" },
  { value: "5", letters: "JKL" },
  { value: "6", letters: "MNO" },
  { value: "7", letters: "PQRS" },
  { value: "8", letters: "TUV" },
  { value: "9", letters: "WXYZ" },
  { value: "", letters: "", empty: true },
  { value: "0", letters: "" },
  { value: "delete", letters: "", isDelete: true },
];

// Keypad Button Component
const KeypadButton = ({
  value,
  letters,
  empty,
  isDelete,
}: {
  value: string;
  letters: string;
  empty?: boolean;
  isDelete?: boolean;
}) => {
  if (empty) {
    return <div className="w-full h-[46px]" />;
  }

  if (isDelete) {
    return (
      <button className="w-full h-[46px] bg-[#acb3bf] rounded-lg flex items-center justify-center active:bg-[#9ba2ae]">
        <img
          className="w-[22.6px] h-[17.6px]"
          alt="Delete"
          src="/img/delete.png"
        />
      </button>
    );
  }

  return (
    <button className="w-full h-[46px] bg-white rounded-lg shadow-sm flex flex-col items-center justify-center active:bg-gray-100">
      <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
        {value}
      </span>
      {letters && (
        <span className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
          {letters}
        </span>
      )}
    </button>
  );
};

export const PasswordInputKeypad = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000003:240091"
    >
      {/* Navigation Header */}
      <header className="flex flex-col w-full items-start">
        <div className="flex h-12 items-center gap-[158px] px-4 py-2.5 w-full border-b border-[#f5f6f8]">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0" asChild>
            <Link to="/selfieverificationu95022">
              <ChevronLeftIcon className="w-6 h-6 text-[#0b0c0e]" />
            </Link>
          </Button>

          <div className="flex flex-col w-[71px] items-center justify-center gap-2.5 relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'PingFang_SC-Medium',Helvetica] font-medium text-[#000000e5] text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
              비밀번호
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호를 입력해주세요.
            </h1>
          </div>
        </div>
      </section>

      {/* Password Input Section */}
      <main className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-6 relative flex-1 w-full">
        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full relative">
              <div className="h-[42px] flex flex-col items-start relative w-full">
                <div className="flex-1 w-full flex items-center relative">
                  <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center relative">
                    <div className="items-center flex-1 flex relative">
                      <div className="items-center gap-2 flex-1 flex relative">
                        <Input
                          type="password"
                          placeholder="비밀번호를 입력해주세요."
                          className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Section with iOS Keypad */}
      <section className="flex flex-col justify-end gap-2.5 w-full items-center relative">
        <div className="flex flex-col items-start relative w-full">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative w-full">
            <div className="min-h-[54px] flex-1 grow flex items-start relative">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 grow bg-[#b7ccf7] hover:bg-[#a5bce8] rounded-xl h-auto">
                <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>

          {/* iOS Keypad */}
          <div className="w-full bg-[#d3d6e2]">
            <div className="p-1">
              <div className="grid grid-cols-3 gap-1.5">
                {keypadData.map((key, index) => (
                  <KeypadButton
                    key={index}
                    value={key.value}
                    letters={key.letters}
                    empty={key.empty}
                    isDelete={key.isDelete}
                  />
                ))}
              </div>
            </div>

            {/* Home Indicator */}
            <div className="relative w-full h-[34px] flex items-end justify-center pb-2">
              <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
