import { useContext } from "react";
import { UserContext } from "./Glibal";
import { UserContext } from "./Glibal";

export default function Decrement(){
const {count,setCount}=useContext(UserContext);
      return(
        <>
         <h1>
           Count is {count}
         </h1>

         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </>
      );
    }