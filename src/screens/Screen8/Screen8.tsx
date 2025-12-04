import React from "react";
import { TopSubsection } from "../Mypage/sections/TopSubsection";
import { UiStatusBarSubsection } from "../Mypage/sections/UiStatusBarSubsection";
import { ViewSubsection } from "../Mypage/sections/ViewSubsection";
import { ViewWrapperSubsection } from "../Mypage/sections/ViewWrapperSubsection";
import { DivSubsection } from "../Screen4/sections/DivSubsection";
import { DivWrapperSubsection } from "../Screen4/sections/DivWrapperSubsection";
import { FrameSubsection } from "../Screen4/sections/FrameSubsection";
import { MyContainerWrapperSubsection } from "../Screen4/sections/MyContainerWrapperSubsection";
import { SectionComponentNodeSubsection } from "../Screen4/sections/SectionComponentNodeSubsection";
import { UiStatusBarWrapperSubsection } from "../Screen4/sections/UiStatusBarWrapperSubsection";
import { FrameWrapperSubsection } from "../Screen5/sections/FrameWrapperSubsection";
import { TopWrapperSubsection } from "../Screen5/sections/TopWrapperSubsection";
import { UiStatusBar1Subsection } from "../Screen5/sections/UiStatusBar1Subsection";
import { View1Subsection } from "../Screen5/sections/View1Subsection";
import { View2Subsection } from "../Screen5/sections/View2Subsection";
import { View3Subsection } from "../Screen5/sections/View3Subsection";
import { Frame1Subsection } from "../Screen6/sections/Frame1Subsection";
import { Top1Subsection } from "../Screen6/sections/Top1Subsection";
import { UiStatusBar2Subsection } from "../Screen6/sections/UiStatusBar2Subsection";
import { View4Subsection } from "../Screen6/sections/View4Subsection";
import { View5Subsection } from "../Screen6/sections/View5Subsection";
import { View6Subsection } from "../Screen6/sections/View6Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";

export const Screen8 = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full items-start bg-white"
      data-model-id="40000008:1188578"
    >
      <DivWrapperSubsection />
      <View6Subsection />
      <ViewWrapperSubsection />
      <Frame3Subsection />
      <SectionComponentNodeSubsection />
      <UiStatusBarSubsection />
      <TopWrapperSubsection />
      <FrameWrapperSubsection />
      <UiStatusBar1Subsection />
      <View3Subsection />
      <Top1Subsection />
      <MyContainerWrapperSubsection />
      <TopSubsection />
      <DivSubsection />
      <UiStatusBarWrapperSubsection />
      <View1Subsection />
      <Frame1Subsection />
      <View4Subsection />
      <View5Subsection />
      <UiStatusBar2Subsection />
      <Frame2Subsection />
      <FrameSubsection />
      <ViewSubsection />
      <View2Subsection />

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
        <div className="flex flex-col w-[134px] items-center gap-2.5">
          <div className="w-[134px] h-[5px] bg-black rounded-[100px]" />
        </div>
      </footer>
    </main>
  );
};
