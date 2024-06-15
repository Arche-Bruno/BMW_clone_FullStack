"use client"
import { ModelImgsSection } from "@/utils/interfaces/ModelNavItems";
import Image from "next/image";
import React, { useState } from "react";
import ButtonCard from "./Elements_cards/Button_card";

const Card_imgSection = ({
  smallTitle,
  bigTitle,
  buttonLabel,
  imgContent,
  imgContent_mobile
}: ModelImgsSection) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
// 
  return (
    <div className="full">
      <div
        className="full relative z-40 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         
        <Image src={imgContent_mobile} alt="img_content" className="w-full mb-14  lg:hidden" />
        
        <Image src={imgContent} alt="img_content" className="w-full hidden lg:block" />
       
        <div
          className={`absolute inset-0 w-[100%] ${
            isHovered ? "bg-black/30 " : "bg-black/70 "
          } transition_effect `}
        ></div>
        <div className="absolute mx-auto lg:mx-0 w-[90%] lg:w-[60%] bottom-[-4%] sm:bottom-[15%] lg:bottom-[2%] xl:bottom-[0%] 2xl:bottom-2  transform z-50 right-0 left-[0%] lg:left-[10%] xl:left-[5%]  group">
        <div className="relative p-8">
        <div
          className={`absolute inset-0 w-[0%] group-hover:w-full bg-black/70 transition_effect `}
        ></div>
        <div className="flex flex-col items-start gap-8 z-40 relative">
            <div className="flex flex-col gap-2">
              <span className="small_text text-dark-text">{smallTitle}</span>
              <h2 className="big_text text-dark-text">{bigTitle}</h2>
            </div>
            <div className="content_btn_light">
              <ButtonCard textBtn={buttonLabel}></ButtonCard>
            </div>
          </div>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default Card_imgSection;
