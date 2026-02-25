import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import BigCard from "../components/BigCard";
import EmptySlotCard from "../components/EmptySlotCard";
import { fetchPokeDetail } from "../api/pokemon"

export default function ComparatorPage() {
    const { duoToCompare } = useContext(GlobalContext)
    const [compareDetails, setCompareDetails] = useState([null, null]);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadCompare();
    }, [duoToCompare]);

    async function loadCompare() {
        try {
            const results = await Promise.all(
                duoToCompare.map(id =>
                    id ? fetchPokeDetail(id) : null
                )
            );

            setCompareDetails(results);

        } catch (err) {
            console.error("Errore comparator:", err);
            setError("Errore nel caricamento dei Pokémon");
        }
    }

    return (
        <div className="comparator">
            {compareDetails.map((poke, index) => (
                <div key={index} className="compare-slot">
                    {poke ? (
                        <BigCard
                            poke={poke}
                        />
                    ) : (
                        <EmptySlotCard />
                    )}
                </div>
            ))}
            {error && <p className="error">{error}</p>}
        </div>
        
    )
}