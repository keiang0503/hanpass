import React from "react";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { ContactListSection } from "./sections/ContactListSection";

export const OverseasRemitContacts = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 py-4 w-full bg-white">
        <div className="flex-1 font-medium text-black text-[17px]">9:41</div>
        <div className="flex items-center gap-1.5">
          <img
            className="w-[18px] h-3"
            alt="Signal"
            src="https://c.animaapp.com/Fk3yL3l2/img/icon---mobile-signal-7.svg"
          />
          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/Fk3yL3l2/img/wifi-6.svg"
          />
          <img
            className="w-[27.4px] h-[13px]"
            alt="Battery"
            src="https://c.animaapp.com/Fk3yL3l2/img/battery-7.svg"
          />
        </div>
      </div>

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
