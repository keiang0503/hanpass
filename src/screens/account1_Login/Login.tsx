import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const Login = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="40000008:1156008"
    >
      <PopupHeader />

      <main className="flex flex-col items-center gap-[41px] pt-3.5 pb-0 px-0 self-stretch w-full flex-1">
        <section className="flex flex-col items-start gap-[7px] px-6 py-0 self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            셀카 촬영
          </h1>

          <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            가이드라인에 얼굴을 맞추고 촬영버튼을 눌러 주세요.
          </p>
        </section>

        <section className="flex items-center justify-center pt-[50px] pb-0 px-0 relative self-stretch w-full flex-1">
          <div className="relative w-[260px] h-[290px] bg-white rounded-[160px]" />
        </section>

        <section className="flex flex-col items-center justify-between gap-4 pt-0 pb-[30px] px-0 self-stretch w-full">
          <p className="relative self-stretch mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            촬영이 끝날 때까지 그대로 유지해주세요.
          </p>

          <div className="relative w-[72px] h-[70px]">
            <div className="absolute top-[calc(50.00%_-_16px)] left-[calc(50.00%_-_7px)] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap [font-style:var(--title-24-b-font-style)]">
              1
            </div>
            <img
              className="absolute top-0 left-[calc(50.00%_-_33px)] w-[67px] h-[70px]"
              alt="Ellipse"
              src="https://c.animaapp.com/ELrb3VWQ/img/ellipse-4638.svg"
            />
          </div>
        </section>
      </main>

    </div>
  );
};
