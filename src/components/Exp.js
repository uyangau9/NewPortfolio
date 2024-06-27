import { Upworkbox } from "./Upworkbox";
import { Tag } from "./Tag";

const arr1 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  
    "Sed quis justo ac magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  const arr2 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  
    "Sed quis justo ac magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  const arr3 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  
    "Sed quis justo ac magna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  
  const data = [
    {
      position: "Sr. Frontend Developer",
      date: "Nov 2021 - Present",
      text: arr1,
    },
  
    {
      position: "Team Lead",
      date: "Jul 2017 - Oct 2021",
      text: arr2,
    },
    {
      position: "Full Stack Developer",
      date: "Dec 2015 - May 2017",
      text: arr3,
    },
  ];

export const Exp = () => {
  return (
    <div className="flex flex-col items-center md:gap-12 sm:gap-6 bg-gray-50 pb-20">
      <div className="flex mx-auto max-w-[1440px]  flex-col items-center justify-center px-[96px] py-[80px]">
        <div className="flex justify-center">
          <Tag text="Experience" />
        </div>
        <h1 className="pt-8">
          Here is a quick summary of my most recent experiences:
        </h1>
      </div>
      {
        data.map((el) => {
            return  <Upworkbox date={el.date} position={el.position} text={el.text}  />
        })
      }
     
    </div>
  );
};


