import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/PokeContext"

export default function ComparatorPage(){

    const { duoToCompare, pokeList } = useContext(GlobalContext)
   
    const comparisonData = duoToCompare.map(id => pokeList.find(p => p.id === id))
    


    return(
        <>
            <div className="comparator">
                <h2>Qua si comparano 2 pokemon</h2>
                <Link to={"/"}><button>Torna alla lista</button></Link>
                {comparisonData.map((poke, index) => (
                    <div key={index} className="compare-slot">
                        {poke ? (
                            <p>{poke.title}</p>
                        ) : (
                            <p>Slot vuoto</p>
                        )}
                    </div>
                ))}   
                
            </div>
        </>
    )
}