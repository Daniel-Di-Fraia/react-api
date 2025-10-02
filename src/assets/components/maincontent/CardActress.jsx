//creiamo un componente a parte per le informazioni degli attori in una card

export default function CardActress(props) {

    const { attrice } = props;

    return (
        <div className="actors" >
            {/* pics attori */}
            <div className="actor-pic">
                <img src={attrice.image} alt={attrice.name} />
            </div>
            {/* info cards attore */}
            <div className="actor-info">
                <p>{attrice.name}</p>
                <p><span>- Nata nel: </span>{attrice.birth_year}</p>
                <p><span>- Morta nel: </span>{attrice.death_year}</p>
                <p><span>- Nazionalità: </span>{attrice.nationality}</p>
                <p><span>- Biografia: </span>{attrice.biography}</p>
                <p><span>- Premi: </span>{attrice.awards}</p>
                <p><span>- Famosa per: </span>{attrice.most_famous_movies.join(" - ")}</p>
            </div>
        </div>
    )
}