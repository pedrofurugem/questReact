import React from 'react';
import './button.css'

const Button = (props) => {
    function labelButton(){
        alert(`A label desse botao é ${Button.defaultProps.label}`)
    }

    return <button className="btn" onClick={labelButton}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button