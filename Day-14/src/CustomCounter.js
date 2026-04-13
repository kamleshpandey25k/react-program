import { useDispatch } from "react-redux";
import { useState } from "react";
import { CustomIncrease } from "./Slicer1";

export default function CustomCounter(){
         let [number,setNumber]=useState("");
         let dispatch=useDispatch();
         
    function handleClick(){
        dispatch(CustomIncrease(Number(number)));
         setNumber("");
    }
       

    return(
        <>
        
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Enter the number" ></input>
        <button onClick={handleClick}>Add Count</button>
        </>
    )

}