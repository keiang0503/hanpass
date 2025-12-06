import { ChevronRightIcon } from "lucide-react";
import React from "react";

const settingsItems = [
  { label: "알림" },
  { label: "로그인 비밀번호 변경" },
  { label: "6자리 비밀번호(PIN) 변경" },
  { label: "휴대전화번호 변경" },
  { label: "약관" },
  { label: "버전정보" },
  { label: "회원탈퇴" },
];

export const View6Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-1.5 pt-8 pb-0 px-6 w-full">
      <header className="flex items-center gap-1 w-full">
        <div className="flex items-center gap-1 flex-1">
          <h2 className="mt-[-1.00px] text-caption-title-13-b-style text-gray-secondary whitespace-nowrap">
            설정
          </h2>
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        {settingsItems.map((item, index) => (
          <button
            key={index}
            className="flex max-h-16 h-16 items-center gap-1.5 px-0 py-4 w-full border-b border-grayscale-bg-09 last:border-b-0 hover:bg-gray-50 transition-colors"
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
