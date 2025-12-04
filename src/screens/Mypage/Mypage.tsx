import {
  ChevronLeftIcon,
  MoreHorizontalIcon,
  SettingsIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { TopSubsection } from "./sections/TopSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection";
import { ViewSubsection } from "./sections/ViewSubsection";
import { ViewWrapperSubsection } from "./sections/ViewWrapperSubsection";

export const Mypage = (): JSX.Element => {
  const settingsItems = [
    { label: "설정", key: "settings" },
    { label: "알림", key: "notifications" },
    { label: "약관", key: "terms" },
    { label: "버전정보", key: "version" },
  ];

  return (
    <main
      className="flex flex-col items-center relative bg-white min-h-screen"
      data-model-id="36848:75748"
    >
      <UiStatusBarSubsection />

      <header className="flex items-center justify-between px-4 py-3 relative w-full bg-white">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <MoreHorizontalIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <SettingsIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <TopSubsection />

      <Separator className="h-3 bg-[#f7f7f8]" />

      <ViewSubsection />

      <Separator className="h-3 bg-[#f7f7f8]" />

      <ViewWrapperSubsection />

      <section className="flex flex-col w-full px-6 py-8">
        <nav className="flex flex-col w-full">
          {settingsItems.map((item, index) => (
            <React.Fragment key={item.key}>
              <Button
                variant="ghost"
                className="w-full h-auto justify-between px-0 py-4 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]"
              >
                <span className="text-[#1a1a1a]">{item.label}</span>
                <ChevronLeftIcon className="h-5 w-5 rotate-180 text-[#85888e]" />
              </Button>
              {index < settingsItems.length - 1 && (
                <Separator className="bg-[#f0f0f0]" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </section>

      <div className="flex items-center justify-center py-8 w-full">
        <Button
          variant="link"
          className="h-auto font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)] underline"
        >
          로그인
        </Button>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 w-full mt-auto">
        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </main>
  );
};
