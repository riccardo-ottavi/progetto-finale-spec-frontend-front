import { useContext } from "react"
import { GlobalContext } from "../contexts/PokeContext"

export default function PokeListPage(){

    const { pokeList } = useContext(GlobalContext);

    return(
        <div>
            {pokeList.map((poke) => (
                <div className="small-card" key={poke.id}>
                    <img src={`/images/${poke.title.toLowerCase()}.png`} alt={poke.title} />
                    <p>{poke.title}</p>
                    <p>{poke.category}</p>
                </div>
            ))}
        </div>
    )
}