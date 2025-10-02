//creiamo un componente a parte per le informazioni degli attori in una card

export default function CardActor(props) {

    const { attore } = props;

    return (
        <div className="actors" >
            {/* pics attori */}
            <div className="actor-pic">
                <img src={attore.image} alt={attore.name} />
            </div>
            {/* info cards attore */}
            <div className="actor-info">
                <p>{attore.name}</p>
                <p><span>- Nato nel: </span>{attore.birth_year}</p>
                <p><span>- Morto nel: </span>{attore.death_year}</p>
                <p><span>- Nazionalità: </span>{attore.nationality}</p>
                <p><span>- Biografia: </span>{attore.biography}</p>
                <p><span>- Premi: </span>{attore.awards.join(" - ")}</p>
                <p className=""><span>- Famoso per: </span>{attore.known_for.join(" - ")}</p>
            </div>
        </div>
    )
}