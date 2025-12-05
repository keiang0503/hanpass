import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { CouponDetailsSection } from "./sections/CouponDetailsSection";
import { CouponListSection } from "./sections/CouponListSection";

export const Mypage017 = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-start relative bg-white min-h-screen"
      data-model-id="40000008:1188578"
    >
      <BackSubHeader />
      <CouponListSection />
      <CouponDetailsSection />
    </main>
  );
};
