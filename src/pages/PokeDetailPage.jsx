import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;


export default function PokeDetailPage() {

    const { id } = useParams()
    const [pokeDetail, setPokeDetail] = useState(null)

    async function fetchPokeDetail(pokeId) {
        const pokeRes = await fetch(`${API_URL}/pokemons/${pokeId}`)
        const pokeData = await pokeRes.json()
        console.log("RISPOSTA API:", pokeData)
        setPokeDetail(pokeData.pokemon)
    }

    useEffect(() => {
        fetchPokeDetail(id)
    }, [id])

    return (
        <div className="detail-container">
            <div className="big-card">
                <Link to={"/"}><button>Torna alla home</button></Link>
                <h1>{pokeDetail?.title} </h1>
                <p>{pokeDetail?.primaryType}</p>
                <p>{pokeDetail?.secondaryType}</p>
                <p>{pokeDetail?.description}</p>
                <img src={`/images/${pokeDetail?.title.toLowerCase()}.png`} alt={pokeDetail?.title} />
            </div>
        </div>

    )
}