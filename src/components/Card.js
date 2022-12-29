import location from '../assets/location-icon.png'



function Card(props) {
    
    return (
        <div className='card--section'>
            <img className='card--img' src={props.item.img} alt="img" />
            <img className='card--icon--location' src={location} alt="location-icon" />
            <h3>{props.item.location}</h3>
            <a className='card--link' href={props.item.mapLink}>View on Google Maps</a>
            <div className='card--section--2'>
                <h2>{props.item.sight}</h2>
                <p className='card--p1'>{props.item.time}</p>
                <p className='card--p2'>{props.item.describe}</p>
            </div>
        </div>
    )
}

export default Card
