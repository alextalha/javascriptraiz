import React from 'react'
import ReactDOM from 'react-dom'

export default function ListaProdutoComponent(props){
    return  (
        React.createElement('div',{className : "row loja" },
            props.children
        )
    )
}