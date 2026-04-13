import react, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
    let [Password,setPassword]=useState("");
    let [length,setLength]=useState(10);
    let [numberChanged,setNumberChanged]=useState(false);
    let [charecterChanged,setCharecterChanged]=useState(false);


    const generatePassword=useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM";
        if(numberChanged){
            str+="0123456789";
        }
        if(charecterChanged){
            str+="#$%^&*-/";
        }
        let pass="";
        for(let i=0; i<length;i++){
            pass += str[Math.floor(Math.random() * str.length)];
        }
        setPassword(pass);
    },[length,charecterChanged,numberChanged]);
    
    useEffect(()=>{
        generatePassword(); 
    },[length,numberChanged,charecterChanged]);

   return(
    <>
    <h1>Password is {Password}</h1>
    <div>
        <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
        <label> Length is {length}</label>
          
           <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setNumberChanged(!numberChanged)}></input>
           <label>Number</label>

           <input type="checkbox" defaultChecked={charecterChanged} onClick={()=>setCharecterChanged(!charecterChanged)}></input>
           <label>Character</label>
    </div>
    
    </>
   ) 
}


let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)