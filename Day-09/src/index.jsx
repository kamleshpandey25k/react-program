import react from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";


function GitHUbProfile(){

    return(
        <>
          <Header/>
         <Body/>
        </>
    )
}




let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<GitHUbProfile/>);