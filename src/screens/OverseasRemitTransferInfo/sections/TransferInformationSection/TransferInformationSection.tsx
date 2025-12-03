import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const TransferInformationSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full bg-white">
      <nav className="flex items-center justify-between px-4 py-3 bg-white">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-auto p-0"
          asChild
        >
          <Link to="/overseasremitu95096">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <MoreHorizontalIcon className="w-6 h-6 text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <CircleIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
