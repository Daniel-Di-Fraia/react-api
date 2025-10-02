//importiamo il componente CardActor
import CardActor from "./CardActor";

//importiamo lo state e l'useEffect
import { useState, useEffect } from "react";

function ActorList() {

    // stato per l'array di oggetti
    const [actors, setActors] = useState([]);

    //chiamata ajax per ottenere l'array di oggetti dall'API
    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => {
                //stampiamo in console i dati dell'array di oggetti
                console.log(res.data);
                setActors(res.data);
            })
            .catch(error => console.log(error)
            )
    }

    // useEffect con [] esegue fetchActors una sola volta
    useEffect(() => {
        fetchActors()
    }
        , [])

    return (
        <>
            <div className="container">
                <div className="actors">
                    {/* Cicliamo l’array degli attori e per ognuno renderizziamo una CardActor */}
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