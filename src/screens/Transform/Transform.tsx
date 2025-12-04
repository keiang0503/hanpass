import { ContainerSubsection } from "./sections/ContainerSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";

export const Transform = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen items-center gap-6 transform-bg relative transform-min-width"
      data-model-id="3:38742"
    >
      <FrameSubsection />
      <ContainerSubsection />
    </div>
  );
};
