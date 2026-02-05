import React from "react"
import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext"
import { Link } from "react-router-dom";

const ListCard = React.memo(({ poke }) => {

    const { addFavorite } = useContext(GlobalContext);

    function toggleFavorite() {

    }

    return (
        <div className="small-card">
            <Link to={`/pokemons/${poke.id}`} key={poke.id}>
                <img src={`/images/pokemonSprites/${poke.title.toLowerCase()}.png`} alt={poke.title} />
                <p>{poke.title}</p>
                <p>{poke.category}</p>
            </Link>
            <div className="icons">
                <img src="/images/icons/heart.svg" className="add-fav-icon" onClick={toggleFavorite}/>
            </div>
        </div>
    )
})

export default ListCard