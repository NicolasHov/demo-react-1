import './App.css'
import Button from './components/Button.jsx'
import { useState } from 'react' // TODO: check signed import

const App = () => {
  const [counter, setCounter] = useState(0)

  // fonction qui est déclenchée lorque on clique sur le bouton rouge
  const handleClick = () => {
    console.log("on incrémente le compteur")
    setCounter((counter) => counter + 1) // on lui indique comment calculer la nouvelle valeur avec la précédente
  }

  return (
    <>
      <div className="card">
        <Button color='blue' text='bleue' />
        <Button color='red' text='rouge' />
      </div>
      <button onClick={handleClick}>Click me </button>
      <div>Vous avez cliqué {counter} fois ! </div>
    </>
  )
}

export default App
