import React from "react";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { ContactListSection } from "./sections/ContactListSection/ContactListSection";
import { StatusBarSection } from "./sections/StatusBarSection";

export const Screen5 = (): JSX.Element => {
  return (
    <div className="flex flex-col relative bg-white" data-model-id="2674:65867">
      <StatusBarSection />

      <ActionButtonsSection />

      <ContactListSection />

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative w-full">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
