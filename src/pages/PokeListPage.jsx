import { useContext } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";

export default function PokeListPage(){

    const { pokeList } = useContext(GlobalContext);

    return(
        <div>
            {pokeList.map((poke) => (
                <Link to={`/pokemons/${poke.id}`}  key={poke.id}>
                    <ListCard 
                        poke={poke}
                    />
                </Link>
            ))}
        </div>
    )
}