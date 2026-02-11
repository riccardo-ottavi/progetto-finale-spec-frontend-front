import { GlobalContext } from "../contexts/PokeContext"
import { useContext } from "react"
import ListCard from "../components/ListCard"

export default function FavoritesPage(){

    const {favorites, pokeList} = useContext(GlobalContext)

    const getPokemonById = (id) => pokeList.find(p => p.id === id);

    const favPokeList = favorites.map((favId) => (
        getPokemonById(favId)
    ))

    return(
        <div className="container">
        <h2>Lista Preferiti</h2>
            {favPokeList?.map((p) => (
                <div key={p.id}>
                    <ListCard 
                        poke={p}
                    />
                </div>
            ))}
        </div>
    )
}