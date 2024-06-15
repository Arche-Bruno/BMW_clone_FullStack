import { IconType } from "react-icons"
export interface ModelNavItems {
    name:string
    link:string
    position:number
}
export interface ModelServices_main{
    title:string
    ICON:IconType
    buttonLabel:string
}
export interface ModelImgsSection{
    smallTitle:string
    bigTitle:string
    buttonLabel:string
    imgContent:any
    imgContent_mobile:any
}
export interface ModelNav_footer_contact{
    title:string
    ICON:IconType|string
}
export interface ModelNav_footer_footer{
    title:string
}