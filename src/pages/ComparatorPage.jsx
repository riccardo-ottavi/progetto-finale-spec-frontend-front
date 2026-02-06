import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/PokeContext"

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
                <h2>Qua si comparano 2 pokemon</h2>
                <Link to={"/"}><button>Torna alla lista</button></Link>
                {compareDetails.map((poke, index) => (
                    <div key={index} className="compare-slot">
                        {poke ? (
                            <div>
                                <p>{poke.title}</p>
                                <p>{poke.description}</p>
                            </div>

                        ) : (
                            <p>Slot vuoto</p>
                        )}
                    </div>
                ))}

            </div>
        </>
    )
}