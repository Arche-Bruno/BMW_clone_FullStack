import React from "react";

interface Button {
  textBtn: string;
}
const ButtonCard = ({ textBtn }: Button) => {
  return (
    <button className="style_btn_transparent  ">
      <span className="text-[14px] lg:text-[18px] font-semibold ">
        {textBtn}
      </span>
    </button>
  );
};

export default ButtonCard;
