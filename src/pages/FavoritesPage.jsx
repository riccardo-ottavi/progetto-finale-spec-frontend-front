import { GlobalContext } from "../contexts/PokeContext"
import { useContext } from "react"
import ListCard from "../components/ListCard"

export default function FavoritesPage(){

    const {favorites, pokeList, removeFavorite} = useContext(GlobalContext)

    //recupera i dati (no dettaglio) a partire dai singoli id
    const favPokeList = favorites.map((favId) => (
        pokeList.find(p => p.id === favId)
    ))

    return(
        <div className="favs-container">
        <h2>Lista Preferiti</h2>
            {favPokeList?.map((p) => (
                <div key={p.id}>
                    <ListCard 
                        poke={p}
                    />
                    <button onClick={() => removeFavorite(p.id)}>Rimuovi dai preferiti</button>
                </div>
                
            ))}
        </div>
    )
}