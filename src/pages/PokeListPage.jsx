import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";

export default function PokeListPage(){

    const { pokeList } = useContext(GlobalContext);
    const [query, setQuery] = useState("")

    const filteredList = pokeList?.filter((p) => p?.title?.toLowerCase().includes(query))

    return(
        <div className="list-container">
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>
            {filteredList.map((poke) => (
                <Link to={`/pokemons/${poke.id}`}  key={poke.id}>
                    <ListCard 
                        poke={poke}
                    />
                </Link>
            ))}
        </div>
    )
}