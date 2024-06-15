import {
  ModelImgsSection,
  ModelNavItems,
  ModelNav_footer_contact,
  ModelNav_footer_footer,
  ModelServices_main,
} from "../interfaces/ModelNavItems";
import { IoCarSportOutline } from "react-icons/io5";
import { TbMessageCircleCog } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import imgSection1 from "../../imgs/general/imgs_section/img_section1.webp";
import imgSection1_mobile from "../../imgs/general/imgs_section/img_section1_mobile.webp"
import imgSection2 from "../../imgs/general/imgs_section/img_section2.webp";
import imgSection2_mobile from "../../imgs/general/imgs_section/img_section2_mobile.webp"
import { GoArrowUpRight } from "react-icons/go";
export const NavItems: ModelNavItems[] = [
  {
    name: "Models",
    link: "/Models",
    position: 1,
  },
  {
    name: "Electrico",
    link: "/Electric",
    position: 2,
  },
  {
    name: "Configuración & Precio",
    link: "/Setting_Price",
    position: 3,
  },
  {
    name: "Comprar Online",
    link: "/Buy_Online",
    position: 4,
  },
  {
    name: "Más BMW",
    link: "/More",
    position: 5,
  },
];
export const Services_main: ModelServices_main[] = [
  {
    title: "Encuentra tu bmw",
    ICON: IoCarSportOutline,
    buttonLabel: "Cotizar",
  },
  {
    title: "Agenda Tu Cita De Servicio",
    ICON: TbMessageCircleCog,
    buttonLabel: "Agendar",
  },
  {
    title: "Configura Tu BMW",
    ICON: RiUserSettingsLine,
    buttonLabel: "Configura & Precio",
  },
];

export const ImgsSection: ModelImgsSection[] = [
  {
    smallTitle: "configura tu bmw",
    bigTitle: "el placer de conducir, empieza con tu diseño.",
    buttonLabel: "Descúbrelo",
    imgContent: imgSection1,
    imgContent_mobile:imgSection1_mobile
  },
  {
    smallTitle: "modelos bwm",
    bigTitle: "la emoción de conducir un bmw",
    buttonLabel: "Más información",
    imgContent: imgSection2,
    imgContent_mobile:imgSection2_mobile
  },
];

export const Nav_contact: ModelNav_footer_contact[] = [
  {
    title: "Política de cookies",
    ICON: "",
  },
  {
    title: "Configura tu BMW",
    ICON: GoArrowUpRight,
  },
  {
    title: "Nota legal",
    ICON: "",
  },
  {
    title: "Contacta con nosotros",
    ICON: GoArrowUpRight,
  },
];

export const Nav_Footer: ModelNav_footer_footer[] = [
  {
    title: "Política de cookies",

  },
  {
    title: "Configura tu BMW",
   
  },
  {
    title: "Nota legal",
  
  },
  {
    title: "Contacta con nosotros",

  },
];
