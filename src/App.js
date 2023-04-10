import {useState} from 'react';
import { RiSearchEyeLine, RiShoppingCartFill } from "react-icons/ri";
import MercadoriaDados from './MercadoriaDados.js';
import './tracker.css';
// o projeto é focado em realizar a busca por codigo de barras do correios

function App() {
  const [input, setInput] = useState('');
  const [dados, setDados] = useState([])
  console.log(input)

  async function handleSearch(){

    try {
      let procuraMercadoria = await fetch(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${input}`);
      const response = await procuraMercadoria.json()
      const dadosMercadoria = Object.values(response);
      const ocorrencias = dadosMercadoria[2].map((dado) => {
        let data = dado.data;
        let horario = dado.hora;
        let local = dado.local;
        let statusMercadoria = dado.status;
        let subStatus = dado.subStatus;
  
        return { data, horario, local, statusMercadoria, subStatus };
      });
      setDados(ocorrencias)
    } catch (error) {
      if (error instanceof SyntaxError) {
        alert("Você está pesquisando rapido demais, espere um momento e digite o código da mercadoria novamente!");
      } else {
        alert("Erro ao procurar mercadoria! Mercadoria não encontrada ou inválida!");
      }
    }
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
        {dados.length > 0 ? ( // Renderiza MercadoriaDados apenas se ocorrencias não estiver vazio
          <MercadoriaDados dados={dados} />
        ):"Dados da mercadoria serão listados abaixo:"}
      </main>
    </div>
  );
}

export default App;
