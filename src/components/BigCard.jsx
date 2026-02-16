import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext";
import StatsBox from "./StatsBox";

export default function BigCard({ poke }) {

    const { isFavorite, isSlotOccupiedByPokemon, toggleFavorite, toggleSlot } = useContext(GlobalContext)

    return (
        <div className="big-card">
            <div className="poke-infos">
                <h1 className="poke-name">{poke?.title} </h1>
                <div className="role-box">
                    <p className="cell role-text">{poke?.category}</p>
                    <img
                        src={`/images/${poke?.category?.toLowerCase().replace(" ", "_")}.png`}
                        alt={poke?.category}
                        className="role-icon"
                    />
                </div>
                <div className="big-card-icons">
                    <img
                        src={isSlotOccupiedByPokemon(poke.id, 0) ? "/images/icons/a-solid-full-red.svg" : "/images/icons/a-solid-full.svg"}
                        onClick={() => { toggleSlot(poke.id, 0) }}
                        alt="compare-icon-a"
                    />
                    <img
                        src="/images/icons/scale-balanced-solid-full.svg"
                        alt="compare-icon"
                        className="scale-icon"
                    />
                    <img
                        src={isSlotOccupiedByPokemon(poke.id, 1) ? "/images/icons/b-solid-full-red.svg" : "/images/icons/b-solid-full.svg"}
                        onClick={() => { toggleSlot(poke.id, 1) }}
                        alt="scale-icon"
                    />
                    <img src={isFavorite(poke.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"}
                        onClick={() => toggleFavorite(poke?.id)}
                        alt="compare-icon-b"
                    />
                </div>
            </div>

            <div className="types-box">
                <img
                    src={`https://pokechart.weebly.com/uploads/1/3/7/0/13704287/${poke?.primaryType?.toLowerCase()}_orig.png`}
                    alt="primary type"
                    className="type-icon"
                />
                {poke?.secondaryType && (
                    <img
                        src={`https://pokechart.weebly.com/uploads/1/3/7/0/13704287/${poke?.secondaryType?.toLowerCase()}_orig.png`}
                        alt="secondary type"
                        className="type-icon"
                    />
                )}
            </div>
            <div className="dex-text">
                <p>{poke?.description}</p>
            </div>

            <img
                src={poke?.image}
                alt={poke?.title}
                className="big-poke-sprite"
            />
            <StatsBox
                poke={poke}
            />
        </div>
    )
}