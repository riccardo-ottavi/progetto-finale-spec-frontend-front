import { createContext, useState, useEffect } from "react";
import useStorage from "../hooks/useStorage";
const API_URL = import.meta.env.VITE_API_URL;

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    //TODO: Wrappa con try catch dove necessario
    const [pokeList, setPokeList] = useState([]);
    const [favorites, setFavorites] = useStorage("favorites",[]);
    const [duoToCompare, setDuoToCompare] = useState([null, null]);
    const [pokeDetail, setPokeDetail] = useState(null);
    const [compareDetails, setCompareDetails] = useState([null, null]);

    useEffect(() => {
        fetchPokeList()
    }, [])

    {/*--------FUNZIONI FETCH---------*/ }
    async function fetchPokeList() {
        const pokeRes = await fetch(`${API_URL}/pokemons`)
        const pokeData = await pokeRes.json()
        setPokeList(pokeData)
    }

    async function fetchPokeDetail(pokeId) {
        const pokeRes = await fetch(`${API_URL}/pokemons/${pokeId}`)
        const pokeData = await pokeRes.json()
        console.log("RISPOSTA API:", pokeData)
        return pokeData.pokemon
    }

    {/*--------FUNZIONI PREFERITI---------*/ }
    function addFavorite(pokeId) {
        if(favorites.length === 6) return
        setFavorites(prev => [...prev, pokeId])
    }

    function removeFavorite(pokeId) {
        setFavorites(prev => prev.filter(id => id !== pokeId));
    }

    function isFavorite(characterId) {
        return favorites.includes(characterId);
    };

    function toggleFavorite(pokeId) {
        if (!favorites?.includes(pokeId)) {
            addFavorite(pokeId);
        } else {
            removeFavorite(pokeId);
        }
    }

    {/*--------FUNZIONI CONFRONTO---------*/ }
    function placePokeInCompare(pokeId, place) {
        setDuoToCompare(prev => {
            const newDuo = [...prev];
            newDuo[place] = pokeId;
            return newDuo;
        });
    }

    function isSlotOccupiedByPokemon(pokeId, place) {
        return (duoToCompare[place] === pokeId)
    } 

    function toggleSlot(pokeId, place) {
        if (isSlotOccupiedByPokemon(pokeId, place)) {
            placePokeInCompare(null, place);
        } else {
            placePokeInCompare(pokeId, place);
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                pokeList,
                setPokeList,
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite,
                fetchPokeDetail,
                pokeDetail,
                setPokeDetail,
                placePokeInCompare,
                duoToCompare,
                compareDetails,
                setCompareDetails,
                isSlotOccupiedByPokemon,
                toggleFavorite,
                toggleSlot
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}