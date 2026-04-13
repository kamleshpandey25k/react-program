import React from "react";
import ReactDOM from "react-dom/client";

const el1=<h1>Hello Everyone</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));

//root.render(Greet("Ram"));
let obj={
    name:"Kamlesh",
    age:23,
};
root.render(<Greet name="RAM"/>);
function Greet(props){
    return <h1>Hello {props.name} Jai Shree Ram ! {obj.age}</h1>
}
