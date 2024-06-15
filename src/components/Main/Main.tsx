import React from "react";

import { ImgsSection, Services_main } from "@/utils/constant";
import Card_services from "../Main/Card_services";
import Card_imgSection from "../Main/Card_imgSection";
import Card_img_additionalSection from "./Card_img_additionalSection";

const Main = () => {
  return (
    <div className="full flex flex-col items-center gap-16">
      <div className="flex flex-col gap-2 items-center">
        <span className="small_text text_color">Herramientas de compras</span>
        <h2 className="text_color big_text ">encuentra tu bmw</h2>
      </div>
   

      <div className="full">
        <div className="w-[80%] mx-auto flex flex-col gap-6 lg:flex-row lg:justify-between">
          {Services_main.map((item, index) => (
            <div key={index}>
              <Card_services
                title={item.title}
                ICON={item.ICON}
                buttonLabel={item.buttonLabel}
              ></Card_services>
            </div>
          ))}
        </div>
      </div>
      <div className="full">
        <div className="full flex flex-col gap-24 ">
          {ImgsSection.map((item, index) => (
            <div key={index}>
              <Card_imgSection
                smallTitle={item.smallTitle}
                bigTitle={item.bigTitle}
                buttonLabel={item.buttonLabel}
                imgContent={item.imgContent}
                imgContent_mobile={item.imgContent_mobile}
              ></Card_imgSection>
            </div>
          ))}
        </div>
      </div>

      <div className="full">
   <Card_img_additionalSection></Card_img_additionalSection>
      </div>
    
    </div>
  );
};

export default Main;
