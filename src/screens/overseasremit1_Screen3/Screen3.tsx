import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { CouponDetailsSection } from "./sections/CouponDetailsSection";

export const Screen3 = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-white overflow-hidden"
      data-model-id="2674:66484"
    >
      <BackSubHeader />
      <CouponDetailsSection />
      <img
        className="absolute w-px h-px top-[379px] left-[-404px] object-cover"
        alt="Subtract"
        src="/img/subtract.svg"
      />
    </div>
  );
};
