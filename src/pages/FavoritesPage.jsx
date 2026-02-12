import { GlobalContext } from "../contexts/PokeContext"
import { useContext } from "react"
import ListCard from "../components/ListCard"

export default function FavoritesPage(){

    const {favorites, pokeList} = useContext(GlobalContext)

    const getPokemonById = (id) => pokeList.find(p => p.id === id);
     
    const favPokeList = favorites.map((favId) => (
        getPokemonById(favId)
    ))

    const emptyBallsNumb = 6 - favPokeList.length;
    const emptyBalls = Array.from({ length: emptyBallsNumb });

    return(
        <div className="container">
        <h2>Lista Preferiti</h2>
            {favPokeList.map((_, i) => (
                <img
                    key={i}
                    src="/images/icons/ball-icon.png"
                    alt=""
                    className="ball-icon"
                />
            ))}

            {emptyBalls.map((_, i) => (
                <img
                    key={i}
                    src="/images/icons/ball-icon-empty.png"
                    alt=""
                    className="ball-icon empty"
                />
            ))}
            
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