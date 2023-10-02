// import { useState } from 'react'
import Victor from '../src/assets/cute_dog_600.jpg'
import maryMungoMidge from '../src/assets/cute_guinea_pigs_600.jpg'
import Viv from '../src/assets/cute_kitten_600.jpg'
import Counter from '../components/Counter'
import PetList from '../components/PetList'
import PetCards from '../components/PetCards'
import './App.css'

function App() {
  const petPicks = [ {image: Victor, petName: "Victor" }, {image: maryMungoMidge, petName: "Mary, Mungo and Midge" }, {image: Viv, petName: "Viv", sold: true} ]


  return (
    <>
    {/* <Counter/> */}

    {/* <PetList pets={[ "Victor", "Mary, Mungo and Midge", "Viv"]} /> */}
    <PetCards petPicks={petPicks} />
    </>
  )
}

export default App
