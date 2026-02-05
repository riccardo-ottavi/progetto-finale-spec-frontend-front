import { GlobalContext } from "../contexts/PokeContext"
import { useContext } from "react"

export default function FavoritesPage(){

    const {favorites, pokeList} = useContext(GlobalContext)

    //recupera i dettagli a partire dai singoli id
    const favPokeList = favorites.map((favId) => (
        pokeList.find(p => p.id === favId)
    ))


    
    return(
        <div className="favs-container">
        <h2>Lista Preferiti</h2>
            {favPokeList?.map((p) => (
                <p>{p?.title}</p>
            ))}
        </div>
    )
}