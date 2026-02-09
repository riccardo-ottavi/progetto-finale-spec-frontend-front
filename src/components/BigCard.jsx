export default function BigCard({poke}) {

    const MAX_STAT = 255;

    return (
        <div className="big-card">
            
            <h1>{poke?.title} </h1>
            <p>{poke?.primaryType}</p>
            <p>{poke?.secondaryType}</p>
            <p>{poke?.description}</p>
            <img src={`/images/pokemonSprites/${poke?.title?.toLowerCase()}.png`} alt={poke?.title} />
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