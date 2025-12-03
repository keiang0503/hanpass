import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const NewAccountPasswordWechat = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000003:240086"
    >
      {/* WeChat Status Bar */}
      <header className="flex flex-col w-full items-start">
        <div className="flex flex-col w-full items-start bg-[#ededed]">
          <div className="flex h-[47px] items-start w-full">
            <div className="flex flex-1 grow flex-col items-start gap-2.5 py-3.5 relative">
              <div className="flex flex-col items-center gap-2.5 px-8 py-0 w-full relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'PingFang_SC-Semibold',Helvetica] font-semibold text-[#000000cc] text-base tracking-[0] leading-5 whitespace-nowrap">
                    9:41
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[76px] h-[13px] top-4 left-[290px]"
                alt="WeChat Header Icons"
                src="/img/wechat-hd.svg"
              />
            </div>
          </div>

          <div className="flex h-12 items-center gap-[158px] px-4 py-2.5 w-full">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" asChild>
              <Link to="/newaccountreferralu95017">
                <ChevronLeftIcon className="w-6 h-6 text-[#000000e5]" />
              </Link>
            </Button>

            <div className="flex flex-col w-[71px] items-center justify-center gap-2.5 relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'PingFang_SC-Medium',Helvetica] font-medium text-[#000000e5] text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                비밀번호
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호를 설정해 주세요.
            </h1>
          </div>
        </div>
      </section>

      {/* Password Input Section */}
      <main className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-6 relative flex-1 w-full">
        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <div className="flex flex-col items-start gap-2.5 relative w-full">
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
          <div className="gap-10 w-full flex flex-col items-start relative bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="w-full gap-2.5 flex flex-col items-start relative bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
              <div className="relative w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
                {/* Delete button */}
                <img
                  className="absolute w-[6.03%] h-[8.33%] top-[83.33%] left-[80.53%]"
                  alt="Delete"
                  src="/img/delete.png"
                />

                {/* Keypad Row 1 */}
                <KeypadButton number="1" letters="" position="top-[2.78%] left-0" />
                <KeypadButton number="2" letters="ABC" position="top-[2.78%] left-[34.40%]" />
                <KeypadButton number="3" letters="DEF" position="top-[2.78%] left-[67.20%]" />

                {/* Keypad Row 2 */}
                <KeypadButton number="4" letters="GHI" position="top-[27.31%] left-0" />
                <KeypadButton number="5" letters="JKL" position="top-[27.31%] left-[34.40%]" />
                <KeypadButton number="6" letters="MNO" position="top-[27.31%] left-[67.20%]" />

                {/* Keypad Row 3 */}
                <KeypadButton number="7" letters="PQRS" position="top-[52.31%] left-0" />
                <KeypadButton number="8" letters="TUV" position="top-[52.31%] left-[34.40%]" />
                <KeypadButton number="9" letters="WXYZ" position="top-[52.31%] left-[67.20%]" />

                {/* Keypad Row 4 */}
                <KeypadButton number="0" letters="" position="top-[77.31%] left-[34.40%]" />
              </div>
            </div>

            {/* Home Indicator */}
            <div className="relative w-full h-[34px]">
              <div className="absolute left-[calc(50.00%_-_66px)] bottom-2 w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Keypad Button Component
const KeypadButton = ({
  number,
  letters,
  position,
}: {
  number: string;
  letters: string;
  position: string;
}) => {
  const isSpecial = number === "1" || number === "0";
  const width = isSpecial ? "w-[31.73%]" : "w-[32.27%]";
  const height = number === "1" || number === "0" ? "h-[21.30%]" : "h-[21.76%]";

  return (
    <div className={`absolute ${width} ${height} ${position}`}>
      <div className="w-full h-full bg-white rounded-lg shadow-sm flex flex-col items-center justify-center">
        <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]">
          {number}
        </span>
        {letters && (
          <span className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[2.00px] leading-[normal]">
            {letters}
          </span>
        )}
      </div>
    </div>
  );
};
