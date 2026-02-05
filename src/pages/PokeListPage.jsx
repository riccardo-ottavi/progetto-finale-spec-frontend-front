import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";

export default function PokeListPage(){

    const { pokeList } = useContext(GlobalContext);
    const [query, setQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const filteredList = pokeList?.filter((p) => p?.title?.toLowerCase().includes(query) && p.category.includes(selectedCategory) 
)

   
    function handleCategoryChoice(e){
        setSelectedCategory(e.target.value)   
    }
  

    return(
        <div className="list-container">
            {/** Barra di ricerca */}
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>

            {/** Filtra categoria */}
           <select value={selectedCategory} onChange={handleCategoryChoice}>
                <option value="">Tutti</option>
                <option value="Attaccante Fisico">Attaccante Fisico</option>
                <option value="Attaccante Speciale">Attaccante Speciale</option>
                <option value="Attaccante Misto">Attaccante Misto</option>
                <option value="Difensore">Difensore</option>

           </select>
          
            
            {/** Lista */}
            {filteredList.map((poke) => (
                <Link to={`/pokemons/${poke.id}`}  key={poke.id}>
                    <ListCard 
                        poke={poke}
                    />
                </Link>
            ))}
        </div>
    )
}