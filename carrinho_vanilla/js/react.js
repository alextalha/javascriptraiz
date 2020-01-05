
function AppComponent(props){
    return (
        React.createElement(React.Fragment,null, 
            React.createElement('div',{className : "col-sm-8" }, 
                React.createElement('div',{className : "row loja" })
            ),
            React.createElement('div',{className : "col-sm-4" }, 
                React.createElement('div',{className : "carrinho" },
                    React.createElement('div',{className : "carrinho__itens" }),
                    React.createElement('div',{className : "carrinho__total mt-3 p-3" }),
                )
            )
        )     
    )
}

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)