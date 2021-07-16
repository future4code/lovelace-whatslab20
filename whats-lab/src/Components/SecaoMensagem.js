import React from "react";
import styled from "styled-components";

// Estilização básica do <form>
const FormMensagem = styled.form`
  display: flex;
  justify-content: center;
`;

// Estilização básica dos <input> de Usuário
const Input = styled.input`
  margin-right: 10px;
`;

// Estilização básica dos <input> de Mensagem
const Mensagem = styled.input`
  width: 34%;
  margin-right: 10px;
`;

// Componente com os elementos de input de nome, mensagem e botão
class SecaoMensagem extends React.Component {
  render() {
    return (
      <FormMensagem>
        <Input placeholder="Usuário" />
        <Mensagem placeholder="Mensagem" />
        <button>Enviar</button>
      </FormMensagem>
    );
  }
}

export default SecaoMensagem;
