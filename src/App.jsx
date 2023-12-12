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

  // Etapes de mise a jour du DOM :
  // 1.changer le state
  // 2.recalculer le virtualDOM
  // 3.reafficher (re-render) le composant (il va modifier le DOM : mais juste la partie concernée)

  return (
    <>
      <div className="card">
        <Button handleClick={handleClick} color='blue' text='bleue' />
        <Button handleClick={handleClick} color='red' text='rouge' />
      </div>
      <div>Vous avez cliqué {counter} fois ! </div>
    </>
  )
}

export default App
