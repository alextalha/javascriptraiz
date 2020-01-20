import React from 'react'
import ReactDOM from 'react-dom'

import ProductComponent from './Components/Produto'
import ListaProdutoComponent from './Components/ListaProdutos'
import CarrinhoComponent from './Components/Carrinho'
import data from './data'

export default function AppComponent(props){

    function removeItemCarrinho(produtoId){
        console.log("Remover Item Carrinho")

        if(carrinhoItens[produtoId].quantidade <= 1 ){
            delete carrinhoItens[produtoId];
            addItemCarrinho({ ...carrinhoItens})
        }else{

            console.log(carrinhoItens)
            addItemCarrinho({
                ...carrinhoItens,
                [produtoId] : {
                    ...carrinhoItens[produtoId],
                    quantidade: --carrinhoItens[produtoId].quantidade
                }
            })

        }
    }

    let[carrinhoItens, addItemCarrinho] = React.useState({})

    function addCarrinho(produto){
        console.log(carrinhoItens)
        if(!carrinhoItens[produto.id]){

            addItemCarrinho({
                ...carrinhoItens,
                [produto.id] : {
                    ...produto,
                    quantidade: 1
                }
            })

        }else{
          
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id] : {
                    ...produto,
                    quantidade: ++carrinhoItens[produto.id].quantidade
                }
            })

        }
    }

    /*
    const carrinhoItens = {
        "1" : {
            "id" : "1",
            "imagem" : "https://lorempixel.com/500/300",
            "titulo" :  "Js Raiz 1",
            "preço" : 300,
            "descrição" : "O melhor curso de Javascript 1",
            "quantidade" : 2
        },
        "2" : {
            "id" : "2",
            "imagem" : "https://lorempixel.com/500/300",
            "titulo" :  "Js Raiz 2",
            "preço" : 400,
            "descrição" : "O melhor curso de Javascript 2",
            "quantidade" : 3
        }
    }
    */

    return (

    <React.Fragment>
          <div className="col-sm-8">
              <ListaProdutoComponent>
                {   data.map(function(produto,index){ 
                    return  <ProductComponent item={produto} onAddCarrinho={addCarrinho} key={`produto-${index}`} />
                })}
              </ListaProdutoComponent>
          </div>
          <div className="col-sm-4 mb-3">
            <CarrinhoComponent itens={carrinhoItens} onRemoveItemCarrinho={removeItemCarrinho} />
          </div>              
        </React.Fragment>
    )
    
}

