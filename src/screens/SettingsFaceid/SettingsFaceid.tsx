import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";

export const SettingsFaceid = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79985"
    >
      <header className="flex items-center justify-between px-4 py-3 bg-white">
        <Link to="/settingsu95040u95u4366u4460u4366u4457u95u4361u4450u4540u4366u4454u4364u4453u4540u4359u4457-u4355u4467u4540u4357u4457u4520u4370u4449u4352u4469-u4363u4449u4523u4354u4450">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Button>
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <MoreHorizontalIcon className="w-6 h-6 text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="h-auto p-0">
            <CircleIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </header>

      <main className="flex flex-col flex-1 px-6">
        <div className="pt-6 pb-8">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            Face ID &amp; 지문 인증관리
          </h1>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-[#dfe3ec]">
          <span className="font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
            FACE ID &amp; 지문 인증
          </span>
          <Switch />
        </div>
      </main>

      <footer className="flex flex-col items-center pb-2 bg-white">
        <div className="w-[134px] h-[5px] bg-black rounded-full" />
      </footer>
    </div>
  );
};
