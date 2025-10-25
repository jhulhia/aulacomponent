const Events = () => {
    const hundleClick = () => {
         console.log("Executou clique")
    }
    const renderSomething = (x) =>{
        if(x) {
            return <h1>Processo em Renderizamento!</h1>   
        }else{
            return <h1>Processo renderizado!</h1>
        }
    }   
    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>
                    Clique aqui
                </button>       
            </div>
            
            <div>
                <button onClick={hundleClick}> Novo Clique</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}    
            </div>

            </div>
          );
        };

      export default Events;