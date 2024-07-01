
import { Tag } from "./Tag";
import { Mail } from "lucide-react";
import { Copy } from "lucide-react";
import { Phone } from "lucide-react";
import { Svg } from "./Svg";


export const Contact = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Tag text="Get in touch" />
      <p className="w-[343px] px-4 font-light text-gray-600">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex gap-4 mt-6">
        <Mail />
        <p className="font-bold ">Uyangau9@gmail.com</p>
        <Copy />
      </div>
      <div className="flex gap-4">
      <Phone />
      <p className="font-bold">
        +1 773-762-9742
      </p>
      <Copy/>
      </div>
     <p className="">
     You may also find me on these platforms!
     </p>
     <Svg/>
    </div>
  );
};
