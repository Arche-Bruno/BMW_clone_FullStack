import { ModelServices_main } from "@/utils/interfaces/ModelNavItems";
import React from "react";
import ButtonCard from "./Elements_cards/Button_card";

const Card_services = ({ title, ICON, buttonLabel }: ModelServices_main) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-[80px] text-light-text dark:text-dark-text">
        <ICON />
      </div>
      <span className="medium_text text-light-text dark:text-dark-text">
        {title}
      </span>
      <div className="content_btn">
      <ButtonCard textBtn={buttonLabel}></ButtonCard>
      </div>
    
    </div>
  );
};

export default Card_services;
