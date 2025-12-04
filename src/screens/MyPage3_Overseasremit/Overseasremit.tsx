import React from "react";
import { FriendsOverviewSection } from "./sections/FriendsOverviewSection";
import { StatusBarSection } from "./sections/StatusBarSection";

export const Overseasremit = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-white"
      data-model-id="36848:76879"
    >
      <StatusBarSection />

      <FriendsOverviewSection />
    </div>
  );
};
