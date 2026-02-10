import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext";

export default function BigCard({ poke }) {

    const { isFavorite, favorites, addFavorite, removeFavorite } = useContext(GlobalContext)

    //valore massimo raggiungibile in pokemon dalla singola statistica base (standard) 
    const MAX_STAT = 255;

    {/**Probabilmente centralizzabile (sata anche in ListCard) */}
    function toggleFavorite() {
        if (!favorites?.includes(poke?.id)) {
            addFavorite(poke?.id)
            console.log(favorites)
        } else {
            removeFavorite(poke?.id)
            console.log(favorites)
        }
    }

    return (
        <div className="big-card">

            <div className="poke-infos">
                <h1 className="poke-name">{poke?.title} </h1>
                <h3>{poke?.category}</h3>
                <img src={isFavorite(poke?.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"}
                    onClick={toggleFavorite}
                    className="fav-icon"
                />

            </div>

            <div className="types-box">
                <img src={`https://pokechart.weebly.com/uploads/1/3/7/0/13704287/${poke?.primaryType?.toLowerCase()}_orig.png`} alt="" className="type-icon" />
                {poke?.secondaryType && (
                    <img src={`https://pokechart.weebly.com/uploads/1/3/7/0/13704287/${poke?.secondaryType?.toLowerCase()}_orig.png`} alt="" className="type-icon" />
                )}
            </div>
            <div className="dex-text">
                <p>{poke?.description}</p>
            </div>

            <img src={poke?.image} alt={poke?.title} className="big-poke-sprite" />
            <div className="stats">
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.hp} / ${MAX_STAT})`, backgroundColor: `#69DC12` }}
                >HP: {poke?.baseStats?.hp}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.attack} / ${MAX_STAT})`, backgroundColor: `#EFCC18` }}
                >Attack: {poke?.baseStats?.attack}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.defense} / ${MAX_STAT})`, backgroundColor: `#E86412` }}
                >Defense: {poke?.baseStats?.defense}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.specialAttack} / ${MAX_STAT})`, backgroundColor: `#14C3F1` }}
                >Special Attack: {poke?.baseStats?.specialAttack}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.specialDefense} / ${MAX_STAT})`, backgroundColor: `#4A6ADF` }}
                >Special Defense: {poke?.baseStats?.specialDefense}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.speed} / ${MAX_STAT})`, backgroundColor: `#D51DAD` }}
                >Speed: {poke?.baseStats?.speed}</div>
            </div>
        </div>
    )
}