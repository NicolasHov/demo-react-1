
const Button = (props) => {
    return (
        <button
            onClick={props.handleClick}
            style={{ backgroundColor: props.color }}
        >
            Pillule {props.text}
        </button>
    )
}


export default Button

