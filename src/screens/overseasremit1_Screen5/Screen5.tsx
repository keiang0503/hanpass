import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { ContactListSection } from "./sections/ContactListSection/ContactListSection";

export const Screen5 = (): JSX.Element => {
  return (
    <div className="flex flex-col relative bg-white" data-model-id="2674:65867">
      <BackSubHeader />

      <ActionButtonsSection />

      <ContactListSection />
    </div>
  );
};
