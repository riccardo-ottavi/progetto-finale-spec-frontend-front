import { createContext, useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const GlobalContext = createContext()

export function GlobalProvider({children}){

    const [pokeList, setPokeList] = useState([])
    const [duoToCompare, setDuoToCompare] = useState([])

    {/*Mette il pokemon al primo o secondo posto della comparazione*/}
    function placePokeInCompare(poke){
    
    }


    const [favurites, setFavorites] = useState([])
    
    function addFavorite(poke){
        setFavorites([...prev],poke)
    }

    function removeFavorite(){
        
    }

    const isFavorite = (characterId) => {
        return favorites.includes(characterId);
    };

    async function fetchPokeList(){
        const pokeRes = await fetch(`${API_URL}/pokemons`)
        const pokeData = await pokeRes.json()
        setPokeList(pokeData)
    }

    useEffect(() => {
        fetchPokeList()
    },[])

    return(
        <GlobalContext.Provider value={{pokeList, setPokeList, addFavorite, isFavorite}}>
            {children}
        </GlobalContext.Provider>
    )
}