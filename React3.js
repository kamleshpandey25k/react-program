import React from "react";
    import ReactDOM from "react-dom/client";
    let element = React.createElement("h1", {id:"first", className:"firstclass", style:{ backgroundColor:"red", color:"white"}},"Hello g kaise ho aap sab");

    let react_root = ReactDOM.createRoot(document.getElementById("root"));
    let newElement=<h1> Hello g</h1>;
    react_root.render(element);
    react_root.render(newElement);