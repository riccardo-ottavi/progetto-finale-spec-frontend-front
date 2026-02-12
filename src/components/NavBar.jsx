import { NavLink, } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/">Pokédex</NavLink>
                <NavLink to="/comparator">Comparatore</NavLink> 
                <NavLink to="/favorites">Preferiti</NavLink> 
            </nav>
        </div>
    )
}