import react, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [color,setColor]=useState("Black");
    console.log("fisst");
    useEffect(()=>{
        console.log("Use effect ")
           document.body.style.backgroundColor=color;
    },[color]);
   
console.log("second");
  return (
    <>
      <h1>Background changer</h1>
      <div className="but">
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("orange")}>Orange</button>
        <button onClick={()=>setColor("green")}>Green</button>
         <button onClick={()=>setColor("pink")}>Pink</button>
      </div>
    </>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
