import { useContext } from "react"
import { GlobalContext } from "../contexts/PokeContext"

export default function PokeListPage(){

    const { pokeList } = useContext(GlobalContext);

    return(
        <div>
            {pokeList.map((poke) => (
                <div key={poke.id}>
                    <p>{poke.title}</p>
                </div>
            ))}
        </div>
    )
}