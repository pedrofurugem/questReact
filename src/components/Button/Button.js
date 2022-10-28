import React from 'react';
import './button.css'

function labelBotao(){
    alert(`A label desse botao é ${Button.defaultProps.label}`)
}

const Button = (props) => {
    return <button className="btn" onClick={labelBotao}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button