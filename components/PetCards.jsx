import { nanoid } from "nanoid"

function PetCards({petPicks}) {
    
    return (
        <>
        {petPicks.map((p) => <> key={nanoid}
            <img src={p.image}/>
            <p>{p.petName} {p.sold}</p>
        </>)}
        </>
    )
}


export default PetCards