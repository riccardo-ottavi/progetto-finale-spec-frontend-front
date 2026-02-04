import { useEffect, useState } from "react"

export default function PokeListPage(){

    const [list, setList] = useState([])

    async function fetchPokeList(){
        const pokeRes = await fetch("http://localhost:3001/pokemons")
        const pokeData = await pokeRes.json()
        setList(pokeData)
    }

    useEffect(() => {
        fetchPokeList()
    },[])

    return(
        <div>
            <h1 onClick={() => console.log(list)}>Sono la pagina con la lista</h1>
            {list.map((poke, id) => (
                <div key={id}>
                    <p>{poke.title}</p>
                </div>
            ))}
        </div>
    )
}