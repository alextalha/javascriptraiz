import React from 'react'
import ReactDOM from 'react-dom'

export default function CarrinhoComponent(props){

    function valorTotal(carrinhoItens){

        let total = Object.keys(carrinhoItens).reduce(function(acc,valorAtual){
          return acc +  (carrinhoItens[valorAtual].quantidade * carrinhoItens[valorAtual].preço)  
        },0)

        return total;
    }

    return (

        React.createElement('div',{className : "carrinho__itens" },
            React.createElement('div',{className : "card carrinho__item" },
          
                Object.keys(props.itens).map(function(key,index){

                    return (
                        React.createElement('div',{className : "card-body" , key : `card-body-${index}` }, 
                            React.createElement('h5',{ className : "card-title" }, props.itens[key].titulo ),
                            React.createElement('p',{className : "card-text"}, `Preço unidade: R$ ${props.itens[key].preço} | Quantidade ${props.itens[key].quantidade}` ),
                            React.createElement('p',{className : "card-text"}, `Valor: R$ ${props.itens[key].preço * props.itens[key].quantidade }` ),
                            React.createElement('button',{className : "btn btn-danger btn-sm", onClick: props.onRemoveItemCarrinho.bind(null,key) }, "Remover" ),
                            
                            )
                    
                    )
                }),

                React.createElement('div',{className : "carrinho__total mt-2 p-3" },
                React.createElement('h6',null, "Total: ",
                    React.createElement('strong',null, `R$ ${valorTotal(props.itens)}`)    
                    )     
                )
            )
        )
    )
}