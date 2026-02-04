import { useContext } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";

export default function PokeListPage(){

    const { pokeList } = useContext(GlobalContext);

    return(
        <div>
            {pokeList.map((poke) => (
                <ListCard 
                    key={poke.id}
                    poke={poke}
                />
            ))}
        </div>
    )
}