import './App.css'
import Button from './components/Button.jsx'
import { useState } from 'react' // TODO: check signed import

const App = () => {
  const [counterRed, setCounterRed] = useState(0)
  const [counterBlue, setCounterBlue] = useState(0)

  // fonction qui est déclenchée lorque on clique sur le bouton
  const handleClick = (color) => {
    if (color === 'blue') {
      setCounterBlue((counterBlue) => counterBlue + 1)
    }
    else if (color == 'red')
      setCounterRed((counterRed) => counterRed + 1) // on lui indique comment calculer la nouvelle valeur avec la précédente
    // color == 'red' ? setCounterRed((counterRed) => counterRed + 1) : null
    // color == 'blue' ? setCounterBlue((counterBlue) => counterBlue + 1) : null
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
      <div>Vous avez cliqué {counterRed} fois sur rouge et {counterBlue} fois sur bleu ! </div>
    </>
  )
}

export default App
