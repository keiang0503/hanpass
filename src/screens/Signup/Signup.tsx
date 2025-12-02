import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  MoreVerticalIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

const termsData = [
  {
    id: "term1",
    label: "[필수] 전자금융거래 이용약관",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term2",
    label: "[필수] 서비스 이용약관 동의",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term3",
    label: "[필수] 개인정보 수집 및 이용동의",
    required: true,
    checked: true,
    expandable: true,
    subItems: [
      {
        id: "term3-1",
        label: "[필수] 개인(신용)정보 수집･이용 동의",
        checked: true,
      },
      {
        id: "term3-2",
        label: "[필수] 고유식별정보 수집･이용 동의",
        checked: true,
      },
      {
        id: "term3-3",
        label: "[필수] 개인(신용)정보 제공 동의",
        checked: true,
      },
    ],
  },
  {
    id: "term4",
    label: "[필수] 카드 서비스 약관",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term5",
    label: "[필수] 오픈뱅킹 금융정보조회 약관",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term6",
    label: "[선택] 위치기반 서비스 이용약관",
    required: false,
    checked: false,
    expandable: false,
  },
];

export const Signup = (): JSX.Element => {
  const [expandedTerms, setExpandedTerms] = useState<string[]>(["term3"]);

  const toggleExpand = (termId: string) => {
    setExpandedTerms((prev) =>
      prev.includes(termId)
        ? prev.filter((id) => id !== termId)
        : [...prev, termId],
    );
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45654"
    >
      <header className="flex items-center justify-between px-4 py-4 bg-white">
        <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
          <Link to="/">
            <ChevronLeftIcon className="h-6 w-6" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <MoreVerticalIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <CircleIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex flex-col flex-1 px-6">
        <section className="pt-6 pb-8">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            Welcome,
            <br />
            이용약관에 동의해주세요.
          </h1>
        </section>

        <section className="flex-1 pb-6">
          <div className="bg-white rounded-lg border border-[#dfe3ec]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#dfe3ec]">
              <Checkbox
                id="agree-all"
                className="h-[26px] w-[26px] rounded-md border-2"
              />
              <label
                htmlFor="agree-all"
                className="flex-1 text-[#1c253f] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] cursor-pointer"
              >
                모두 동의합니다.
              </label>
            </div>

            <div className="flex flex-col gap-[22px] px-2.5 py-[30px]">
              {termsData.map((term) => (
                <div key={term.id} className="flex flex-col gap-[18px]">
                  <div className="flex items-start">
                    <div className="flex items-start gap-1.5 flex-1">
                      <Checkbox
                        id={term.id}
                        checked={term.checked}
                        className="h-5 w-5 mt-0.5"
                      />
                      <label
                        htmlFor={term.id}
                        className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] cursor-pointer"
                      >
                        {term.label}
                      </label>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto w-auto p-0"
                        onClick={() => term.expandable && toggleExpand(term.id)}
                      >
                        {term.expandable ? (
                          expandedTerms.includes(term.id) ? (
                            <ChevronDownIcon className="h-4 w-4 text-[#85888e]" />
                          ) : (
                            <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                          )
                        ) : (
                          <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {term.expandable &&
                    expandedTerms.includes(term.id) &&
                    term.subItems && (
                      <div className="flex flex-col gap-[18px] pl-[26px]">
                        {term.subItems.map((subItem) => (
                          <div key={subItem.id} className="flex items-start">
                            <div className="flex items-start gap-1.5 flex-1">
                              <Checkbox
                                id={subItem.id}
                                checked={subItem.checked}
                                className="h-4 w-4 mt-1"
                              />
                              <label
                                htmlFor={subItem.id}
                                className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] cursor-pointer"
                              >
                                {subItem.label}
                              </label>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-auto w-auto p-0"
                              >
                                <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col px-6 pb-8">
        <Button className="h-auto min-h-[54px] rounded-xl bg-[#b7ccf7] hover:bg-[#a3bef5] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
          다음
        </Button>
        <div className="h-4" />
        <div className="flex justify-center py-2">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
