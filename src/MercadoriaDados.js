import React from 'react';
import { RiArrowUpLine } from 'react-icons/ri'

const MercadoriaDados = ({ dados }) => {
  return (
    <div>
      {dados.map((ocorrencia, index) => (
        <div key={index} style={{color: '#145369'}}>
          <p>Data: {ocorrencia.data}</p>
          <p>Horário: {ocorrencia.horario}</p>
          <p>Local: {ocorrencia.local}</p>
          <p>Status Mercadoria: {ocorrencia.statusMercadoria}</p>
          <br></br>
          <p>{ocorrencia.subStatus}</p>
          <br></br>
          {index < dados.length - 1 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10
              }}
            >
              <RiArrowUpLine size={30} color="green" />
            </div>
          )}
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default MercadoriaDados;