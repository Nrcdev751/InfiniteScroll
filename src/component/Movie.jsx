import { useEffect, useState } from "react";

function Movie(){

    const [codingdata, setCodingData] = useState([]);

    useEffect(() => {
        fetch('http://api.sampleapis.com/codingresources/codingResources')
            .then(res => res.json())
            .then(codingdata => setCodingData(codingdata))
      },[])

      console.log(codingdata)
  

    return(
          <>
            <div>
                {codingdata.map((item,index) => ( 
                    <div>
                        <p key={index}>{item.description} </p>    
                    </div>
                ))}
            </div>
          </>
    )
}
export default Movie