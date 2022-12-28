import worldIcon from '../assets/world-icon.png'

function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav--icon" src={worldIcon} alt="world-img" />
            <span>my travel journal.</span>
        </nav>
    )
}

export default Navbar