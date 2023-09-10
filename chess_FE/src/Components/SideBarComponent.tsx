import React, {FC}from "react";
import Register from "./Register";
interface SideBarProps{
    toRender: JSX.Element|null;
    render:(toRender:JSX.Element)=>void;
}
const SideBar : FC<SideBarProps> = ({toRender,render})=>{
    if(toRender==<Register/>){
        return <Register/>
    }
}

export default SideBar