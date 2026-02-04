import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export default function PokeDetailPage(){

    const { id } = useParams()
    const [pokeDetail, setPokeDetail] = useState(null)


    async function fetchPokeDetail(pokeId){
        const pokeRes = await fetch(`http://localhost:3001/pokemons/${pokeId}`)
        const pokeData = await pokeRes.json()
        setPokeDetail(pokeData)
    }

    useEffect(()=>{
        fetchPokeDetail(id)
        
    },[id])

    return(
        <div className="big-card">
            <h1>Pagina dettaglio: {pokeDetail?.title} </h1>
            <p>{pokeDetail?.primaryType}</p>
        </div>
        
    )
}