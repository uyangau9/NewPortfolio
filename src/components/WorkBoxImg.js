import WorkPic from "../assets/image.png";
export const WorkBoxImg = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-[#FFFFFF] h-full">
      <div className="bg-gray-50 rounded-xl absolute -z-10 shadow-md"></div>
      <img
        className="w-[279px] h-[192px] md:w-[420px] md:h-[310px] rounded-xl"
        src={WorkPic}
      />
    </div>
  );
};
