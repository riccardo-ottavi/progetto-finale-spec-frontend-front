import { useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import BigCard from "../components/BigCard";
import EmptySlotCard from "../components/EmptySlotCard";

export default function ComparatorPage() {

    const { duoToCompare, fetchPokeDetail, compareDetails, setCompareDetails } = useContext(GlobalContext)
    
    useEffect(() => {
        makeCompare();
    }, [duoToCompare]);

    
    //se il posto è vuoto: null (segnaposto)
    async function makeCompare() {
        const results = await Promise.all(
            duoToCompare.map(id =>
                id ? fetchPokeDetail(id) : null
            )
        );

        setCompareDetails(results);
    }

    return (
        <>
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
        </>
    )
}