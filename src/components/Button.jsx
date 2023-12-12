
const Button = (props) => {
    return (
        <button
            onClick={() => props.handleClick(props.color)} // j'ai ajouté props.color en parametre de la fonction (et ajouter un callback pour que la fonction soit appelée que lorsqu'on clique)
            style={{ backgroundColor: props.color }}
        >
            Pillule {props.text}
        </button>
    )
}


export default Button

