import React from 'react'
import img_section3 from "../../imgs/general/imgs_section/img_section3.webp";
import Image from "next/image";
import ButtonCard from "./Elements_cards/Button_card";
const Card_img_additionalSection = () => {
  return (
    <div className="w-[90%] h-full mx-auto">
    <div className="w-full h-full flex flex-col lg:flex-row gap-12 lg:items-start">

      <div className="w-full lg:w-[55%] h-full">
        <Image src={img_section3} alt="image" className="w-full" />
      </div>
      
     

   
        <div className="w-full lg:w-[45%] flex flex-col gap-4 items-start">
          <span className="text_color small_text">
            BMW FINANCIAL SERVICES
          </span>
          <h2 className="text_color medium_text">
            ENCUENTRA EL BMW DE TUS SUEÑOS CON BMW FINANCIAL SERVICES.
          </h2>
          <p className="text_color text-[13px] lg:text-[17px]">
            Cotiza para nuestra gama de autos eléctricos, híbridos
            conectables, y de gasolina que tenemos disponibles para ti.
            Calcula aquí tu cuota.
          </p>
          <div className="content_btn">
          <ButtonCard textBtn="Calcula tu cuota"></ButtonCard>
        </div>
        </div>

  
  
    </div>
  </div>
  )
}

export default Card_img_additionalSection