import react, { useState ,useMemo } from "react";
import ReactDOM from "react-dom/client";

function App(){
    let [count,setCount]=useState(0);
    let [number,setNumber]=useState("");

function Fib(n) {
  if (n <= 1) return n;   
  return Fib(n - 1) + Fib(n - 2);
}
let result=useMemo(()=>Fib(Number(number)),[number]);
    return (
        <>
         <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
          <h2>Fibbonnaci is {result}</h2>
         <input type="number" placeholder="Enter the number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
         
        </>
    )
}




let root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);