import React from "react";
import styled from "styled-components";

// Estilização básica do retângulo maior onde irão aparecer as mensagens
const Tela = styled.div`
  height: 100vh;
  height: calc(100vh - 100px);
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const ContainerMensagem = styled.div`
  background-color: ${(props) => (props.isUser ? "#fff" : "#dcf8c6")};
  border-radius: 0.5em;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  align-items: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  flex-direction: column;
  padding: 10px 15px;

  & + & {
    margin-top: 20px;
  }
`;

const Usuario = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

const Mensagem = styled.p`
  margin: 0;
  line-height: 1.3;
`;

// Componente onde irão aparecer as mensagens
class Container extends React.Component {
  render() {
    return (
      <Tela>
        {this.props.mensagens.map((mensagem) => {
          const isUser = mensagem.nomeUsuario.toLowerCase() === "eu";

          return (
            <ContainerMensagem
              key={mensagem.id}
              isUser={isUser}
              onDoubleClick={() => this.props.onMessageDelete(mensagem.id)}
            >
              {!isUser && <Usuario>{mensagem.nomeUsuario}</Usuario>}
              <Mensagem>{mensagem.mensagem}</Mensagem>
            </ContainerMensagem>
          );
        })}
      </Tela>
    );
  }
}

export default Container;
