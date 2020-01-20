import React from 'react'
import ReactDOM from 'react-dom'

export default function ProductComponent(props){
    return (
          React.createElement('div',{className : "col-sm-4 mb-3" },
            React.createElement('div',{className : "card loja__item " },
                React.createElement('img',{className : "card-img-top", src: `${props.item.imagem}` }),
            React.createElement('div',{className : "card-body" },
                React.createElement('h5',{className : "card-title" },`${props.item.titulo}` ),
                React.createElement('small',null,`R$ ${props.item.preço}`),
                React.createElement('p',{className : "card-text" },`${props.item.descrição}`),
                React.createElement('button',{className : "btn btn-primary", onClick : props.onAddCarrinho.bind(null,props.item)  },'Adicionar'),
                )
            )
        )
    )
}


