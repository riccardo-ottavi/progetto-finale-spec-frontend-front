import { Link } from "react-router-dom"
import { useState } from "react"

export default function ComparatorPage(){

    return(
        <>
            <div className="comparator">
                <h2>Qua si comparano 2 pokemon</h2>
                <Link to={"/"}><button>Torna alla lista</button></Link>
            </div>
        </>
    )
}