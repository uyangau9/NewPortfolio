import Tech from "../assets/Tech.svg";
import Type from "../assets/Type.svg";
import React from "../assets/React.svg";
import Next from "../assets/Next.svg";
import Node from "../assets/Node.svg";
import Ex from "../assets/Ex.svg";
import Nest from "../assets/Nest.svg";
import Socket from "../assets/Socket.svg";
import Post from "../assets/Post.svg";
import Mongo from "../assets/Mongo.svg";
import Sass from "../assets/Sass.svg";
import Tail from "../assets/Tail.svg";
import Figma from "../assets/Figma.svg";
import Cypress from "../assets/Cypress.svg";
import Story from "../assets/Story.svg";
import Git from "../assets/Git.svg";
export const Skills = () => {
  return (
    <div className="m-9 mt-20 mb-24">
      <div className=" flex justify-center">
        <button className="rounded-full bg-gray-200 text-gray-600 w-[105px] h-[28px] mt-12 items-center">
          Skills
        </button>
      </div>
      <p className=" text-gray-600 mt-8 ">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap gap-10 mt-8 sm:w-[343px] sm:min-h-[788px] md:min-w-[1216px] md:min-h-[248px]">
        <img src={Tech} />
        <img src={Type} />
        <img src={React} />
        <img src={Next} />
        <img src={Node} />
        <img src={Ex} />
        <img src={Nest} />
        <img src={Socket} />
        <img src={Post} />
        <img src={Mongo} />
        <img src={Sass} />
        <img src={Tail} />
        <img src={Figma} />
        <img src={Cypress} />
        <img src={Story} />
        <img src={Git} />
      </div>
    </div>
  );
};
