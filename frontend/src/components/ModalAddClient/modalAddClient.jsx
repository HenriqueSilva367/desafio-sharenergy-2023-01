import api from '../../services/api';
import React from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import './styled.css';
import Close from "../../assets/close.svg";

function Addclient({ handleClose}) {
  const {
    nome, 
    setNome,
    email, 
    setEmail,
    telefone, 
    setTelefone,
    endereco, 
    setEndereco,
    cpf, 
    setCpf,
    create, 
    setCreate,
    openAdd,
  } = useGlobalContext();
  
  function handleClear() {
    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setCpf('');
    setCreate('');
    return;
  }
  

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post(
        '/client',
        {
          name: nome,
          email: email,
          telephone: telefone,
          address: endereco,
          cpf: cpf,
        },
      );
      if (response.statusText !== "Created") {
       return;
      }
      
      window.alert("Cadastrado com sucesso!");
      handleClear();
      setCreate([...create, ...response.data]);

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {openAdd ? (
        <div className="backdrop">
          <div className="modal__create">
            <img
              src={Close}
              alt="close"
              className="close__btn"
              onClick={handleClose}
            />
            <h1>Criar Poste</h1>
            <div className="container__form">
              <form onSubmit={handleSubmit}>
                <input
                  id="name"
                  placeholder="Nome"
                  className="form__titulo"
                  type="text"
                  name="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <input
                  id="email"
                  placeholder="Email"
                  className="form__titulo"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="telefone"
                  placeholder="Telefone"
                  className="form__titulo"
                  type="number"
                  name="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
                <input
                  id="endereco"
                  placeholder="Endereco"
                  className="form__titulo"
                  type="text"
                  name="endereco"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
                <input
                  id="cpf"
                  placeholder="CPF"
                  className="form__titulo"
                  type="number"
                  name="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
                <div className="container__btn__create">
                  <button className="btn__green" type="submit">
                    Adicionar
                  </button>
                  <button className="tbn__red" onClick={handleClear}>
                    Limpar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Addclient;
