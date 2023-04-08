import {useState} from 'react';
import { RiSearchEyeLine, RiShoppingCartFill } from "react-icons/ri";
import './tracker.css';
// o projeto é focado em realizar a busca por codigo de barras do correios

function App() {
  const [input, setInput] = useState('');
  console.log(input)

  function handleSearch(){
    alert("Mercadoria encontrada!")
  };


  return (
    <div className="container">
      <h1 className="title">BLOR Tracker Mercadorias <RiShoppingCartFill size={50} /></h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite o código de rastreio..."
        value={input}
        onChange={
          (e)=>setInput(e.target.value)
        }
        />

        <button className="buttonInput" onClick={handleSearch}>
          <RiSearchEyeLine  size={25} color="green" />
        </button>
      </div>

      <main className="exibeDados">
        <h2>Informações sobre a mercadoria:</h2>
        <span>Local de origem: Rio de Janeiro/RJ</span>
        <span>Local de destino: Belo Horizonte/MG</span>
        <span>Situação: A caminho</span>
      </main>
    </div>
  );
}

export default App;
