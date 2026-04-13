

import react, {useState} from "react";
import ReactDOM from "react-dom/client";


function Counter(){
    let [count, setCount]=useState(0);
    function incrementNumber(){
        count=count+1;
        setCount(count);
     ///   document.querySelector("h1").innerHTML=`count is ${count}`;
        console.log(count);
    }
     function dicrementNumber(){
         if(count>0){
            count=count-1;
            setCount(count);
            console.log(count);
           // document.querySelector("h1").innerHTML=`count is ${count}`;
         }
    }
    return ( 
       <div className="first  ">
        <h1>Count is {count}</h1>
        <button onClick={incrementNumber}>Increment</button>
         <button onClick={dicrementNumber}>Dicrement</button>
       </div>
    )
} 





let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>)