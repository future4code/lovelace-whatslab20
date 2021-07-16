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
export class SecaoMensagem extends React.Component {
  render() {
    return (
      <FormMensagem onSubmit={this.props.adicionaMensagem}>
        <Input
          required
          value={this.props.valorInputNome}
          onChange={this.props.onChangeInputNomeUsuario}
          placeholder="Usuário"
        />
        <Mensagem
          required
          value={this.props.valorInputMensagem}
          onChange={this.props.onChangeInputMensagem}
          placeholder="Mensagem"
        />
        <button type="submit">Enviar</button>
      </FormMensagem>
    );
  }
}
