import React from "react";
import styled, { css } from "styled-components";
import Imagem from "../img/icone.png";

// Estilização básica do <form>
const FormMensagem = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const estiloInput = css`
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  height: 40px;
  padding: 10px 15px;
  outline: none;
`;

// Estilização básica dos <input> de Usuário
const Usuário = styled.input`
  max-width: 30%;
  flex-shrink: 0;
  ${estiloInput}
`;

// Estilização básica dos <input> de Mensagem
const Mensagem = styled.input`
  width: 100%;
  ${estiloInput}
`;

const Icone = styled.img`
  height: 20px;
  width: auto;
`;

const Enviar = styled.button`
  border-radius: 50%;
  background-color: #34b297;
  border: none;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #a2dace;
  }
`;

// Componente com os elementos de input de nome, mensagem e botão
export class SecaoMensagem extends React.Component {
  render() {
    return (
      <FormMensagem onSubmit={this.props.adicionaMensagem}>
        <Usuário
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
        <Enviar type="submit">
          <Icone src={Imagem} />
        </Enviar>
      </FormMensagem>
    );
  }
}
