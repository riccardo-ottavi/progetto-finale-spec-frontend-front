import React from "react"

const ListCard = React.memo(({ poke }) => {
    return (
        <div className="small-card">
            <img src={`/images/${poke.title.toLowerCase()}.png`} alt={poke.title} />
            <p>{poke.title}</p>
            <p>{poke.category}</p>
        </div>
    )
})

export default ListCard