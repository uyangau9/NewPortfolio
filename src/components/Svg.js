import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Figma} from "lucide-react";
export const Svg = (props) => {
  return (
    <div className="flex mt-12 gap-5 text-gray-600">
    <Github />
    <Twitter />
    <Figma />
  </div>
  );
};
