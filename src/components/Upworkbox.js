import upwork from "../assets/Upwork.svg";

export const Upworkbox = (props) => {
  return (
    <div className="sm:w-[346px] sm:h-[372px] md:w-[896px] md:h-[288px] shadow-md rounded-md md:flex bg-white">
      <div className="p-8 md:flex w-full">
        <div className="md:flex">
          <img className=" max-w-[102px] max-h-[28px]" src={upwork}></img>
        </div>
        <div className="flex flex-col ml-0 justify-between w-full md:flex-row-reverse md:ml-20">
          <p className="text-sm mt-3">{props.date}</p>
          <div>
            <p className="font-bold mt-3">{props.position}</p>
            <div className="text-sm mt-3 font-light">
              <ul>
                {props.text.map((element) => {
                  return <li className="list-disc">{element}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
