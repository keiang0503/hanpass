import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const OverseasremitScreen = (): JSX.Element => {
  const statusBarData = {
    time: "9:41",
    date: "Sat Jun 11",
    battery: "100%",
  };

  const signalBars = [
    {
      height: "h-[40.00%]",
      top: "top-[-310.00%]",
      left: "left-[-45427.78%]",
      width: "w-[16.67%]",
      src: "/img/bar-1-8.png",
    },
    {
      height: "h-[60.00%]",
      top: "top-[-330.00%]",
      left: "left-[-45400%]",
      width: "w-[16.67%]",
      src: "/img/bar-2-9.png",
    },
    {
      height: "h-[80.00%]",
      top: "top-[-350.00%]",
      left: "left-[-45372.22%]",
      width: "w-[16.67%]",
      src: "/img/bar-3-9.png",
    },
    {
      height: "h-full",
      top: "top-[-370.00%]",
      left: "left-[-45344.44%]",
      width: "w-[16.67%]",
      src: "/img/bar-4-5.png",
    },
  ];

  const wifiBars = [
    {
      width: "w-[31.30%]",
      height: "h-[30.17%]",
      top: "top-[-241.64%]",
      left: "left-[-51221.93%]",
      src: "/img/bar-1-9.png",
    },
    {
      width: "w-[62.57%]",
      height: "h-[34.44%]",
      top: "top-[-277.74%]",
      left: "left-[-51237.50%]",
      src: "/img/bar-2-10.png",
    },
    {
      width: "w-[100.01%]",
      height: "h-[43.03%]",
      top: "top-[-311.47%]",
      left: "left-[-51256.27%]",
      src: "/img/bar-3-10.png",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:66327"
    >
      <header className="w-full flex flex-col items-start gap-2.5 bg-white">
        <div className="w-full flex flex-col items-start gap-2.5 bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {statusBarData.time.split(":")[0]}
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    :
                  </div>
                  <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {statusBarData.time.split(":")[1]}
                  </div>
                </div>
              </div>
              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                {statusBarData.date}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                {signalBars.map((bar, index) => (
                  <img
                    key={`signal-bar-${index}`}
                    className={`${bar.height} ${bar.top} ${bar.left} absolute ${bar.width}`}
                    alt="Bar"
                    src={bar.src}
                  />
                ))}
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                {wifiBars.map((bar, index) => (
                  <img
                    key={`wifi-bar-${index}`}
                    className={`absolute ${bar.width} ${bar.height} ${bar.top} ${bar.left}`}
                    alt="Bar"
                    src={bar.src}
                  />
                ))}
              </div>

              <div className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                {statusBarData.battery}
              </div>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-300%] left-[-34437.50%]"
                  alt="Border"
                  src="/img/border-5.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-266.67%] left-[-34345.83%]"
                  alt="Cap"
                  src="/img/cap-5.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
          <div className="flex-1 h-5 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.41px] leading-[22px] whitespace-nowrap">
            {statusBarData.time}
          </div>

          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/vuYaFJZH/img/icon---mobile-signal-9.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/vuYaFJZH/img/wifi-9.svg"
          />

          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/vuYaFJZH/img/battery-9.svg"
          />
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full bg-white relative">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5" />

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/vuYaFJZH/img/mini-9@2x.png"
            />
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-start gap-2.5 px-6 py-0 flex-1 w-full grow">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 w-full">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
              alt="Group"
              src="https://c.animaapp.com/vuYaFJZH/img/group-1261168836@2x.png"
            />
          </div>

          <div className="gap-[30px] w-full flex flex-col items-center">
            <div className="gap-3 w-full flex flex-col items-center">
              <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                송금 신청 완료
              </h1>

              <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                송금 결과를 포함한 자세한 내용은 내역관리 페이지에서
                확인해주세요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl">
          <div className="flex min-h-[54px] items-start flex-1 grow">
            <Button
              asChild
              className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 w-full h-auto bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90"
            >
              <Link to="/overseasremitu95022-u4361u4457u4540u4352u4467u4535u4352u4455u4527u4352u4458u95u4352u4449u4361u4449u4540u4352u4456u4364u4458-u4363u4469u4536u4352u4467u4535-u4363u4449u4523u4354u4450">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] gap-2.5 flex flex-col items-center">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
