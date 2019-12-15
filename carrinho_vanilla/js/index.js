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

renderProducts(products)