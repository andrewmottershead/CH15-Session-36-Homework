// import { nanoid } from "nanoid"

// import MyPetFinder from "./MyPetFinder"

// const pets 

// console.log(pets)

function PetList({pets}) {
    
    return (
        <ul>
        {pets.map(p =>  <li>{p}</li>)}
        </ul>
    )
}

{/* <MyPetFinder key={nanoid()} img src={p.image} name={p.name}  */}
// 


export default PetList