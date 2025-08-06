import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderAdmin from "./HeaderAdmin";

export default function MasterAdmin(){
    return(
        <>
        <HeaderAdmin/>
        <Outlet/>
        <Footer/>
        </>
    )
}