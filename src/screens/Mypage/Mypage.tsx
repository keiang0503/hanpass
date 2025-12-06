import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "../../components/BackSubHeader";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { TopSubsection } from "./sections/TopSubsection";
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
      <BackSubHeader />

      <TopSubsection />

      <Separator className="h-3 bg-gray-light-bg" />

      <ViewSubsection />

      <Separator className="h-3 bg-gray-light-bg" />

      <ViewWrapperSubsection />

      <section className="flex flex-col w-full px-6 py-8">
        <nav className="flex flex-col w-full">
          {settingsItems.map((item, index) => (
            <React.Fragment key={item.key}>
              <Button
                variant="ghost"
                className="w-full h-auto justify-between px-0 py-4 text-body-16-r-style"
              >
                <span className="text-primary">{item.label}</span>
                <ChevronLeftIcon className="h-5 w-5 rotate-180 text-gray-secondary" />
              </Button>
              {index < settingsItems.length - 1 && (
                <Separator className="bg-separator" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </section>

      <div className="flex items-center justify-center py-8 w-full">
        <Button
          variant="link"
          className="h-auto font-body-15-r text-body-15-r-style text-gray-secondary underline"
        >
          로그인
        </Button>
      </div>
    </main>
  );
};
