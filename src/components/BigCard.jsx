import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext";

export default function BigCard({ poke }) {

    const { isFavorite, favorites, addFavorite, removeFavorite, isSlotOccupiedByPokemon, placePokeInCompare, duoToCompare } = useContext(GlobalContext)

    //valore massimo raggiungibile in pokemon dalla singola statistica base (standard) 
    const MAX_STAT = 255;

    const statStyle = [
        { key: "hp", label: "HP", color: "#69DC12" },
        { key: "attack", label: "Attack", color: "#EFCC18" },
        { key: "defence", label: "Defence", color: "#E86412" },
        { key: "specialAttack", label: "Sp Attack", color: "#14C3F1" },
        { key: "specialDefence", label: "Sp Defence", color: "#4A6ADF" },
        { key: "speed", label: "Speed", color: "#D51DAD" },
    ];

    {/**Probabilmente centralizzabile (sata anche in ListCard) */ }
    {/**TODO: ottimizza con React.memo*/ }
    function toggleFavorite() {
        if (!favorites?.includes(poke?.id)) {
            addFavorite(poke?.id);
            console.log(favorites);
        } else {
            removeFavorite(poke?.id);
            console.log(favorites);
        }
    }

    function isMaxStat(pokeStats, statName) {
        const stats = Object.values(pokeStats);
        const maxValue = Math.max(...stats);

        return pokeStats[statName] === maxValue;
    }

    return (
        <div className="big-card">

            <div className="poke-infos">
                <h1 className="poke-name">{poke?.title} </h1>
                <div className="role-box">
                    <p className="cell">{poke?.category}</p>
                    <img src={`/images/${poke?.category?.toLowerCase().replace(" ", "_")}.png`} alt="" className="role-icon" />
                </div>
                <div className="big-card-icons">
                    <img src={isFavorite(poke?.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"}
                        onClick={toggleFavorite}
                        className="fav-icon"
                    />
                    <img alt=""
                        className="empty-slot-icon"
                        src={isSlotOccupiedByPokemon(poke?.id, 0) ? "/images/icons/a-solid-yellow.svg" : ""}
                        onClick={() => placePokeInCompare(null, 0)}
                    />
                    <img alt=""
                        className="empty-slot-icon"
                        src={isSlotOccupiedByPokemon(poke?.id, 1) ? "/images/icons/b-solid-yellow.svg" : ""}
                        onClick={() => placePokeInCompare(null, 1)}
                    />
                </div>
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
                {statStyle.map(stat => {
                    const value = poke?.baseStats?.[stat.key] || 0;
                    return (
                        <div
                            key={stat.key}
                            className={`stat-bar ${isMaxStat(poke?.baseStats, stat.key) ? 'best-stat' : ''}`}
                            style={{
                                width: `calc(100% * ${value} / ${MAX_STAT})`,
                                backgroundColor: stat.color
                            }}
                        >
                            <span>
                                {stat.label} {value}
                                {isMaxStat(poke?.baseStats, stat.key) && (
                                    <img src="/images/icons/star-solid.svg" className="star-icon" />
                                )}
                            </span>
                        </div>
                    );
                })}

                {/* Totale stats */}
                {poke?.baseStats && (
                    <p>
                        Totale: {Object.values(poke?.baseStats).reduce((somma, valore) => somma + valore, 0)}
                    </p>
                )}
            </div>
        </div>
    )
}