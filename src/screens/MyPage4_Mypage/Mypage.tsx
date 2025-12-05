import { CameraIcon, ChevronRightIcon, ImageIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

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
      className="flex flex-col h-screen items-center justify-end relative bg-overlay-dark"
      data-model-id="36848:90811"
    >
      <PopupHeader />

      {/* Bottom Sheet */}
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
    </div>
  );
};
