
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
    

function ProductComponent(produto){

    return (

        React.createElement('div',{className : "col-sm-4 mb-3" },
            React.createElement('div',{className : "card loja__item " },
                React.createElement('img',{className : "card-img-top", src: `${produto.imagem}` }),
            React.createElement('div',{className : "card-body" },
                React.createElement('h5',{className : "card-title" },`${produto.titulo}` ),
                React.createElement('small',null,`${produto.preço}`),
                React.createElement('p',{className : "card-text" },`${produto.descrição}`),
                React.createElement('button',{className : "btn btn-primary" },'Adicionar'),
                )
            )
        )
    )
}

function ListaProdutoComponent({itens}){
    
    console.log(itens)
    return  (
        React.createElement('div',{className : "row loja" },
            itens.map(function(){ 
             //   return React.createElement(ProductComponent)
             })
        )
    )
}

function AppComponent(props){

    return (
        React.createElement(React.Fragment,null, 
            React.createElement('div',{className : "col-sm-8" }, 
            React.createElement(ListaProdutoComponent,{ itens : produtosListas}),
            ),
            React.createElement('div',{className : "col-sm-4 mb-3" }, 
                React.createElement('div',{className : "carrinho" },
                    React.createElement('div',{className : "carrinho__itens" },
                        React.createElement('div',{className : "card carrinho__item" },
                            React.createElement('div',{className : "card-body" }, 
                                React.createElement('h5',{ className : "card-title" }, "JS Raiz para FW" ),
                                React.createElement('p',{className : "card-text"}, "Preço unidade: R$ 300,00 | Quantidade 2" ),
                                React.createElement('p',{className : "card-text"}, "Valor: R$ 600,00" ),
                                React.createElement('button',{className : "btn btn-danger btn-sm"}, "Remover" ),
                            )
                        )
                    ),
                    React.createElement('div',{className : "carrinho__total mt-2 p-3" },
                        React.createElement('h6',null, "Total: ",
                            React.createElement('strong',null, "R$600,00 ")    
                            )     
                        )
                    )
                )
            )
        )
    
}

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)