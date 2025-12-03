import React from "react";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { ContactListSection } from "./sections/ContactListSection";

export const OverseasRemitContacts = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      <ActionButtonsSection />

      <ContactListSection />

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full mt-auto">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
