import { ModelNavItems } from "@/utils/interfaces/ModelNavItems";
import Link from "next/link";
import React from "react";

interface NavProps extends ModelNavItems{
  handleIsSelected: (positionNav:number)=>void
  position:number
  isSelected:number
}
const CardNavItems:React.FC<NavProps> = ({ name, link,handleIsSelected,position,
  isSelected }) => {
    console.log(isSelected)
    console.log(position)
  return (
    <li className="w-full" onClick={()=>handleIsSelected(position)}>
      <Link href={`${link}`} >
        <div className="relative w-full group cursor-pointer h-full py-2 xl:py-4 ">
          <span className="w-full font-bold text-[15px] text_color xl:text-dark-text ">
            {name}{" "}
          </span>
          <div className={`w-[0%]  -bottom-1 transition-all ease-in-out duration-300 group-hover:w-full absolute h-[3px] ${position===isSelected ? "bg-light-primary w-full" :""} bg-light-primary`}></div>
        </div>
      </Link>
    </li>
  );
};

export default CardNavItems;
