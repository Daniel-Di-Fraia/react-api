import CardActor from "./CardActor";
import { useState, useEffect } from "react";

function ActorList() {
  
    const [actors, setActors] = useState([]);

    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => {
                console.log(res.data);
                setActors(res.data);
            })
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchActors()
    }
        , [])

  return (
    <>
      <div className="container">
            <div className="actors">
                {actors.map((attore) => (
                    <CardActor
                        key={attore.id}
                        attore={attore}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default ActorList