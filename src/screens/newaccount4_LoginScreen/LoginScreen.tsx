import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { PopupHeader } from "../../components/PopupHeader";

export const LoginScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col h-screen items-center relative bg-overlay-dark"
      data-model-id="40000003:465827"
    >
      <PopupHeader />

      <section className="flex flex-col items-center gap-41 pt-3.5 pb-0 px-0 w-full flex-none">
        <div className="flex flex-col items-start gap-7px px-6 py-0 w-full flex-none">
          <h1 className="relative w-full text-title-24-b-style text-white text-center">
            셀카 촬영
          </h1>
          <p className="relative w-full text-body-15-r-style text-white text-center">
            가이드라인에 얼굴을 맞추고 촬영버튼을 눌러 주세요.
          </p>
        </div>
      </section>

      <main className="flex items-center justify-center pt-50 pb-0 px-0 relative flex-1 w-full grow">
        <div className="relative w-260 h-290 bg-white rounded-160" />
      </main>

      <footer className="flex flex-col items-center justify-between pt-0 pb-30 px-0 w-full flex-none gap-6">
        <p className="relative w-full text-body-15-r-style text-white text-center">
          촬영이 끝날 때까지 그대로 유지해주세요.
        </p>

        <div className="relative w-72px h-70">
          <div className="absolute pos-center-y-16 pos-center-x-7 text-title-24-b-style text-white text-center whitespace-nowrap">
            1
          </div>
          <img
            className="absolute top-0 pos-center-x-33 w-67 h-70"
            alt="Ellipse"
            src="https://c.animaapp.com/shEJQFEJ/img/ellipse-4638.svg"
          />
        </div>

      </footer>
    </div>
  );
};
