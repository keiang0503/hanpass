import {
  CameraIcon,
  ChevronLeftIcon,
  ImageIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const exampleImages = [
  {
    src: "https://c.animaapp.com/NpKP4m4n/img/content-1.png",
    alt: "Content example 1",
  },
  {
    src: "https://c.animaapp.com/NpKP4m4n/img/content-2.png",
    alt: "Content example 2",
  },
  {
    src: "https://c.animaapp.com/NpKP4m4n/img/content-3.png",
    alt: "Content example 3",
  },
];

export const AddressPhotoUpload = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="2674:64275"
    >
      <header className="flex flex-col w-full bg-white">
        <nav className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0" asChild>
            <Link to="/addressdetailinputu95045">
              <ChevronLeftIcon className="h-6 w-6" />
            </Link>
          </Button>

          <img
            className="h-[21px] w-[87px]"
            alt="Mini"
            src="https://c.animaapp.com/NpKP4m4n/img/mini-7@2x.png"
          />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <div className="h-6 w-6 rounded-full border-2 border-black flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-black" />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col items-start pt-[22px] px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            직접 주소를 촬영하거나
            <br />
            업로드 할 사진을 선택해 주세요.
          </h1>

          <p className="mt-2 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            주소를 확인할 수 있는 사진, 명함, 주소 표지판 등을 직접 촬영하거나
            갤러리에서 사진을 선택해 주세요.
          </p>
        </section>

        <section className="flex flex-col items-start gap-8 pt-[42px] pb-6 px-6 flex-1">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-center gap-[15px] pt-4 pb-0 px-4 w-full bg-[#f7f7f8] rounded-[10px]">
              <span className="font-body-14-m text-[#0b0c0e] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] [font-style:var(--body-14-m-font-style)]">
                {'<예시>'}
              </span>

              <div className="flex justify-center gap-2.5 items-center w-full">
                {exampleImages.map((image, index) => (
                  <img
                    key={index}
                    className="flex-1 aspect-[1.24]"
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-start w-full">
              <div className="flex items-start gap-[5px] flex-1">
                <div className="relative w-2 h-3.5">
                  <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  촬영 시 흔들림이나 빛 반사에 주의하세요.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3.5 w-full">
            <Button
              variant="outline"
              className="w-full h-auto min-h-[46px] rounded-[30px] border-[#b7ccf7] bg-white hover:bg-white"
            >
              <CameraIcon className="w-4 h-4 text-[#0d56e4]" />
              <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                직접 촬영하기
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full h-auto min-h-[46px] rounded-[30px] border-[#b7ccf7] bg-white hover:bg-white"
            >
              <ImageIcon className="w-4 h-4 text-[#0d56e4]" />
              <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                갤러리에서 가져오기
              </span>
            </Button>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-end items-center px-6 py-0 w-full">
        <div className="w-full h-4" />
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
