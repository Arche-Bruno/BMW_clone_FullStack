import React from "react";
import Image from "next/image";
import img from "../../../imgs/general/front_principal.webp";
import img_mobile from "../../../imgs/general/front_principal_mobile.webp";
import ButtonCard from "../Elements_cards/Button_card";

const Front_page = () => {
  return (
    <div className="w-full relative lg:static">
      <div className="w-full  2xl:w-[76%] mx-auto z-30 ">
        <div className="hidden lg:block w-full relative z-30">
          <Image src={img} alt="image_presentation" className="w-full" />
        </div>
        <div className="lg:hidden  w-full relative z-30 pb-40 mb-4 bg-transparent">
          <Image src={img_mobile} alt="image_presentation" className="w-full" />
        </div>
      </div>

      <div className="absolute top-0 z-0 ">
        <div className="w-full h-[800px] overflow-hidden mask-linear-gradient-black blur-md">
          <Image src={img} alt="image_presentation" className="w-full" />
        </div>
      </div>

      <div className="hidden lg:block w-full absolute  bottom-0 lg:top-24 z-40 ">
        <div className="w-[90%] 2xl:w-[68%] mx-auto ">
          <div className="w-full flex flex-col gap-6 ">
            <span className="small_text  ">El placer de conducir</span>

            <div className="ml-4 flex flex-col gap-1 lg:gap-3  items-center lg:items-start">
              <h2 className=" big_text lg:text-dark-principal ">bmw x4</h2>
              <span className=" medium_text text-dark-principal ">
                Descuentos exclusivos este mes.
              </span>
              <div className="flex items-center gap-6">
                <div className="content_btn_bg_blue">
                  <ButtonCard textBtn="Cotiza aquí"></ButtonCard>
                </div>

                <div className="content_btn_dark ">
                  <ButtonCard textBtn="ver promociones"></ButtonCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full absolute  bg-black  bottom-0 top-[56%] z-40 mask-linear-gradient-black-descont">
        <div className="w-[90%] 2xl:w-[68%] mx-auto ">
          <div className="w-full flex flex-col gap-8">
            <div className="ml-4 flex flex-col gap-2 lg:gap-3  items-center lg:items-start">
              <h2 className=" big_text  text-dark-text  ">bmw x4</h2>
              <span className=" medium_text text-dark-text  ">
                Descuentos exclusivos este mes.
              </span>
              <div className="flex flex-col items-center gap-4 lg:gap-6  w-full mx-auto">
                <div className="content_btn_bg_blue">
                  <ButtonCard textBtn="Cotiza aquí"></ButtonCard>
                </div>
                <div className="content_btn_light">
                  <ButtonCard textBtn="ver promociones"></ButtonCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front_page;
