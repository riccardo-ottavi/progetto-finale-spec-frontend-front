export default function ListCard({ poke }) {
    return (
        <div className="small-card">
            <img src={`/images/${poke.title.toLowerCase()}.png`} alt={poke.title} />
            <p>{poke.title}</p>
            <p>{poke.category}</p>
        </div>
    )
}