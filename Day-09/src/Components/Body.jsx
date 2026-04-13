import { useEffect, useState } from "react";

export default function Body() {
  const [profile, setProfile] = useState([]);
  let [numberOfProfile,setNumberOfProfile]=useState("");

  const generateProfile = async (count) => {
    try {
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);

      if (!response.ok) {
        throw new Error("Failed to fetch profiles");
      }

      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.error("Error fetching profiles:", err);
      alert("Something went wrong while fetching profiles");
    }
  };

  useEffect(() => {
    generateProfile(numberOfProfile);
  }, []);

  return (
    <>
      <div className="search-box">
        <input type="text" placeholder="Enter user number..." value={numberOfProfile} onChange={(e)=>setNumberOfProfile(e.target.value) }/>
        <button onClick={()=>generateProfile((Number(numberOfProfile)))}>Search Profile</button>
      </div>

      <div className="profile">
        {profile.map((user) => (
          <div key={user.id} className="cards">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
