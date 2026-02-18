import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import BigCard from "../components/BigCard";
import EmptySlotCard from "../components/EmptySlotCard";
import { fetchPokeDetail } from "../api/pokemon"

export default function ComparatorPage() {
    const { duoToCompare } = useContext(GlobalContext)
    const [compareDetails, setCompareDetails] = useState([null, null]);

    useEffect(() => {
        makeCompare();
    }, [duoToCompare]);

    async function makeCompare() {
        const results = await Promise.all(
            duoToCompare.map(id =>
                id ? fetchPokeDetail(id) : null
            )
        );
        setCompareDetails(results);
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
        </div>
    )
}