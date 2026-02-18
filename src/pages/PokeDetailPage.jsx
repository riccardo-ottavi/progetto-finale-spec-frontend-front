import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import BigCard from "../components/BigCard";
import { fetchPokeDetail } from "../api/pokemon"

export default function PokeDetailPage() {

    const { id } = useParams()
    const [pokeDetail, setPokeDetail] = useState(null);

    useEffect(() => {
        loadDetail();
    }, [id]);

    async function loadDetail() {
      try {
        const detail = await fetchPokeDetail(id);
        setPokeDetail(detail);
      } catch (err) {
        console.error("Errore caricando il Pokémon:", err);
      }
    }

    return (
        <div className="detail-container">
            {pokeDetail ? (
            <BigCard poke={pokeDetail} />
        ) : (
            <p>Pokemon non trovato</p>
        )}
        </div>
        
    )
}