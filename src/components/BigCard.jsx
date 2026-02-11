import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext";

export default function BigCard({ poke }) {

    const { isFavorite, favorites, addFavorite, removeFavorite, isSlotOccupiedByPokemon, placePokeInCompare, duoToCompare, toggleFavorite } = useContext(GlobalContext)

    //valore massimo raggiungibile in pokemon dalla singola statistica base (standard) 
    const MAX_STAT = 255;

    const statStyle = [
        { key: "hp", label: "HP: ", color: "#69DC12" },
        { key: "attack", label: "Attack: ", color: "#EFCC18" },
        { key: "defence", label: "Defence: ", color: "#E86412" },
        { key: "specialAttack", label: "Sp Attack: ", color: "#14C3F1" },
        { key: "specialDefence", label: "Sp Defence: ", color: "#4A6ADF" },
        { key: "speed", label: "Speed: ", color: "#D51DAD" },
    ];

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
                    <img
                        src={isSlotOccupiedByPokemon(poke.id, 0) ? "/images/icons/a-solid-full-blu.svg" : "/images/icons/a-solid-full.svg"}
                        onClick={() => {
                            if (isSlotOccupiedByPokemon(poke.id, 0)) {
                                placePokeInCompare(null, 0);
                            } else {
                                placePokeInCompare(poke.id, 0);
                            }
                        }}
                    />
                    <img src="/images/icons/scale-balanced-solid-full.svg" alt="compare-icon" className="scale-icon" />
                    <img
                        src={isSlotOccupiedByPokemon(poke.id, 1) ? "/images/icons/b-solid-full-blu.svg" : "/images/icons/b-solid-full.svg"}
                        onClick={() => {
                            if (isSlotOccupiedByPokemon(poke.id, 1)) {
                                placePokeInCompare(null, 1);
                            } else {
                                placePokeInCompare(poke.id, 1);
                            }
                        }}
                    />

                    <img src={isFavorite(poke.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"}
                        onClick={() => toggleFavorite(poke?.id)}
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
                    const value = poke?.baseStats?.[stat.key];
                    return (
                        <div
                            key={stat.key}
                            className={`stat-bar`}
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