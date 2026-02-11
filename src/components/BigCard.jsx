import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext";

export default function BigCard({ poke }) {
    /*TODO: estrai da qua i colori delle statistiche e centralizza */

    const { isFavorite, favorites, addFavorite, removeFavorite, isSlotOccupiedByPokemon, placePokeInCompare, duoToCompare } = useContext(GlobalContext)

    //valore massimo raggiungibile in pokemon dalla singola statistica base (standard) 
    const MAX_STAT = 255;

    {/**Probabilmente centralizzabile (sata anche in ListCard) */ }
    {/**TODO: ottimizza con React.memo*/ }
    function toggleFavorite() {
        if (!favorites?.includes(poke?.id)) {
            addFavorite(poke?.id)
            console.log(favorites)
        } else {
            removeFavorite(poke?.id)
            console.log(favorites)
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
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.hp} / ${MAX_STAT})`, backgroundColor: `#69DC12` }}
                >
                    <span>HP {poke?.baseStats?.hp}{isMaxStat(poke?.baseStats, "hp") && (
                    <img src="/images/icons/star-solid-full.svg" className="star-icon"/>
                )}</span>
                </div>
                
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.attack} / ${MAX_STAT})`, backgroundColor: `#EFCC18` }}
                >
                    <span>Attack {poke?.baseStats?.attack}{isMaxStat(poke?.baseStats, "attack") && (
                    <img src="/images/icons/star-solid-full.svg" className="star-icon"/>
                )}</span>
                </div>
                
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.defense} / ${MAX_STAT})`, backgroundColor: `#E86412` }}
                >
                    <span>Defense {poke?.baseStats?.defense}{isMaxStat(poke?.baseStats, "defense") && (
                    <img src="/images/icons/star-solid-full.svg" className="star-icon"/>
                )}</span>
                </div>
                
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.specialAttack} / ${MAX_STAT})`, backgroundColor: `#14C3F1` }}
                >
                    <span>Sp Attack {poke?.baseStats?.specialAttack}{isMaxStat(poke?.baseStats, "specialAttack") && (
                    <img src="/images/icons/star-solid-full.svg" className="star-icon"/>
                )}</span>
                </div>
                
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.specialDefense} / ${MAX_STAT})`, backgroundColor: `#4A6ADF` }}
                >
                    <span>Sp Defense {poke?.baseStats?.specialDefense}{isMaxStat(poke?.baseStats, "specialDefense") && (
                    <img src="/images/icons/star-solid-full.svg" className="star-icon"/>
                )}</span>
                </div>
                
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.speed} / ${MAX_STAT})`, backgroundColor: `#D51DAD` }}
                >
                    <span>Speed {poke?.baseStats?.speed}{isMaxStat(poke?.baseStats, "speed") && (
                    <img src="/images/icons/star-solid-full.svg" className="star-icon"/>
                )}</span>
                </div>
                
                {poke?.baseStats && (
                    <p>Totale: {
                        Object.values(poke?.baseStats)
                            .reduce((somma, valore) => somma + valore, 0)
                    }</p>
                )}


                {/**TODO: renderizza le statistiche con un ciclo invece che così
                 * 
                 *
                 * 
                 * Domanda a Mauro: 1)Posso mettere il limite di preferiti a 6 per simulare la grandezza dei team pokemon?
                 *                  2)Le immagini in lista sono una forzatura delle specifiche?
                 *                  3)Deve essere responsive?
                 * 
                */}
            </div>
        </div>
    )
}