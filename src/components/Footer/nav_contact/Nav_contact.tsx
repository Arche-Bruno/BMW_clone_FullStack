import { ModelNav_footer_contact } from "@/utils/interfaces/ModelNavItems";
import React from "react";

const Nav_contactCard = ({ title, ICON }: ModelNav_footer_contact) => {
  return (
    <div className="flex items-center gap-4">
      <span className="medium_text_last text_color ">{title} </span>
      <div className="text_color">{ICON !== "" && <ICON></ICON>}</div>
    </div>
  );
};

export default Nav_contactCard;
