import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";
import { UserContext } from "./Glibal";

function App(){
    const [count,setCount]=useState(0);
    return(
        <>
         <UserContext.Provider value={{count,setCount}}>
        <h1> Parent Counter is {count}</h1>
        <Increment></Increment>
        <Decrement></Decrement>
        </UserContext.Provider>
        </>
    )
}


let root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)