import { useEffect } from "react"
import { fetchData } from "./Slicer2"
import { useDispatch , useSelector } from "react-redux"
import CoinCard from "./CoinCard";

export default function CreateCoin(){
    const dispatch=useDispatch();
    const {data,loading,error}=useSelector((state)=>state.slice1);
    useEffect(()=>{

            dispatch(fetchData(20));
    },[]);
    if(loading){

        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Error has occured</h1>
    }
   return (
    <>
     <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {data.map((value) => (
          <CoinCard
            key={value.id}
            coin={value}
          />
        ))}
      </div>
    </>
  );
}