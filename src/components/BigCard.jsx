export default function BigCard({poke}) {
    return (
        <div className="big-card">
            
            <h1>{poke?.title} </h1>
            <p>{poke?.primaryType}</p>
            <p>{poke?.secondaryType}</p>
            <p>{poke?.description}</p>
            <img src={`/images/pokemonSprites/${poke?.title?.toLowerCase()}.png`} alt={poke?.title} />
            <div className="stats">
                <span>HP: {poke?.baseStats?.hp}</span>
                <span>Attack: {poke?.baseStats?.attack}</span>
                <span>Defense: {poke?.baseStats?.defense}</span>
                <span>Sp. Atk: {poke?.baseStats?.specialAttack}</span>
                <span>Sp. Def: {poke?.baseStats?.specialDefense}</span>
                <span>Speed: {poke?.baseStats?.speed}</span>
            </div>
        </div>
    )
}