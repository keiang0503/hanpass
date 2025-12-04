import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const rewardData = [
  {
    label: "쿠폰 금액",
    amount: "10,000 KRW",
    image: "https://c.animaapp.com/pWVLYNoL/img/------1@4x.png",
    imageWidth: "w-[49.01px]",
    imageHeight: "h-[12.14px]",
  },
  {
    label: "캐시백 금액",
    amount: "10,000 KRW",
    image: "https://c.animaapp.com/pWVLYNoL/img/-------1@4x.png",
    imageWidth: "w-[60.75px]",
    imageHeight: "h-[12.18px]",
  },
];

const friendsData = [
  {
    id: 1,
    identifier: "funky_oneoneoneone@naver.com",
    amount: "5,000 KRW",
    tasks: [
      { label: "Sign Up", status: "completed" },
      { label: "Add Bank Account", status: "completed" },
      { label: "First Transfer", status: "pending" },
    ],
    defaultExpanded: true,
  },
  {
    id: 2,
    identifier: "funky_oneoneoneone@naver.com",
    amount: "10,000 KRW",
    tasks: [],
    defaultExpanded: false,
  },
  {
    id: 3,
    identifier: "01025929756",
    amount: "5,000 KRW",
    tasks: [
      { label: "Sign Up", status: "completed" },
      { label: "Add Bank Account", status: "completed" },
      { label: "First Transfer", status: "pending" },
    ],
    defaultExpanded: true,
  },
];

export const FriendsOverviewSection = (): JSX.Element => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    friendsData.reduce(
      (acc, friend) => {
        acc[friend.id] = friend.defaultExpanded;
        return acc;
      },
      {} as Record<number, boolean>,
    ),
  );

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="flex flex-col items-start justify-end pt-[34px] pb-4 px-6 w-full">
      <div className="flex flex-col items-start gap-3.5 w-full">
        <header className="flex flex-col w-full">
          <div className="flex items-start gap-2 w-full">
            <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
              <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                누적 리워드 금액
              </h2>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="flex items-start gap-1.5 px-5 py-[22px] w-full bg-[#f4f7fd] rounded-xl">
            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  {rewardData.map((reward, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-0.5 w-full"
                    >
                      <div className="flex items-start gap-4 w-full">
                        <img
                          className={`${reward.imageWidth} ${reward.imageHeight}`}
                          alt={reward.label}
                          src={reward.image}
                        />
                        <div className="flex items-center justify-end gap-0.5 flex-1">
                          <div className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                            {reward.amount}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 pt-3 pb-0 px-0 w-full">
        <div className="flex items-center justify-center gap-2 pt-5 pb-3 px-0 w-full bg-white">
          <div className="flex items-center gap-1 flex-1">
            <p className="w-fit mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap [font-style:var(--body-14-r-font-style)]">
              내가 초대한 친구 : 총
            </p>
            <div className="inline-flex items-center">
              <span className="w-fit mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0d56e4] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                3
              </span>
              <span className="w-fit mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap [font-style:var(--body-14-r-font-style)]">
                명
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2.5 w-full">
        {friendsData.map((friend) => (
          <Card
            key={friend.id}
            className="w-full bg-white rounded-xl overflow-hidden border border-solid border-[#dfe3ec]"
          >
            <CardContent className="flex flex-col items-center gap-2.5 p-5">
              <div className="flex flex-col items-start gap-1 w-full">
                <button
                  onClick={() => toggleCard(friend.id)}
                  className="flex items-center gap-1 w-full cursor-pointer bg-transparent border-0 p-0"
                >
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <div className="flex items-center gap-2.5 w-full">
                      <div className="[display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0b0c0e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--caption-title-13-r-font-style)]">
                        {friend.identifier}
                      </div>
                    </div>
                  </div>
                  {expandedCards[friend.id] ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>

                <div className="flex items-center gap-0.5 w-full">
                  <div className="text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] flex-1 mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] [font-style:var(--title-16-b-font-style)]">
                    {friend.amount}
                  </div>
                </div>
              </div>

              {expandedCards[friend.id] && friend.tasks.length > 0 && (
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-3.5 w-full bg-[#f7f7f8] rounded-xl">
                  {friend.tasks.map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="flex items-center gap-3 w-full"
                    >
                      <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        {task.label}
                      </div>
                      <div className="inline-flex items-center gap-1.5">
                        <Badge
                          className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-[50px] rotate-180 h-auto ${
                            task.status === "completed"
                              ? "bg-[#dbe5f8]"
                              : "bg-[#e9e9e9]"
                          }`}
                        >
                          <span
                            className={`w-fit mt-[-1.00px] -rotate-180 font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] whitespace-nowrap [font-style:var(--navigation-12-r-font-style)] ${
                              task.status === "completed"
                                ? "text-[#0d56e4]"
                                : "text-[#85888e]"
                            }`}
                          >
                            {task.status === "completed" ? "완료" : "미진행"}
                          </span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
