import "./App.css";
import styled from "styled-components";

import Container from "./Components/Container";
import { SecaoMensagem } from "./Components/SecaoMensagem";
import React from "react";

class App extends React.Component {
  state = {
    mensagens: [],
    valorInputMensagem: "",
    valorInputNome: "",
  };

  // Essa função adiciona a mensagem ao array de mensagens
  adicionaMensagem = (event) => {
    event.preventDefault();

    const novaMensagem = {
      id: new Date().getTime(),
      nomeUsuario: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
      valorInputMensagem: "",
      valorInputNome: "",
    });
  };

  // Essa função deleta a mensagem toda vez que o usuário clicar duas vezes nela
  onMessageDelete = (id) => {
    const confirm = window.confirm(
      "Você tem certeza que deseja deletar a mensagem?"
    );

    if (confirm) {
      this.setState({
        mensagens: this.state.mensagens.filter(
          (mensagem) => mensagem.id !== id
        ),
      });
    }
  };

  // Essa função é chamada toda vez que algo é digitado no input de usuário
  onChangeInputNomeUsuario = (event) => {
    this.setState({
      valorInputNome: event.target.value,
    });
  };

  // Essa função é chamada toda vez que algo é digitado no input de mensagem
  onChangeInputMensagem = (event) => {
    this.setState({
      valorInputMensagem: event.target.value,
    });
  };

  render() {
    console.log(this.state.mensagens);

    return (
      <div>
        <Container
          mensagens={this.state.mensagens}
          onMessageDelete={this.onMessageDelete}
        />
        <SecaoMensagem
          adicionaMensagem={this.adicionaMensagem}
          onChangeInputMensagem={this.onChangeInputMensagem}
          onChangeInputNomeUsuario={this.onChangeInputNomeUsuario}
          valorInputNome={this.state.valorInputNome}
          valorInputMensagem={this.state.valorInputMensagem}
        />
      </div>
    );
  }
}

export default App;
