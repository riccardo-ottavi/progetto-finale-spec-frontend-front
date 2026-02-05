import { Link, } from "react-router-dom"



export default function NavBar() {
    return (
        <div className="navbar">
            <h2>Sono la navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/comparator">Comparatore</Link> 
            </nav>

        </div>
    )
}