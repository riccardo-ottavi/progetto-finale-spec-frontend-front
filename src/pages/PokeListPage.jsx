import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";

export default function PokeListPage() {

    const { pokeList } = useContext(GlobalContext);
    const [query, setQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sortBy, setSortBy] = useState("title")
    const [sortOrder, setSortOrder] = useState(1)

    function handleCategoryChoice(e) {
        setSelectedCategory(e.target.value)
    }

    function handleSort(e) {
        setSortBy(e.target.value)
    }

    function handleSortOrder(e) {
        if (e.target.value === "AZ") {
            setSortOrder(1)
        } else if (e.target.value === "ZA") {
            setSortOrder(-1)
        }
    }

    const sortedList = useMemo(() => {
        const filteredList = pokeList?.filter((p) => p?.title?.toLowerCase().includes(query) && p?.category?.includes(selectedCategory))

        const sorted = [...filteredList].sort((a, b) =>
            sortOrder * a[sortBy].localeCompare(b[sortBy])
        )

        return sorted
    }, [query, selectedCategory, sortBy, sortOrder, pokeList])

    return (
        <div className="container">
            {/** Barra di ricerca */}
            <input type="text" onChange={(e) => setQuery(e.target.value)} />

            {/** Filtra categoria */}
            <select value={selectedCategory} onChange={handleCategoryChoice}>
                <option value="">Tutti</option>
                <option value="Attaccante Fisico">Attaccante Fisico</option>
                <option value="Attaccante Speciale">Attaccante Speciale</option>
                <option value="Attaccante Misto">Attaccante Misto</option>
                <option value="Difensore">Difensore</option>
                <option value="Difensore Speciale">Difensore Speciale</option>
            </select>

            {/** Colonna di ordinamento*/}
            <select value={sortBy} onChange={handleSort}>
                <option value="title">Nome</option>
                <option value="category">Ruolo</option>
            </select>

            {/** Crescente o decrescente*/}
            <select onChange={handleSortOrder}>
                <option value="AZ">AZ</option>
                <option value="ZA">ZA</option>
            </select>

            {/** Lista */}
            <table>
                <thead className="row">
                    <tr>
                        <th className="cell">Nome</th>
                        <th className="cell">Ruolo</th>   
                    </tr>
                </thead>

                <tbody>
                    {sortedList.map((poke) => (
                        <ListCard
                            key={poke.id}
                            poke={poke}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}