import React, {useState} from "react";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const salvarFormulario =(event) =>{
    event.preventDefault();
    
    console.log("O nome informado foi:", nome);
  }

  const changeNome = (event) => {setNome(event.target.value);
  }


  return (
    <div>
      <h1>Meu formulário</h1>
      <form onSubmit={salvarFormulario}>
        <input type="text" placeholder="Informe o nome" value={nome} onChange={changeNome}/>
        <input type="number" placeholder="Informe a idade"/>
        
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
