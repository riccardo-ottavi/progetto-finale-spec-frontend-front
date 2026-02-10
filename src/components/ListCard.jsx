import React from "react"
import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext"
import { Link } from "react-router-dom";

const ListCard = React.memo(({ poke }) => {

    const { favorites, addFavorite, removeFavorite, isFavorite, placePokeInCompare, isSlotOccupiedByPokemon } = useContext(GlobalContext);

    {/**Probabilmente centralizzabile (sata anche in BigCard) */ }
    function toggleFavorite() {
        if (!favorites?.includes(poke.id)) {
            addFavorite(poke.id)
            console.log(favorites)
        } else {
            removeFavorite(poke.id)
            console.log(favorites)
        }
    }

    return (

        <tr>
            <div className="small-card">
                <Link to={`/pokemons/${poke.id}`}>
                    <img src={`https://img.pokemondb.net/artwork/large/${poke?.title.toLowerCase()}.jpg`} alt={poke.title} className="cell small-sprite" />
                    <td className="cell"><strong>{poke.title}</strong></td>
                    <td>
                       <div className="role-box">
                              <p className="cell">{poke.category}</p>                                           
                              <img src={`/images/${poke?.category?.toLowerCase().replace(" ", "_")}.png`} alt="" className="role-icon" />  
                        </div> 
                    </td>
                    

                </Link>
                <div className="icons cell" >
                    <img
                        src={isSlotOccupiedByPokemon(poke.id, 0) ? "/images/icons/a-solid-yellow.svg" : "/images/icons/a-solid-full.svg"}
                        onClick={() => placePokeInCompare(poke.id, 0)}
                    />
                    <img src="/images/icons/scale-balanced-solid-full.svg" alt="compare-icon" />
                    <img alt=""
                        src={isSlotOccupiedByPokemon(poke.id, 1) ? "/images/icons/b-solid-yellow.svg" : "/images/icons/b-solid-full.svg"}
                        onClick={() => placePokeInCompare(poke.id, 1)}
                    />

                    <img src={isFavorite(poke.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"}
                        onClick={toggleFavorite}
                    />
                </div>
            </div>
        </tr>


    )
})

export default ListCard