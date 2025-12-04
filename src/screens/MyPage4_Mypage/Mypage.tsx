import { CameraIcon, ChevronRightIcon, ImageIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const menuItems = [
  {
    icon: CameraIcon,
    label: "직접 촬영하기",
    iconSrc: "https://c.animaapp.com/2nKnhQUO/img/ico32-camera.svg",
  },
  {
    icon: ImageIcon,
    label: "갤러리 가져오기",
    iconSrc: "https://c.animaapp.com/2nKnhQUO/img/ico32-album.svg",
  },
];

export const Mypage = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="36848:90811"
    >
      <div className="flex w-[375px] h-[800px] relative flex-col items-center justify-end gap-2.5 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="flex-col items-center justify-end self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-center gap-1.5 pt-0 pb-3.5 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch w-full h-[22px]" />

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-auto w-auto p-0 hover:bg-transparent"
                >
                  <XIcon className="w-[18px] h-[18px] text-gray-400" />
                </Button>
              </div>

              <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
                <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                  <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                    <h2 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                      여권 등록 방법을 선택해주세요
                    </h2>
                  </div>
                </div>

                <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
              </div>
            </div>

            <nav className="flex-col items-start gap-[18px] self-stretch w-full flex-[0_0_auto] flex relative">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto w-full p-0 hover:bg-gray-50 justify-start"
                >
                  <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex h-8 items-center relative self-stretch w-full">
                      <div className="flex items-center gap-1.5 relative flex-1 grow">
                        <div className="flex w-[30px] items-center justify-center relative">
                          <img
                            className="relative w-[30px] h-8"
                            alt={item.label}
                            src={item.iconSrc}
                          />
                        </div>

                        <span className="relative flex-1 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                          {item.label}
                        </span>
                      </div>

                      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-white">
            <div className="flex-col w-[134px] items-center gap-2.5 flex-[0_0_auto] flex relative">
              <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
            </div>
          </div>
        </div>

        <header className="flex flex-col w-full items-start absolute top-0 left-0">
          <Link
            className="w-full flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]"
            to="/mypageu95064-u4363u4455u4352u4463u4523-u4366u4458u4527u4363u4455u4540u4370u4458u4358u4455u4523"
          >
            <div className="w-[360px] bg-white flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
              <div className="flex h-6 items-center justify-between px-2.5 py-1 relative self-stretch w-full bg-white">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <time className="inline-flex items-center relative flex-[0_0_auto]">
                      <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        9
                      </span>

                      <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        :
                      </span>

                      <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        41
                      </span>
                    </time>
                  </div>

                  <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    Sat Jun 11
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
                  <div className="relative w-[18px] h-2.5">
                    <img
                      className="h-[40.00%] top-[-125060.00%] left-[-1550.00%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-1-4.png"
                    />

                    <img
                      className="h-[60.00%] top-[-125080.00%] left-[-1522.22%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-2-5.png"
                    />

                    <img
                      className="h-[80.00%] top-[-125100%] left-[-1494.44%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-3-5.png"
                    />

                    <img
                      className="h-full top-[-125120.00%] left-[-1466.67%] absolute w-[16.67%]"
                      alt="Bar"
                      src="/img/bar-4-3.png"
                    />
                  </div>

                  <div className="relative w-4 h-[11.62px] overflow-hidden">
                    <img
                      className="absolute w-[31.30%] h-[30.17%] top-[-107608.88%] left-[-1859.43%]"
                      alt="Bar"
                      src="/img/bar-1-5.png"
                    />

                    <img
                      className="absolute w-[62.57%] h-[34.44%] top-[-107644.98%] left-[-1875.00%]"
                      alt="Bar"
                      src="/img/bar-2-6.png"
                    />

                    <img
                      className="absolute w-[100.01%] h-[43.03%] top-[-107678.70%] left-[-1893.77%]"
                      alt="Bar"
                      src="/img/bar-3-6.png"
                    />
                  </div>

                  <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    100%
                  </span>

                  <div className="relative w-6 h-3 overflow-hidden">
                    <img
                      className="absolute w-[87.51%] h-full top-[-104258.33%] left-[-1529.17%]"
                      alt="Border"
                      src="/img/border-3.png"
                    />

                    <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />

                    <img
                      className="absolute w-[8.33%] h-[33.33%] top-[-104225.00%] left-[-1437.50%]"
                      alt="Cap"
                      src="/img/cap-3.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pl-[34px] pr-5 py-4 relative self-stretch w-full flex-[0_0_auto]">
              <time className="relative flex-1 h-5 mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-white text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                9:41
              </time>

              <img
                className="relative w-[18px] h-3"
                alt="Icon mobile signal"
                src="https://c.animaapp.com/2nKnhQUO/img/icon---mobile-signal-3.svg"
              />

              <img
                className="relative w-[17px] h-[11.83px]"
                alt="Wifi"
                src="https://c.animaapp.com/2nKnhQUO/img/wifi-3.svg"
              />

              <img
                className="relative w-[27.4px] h-[13px]"
                alt="Battery"
                src="https://c.animaapp.com/2nKnhQUO/img/battery-3.svg"
              />
            </div>
          </Link>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-2 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
                <img
                  className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                  alt="Mini"
                  src="https://c.animaapp.com/2nKnhQUO/img/mini-6@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
