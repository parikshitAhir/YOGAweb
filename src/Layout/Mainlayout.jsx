import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componet/Header";



const Mainlayout=()=>{
    return(
        <>
        
<Header/>
<Outlet></Outlet>

        </>
    );
}
export default Mainlayout;