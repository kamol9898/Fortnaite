import React from "react";
import { Route, Routes } from "react-router-dom";
import Box1 from "./box1";
import Box2 from "./box2";
import Box3 from "./box3";
import Erorr from "./erorr";
import Home from "./home";
import Navs from "./navs";
import '../router/router.css'
import Nesting from "./nesting";
import Product1 from "./nesting/product1";
import Product2 from "./nesting/product2";
import Product3 from "./nesting/product3";

export default function Url(){
    return(
        <>
        <Navs/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/box1" element={<Box1/>}/>
                <Route path="/box2" element={<Box2/>}/>
                <Route path="/box3" element={<Box3/>}/>
                <Route path="*" element={<Erorr/>} />
                <Route path="nesting" element={<Nesting/>}>
                    <Route index element={<Product1/>}/>
                    <Route path="product1" element={<Product1/>}/>
                    <Route path="product2" element={<Product2/>}/>
                    <Route path="product3" element={<Product3/>}/>
                </Route>
            </Routes>
       
        
        </>
    )
}