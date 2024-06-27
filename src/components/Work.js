import { Tag } from "./Tag";
import { WorkBox } from "./WorkBox";
import { WorkBoxImg } from "./WorkBoxImg";

// flex-col items-center md:gap-12 sm:gap-6 bg-#FFFFFF pt-10
export const Work = () => {
  return (
    <div className="flex flex-col items-center md:gap-12 sm:gap-6 bg-#FFFFFF pb-20  mt-[96px]">
      <Tag text="Work" />

      <h1 className="text-sm font-light">
        Some of the noteworthy projects I have built:
      </h1>
      <div className="grid  md:grid-cols-2 shadow-md rounded-xl">
        <WorkBoxImg />
        <WorkBox />
      </div>
      <div className="grid  md:grid-cols-2 shadow-md">
        <WorkBoxImg />
        <WorkBox />
      </div>
      <div className="grid  md:grid-cols-2  shadow-md">
        <WorkBoxImg />
        <WorkBox />
      </div>
    </div>
  );
};
