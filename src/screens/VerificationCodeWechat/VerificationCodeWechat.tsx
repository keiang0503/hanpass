import { ChevronLeftIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

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

export const VerificationCodeWechat = (): JSX.Element => {
  return (
    <div className="flex flex-col bg-white" data-model-id="40000001:45838">
      {/* Navigation Header with WeChat Logo */}
      <header className="flex flex-col w-full bg-white">
        <div className="flex items-center justify-between h-[54px] px-5 relative w-full">
          <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
            <Link to="/signupphoneemailu95007">
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            {/* WeChat Logo */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12 6C6.477 6 2 9.582 2 14c0 2.386 1.115 4.544 2.919 6.091-.119.596-.419 2.087-.483 2.396-.077.376.138.371.291.27.121-.08 1.92-1.262 2.718-1.785A12.68 12.68 0 0012 22c5.523 0 10-3.582 10-8s-4.477-8-10-8z" fill="#07C160"/>
                <path d="M22 14c0 3.866-4.03 7-9 7-.686 0-1.354-.057-2-.167C12.374 22.17 14.686 23 17.2 23c.96 0 1.89-.1 2.773-.287.636.417 2.07 1.36 2.168 1.424.122.08.294.085.232-.216-.051-.248-.29-1.436-.385-1.912C23.398 20.77 25 18.996 25 17c0-1.312-.538-2.526-1.449-3.532A8.87 8.87 0 0022 14z" fill="#07C160"/>
                <circle cx="8.5" cy="14" r="1.5" fill="white"/>
                <circle cx="15.5" cy="14" r="1.5" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="flex flex-col w-full bg-white pt-[22px] px-6">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          인증번호를 입력해 주세요.
        </h1>
      </section>

      {/* Input Section */}
      <section className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                    인증 번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex flex-1 w-full items-center">
                    <div className="flex gap-[7px] pl-1 pr-0 py-0 flex-1 items-center">
                      <div className="flex items-center flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            placeholder="4자리 숫자"
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

                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
                      02:49
                    </div>
                  </div>

                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2.5 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-end gap-2.5 w-full items-center">
                <div className="flex items-center justify-end flex-1">
                  <div className="flex flex-col items-end justify-center gap-2.5 flex-1 rounded-lg">
                    <Button
                      variant="link"
                      className="h-auto p-0 font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]"
                    >
                      시간연장
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keypad Section */}
      <section className="flex flex-col justify-end gap-2.5 w-full">
        <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
          <div className="flex h-[38px] items-center justify-center gap-2.5 px-4 py-2.5 w-full bg-[#252e33d6] rounded-xl">
            <div className="flex items-center justify-center flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
              인증번호가 발송되었습니다.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
            <div className="min-h-[54px] items-start flex-1 grow flex">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#b7ccf7] hover:bg-[#a5bef5] rounded-none h-auto">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>

          <div className="gap-10 w-full flex flex-col items-start bg-[#d3d6e2]">
            <div className="w-full gap-2.5 flex flex-col items-start bg-[#d3d6e2]">
              <div className="w-full h-[216px] relative">
                <div className="absolute w-[6.03%] h-[8.33%] top-[83.33%] left-[80.53%] cursor-pointer">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path d="M22 3H7.83l5.59-5.59L12 -4 4 4l8 8 1.41-1.41L7.83 5H22v-2z" fill="#000" transform="rotate(180 12 9)"/>
                  </svg>
                </div>

                <div className="absolute w-[31.73%] h-[21.30%] top-[77.31%] left-[34.40%] bg-white rounded-md flex items-center justify-center cursor-pointer">
                  <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px]">0</span>
                </div>

                {keypadData.map((key, index) => {
                  const row = Math.floor(index / 3);
                  const col = index % 3;
                  const topPositions = ["2.78%", "27.31%", "52.31%"];
                  const leftPositions = ["0", "34.40%", "67.20%"];
                  const widthClass = col === 0 && row === 0 ? "31.73%" : "32.27%";

                  return (
                    <div
                      key={index}
                      className="absolute bg-white rounded-md flex flex-col items-center justify-center cursor-pointer"
                      style={{
                        width: widthClass,
                        height: "21.30%",
                        top: topPositions[row],
                        left: leftPositions[col],
                      }}
                    >
                      <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px]">
                        {key.number}
                      </span>
                      {key.letters && (
                        <span className="[font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] tracking-[2px]">
                          {key.letters}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full h-[34px]">
              <div className="absolute left-[calc(50.00%_-_66px)] bottom-2 w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
