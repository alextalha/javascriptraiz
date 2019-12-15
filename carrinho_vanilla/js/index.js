let products = [
{ 
    "imagem" : "https://lorempixel.com/500/300",
    "titulo" :  "Js Raiz 1",
    "preço" : 300,
    "descrição" : "O melhor curso de Javascript 1",
},
{ 
    "imagem" : "https://lorempixel.com/500/300",
    "titulo" :  "Js Raiz 2",
    "preço" : 301,
    "descrição" : "O melhor curso de Javascript 2",
},
{ 
    "imagem" : "https://lorempixel.com/500/300",
    "titulo" :  "Js Raiz 3",
    "preço" : 302,
    "descrição" : "O melhor curso de Javascript 4",
},
{ 
    "imagem" : "https://lorempixel.com/500/300",
    "titulo" :  "Js Raiz 4",
    "preço" : 303,
    "descrição" : "O melhor curso de Javascript 4",
},
{ 
    "imagem" : "https://lorempixel.com/500/300",
    "titulo" :  "Js Raiz 5",
    "preço" : 304,
    "descrição" : "O melhor curso de Javascript 5",
},
{ 
    "imagem" : "https://lorempixel.com/500/300",
    "titulo" :  "Js Raiz 6",
    "preço" : 305,
    "descrição" : "O melhor curso de Javascript 6",
},
]


let carrinhoItens = {

    "bbc123" : {
        id : "bbc123",
        nome : "js raiz para node",
        preco : 1200,
        descricao : " O melhor curso de todos",
        imagem : "https://lorempixel.com/500/300"

    },
    "cbc123" : {
        id : "bbc123",
        nome : "Programação funcional com JS",
        preco : 500,
        descricao : " O melhor funcional de todos",
        imagem : "https://lorempixel.com/500/300"

    },
}


function renderProducts(products) {
    let arr = "";
    for(let i = 0; i < products.length; i++  ){
       arr = arr +  renderProduct(products[i])
    }

 let loja =  document.querySelector('.loja')
 loja.innerHTML = arr;
}


function renderProduct(product){

    return `
    <div class="col-sm-4 mb-3">
        <div class="card ">
            <div class="card loja__item">
                <img src="${product.imagem}" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">${product.titulo}</h5>
                    <small>R$ ${product.preço}</small>
                    <p class="card-text">${product.descrição}</p>
                    <button class="btn btn-primary">Adicionar </button>
                </div>
            </div>
        </div>
    </div>`

}


function renderItemCarrinho(itemCarrinho){

        return `
        <div class="card carrinho__item">
            <div class="card-body">
                <h5 class="card-title">${itemCarrinho.nome}</h5>
                <p class="card-text">Preço unidade : R$ ${itemCarrinho.preco} | Quantidade: 1 </p>
                <p class="card-text">${itemCarrinho.descricao}</p>
                <button data-value="300" class="btn btn-danger btn-sm">Remover </button>
            </div>
        </div>
        `
}

function renderCarrinho(carrinhoItens){
    let arr  = ""
    for(carrinho in carrinhoItens){
       arr = arr +  renderItemCarrinho(carrinhoItens[carrinho])
    }

 document.querySelector(".carrinho__itens").innerHTML = arr ; 

}

renderProducts(products)
renderCarrinho(carrinhoItens);


