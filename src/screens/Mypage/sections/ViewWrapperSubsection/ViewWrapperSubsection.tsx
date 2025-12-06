import { ChevronRightIcon } from "lucide-react";
import React from "react";

const settingsItems = [
  {
    label: "알림",
    hasBorder: true,
  },
  {
    label: "약관",
    hasBorder: true,
  },
  {
    label: "버전정보",
    hasBorder: false,
  },
];

export const ViewWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-1.5 pt-8 pb-0 px-6 self-stretch w-full">
      <header className="flex items-center gap-1 self-stretch w-full">
        <div className="items-center gap-1 flex-1 grow flex">
          <h2 className="w-fit mt-[-1.00px] text-caption-title-13-b-style text-gray-secondary whitespace-nowrap">
            설정
          </h2>
        </div>
      </header>

      <nav className="flex flex-col items-start self-stretch w-full">
        {settingsItems.map((item, index) => (
          <button
            key={index}
            className={`flex max-h-16 h-16 items-center gap-1.5 px-0 py-4 self-stretch w-full ${
              item.hasBorder
                ? "border-b [border-bottom-style:solid] border-list"
                : ""
            } hover:bg-gray-50 transition-colors cursor-pointer`}
          >
            <span className="flex-1 text-left text-body-16-m-style text-primary-dark">
              {item.label}
            </span>
            <ChevronRightIcon className="w-4 h-4 text-primary-dark" />
          </button>
        ))}
      </nav>
    </section>
  );
};
