import { ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const noticeItems = [
  "사용 가능한 기기 : iOS 9 이상, 안드로이드 6.0 이상",
  "생체 정보는 기기 1대에서만 등록이 가능합니다.",
  "6자리 비밀번호(PIN) 등록 후 생체 정보를 1회 등록합니다.",
  "등록된 생체 정보는 6자리 비밀번호(PIN) 대신 송금 및 결제 시에 사용할 수 있습니다.",
  "재등록 및 해지는 설정 > Face ID & 지문 인증관리 메뉴에서 가능합니다.",
];

export const Settings = (): JSX.Element => {
  return (
    <div
      className="flex min-h-screen items-end justify-center bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-w-[375px]"
      data-model-id="36848:79996"
    >
      <div className="flex flex-col items-center gap-1.5 px-6 py-0 w-full bg-white rounded-[30px_30px_0px_0px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-end w-full">
            <div className="w-full h-[22px]" />

            <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex items-start gap-2 w-full">
              <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
                <h1 className="mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] flex-1 [font-style:var(--title-18-SB-font-style)]">
                  Face ID &amp; 지문 인증
                </h1>
              </div>
            </div>

            <div className="w-full max-h-[26px] h-[26px] opacity-30" />
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-[42px] w-full">
            <div className="flex flex-col items-center gap-[42px] w-full">
              <p className="mt-[-1.00px] font-pentendard-body-16-r font-[number:var(--pentendard-body-16-r-font-weight)] text-[#1c253f] text-[length:var(--pentendard-body-16-r-font-size)] tracking-[var(--pentendard-body-16-r-letter-spacing)] leading-[var(--pentendard-body-16-r-line-height)] [font-style:var(--pentendard-body-16-r-font-style)]">
                6자리 비밀번호(PIN)가 Face ID 또는 지문인증으로 대체됩니다.
                <br />
                비밀번호 입력 대신 스마트 기기에 등록된 생체 정보를 이용하세요.
              </p>

              <div className="relative w-[78px] h-[65px]">
                <img
                  className="absolute w-[69.14%] h-[92.31%] top-0 left-0"
                  alt="Frame"
                  src="https://c.animaapp.com/THCauiAv/img/frame-1261169819.svg"
                />

                <img
                  className="absolute w-[51.21%] h-[61.54%] top-[38.46%] left-[48.79%]"
                  alt="Frame"
                  src="https://c.animaapp.com/THCauiAv/img/frame-1261169818.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full">
              <div className="flex items-center gap-0.5 w-full">
                <img
                  className="w-5 h-5"
                  alt="Img ars notice"
                  src="https://c.animaapp.com/THCauiAv/img/img-ars-notice.svg"
                />

                <div className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                  안내사항
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                {noticeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-[5px] items-start w-full"
                  >
                    <div className="relative w-2 h-3.5">
                      <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                    </div>

                    <p className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end w-full bg-white">
            <div className="flex flex-col items-center gap-6 w-full z-0">
              <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
                <div className="min-h-[54px] flex-1 flex items-start">
                  <Button className="h-auto min-h-[54px] flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
                    <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] flex-1 [font-style:var(--title-16-b-font-style)]">
                      생체 정보 등록하기
                    </span>
                  </Button>
                </div>
              </div>

              <button className="inline-flex items-center gap-0.5">
                <span className="mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                  나중에 할게요
                </span>

                <ChevronRightIcon className="w-[18px] h-[18px] text-[#717682]" />
              </button>
            </div>

            <div className="w-full h-4 z-[-1]" />

            <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full z-[-2] bg-white">
              <div className="flex flex-col w-[134px] items-center gap-2.5 ml-[-8.50px] mr-[-8.50px]">
                <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="flex flex-col items-start absolute top-0 left-0 w-full">
        <Link
          className="w-full flex flex-col items-start gap-2.5"
          to="/pinu95004-pin-u4359u4469u4358u4469u4527u4359u4453u4523u4370u4457-u4363u4469u4536u4357u4455u4520"
        >
          <div className="w-[360px] bg-white flex flex-col items-start gap-2.5">
            <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
              <div className="inline-flex items-center gap-2 mt-[-0.50px] mb-[-0.50px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center">
                    <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      9
                    </div>

                    <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      :
                    </div>

                    <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                      41
                    </div>
                  </div>
                </div>

                <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  Sat Jun 11
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 mt-[-0.50px] mb-[-0.50px]">
                <div className="relative w-[18px] h-2.5">
                  <img
                    className="h-[40.00%] top-[-169820.00%] left-[-49050.00%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-1-4.png"
                  />

                  <img
                    className="h-[60.00%] top-[-169840.00%] left-[-49022.22%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-2-5.png"
                  />

                  <img
                    className="h-[80.00%] top-[-169860.00%] left-[-48994.44%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-3-5.png"
                  />

                  <img
                    className="h-full top-[-169880.00%] left-[-48966.67%] absolute w-[16.67%]"
                    alt="Bar"
                    src="/img/bar-4-3.png"
                  />
                </div>

                <div className="relative w-4 h-[11.62px] overflow-hidden">
                  <img
                    className="absolute w-[31.30%] h-[30.17%] top-[-146131.99%] left-[-55296.93%]"
                    alt="Bar"
                    src="/img/bar-1-5.png"
                  />

                  <img
                    className="absolute w-[62.57%] h-[34.44%] top-[-146168.10%] left-[-55312.50%]"
                    alt="Bar"
                    src="/img/bar-2-6.png"
                  />

                  <img
                    className="absolute w-[100.01%] h-[43.03%] top-[-146201.82%] left-[-55331.27%]"
                    alt="Bar"
                    src="/img/bar-3-6.png"
                  />
                </div>

                <div className="mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                  100%
                </div>

                <div className="relative w-6 h-3 overflow-hidden">
                  <img
                    className="absolute w-[87.51%] h-full top-[-141558.33%] left-[-37154.17%]"
                    alt="Border"
                    src="/img/border-3.png"
                  />

                  <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                  <img
                    className="absolute w-[8.33%] h-[33.33%] top-[-141525.00%] left-[-37062.50%]"
                    alt="Cap"
                    src="/img/cap-3.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 w-full">
            <div className="flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
              9:41
            </div>

            <img
              className="w-[18px] h-3"
              alt="Icon mobile signal"
              src="https://c.animaapp.com/THCauiAv/img/icon---mobile-signal-3.svg"
            />

            <img
              className="w-[17px] h-[11.83px]"
              alt="Wifi"
              src="https://c.animaapp.com/THCauiAv/img/wifi-3.svg"
            />

            <img
              className="w-[27.4px] h-[13px]"
              alt="Battery"
              src="https://c.animaapp.com/THCauiAv/img/battery-3.svg"
            />
          </div>
        </Link>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col gap-2 w-full items-start">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/THCauiAv/img/mini-3@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
