import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const pinDots = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadButtons = [
  [
    { value: "7", position: "left-14" },
    { value: "5", position: "left-[180px]" },
    { value: "2", position: "left-[306px]" },
  ],
  [
    { value: "1", position: "left-[57px]" },
    { value: "4", position: "left-[180px]" },
    { value: "6", position: "left-[305px]" },
  ],
  [
    { value: "8", position: "left-[55px]" },
    { value: "0", position: "left-[180px]" },
    { value: "3", position: "left-[305px]" },
  ],
];

export const PinPin = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000016:2572293"
    >
      <header className="flex flex-col items-start self-stretch w-full bg-white">
        <Link
          className="w-full flex flex-col items-start gap-2.5 bg-white"
          to="/mypageu95001u95u4354u4450-u4364u4453u4540u4359u4457-u4358u4454u4363u4469u4523"
        >
          <div className="w-[360px] flex flex-col items-start gap-2.5 self-stretch bg-white">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 self-stretch w-full bg-white">
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </div>
                    <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </div>
                  </div>
                </div>
                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  Sat Jun 11
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] top-[-169820.00%] left-[-38994.44%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-14.png"
                  />
                  <img
                    className="h-[60.00%] top-[-169840.00%] left-[-38966.67%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-15.png"
                  />
                  <img
                    className="h-[80.00%] top-[-169860.00%] left-[-38938.89%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-15.png"
                  />
                  <img
                    className="h-full top-[-169880.00%] left-[-38911.11%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-8.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-43984.43%]"
                    alt="Bar"
                    src="/img/bar-1-15.png"
                  />
                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-44000.00%]"
                    alt="Bar"
                    src="/img/bar-2-16.png"
                  />
                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-44018.77%]"
                    alt="Bar"
                    src="/img/bar-3-16.png"
                  />
                </div>

                <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-29612.50%]"
                    alt="Border"
                    src="/img/border-8.png"
                  />
                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-29520.83%]"
                    alt="Cap"
                    src="/img/cap-8.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 self-stretch w-full">
            <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
              9:41
            </div>
            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/kp7cm7rf/img/icon---mobile-signal-6.svg"
            />
            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/kp7cm7rf/img/wifi-6.svg"
            />
            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/kp7cm7rf/img/battery-4.svg"
            />
          </div>
        </Link>

        <div className="flex flex-col items-start self-stretch w-full">
          <div className="flex flex-col items-start gap-2 self-stretch w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 self-stretch w-full bg-white">
              <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
                <img
                  className="w-8 h-8"
                  alt="Wechat hd"
                  src="https://c.animaapp.com/kp7cm7rf/img/wechat-hd-5.svg"
                />
              </div>
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/kp7cm7rf/img/mini-6@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col flex-1 items-start gap-[22px] self-stretch w-full">
        <section className="flex flex-col items-center gap-[50px] px-6 py-0 self-stretch w-full">
          <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
            <div className="flex flex-col items-center gap-[50px] self-stretch w-full">
              <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
                <div className="flex items-start justify-center self-stretch w-full">
                  <h1 className="flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                    다시 한번
                    <br />
                    입력해 주세요
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-2 w-[198px]">
                  {pinDots.map((dot, index) => (
                    <div
                      key={`pin-dot-${index}`}
                      className={`w-3 h-3 rounded-full ${
                        dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start gap-6 self-stretch w-full">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 self-stretch w-full">
            <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="relative self-stretch w-full h-[292px]">
            <div className="absolute top-0 left-0 w-full h-[292px] bg-[#0d56e4]" />

            {keypadButtons.map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((button, colIndex) => (
                  <Button
                    key={`button-${rowIndex}-${colIndex}`}
                    variant="ghost"
                    className={`absolute top-[${33 + rowIndex * 66}px] ${button.position} h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent`}
                  >
                    {button.value}
                  </Button>
                ))}
              </React.Fragment>
            ))}

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_-_151px)] h-auto p-0 hover:bg-transparent"
            >
              <img
                className="w-[31px] h-[30px]"
                alt="Clear"
                src="https://c.animaapp.com/kp7cm7rf/img/ico.svg"
              />
            </Button>

            <Button
              variant="ghost"
              className="absolute top-[231px] left-[180px] h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent"
            >
              9
            </Button>

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_+_99px)] h-auto p-0 hover:bg-transparent"
            >
              <img
                className="w-[31px] h-[30px]"
                alt="Delete"
                src="https://c.animaapp.com/kp7cm7rf/img/ico-1.svg"
              />
            </Button>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 self-stretch w-full bg-[#0d56e4]">
        <div className="flex flex-col w-[134px] items-center gap-2.5">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
