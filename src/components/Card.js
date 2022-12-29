import location from '../assets/location-icon.png'

function Card(props) {
    
    return (
        <div className='card--section'>
            <img className='card--img' src={props.img} alt="img" />
            <img className='card--icon--location' src={location} alt="location-icon" />
            <h3>{props.location}</h3>
            <a className='card--link' href={props.mapLink}>View on Google Maps</a>
            <div className='card--section--2'>
                <h2>{props.sight}</h2>
                <p className='card--p1'>{props.time}</p>
                <p className='card--p2'>{props.descripe}</p>
            </div>
        </div>
    )
}

export default Card
