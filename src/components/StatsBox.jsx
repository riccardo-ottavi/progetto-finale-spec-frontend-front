export default function StatsBox( {poke} ){

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

    return(
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

                {poke?.baseStats && (
                    <p>
                        Totale: {Object.values(poke?.baseStats).reduce((somma, valore) => somma + valore, 0)}
                    </p>
                )}
            </div>
    )
}