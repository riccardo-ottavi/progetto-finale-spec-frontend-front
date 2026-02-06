import { createContext, useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [pokeList, setPokeList] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [duoToCompare, setDuoToCompare] = useState([null, null]);
    const [pokeDetail, setPokeDetail] = useState(null);
    const [compareDetails, setCompareDetails] = useState([null, null]);

    {/*Copia il duo e sostituisce lo slot richiesto*/ }
   function placePokeInCompare(pokeId, place) {
    setDuoToCompare(prev => {
        const newDuo = [...prev]; 
        newDuo[place] = pokeId;   
        return newDuo;
    });
}

    function addFavorite(pokeId) {
        setFavorites(prev => [...prev, pokeId])
    }

    function removeFavorite(pokeId) {
        setFavorites(prev => prev.filter(id => id !== pokeId));
    }

    const isFavorite = (characterId) => {
        return favorites.includes(characterId);
    };

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

    useEffect(() => {
        fetchPokeList()
    }, [])

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
                setCompareDetails
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}