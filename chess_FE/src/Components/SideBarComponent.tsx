import React, {FC}from "react";
import Register from "./Register";
import Login from './pages/Login'
import { ProSidebarProvider } from "react-pro-sidebar";

interface SideBarProps{
    toRender: 'Register'|'Login';
}
const SideBar : FC<SideBarProps> = ({toRender})=>{
    if(toRender=='Login'){
        // return <ProSidebarProvider></ProSidebarProvider>
        return (
            <div className="Sidebar_Login">
                <Login/>
            </div>
        )
    }else{
        return (
            <div className="Sidebar_Register">
                <Register/>
            </div>
        )    }
}

export default SideBar