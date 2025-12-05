import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { FriendsOverviewSection } from "./sections/FriendsOverviewSection";

export const Overseasremit = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-white min-h-screen"
      data-model-id="36848:76879"
    >
      <BackSubHeader />

      <FriendsOverviewSection />
    </div>
  );
};
