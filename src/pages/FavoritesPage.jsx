import { GlobalContext } from "../contexts/PokeContext"
import { useContext } from "react"

export default function FavoritesPage(){

    const {favorites, pokeList, removeFavorite} = useContext(GlobalContext)

    //recupera i dettagli a partire dai singoli id
    const favPokeList = favorites.map((favId) => (
        pokeList.find(p => p.id === favId)
    ))

    //servirà poi un useEffect che all'avvio del componente fetcha tutti i dettagli con Promise.all


    
    return(
        <div className="favs-container">
        <h2>Lista Preferiti</h2>
            {favPokeList?.map((p) => (
                <div>
                    <p>{p?.title}</p>
                    <p>{p?.category}</p>
                    <p>{p?.primaryType}</p>
                    <button onClick={() => removeFavorite(p.id)}>Rimuovi dai preferiti</button>
                </div>
                
            ))}
        </div>
    )
}