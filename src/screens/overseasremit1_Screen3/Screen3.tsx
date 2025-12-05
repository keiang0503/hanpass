import React from "react";
import { CouponDetailsSection } from "./sections/CouponDetailsSection";
import { CouponListSection } from "./sections/CouponListSection";

export const Screen3 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-white overflow-hidden"
      data-model-id="2674:66484"
    >
      <CouponListSection />
      <CouponDetailsSection />
      <img
        className="absolute w-px h-px top-[379px] left-[-404px] object-cover"
        alt="Subtract"
        src="/img/subtract.svg"
      />

      <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col w-[134px] items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </div>
    </div>
  );
};
