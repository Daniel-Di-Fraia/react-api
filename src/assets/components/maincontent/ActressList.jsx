//importiamo il componente CardActor
import CardActress from "./CardActress";

//importiamo lo state e l'useEffect
import { useState, useEffect } from "react";

function ActressList() {

    // stato per l'array di oggetti
    const [actress, setActress] = useState([]);

    //chiamata ajax per ottenere l'array di oggetti dall'API
    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) => {
                //stampiamo in console i dati dell'array di oggetti
                console.log(res.data);
                setActress(res.data);
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
                    {actress.map((attrice) => (
                        <CardActress
                            key={attrice.id}
                            attrice={attrice}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ActressList