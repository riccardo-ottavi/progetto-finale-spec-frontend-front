import { createContext, useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const GlobalContext = createContext()

export function GlobalProvider({children}){

    const [pokeList, setPokeList] = useState([])

    async function fetchPokeList(){
        const pokeRes = await fetch(`${API_URL}/pokemons`)
        const pokeData = await pokeRes.json()
        setPokeList(pokeData)
    }

    useEffect(() => {
        fetchPokeList()
    },[])

    return(
        <GlobalContext.Provider value={{pokeList, setPokeList}}>
            {children}
        </GlobalContext.Provider>
    )
}