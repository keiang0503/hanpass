import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";

export const SettingsFaceidScreen = (): JSX.Element => {
  const [isFaceIdEnabled, setIsFaceIdEnabled] = React.useState(true);

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:80005"
    >
      <header className="flex flex-col w-full bg-white">
        <nav className="flex items-center justify-between px-6 py-4 h-14">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <CircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1 w-full">
        <div className="flex flex-col px-6 pt-[22px] pb-0">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            Face ID &amp; 지문 인증관리
          </h1>
        </div>

        <div className="flex flex-col flex-1 px-6 pt-[42px]">
          <div className="flex items-center justify-between h-16 py-5 border-b border-[#dfe3ec]">
            <span className="font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
              FACE ID &amp; 지문 인증
            </span>

            <Switch
              checked={isFaceIdEnabled}
              onCheckedChange={setIsFaceIdEnabled}
              className="data-[state=checked]:bg-[#0d56e4]"
            />
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center w-full">
        <div className="flex justify-center py-2 w-full bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
