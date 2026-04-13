import { UserContext } from "./Glibal";
import { useContext } from "react";
export default function Increment(){
    const {count,setCount}=useContext(UserContext);
     return (
        <>
        <h2>Child Count is {count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
     </>
     )
} 