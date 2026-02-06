import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="big-card">
                <Link to={"/"}><button>Torna alla home</button></Link>
                <h1>{pokeDetail?.title} </h1>
                <p>{pokeDetail?.primaryType}</p>
                <p>{pokeDetail?.secondaryType}</p>
                <p>{pokeDetail?.description}</p>
                <img src={`/images/pokemonSprites/${pokeDetail?.title?.toLowerCase()}.png`} alt={pokeDetail?.title} />
                <div className="stats">
                    <span>HP: {pokeDetail?.baseStats?.hp}</span>
                    <span>Attack: {pokeDetail?.baseStats?.attack}</span>
                    <span>Defense: {pokeDetail?.baseStats?.defense}</span>
                    <span>Sp. Atk: {pokeDetail?.baseStats?.specialAttack}</span>
                    <span>Sp. Def: {pokeDetail?.baseStats?.specialDefense}</span>
                    <span>Speed: {pokeDetail?.baseStats?.speed}</span>
                </div>
            </div>
        </div>
    )
}