import { GlobalContext } from "../contexts/PokeContext"
import { useContext, useEffect, useState } from "react"
import ListCard from "../components/ListCard"
import { fetchPokeDetail } from "../api/pokemon"

export default function FavoritesPage() {

    const { favorites } = useContext(GlobalContext)
    const [favPokeList, setFavPokeList] = useState([]);
    const [error, setError] = useState(null);

    async function loadFavorites() {
        try {
            const data = await Promise.all(favorites.map(id => fetchPokeDetail(id)));
            setFavPokeList(data);
        } catch (error) {
            console.error("Errore caricando i Pokémon preferiti:", error);
            setError("Errore nel caricamento dei preferiti");
        }
    }

    useEffect(() => {
        loadFavorites()
    }, [favorites])


    const emptyBallsNumb = 6 - favPokeList.length;
    const emptyBalls = Array.from({ length: emptyBallsNumb });

    return (
        <div className="container">
            <h2>Lista Preferiti</h2>
            {favPokeList?.map((_, i) => (
                <img
                    key={i}
                    src="/images/icons/ball-icon.png"
                    alt="pokeball icon"
                    className="ball-icon"
                />
            ))}
            {emptyBalls?.map((_, i) => (
                <img
                    key={i}
                    src="/images/icons/ball-icon-empty.png"
                    alt="empty pokemon ball"
                    className="ball-icon empty"
                />
            ))}
            {favPokeList?.map((p) => (
                <div key={p?.id}>
                    <ListCard
                        poke={p}
                    />
                </div>
            ))}
            {error && <p className="error">{error}</p>}
        </div>
    )
}