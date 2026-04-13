import React from "react";
import ReactDOM from "react-dom/client"
let root=ReactDOM.createRoot(document.getElementById("root"));
let name="Kamlesh";

let el1=(
    <>
    <h1 id="first">Hello g app  kaise ho {name}</h1>
    <p className="p1">I am paragraph</p>
</>
)

function greet(){
    return <h1>This is component</h1>
};
let el2=greet();
root.render(<>{el1} ,{el2}</>);


