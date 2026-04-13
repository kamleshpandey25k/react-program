import react from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,Route,Link} from "react-router";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Home from "./Home";
import Details from "./Details";
import Hello1 from "./Hello1";
import Hello2 from "./Hello2";
import Github from "./Github";

function App(){
    return(  
        <>
         <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Contact">Contact</Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/About">About</Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Service">Servoce</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/details">Details</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/github">Github</Link>

            </nav>

          <Routes>
             <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}> </Route>
            <Route path="/service" element={<Service></Service>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/details" element={<Details></Details>}>
                  <Route index element={<Hello1></Hello1>}></Route>
                  <Route path="hello2" element={<Hello2></Hello2>}></Route>
                  <Route path="hello1" element={<Hello1></Hello1>}></Route>
            </Route>
           <Route path="/github/:name" element={<Github/>}></Route>
          </Routes>
         </BrowserRouter>
        </>
    )
}




let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)