import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface BackSubHeaderProps {
  backTo?: string;
  showActions?: boolean;
  onMoreClick?: () => void;
  onCloseClick?: () => void;
}

export const BackSubHeader = ({
  backTo = "/",
  showActions = true,
  onMoreClick,
  onCloseClick,
}: BackSubHeaderProps): JSX.Element => {
  return (
    <nav className="flex flex-col items-start relative self-stretch w-full flex-none">
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-none">
        <div className="nav-header relative self-stretch w-full flex items-center justify-between px-1.5 bg-white">
          <Link to={backTo} className="flex items-center justify-center w-8 h-8">
            <ChevronLeftIcon className="w-8 h-8 text-variable-collection-grayscale-01-0b0c0e" />
          </Link>
          {showActions && (
            <div className="flex items-center gap-1.5 border border-gray-300 rounded-full px-2 py-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 p-0"
                onClick={onMoreClick}
              >
                <img src="/img/header/more.png" alt="더보기" className="w-5 h-auto object-contain" />
              </Button>
              <div className="w-px h-4 bg-gray-300" />
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 p-0"
                onClick={onCloseClick}
              >
                <img src="/img/header/close.png" alt="닫기" className="w-5 h-5 object-contain" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
