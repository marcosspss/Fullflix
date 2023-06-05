import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Detail } from "../pages/Detail/Detail";

export function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>        
            <Route path="/Detail" element={<Detail/>}/>
            <Route path="*" element={<div><h1>Error 404, Page not Found</h1></div>}/> 
                
        
        </Routes>
        </BrowserRouter>
    )
}