import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HeaderAdmin from "./HeaderAdmin";
import { useEffect } from "react";

export default function MasterAdmin(){
     let nav = useNavigate()
        useEffect(()=>{
                let isLogin = sessionStorage.getItem("isLogin");
                let userType = sessionStorage.getItem("userType");
                if(!isLogin||userType!='1'){
                    console.log("user not login");
                    nav("/login")  
                }
        },[])
    return(
        <>
        <HeaderAdmin/>
        <Outlet/>
        <Footer/>
        </>
    )
}