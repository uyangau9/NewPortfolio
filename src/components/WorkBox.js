import { Tag } from "./Tag";

export const WorkBox = () => {
  return (
    <div className=" flex flex-col items-center sm:w-[343px] sm:h-[516px] md:w-[576px] md:h-[480px] rounded-md md:flex bg-white ">
      <div className=" items-center">
        <h1 className="font-bold mt-[32px] flex justify-center md:justify-start px-10">Fiskil</h1>
        <p className="font-light leading-6 text-gray-600 px-10 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
      </div>
      <div className="flex flex-wrap px-10 gap-3 mt-6">
        <div className="md:flex space-x-2 ">
          <Tag  text="React" />
          <Tag text="Next.js" />
        </div>
        <div className="md:flex space-x-2 ">
          <Tag text="Typescript" />
          <Tag text="Nest.js" />
        </div>
        <div className="md:flex space-x-2 ">
          <Tag text="PostgreSQL" />
          <Tag text="TailwindCSS" />
        </div>
        <div className="md:flex space-x-2 ">
          <Tag text="Figma" />
          <Tag text="Cypress" />
        </div>
        <div className="md:flex space-x-2 ">
          <Tag text="Storybook" />
          <Tag text="Git" />
        </div>
      </div>
    </div>
  );
};
