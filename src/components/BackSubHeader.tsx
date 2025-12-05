import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface BackSubHeaderProps {
  backTo?: string;
}

export const BackSubHeader = ({
  backTo = "/",
}: BackSubHeaderProps): JSX.Element => {
  return (
    <nav className="flex flex-col items-start relative self-stretch w-full flex-none">
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-none">
        <div className="nav-header relative self-stretch w-full flex items-center px-1.5 bg-white">
          <Link to={backTo} className="flex items-center justify-center w-8 h-8">
            <ChevronLeftIcon className="w-8 h-8 text-variable-collection-grayscale-01-0b0c0e" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
