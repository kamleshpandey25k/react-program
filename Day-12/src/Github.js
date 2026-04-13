
import { useParams } from "react-router";
import { useEffect, useState } from "react"; 


export default function Github(){
     let [profile,setProfile]=useState(null);
      const {name}= useParams();
      console.log(name);

     async function fetchUser() {
         let data=await fetch(`https://api.github.com/users/${name}`);
         let response=await data.json();
         setProfile(response);
     }
   useEffect(()=>{
    fetchUser();
    console.log(profile);
   },[name]);
    return(
      
   <>

   <div>
     <img src={profile?.avtar_url}></img>
     <h2>{profile?.login}</h2>
   </div>
   <h1>My GitHub Profile</h1>




   </>
    )
}