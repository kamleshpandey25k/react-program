import { Link, Outlet } from "react-router"
export default function Details(){
    return(
        <>
        
        <Link to="hello1">Hello1</Link>
        <Link to="hello2">Hello2</Link>
        <h1>Details</h1>
        <Outlet></Outlet>
        </>
    )
}     

