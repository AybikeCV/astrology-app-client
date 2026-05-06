import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


function SearchFunction({searchQuery, setSearchQuery}) {









const [allSigns, setAllSigns] = useState(null)

 useEffect(() => {
    getSignData();
  }, []);

  const getSignData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/signs`,
      );
      console.log(response.data);
      setAllSigns(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!allSigns) return <h3 className="loading">Loading...</h3>;


  if (!searchQuery) {
    return <p>Type to search...</p>
  }


    return (
    
        <div className="searchResult">

<h4>Here What You Search For</h4>

<div className="searchCard">

{allSigns
  .filter((eachSign) => {
    return (
      eachSign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eachSign.triplicityId.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })
  .map((eachSign) => (
    <div key={eachSign.id} className="card">
     <Link to={`/signs/${eachSign.id}`}> <h4>{eachSign.name}</h4></Link>
      <p>{eachSign.triplicityId}</p>
    </div>

  
  ))}

  <div>
    <h4><Link to="/">Go to HomePage</Link></h4>
  </div>

</div>
         
       


       </div>
        
    )

    
}
export default SearchFunction