
function AppComponent(){
    return (
        React.createElement('h1',null, "Olá JSRAIZ")
    )
}

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)