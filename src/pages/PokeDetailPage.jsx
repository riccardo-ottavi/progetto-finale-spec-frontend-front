import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import BigCard from "../components/BigCard";
import { GlobalContext } from "../contexts/PokeContext";

export default function PokeDetailPage() {

    const { id } = useParams()
    const { fetchPokeDetail, pokeDetail, setPokeDetail } = useContext(GlobalContext)

    useEffect(() => {
        loadDetail();
    }, [id]);

    async function loadDetail() {
        const detail = await fetchPokeDetail(id);
        setPokeDetail(detail);
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