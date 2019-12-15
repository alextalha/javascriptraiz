let products = [
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


let carrinhoItens = {}


function renderProducts(products) {
    let arr = "";
    for(let i = 0; i < products.length; i++  ){
       arr = arr +  renderProduct(products[i],i)
    }

    let loja =  document.querySelector('.loja')
    loja.innerHTML = arr;
}


function renderProduct(product,index){

    return `
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

}


function renderItemCarrinho(itemCarrinho){

        return `
        <div class="card carrinho__item">
            <div class="card-body">
                <h5 class="card-title">${itemCarrinho.titulo}</h5>
                <p class="card-text">Preço unidade : R$ ${itemCarrinho.preço} | Quantidade: ${itemCarrinho.quantidade} </p>
                <p class="card-text">${itemCarrinho.descrição}</p>
                <button data-value="${itemCarrinho.preço} " class="btn btn-danger btn-sm">Remover </button>
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

document.body.addEventListener("click", function(event){
    const elemento = event.target
    if(elemento.classList.contains('btn-add')){
        const index = parseInt(elemento.getAttribute('data-index'))
        const produto = products[index];
        

        if(!carrinhoItens[produto.id]){
            carrinhoItens[produto.id] = produto
            carrinhoItens[produto.id].quantidade = 1

            renderCarrinho(carrinhoItens);

        }
        
    }


})



renderProducts(products)



