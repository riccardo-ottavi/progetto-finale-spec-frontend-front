import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import BigCard from "../components/BigCard";
import { GlobalContext } from "../contexts/PokeContext";
import { Link } from "react-router-dom";


export default function PokeDetailPage() {

    const { id } = useParams()
    const { fetchPokeDetail, pokeDetail, setPokeDetail } = useContext(GlobalContext)

    useEffect(() => {
        loadDetail();
    }, [id]);

    //recupera i dettagli a partire dall' id 
    async function loadDetail() {
        const detail = await fetchPokeDetail(id);
        setPokeDetail(detail);
    }

    return (
        <div className="detail-container">
            <BigCard
                poke={pokeDetail} 
            />
        </div>
        
    )
}