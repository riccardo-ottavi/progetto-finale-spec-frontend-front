import React from "react"
import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext"
import { Link } from "react-router-dom";

const ListCard = React.memo(({ poke }) => {

    const { isFavorite, isSlotOccupiedByPokemon, toggleFavorite, toggleSlot } = useContext(GlobalContext);

    return (
        <tr>
            <div className="small-card">
                <Link to={`/pokemons/${poke?.id}`}>
                    <img src={`https://img.pokemondb.net/artwork/large/${poke?.title.toLowerCase()}.jpg`}
                        alt={poke?.title}
                        className="cell small-sprite"
                    />
                    <td className="cell"><h5>{poke?.title}</h5></td>
                    <td>
                        <div className="role-box">
                            <h5 className="cell role-text">{poke?.category}</h5>
                            <img
                                src={`/images/${poke?.category?.toLowerCase().replace(" ", "_")}.png`}
                                alt={poke?.category}
                                className="role-icon"
                            />
                        </div>
                    </td>
                </Link>
                <div className="icons cell" >
                    <img
                        src={isSlotOccupiedByPokemon(poke?.id, 0) ? "/images/icons/a-solid-full-red.svg" : "/images/icons/a-solid-full.svg"}
                        onClick={() => { toggleSlot(poke?.id, 0) }}
                        className="icon"
                        alt="compare-icon-a"
                    />
                    <img
                        src="/images/icons/scale-balanced-solid-full.svg"
                        alt="compare-icon"
                        className="scale-icon"
                    />
                    <img
                        src={isSlotOccupiedByPokemon(poke?.id, 1) ? "/images/icons/b-solid-full-red.svg" : "/images/icons/b-solid-full.svg"}
                        onClick={() => { toggleSlot(poke.id, 1) }}
                        className="icon"
                        alt="scale-icon"
                    />
                    <img src={isFavorite(poke?.id) ? "/images/icons/heart-filled.svg" : "/images/icons/heart.svg"}
                        onClick={() => toggleFavorite(poke?.id)}
                        className="icon"
                        alt="compare-icon-b"
                    />
                </div>
            </div>
        </tr>
    )
})

export default ListCard