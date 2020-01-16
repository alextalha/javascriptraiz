
let produtosListas = [
    { 
        "id" : "0",
        "imagem" : "https://lorempixel.com/500/300",
        "titulo" :  "Js Raiz 1",
        "preço" : 300,
        "descrição" : "O melhor curso de Javascript 1",
    
    },
    { 
        "id" : "1",
        "imagem" : "https://lorempixel.com/500/300",
        "titulo" :  "Js Raiz 2",
        "preço" : 301,
        "descrição" : "O melhor curso de Javascript 2",

    },
    { 
        "id" : "2",
        "imagem" : "https://lorempixel.com/500/300",
        "titulo" :  "Js Raiz 3",
        "preço" : 302,
        "descrição" : "O melhor curso de Javascript 4",
      
    },
    { 
        "id" : "3",
        "imagem" : "https://lorempixel.com/500/300",
        "titulo" :  "Js Raiz 4",
        "preço" : 303,
        "descrição" : "O melhor curso de Javascript 4",

    },
    { 
        "id" : "4",
        "imagem" : "https://lorempixel.com/500/300",
        "titulo" :  "Js Raiz 5",
        "preço" : 304,
        "descrição" : "O melhor curso de Javascript 5", 
    },
    { 
        "id" : "5",
        "imagem" : "https://lorempixel.com/500/300",
        "titulo" :  "Js Raiz 6",
        "preço" : 305,
        "descrição" : "O melhor curso de Javascript 6",
    },
    ]
    
function ProductComponent(props){

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

function CarrinhoComponent(props){
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
                            React.createElement('button',{className : "btn btn-danger btn-sm"}, "Remover" ),
                            
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

function ListaProdutoComponent(props){
    return  (
        React.createElement('div',{className : "row loja" },
            props.children
        )
    )
}

function AppComponent(props){


    let[carrinhoItens, addItemCarrinho] = React.useState({})

    function addCarrinho(produto){
        console.log(produto)
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
        React.createElement(React.Fragment,null, 
            React.createElement('div',{className : "col-sm-8" }, 
            React.createElement(ListaProdutoComponent, null, 
                produtosListas.map(function(produto,index){ 
                    return React.createElement(ProductComponent, {item : produto, onAddCarrinho: addCarrinho , key : `produto-${index}` } )
                 })
                ),
            ),
            React.createElement('div',{className : "col-sm-4 mb-3" }, 
            React.createElement(CarrinhoComponent, { itens : carrinhoItens}),      
            )
        )
    )
    
}

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)