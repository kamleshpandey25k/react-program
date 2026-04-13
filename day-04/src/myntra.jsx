import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import Cart from "./Compoents/Cart";
import Footer from "./Compoents/Footer";
import Header from "./Compoents/Header";
import arr from "./utils/dummy.js";
import { Button } from "./Compoents/Button.jsx";



function App(){
    let [a,setA]=useState(arr);
    function sortArray(){
            const sortedArray = [...a].sort((x,y)=>x.price - y.price);
           setA(sortedArray);
          console.log(a);
    }

    function priceAbove1499(){
      let ar=  arr.filter((value)=>value.price>1499);
      setA(ar);
    }
   return(
    <>
    
    <Header/>
     {/* <Button/> */}
      <button onClick={sortArray}>Sort By Price</button>
      <button onClick={priceAbove1499}>Price above 1499</button>
    <div style={{display:"flex", gap:"10px",flexWrap:"wrap"}}>

        {
            a.map((value,indexe)=>
            <Cart
              key={indexe}
             cloth={value.cloth} offer={value.offer} price={value.price}
            />)
        }
    </div>

    <Footer/>
   </>);
}

let Root=ReactDOM.createRoot(document.getElementById("root"));

Root.render(<App/>);