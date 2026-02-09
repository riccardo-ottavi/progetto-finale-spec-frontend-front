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
                    style={{ width: `calc(100% * ${poke?.baseStats?.hp} / ${MAX_STAT})` }}
                >HP: {poke?.baseStats?.hp}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.attack} / ${MAX_STAT})` }}
                >Attack: {poke?.baseStats?.attack}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.defense} / ${MAX_STAT})` }}
                >Defense: {poke?.baseStats?.defense}</div>
               <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.specialAttack} / ${MAX_STAT})` }}
                >Special Attack: {poke?.baseStats?.specialAttack}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.specialDefense} / ${MAX_STAT})` }}
                >Special Defense: {poke?.baseStats?.specialDefense}</div>
                <div className="stat-bar"
                    style={{ width: `calc(100% * ${poke?.baseStats?.speed} / ${MAX_STAT})` }}
                >Speed: {poke?.baseStats?.speed}</div>
            </div>
        </div>
    )
}