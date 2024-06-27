import Icon from "../assets/Icon.svg";
import Pic from "../assets/Pic.png";
import { MapPin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Figma } from "lucide-react";
import { Sun } from "lucide-react";
import { PicwShad } from "./PicwShad";
import { Tag } from "./Tag";
import { Svg } from "./Svg";

const SS = "<SS/>";

export const Main = () => {
  return (
    <div className=" m-9  md:ml-[112px] md:mr-[112px]">
      <div className="flex justify-between">
        <h1 className="text-4xl text-gray-900 font-bold">{SS}</h1>
        <div className="md:flex gap-6 sm:max-w-[640px] hidden text-gray-600 w-[554px] h-[36px] items-center">
          <button>About</button>
          <button>Work</button>
          <button>Testimonials</button>
          <button>Contact</button>
          <button>|</button>
          <Sun />
          <Tag text="About me"/>
        </div>
        <img className="md:hidden " src={Icon} />
      </div>
      <div className="md:flex flex-row-reverse mt-16 md:justify-between ">
        <PicwShad img={Pic}/>
        <div className="max-w-[768px] ">
          <p className="text-4xl font-bold mt-10 md:mt-0 ">Hi, I’m Sagar 👋</p>
          <p className="mt-3 text-gray-600  ">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>

          <div className="mt-12 flex">
            <MapPin />
            <p className="text-gray-600">Ahmedabad, India</p>
          </div>
          <div className="mt-2 flex items-center gap-2 ml-[8px]">
            <p className="size-2 border-0 rounded-full bg-[#10B981]"></p>
            <p className="text-gray-600">Available for new projects</p>
          </div>
          <Svg/>
        </div>
      </div>
    </div>
  );
};
export default Main;
