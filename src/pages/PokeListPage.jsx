import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";

export default function PokeListPage() {

    const { pokeList } = useContext(GlobalContext);
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("title");
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "↓" : "↑";

    const roleIcons = {
        "Attaccante Speciale": "/images/roles/attaccante-speciale.png",
        "Attaccante Fisico": "/images/roles/attaccante-fisico.png",
        "Difensore": "/images/roles/difensore.png",
        "Attaccante Misto": "/images/roles/attaccante-misto.png",
    };

    function handleCategoryChoice(e) {
        setSelectedCategory(e.target.value)
    }

    function handleSort(column) {
        if (sortBy === column) {
            setSortOrder(sortOrder * -1);
        } else {
            setSortBy(column);
            setSortOrder(1);
        }
    }

    const sortedList = useMemo(() => {
        const filteredList = pokeList?.filter((p) => p?.title?.toLowerCase().includes(query) && p?.category?.includes(selectedCategory))
        {/** Applica sortBy e sortOrder */ }
        const sorted = [...filteredList].sort((a, b) =>
            sortOrder * a[sortBy].localeCompare(b[sortBy])
        )
        return sorted
    }, [query, selectedCategory, sortBy, sortOrder, pokeList])

    return (
        <div className="container">


            {/** Lista */}
            <table>
                <thead className="row">
                    {/** Barra di ricerca */}
                    <input
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Cerca..." />

                    {/** Filtra categoria */}
                    <select value={selectedCategory} onChange={handleCategoryChoice}>
                        <option value="">Tutti</option>
                        <option value="Attaccante Fisico">Attaccante Fisico</option>
                        <option value="Attaccante Speciale">Attaccante Speciale</option>
                        <option value="Attaccante Misto">Attaccante Misto</option>
                        <option value="Difensore Fisico">Difensore Fisico</option>
                        <option value="Difensore Misto">Difensore Misto</option>
                        <option value="Difensore Speciale">Difensore Speciale</option>
                    </select>
                    <tr>
                        <th
                            className="cell"
                            onClick={() => handleSort("title")}
                        >
                            Nome {sortBy === "title" && sortIcon}
                        </th>
                        <th
                            className="cell"
                            onClick={() => handleSort("category")}
                        >
                            Ruolo {sortBy === "category" && sortIcon}
                        </th>
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