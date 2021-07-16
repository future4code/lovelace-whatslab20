import React from "react";
import styled from "styled-components";

// Estilização básica do retângulo maior onde irão aparecer as mensagens
const Tela = styled.div`
  height: 600px;
  width: 500px;
  border: 4px solid black;
  margin: 0 auto;
`;

// Componente onde irão aparecer as mensagens
class Container extends React.Component {
  render() {
    return (
      <Tela>
        {this.props.mensagens.map((mensagem) => {
          return (
            <div
              key={mensagem.id}
              onDoubleClick={() => this.props.onMessageDelete(mensagem.id)}
            >
              <p>{mensagem.nomeUsuario}</p>
              <p>{mensagem.mensagem}</p>
            </div>
          );
        })}
      </Tela>
    );
  }
}

export default Container;
