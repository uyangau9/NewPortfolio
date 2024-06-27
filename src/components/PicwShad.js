export const PicwShad = (props) => {
  return (
    <div className="relative">
                <div className="  bg-gray-200 min-w-[320px] h-[360px] absolute top-8 left-8 -z-10" ></div>
                <img className=" border-8 border-white min-w-[320px] h-[360px]  " src={props.img } />
            </div>
);
};

