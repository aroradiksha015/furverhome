import HeaderNGO from "./HeaderNGO"
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";
export default function MasterNGO(){
    let nav = useNavigate()
        useEffect(()=>{
                let isLogin = sessionStorage.getItem("isLogin");
                let userType = sessionStorage.getItem("userType");
                if(!isLogin||userType!='2'){
                    console.log("user not login");
                    nav("/login")  
                }
        },[])
    return(
        <>
        <HeaderNGO/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}