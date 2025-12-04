import React from "react";
import { CouponDetailsSection } from "./sections/CouponDetailsSection";
import { CouponListSection } from "./sections/CouponListSection";

export const Mypage017 = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-start relative bg-white"
      data-model-id="40000008:1188578"
    >
      <CouponListSection />
      <CouponDetailsSection />
      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative w-full bg-white">
        <div className="flex flex-col w-[134px] items-center gap-2.5 relative">
          <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </main>
  );
};
