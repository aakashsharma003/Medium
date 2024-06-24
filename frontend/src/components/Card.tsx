import { ReactNode } from "react";
import { Button } from "./Button";

interface Subheading {
  heading: string;
  value: number;
}

interface ButtonProps {
  innertext?: string;
  style?: string;
  icon?:ReactNode;
}

interface CardProps {
  heading: string;
  subheadings: Subheading[];
  buttons: ButtonProps[];
}

const Card = ({
  heading, subheadings, buttons
}:CardProps) => {
  return (
    <div className="bg-white lg:h-[25%] text-black border border-gray-200 p-3 rounded-md m-3 flex justify-between items-center flex-col">
      <div className="font-bold text-md md:text-xl lg:text-2xl text-center">{heading}</div>
      {subheadings && subheadings?.map((subheading, index) => (
        <div key={index} className="flex justify-between w-full">
          <div>{subheading.heading}</div>
          <div className="font-bold text-md md:text-xl lg:text-2xl">{subheading.value}</div>
        </div>
      ))}
      {buttons && buttons?.map((button, index) => (
        <Button key={index} innertext={button.innertext || ""} style={button.style || ""} icon={button.icon || " "} />
      ))}
    </div>
  );
};

export default Card;
