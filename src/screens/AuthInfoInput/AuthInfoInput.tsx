import { ChevronDownIcon, Edit2Icon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const formFields = [
  {
    id: "name",
    label: "이름",
    value: "홍길동",
    hasEdit: true,
    disabled: false,
    borderColor: "#4c67f1",
  },
  {
    id: "birthdate",
    label: "생년월일",
    value: "19880503",
    hasEdit: false,
    disabled: true,
    borderColor: "#dfe3ec",
  },
];

const genderOptions = [
  {
    value: "male",
    label: "남자",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico26-check-01-4.svg",
  },
  {
    value: "female",
    label: "여자",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico26-check-01-3.svg",
  },
];

const nationalityOptions = [
  {
    value: "foreigner",
    label: "외국인",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico26-check-01-3.svg",
  },
  {
    value: "domestic",
    label: "내국인",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico26-check-01-4.svg",
  },
];

const consentItems = [
  {
    id: "consent1",
    text: "[필수] 서비스 이용 및 개인정보처리 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-10.svg",
  },
  {
    id: "consent2",
    text: "[필수] 개인정보 제 3자 제공 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-11.svg",
  },
  {
    id: "consent3",
    text: "[필수] 출금서비스(은행) 약관 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-down1.svg",
  },
  {
    id: "consent4",
    text: "[필수] 금웅정보조회 이용 동의",
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico16-btn-arrow-right-12.svg",
  },
];

export const AuthInfoInput = (): JSX.Element => {
  const [gender, setGender] = useState("male");
  const [nationality, setNationality] = useState("domestic");
  const [allConsent, setAllConsent] = useState(false);
  const [consents, setConsents] = useState({
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
  });

  const handleAllConsentChange = (checked: boolean) => {
    setAllConsent(checked);
    setConsents({
      consent1: checked,
      consent2: checked,
      consent3: checked,
      consent4: checked,
    });
  };

  const handleConsentChange = (id: string, checked: boolean) => {
    const newConsents = { ...consents, [id]: checked };
    setConsents(newConsents);
    setAllConsent(Object.values(newConsents).every((v) => v));
  };

  return (
    <main
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35202:90978"
    >
      <div className="flex flex-col flex-1">
        <header className="flex flex-col w-full bg-white">
          <div className="flex h-6 items-center justify-between px-2.5 py-1 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center">
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    9
                  </span>
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] text-black tracking-[0] leading-[normal] font-medium text-sm">
                    :
                  </span>
                  <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    41
                  </span>
                </div>
              </div>
              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Sat Jun 11
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[18px] h-2.5">
                <img
                  className="h-[40.00%] top-[-102560.00%] left-[-7161.11%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-1-2.png"
                />
                <img
                  className="h-[60.00%] top-[-102580.00%] left-[-7133.33%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-2-3.png"
                />
                <img
                  className="h-[80.00%] top-[-102600%] left-[-7105.56%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-3-3.png"
                />
                <img
                  className="h-full top-[-102620.00%] left-[-7077.78%] absolute w-[16.67%]"
                  alt="Bar"
                  src="/img/bar-4-2.png"
                />
              </div>

              <div className="relative w-4 h-[11.62px] overflow-hidden">
                <img
                  className="absolute w-[31.30%] h-[30.17%] top-[-88244.04%] left-[-8171.93%]"
                  alt="Bar"
                  src="/img/bar-1-3.png"
                />
                <img
                  className="absolute w-[62.57%] h-[34.44%] top-[-88280.15%] left-[-8187.50%]"
                  alt="Bar"
                  src="/img/bar-2-4.png"
                />
                <img
                  className="absolute w-[100.01%] h-[43.03%] top-[-88313.87%] left-[-8206.27%]"
                  alt="Bar"
                  src="/img/bar-3-4.png"
                />
              </div>

              <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                100%
              </span>

              <div className="relative w-6 h-3 overflow-hidden">
                <img
                  className="absolute w-[87.51%] h-full top-[-85508.33%] left-[-5737.50%]"
                  alt="Border"
                  src="/img/border-2.png"
                />
                <div className="absolute w-[70.83%] h-[66.67%] top-[16.67%] left-[8.33%] bg-black rounded-[1px]" />
                <img
                  className="absolute w-[8.33%] h-[33.33%] top-[-85475.00%] left-[-5645.83%]"
                  alt="Cap"
                  src="/img/cap-2.png"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex h-[54px] items-center justify-between px-5 py-0 bg-white">
          <div className="flex items-center">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/sCCrT5uL/img/wechat-hd-6.svg"
            />
          </div>

          <img
            className="h-8 w-[87px]"
            alt="Mini"
            src="https://c.animaapp.com/sCCrT5uL/img/mini-7@2x.png"
          />
        </div>

        <section className="flex flex-col bg-white px-6 pt-[22px]">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            본인인증을 위한 정보를
            <br />
            입력해 주세요
          </h1>
        </section>

        <section className="flex flex-col items-center gap-10 pt-[42px] pb-0 px-0 w-full">
          <div className="flex flex-col items-start gap-9 px-6 py-0 w-full">
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col items-start gap-1.5 w-full"
              >
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="h-[17px] w-full">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          {field.label}
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div
                      className="flex flex-col min-h-[42px] items-start gap-2.5 w-full"
                      style={{
                        backgroundColor: field.disabled ? "#f7f7f8" : "transparent",
                      }}
                    >
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                            <div className="flex items-center gap-2.5 flex-1">
                              <div className="flex items-center gap-2 flex-1">
                                <Input
                                  defaultValue={field.value}
                                  disabled={field.disabled}
                                  className="flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                                  style={{
                                    color: field.disabled ? "#5e616b" : "#0b0c0e",
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          {field.hasEdit && (
                            <div className="inline-flex items-center justify-end gap-2.5 pl-0 pr-2 py-0">
                              <Edit2Icon className="w-[18px] h-[18px]" />
                            </div>
                          )}
                        </div>

                        <div
                          className="w-full h-0.5"
                          style={{ backgroundColor: field.borderColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="h-[17px] w-full">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          성별
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 w-full">
                <div className="flex items-center flex-1 rounded-[10px] overflow-hidden border border-solid border-[#dfe3ec]">
                  <button
                    onClick={() => setGender("male")}
                    className={`flex min-h-[46px] items-center justify-center flex-1 ${
                      gender === "male" ? "bg-[#e9f1ff]" : "bg-[#f7f7f8]"
                    }`}
                  >
                    <div className="flex w-[91px] items-center justify-center gap-[11px] px-3.5 py-2.5">
                      <img
                        className="w-[26px] h-[26px]"
                        alt="Check"
                        src={
                          gender === "male"
                            ? genderOptions[0].icon
                            : genderOptions[1].icon
                        }
                      />

                      <div className="inline-flex flex-col items-center justify-center gap-2.5">
                        <div
                          className={`mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                            gender === "male" ? "text-[#a2a8bf]" : "text-[#d3d6e2]"
                          }`}
                        >
                          남자
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="w-px bg-[#dfe3ec] self-stretch" />

                  <button
                    onClick={() => setGender("female")}
                    className={`flex min-h-[46px] items-center justify-center gap-[11px] px-3.5 py-2.5 flex-1 ${
                      gender === "female" ? "bg-[#e9f1ff]" : "bg-[#f7f7f8]"
                    }`}
                  >
                    <img
                      className="w-[26px] h-[26px]"
                      alt="Check"
                      src={
                        gender === "female"
                          ? genderOptions[0].icon
                          : genderOptions[1].icon
                      }
                    />

                    <div className="inline-flex flex-col items-center justify-center gap-2.5">
                      <div
                        className={`mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                          gender === "female" ? "text-[#a2a8bf]" : "text-[#d3d6e2]"
                        }`}
                      >
                        여자
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="h-[17px] w-full">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          국적
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 w-full">
                <div className="flex items-center flex-1 rounded-[10px] overflow-hidden border border-solid border-[#dfe3ec]">
                  <button
                    onClick={() => setNationality("foreigner")}
                    className={`gap-[11px] px-3.5 py-2.5 flex min-h-[46px] items-center justify-center flex-1 ${
                      nationality === "foreigner" ? "bg-[#e9f1ff]" : "bg-[#f7f7f8]"
                    }`}
                  >
                    <img
                      className="w-[26px] h-[26px]"
                      alt="Check"
                      src={
                        nationality === "foreigner"
                          ? nationalityOptions[1].icon
                          : nationalityOptions[0].icon
                      }
                    />

                    <div className="inline-flex flex-col items-center justify-center gap-2.5">
                      <div
                        className={`mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                          nationality === "foreigner"
                            ? "text-[#a2a8bf]"
                            : "text-[#d3d6e2]"
                        }`}
                      >
                        외국인
                      </div>
                    </div>
                  </button>

                  <div className="w-px bg-[#dfe3ec] self-stretch" />

                  <button
                    onClick={() => setNationality("domestic")}
                    className={`gap-[11px] px-3.5 py-2.5 flex min-h-[46px] items-center justify-center flex-1 ${
                      nationality === "domestic" ? "bg-[#e9f1ff]" : "bg-[#f7f7f8]"
                    }`}
                  >
                    <img
                      className="w-[26px] h-[26px]"
                      alt="Check"
                      src={
                        nationality === "domestic"
                          ? nationalityOptions[1].icon
                          : nationalityOptions[0].icon
                      }
                    />

                    <div className="inline-flex flex-col items-center justify-center gap-2.5">
                      <div
                        className={`mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                          nationality === "domestic"
                            ? "text-[#a2a8bf]"
                            : "text-[#d3d6e2]"
                        }`}
                      >
                        내국인
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="h-[17px] w-full">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        통신사
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full">
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="flex items-center flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <div className="w-fit text-[#acb2c1] whitespace-nowrap mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                                선택해주세요
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-[25px] h-[41px] mt-[-0.50px] mb-[-0.50px] relative">
                          <ChevronDownIcon className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_7px)] w-[15px] h-[9px]" />
                        </div>
                      </div>

                      <div className="w-full h-0.5">
                        <div className="w-full h-px bg-[#dfe3ec]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="h-[17px] w-full">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                        휴대폰번호
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full">
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="flex items-center flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                placeholder="입력해주세요"
                                className="flex-1 text-[#acb2c1] mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-0.5">
                        <div className="w-full h-px bg-[#dfe3ec]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-6 py-0 w-full">
            <Card className="flex-1 bg-white rounded-lg border border-solid border-[#dfe3ec]">
              <CardContent className="p-0">
                <div className="flex items-start w-full">
                  <button
                    onClick={() => handleAllConsentChange(!allConsent)}
                    className="flex items-center gap-2 px-4 py-3 flex-1 border-b border-solid border-[#dfe3ec]"
                  >
                    <img
                      className="w-[26px] h-[26px]"
                      alt="Check"
                      src="https://c.animaapp.com/sCCrT5uL/img/ico26-check-01-5.svg"
                    />

                    <div className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#1c253f] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] text-left">
                      모두 동의합니다.
                    </div>
                  </button>
                </div>

                <div className="flex flex-col items-start gap-[22px] px-2.5 py-[30px] w-full">
                  {consentItems.map((item) => (
                    <div key={item.id} className="flex items-start w-full">
                      <button
                        onClick={() =>
                          handleConsentChange(
                            item.id,
                            !consents[item.id as keyof typeof consents],
                          )
                        }
                        className="flex items-start gap-1.5 flex-1"
                      >
                        <img
                          className="w-5 h-5"
                          alt="Check"
                          src="https://c.animaapp.com/sCCrT5uL/img/ico20-check-8.svg"
                        />

                        <div className="flex items-start justify-center gap-[5px] px-0 py-px flex-1">
                          <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] text-left">
                            {item.text}
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2.5 px-0 py-[3px]">
                          <img
                            className="w-4 h-4"
                            alt="Btn arrow"
                            src={item.icon}
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <footer className="flex flex-col px-6 pb-0">
        <div className="flex flex-col gap-4">
          <Button
            className="min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl h-auto"
            disabled
          >
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </span>
          </Button>

          <div className="flex flex-col items-center py-2 bg-white">
            <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </main>
  );
};
