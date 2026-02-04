export default function ListCard({ poke }) {
    return (
        <div className="small-card" key={poke.id}>
            <img src={`/images/${poke.title.toLowerCase()}.png`} alt={poke.title} />
            <p>{poke.title}</p>
            <p>{poke.category}</p>
        </div>
    )
}