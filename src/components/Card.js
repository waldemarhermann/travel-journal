import location from '../assets/location-icon.png'




function Card(props) {

    return (
        <div className='card'>
            <div>
                <img className='card--img' src={props.item.image} alt="img" />
            </div>

            <div className='card--text--container'>
                <div className='card--uppertext'>
                    <img className='card--icon--location' src={location} alt="location-icon" />
                    <h3 className='card--location'>{props.item.location}</h3>
                    <a className='card--link' href={props.item.mapLink}>View on Google Maps</a>
                </div>
                <div className='card--lowertext'>
                <h2 className='card--sight'>{props.item.sight}</h2>
                <p className='card--p1'>{props.item.time}</p>
                <p className='card--p2'>{props.item.describe}</p>
                </div>
            </div>
        </div>

    )
}

export default Card
