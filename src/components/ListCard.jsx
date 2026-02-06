import React from "react"
import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext"
import { Link } from "react-router-dom";

const ListCard = React.memo(({ poke }) => {

    const { favorites, addFavorite, removeFavorite, isFavorite, placePokeInCompare } = useContext(GlobalContext);

    function toggleFavorite() {
        if(!favorites?.includes(poke.id)){
            addFavorite(poke.id)
            console.log(favorites)
        }else{
            removeFavorite(poke.id)
            console.log(favorites)
        }
    }

    return (
        <div className="small-card">
            <Link to={`/pokemons/${poke.id}`}>
                <img src={`/images/pokemonSprites/${poke.title.toLowerCase()}.png`} alt={poke.title} />
                <p>{poke.title}</p>
                <p>{poke.category}</p>
            </Link>
            <div className="icons">
                <img src="/images/icons/a-solid-full.svg" alt="" 
                   onClick={() => placePokeInCompare(poke.id, 0)}
                />
                <img src="/images/icons/scale-balanced-solid-full.svg" alt="" />
                <img src="/images/icons/b-solid-full.svg" alt="" 
                   onClick={() => placePokeInCompare(poke.id, 1)}
                />

                <img src={isFavorite(poke.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"} 
                    onClick={toggleFavorite}
                />
            </div>
        </div>
    )
})

export default ListCard