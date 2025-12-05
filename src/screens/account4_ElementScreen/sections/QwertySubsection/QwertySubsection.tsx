import React from "react";

const topRowKeys = [
  { letter: "Q", left: "left-0" },
  { letter: "W", left: "left-[10.14%]" },
  { letter: "E", left: "left-[20.27%]" },
  { letter: "R", left: "left-[30.41%]" },
  { letter: "T", left: "left-[40.55%]" },
  { letter: "Y", left: "left-[50.68%]" },
  { letter: "U", left: "left-[60.82%]" },
  { letter: "I", left: "left-[70.96%]" },
  { letter: "O", left: "left-[81.10%]" },
  { letter: "P", left: "left-[91.51%]" },
];

const middleRowKeys = [
  { letter: "A", left: "left-0" },
  { letter: "S", left: "left-[11.31%]" },
  { letter: "D", left: "left-[22.63%]" },
  { letter: "F", left: "left-[33.94%]" },
  { letter: "G", left: "left-[45.26%]" },
  { letter: "H", left: "left-[56.57%]" },
  { letter: "J", left: "left-[67.89%]" },
  { letter: "K", left: "left-[79.20%]" },
  { letter: "L", left: "left-[90.52%]" },
];

const bottomRowKeys = [
  { letter: "Z", left: "left-[15.34%]" },
  { letter: "X", left: "left-[25.48%]" },
  { letter: "C", left: "left-[35.62%]" },
  { letter: "V", left: "left-[45.75%]" },
  { letter: "B", left: "left-[55.89%]" },
  { letter: "N", left: "left-[66.03%]" },
  { letter: "M", left: "left-[76.16%]" },
];

export const QwertySubsection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[291px] bg-[#d3d6e2]">
      <div className="w-full h-full flex">
        <div className="flex-1 flex flex-col px-0 py-1 items-center backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
          <div className="w-[365px] h-[42px] relative mt-1.5">
            {topRowKeys.map((key, index) => (
              <div
                key={`top-${index}`}
                className={`absolute w-[9.04%] h-full top-0 ${key.left}`}
              >
                <img
                  className="absolute w-[93.94%] h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/UrLjfz9Z/img/keycap-19.svg"
                />
                <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                  {key.letter}
                </div>
              </div>
            ))}
          </div>

          <div className="w-[327px] mt-3 h-[42px] relative">
            {middleRowKeys.map((key, index) => (
              <div
                key={`middle-${index}`}
                className={`absolute w-[10.09%] h-full top-0 ${key.left}`}
              >
                <img
                  className="absolute w-[93.94%] h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/UrLjfz9Z/img/keycap-10.svg"
                />
                <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                  {key.letter}
                </div>
              </div>
            ))}
          </div>

          <div className="w-[365px] mt-[11px] h-[42px] relative">
            <img
              className="absolute w-[11.51%] h-full top-0 left-[88.49%]"
              alt="Key"
              src="https://c.animaapp.com/UrLjfz9Z/img/key-3@2x.png"
            />

            {bottomRowKeys.map((key, index) => (
              <div
                key={`bottom-${index}`}
                className={`absolute w-[9.04%] h-full top-0 ${key.left}`}
              >
                <img
                  className="w-[93.92%] absolute h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/UrLjfz9Z/img/keycap-2.svg"
                />
                <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                  {key.letter}
                </div>
              </div>
            ))}

            <div className="absolute w-[11.51%] h-full top-0 left-0">
              <img
                className="w-full absolute h-full top-0 left-0"
                alt="Keycap"
                src="https://c.animaapp.com/UrLjfz9Z/img/keycap-9.svg"
              />
              <img
                className="absolute w-[47.59%] h-[38.10%] top-[30.95%] left-[26.19%]"
                alt="Arrow"
                src="https://c.animaapp.com/UrLjfz9Z/img/arrow-1.svg"
              />
            </div>
          </div>

          <div className="w-[364px] mt-[11px] ml-[1.0px] h-[42px] relative">
            <div className="absolute w-[24.45%] h-full top-0 left-[76.10%]">
              <img
                className="w-[97.75%] absolute h-full top-0 left-0"
                alt="Keycap"
                src="https://c.animaapp.com/UrLjfz9Z/img/keycap.svg"
              />
              <div className="absolute w-[97.75%] h-[45.24%] top-[26.19%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.05px] leading-[normal]">
                return
              </div>
            </div>

            <div className="absolute w-[49.73%] h-full top-0 left-[25.27%]">
              <img
                className="w-[98.90%] absolute h-full top-0 left-0"
                alt="Keycap"
                src="https://c.animaapp.com/UrLjfz9Z/img/keycap-1.svg"
              />
              <div className="w-[78.45%] top-[26.19%] left-[9.94%] absolute h-[45.24%] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.30px] leading-[normal]">
                space
              </div>
            </div>

            <div className="absolute w-[12.09%] h-full top-0 left-0">
              <div className="w-[95.45%] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] absolute h-full top-0 left-0" />
              <div className="w-[95.45%] top-[28.57%] left-0 absolute h-[45.24%] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.30px] leading-[normal]">
                123
              </div>
            </div>

            <img
              className="absolute w-[11.54%] h-full top-0 left-[12.64%]"
              alt="Key"
              src="https://c.animaapp.com/UrLjfz9Z/img/key-2@2x.png"
            />
          </div>
        </div>
      </div>

      {/* 지구본+마이크 아이콘 영역 */}
      <img
        className="absolute w-full h-[75px] bottom-0 left-0"
        alt="Group"
        src="https://c.animaapp.com/UrLjfz9Z/img/group.svg"
      />
    </section>
  );
};
