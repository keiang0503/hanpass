import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { ContactListSection } from "./sections/ContactListSection";

export const OverseasRemitContacts = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      <BackSubHeader backTo="/overseasremitamountentryu95088" />
      <ActionButtonsSection />

      <ContactListSection />

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full mt-auto">
      </footer>
    </div>
  );
};
