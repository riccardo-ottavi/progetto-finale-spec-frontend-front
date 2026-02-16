import { useContext, useState, useMemo, useCallback } from "react"
import { GlobalContext } from "../contexts/PokeContext"
import ListCard from "../components/ListCard";

export default function PokeListPage() {

    const { pokeList } = useContext(GlobalContext);
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("title");
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "↓" : "↑";

    function handleCategoryChoice(e) {
        setSelectedCategory(e.target.value)
    }

    function handleSort(newSortBy) {
        if (sortBy === newSortBy) {
            setSortOrder(sortOrder * -1);
        } else {
            setSortBy(newSortBy);
            setSortOrder(1);
        }
    }

    function debounce(callback, delay){
        let timer;
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(value);
            },delay)
        };
    }

    const debouncedSearch = useCallback(
        debounce(setQuery, 500) 
    ,[]);

    const sortedList = useMemo(() => {
        const filteredList = pokeList?.filter((p) => p?.title?.toLowerCase().includes(query) && p?.category?.includes(selectedCategory))
        const sorted = [...filteredList].sort((a, b) =>
            sortOrder * a[sortBy].localeCompare(b[sortBy])
        )
        return sorted
    }, [query, selectedCategory, sortBy, sortOrder, pokeList])

    return (
        <div className="container">
            <table>
                <thead className="row">
                    <input
                        type="text"
                        onChange={(e) => debouncedSearch(e.target.value)}
                        placeholder="Cerca..." />
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
                    {sortedList.length === 0 && (
                        <div className="zero-results">
                            <h2>Nessun Risultato</h2>
                            <img 
                                src="https://tse2.mm.bing.net/th/id/OIP.KPEtbYVbXg2yQUqU0i0nsgHaDt?rs=1&pid=ImgDetMain&o=7&rm=3" 
                                alt="no-result" 
                            />
                        </div>
                    )
                    }
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