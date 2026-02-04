import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({children}){

    const [pokeList, setPokeList] = useState([])

    async function fetchPokeList(){
        const pokeRes = await fetch("http://localhost:3001/pokemons")
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