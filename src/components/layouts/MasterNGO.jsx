import HeaderNGO from "./HeaderNGO"
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
export default function MasterNGO(){
    return(
        <>
        <HeaderNGO/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}