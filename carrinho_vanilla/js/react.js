
function AppComponent(props){

    /**
<div class="col-sm-4 mb-3">
        <div class="card ">
            <div class="card loja__item">
                <img src="${product.imagem}" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">${product.titulo}</h5>
                    <small>R$ ${product.preço}</small>
                    <p class="card-text">${product.descrição}</p>
                    <button data-index="${index}" class="btn btn-primary btn-add">Adicionar </button>
                </div>
            </div>
        </div>
    </div>`



     */
    return (
        React.createElement(React.Fragment,null, 
            React.createElement('div',{className : "col-sm-8" }, 
                React.createElement('div',{className : "row loja" },
                    React.createElement('div',{className : "col-sm-4 mb-3" },
                        React.createElement('div',{className : "card loja__item " },
                            React.createElement('img',{className : "card-img-top", src: "https://picsum.photos/500/300" }),
                            React.createElement('div',{className : "card-body" },
                                React.createElement('h5',{className : "card-title" },'JSRaiz para frameworks'),
                                React.createElement('small',null,"R$300,00"),
                                React.createElement('p',{className : "card-text" },'O melhor curso do mundo'),
                                React.createElement('button',{className : "btn btn-primary" },'Adicionar'),

                            )
                        )
                    )
                )
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
                            ),
                        ),
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