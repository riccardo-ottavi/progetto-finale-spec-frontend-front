const API_URL = import.meta.env.VITE_API_URL;

export async function fetchPokeList() {
    const pokeRes = await fetch(`${API_URL}/pokemons`);

    if (!pokeRes.ok) {
        throw new Error("Errore nella risposta API");
    }

    const pokeData = await pokeRes.json();
    return pokeData;
}

export async function fetchPokeDetail(pokeId) {
    try {
        const pokeRes = await fetch(`${API_URL}/pokemons/${pokeId}`);

        if (!pokeRes.ok) {
            throw new Error("Errore nella risposta API");
        }

        const pokeData = await pokeRes.json();
        return pokeData.pokemon;

    } catch (error) {
        console.error("Errore fetchPokeDetail:", error);
    }
}

