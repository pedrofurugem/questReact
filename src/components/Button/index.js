import './style.css'

const Button = (props) => {
    function labelButton(){
        alert(`A label desse botão é, ${Button.defaultProps.label} `)
    }
    
    return(
         <button className="btn" onClick={labelButton}> {props.label} </button>
    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button