export default function CardActor(props) {

    const { attore } = props;

    return (
        <div className="actors" >
            <div className="actor-pic">
                <img src={attore.image} alt={attore.name} />
            </div>
            <div className="actor-info">
                <p>{attore.name}</p>
                <p>{attore.birth_year}</p>
                <p>{attore.death_year}</p>
                <p>{attore.nationality}</p>
                <p>{attore.biography}</p>
                <p>{attore.awards}</p>
            </div>
        </div>
    )
}