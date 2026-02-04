import { useParams } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../contexts/PokeContext";

export default function PokeDetailPage(){

    const { id } = useParams()
    const { pokeList } = useContext(GlobalContext);

    const poke = pokeList?.find(p => p.id === Number(id));

    return(
        <h1>Pagina dettaglio: {poke?.title} </h1>
    )
}