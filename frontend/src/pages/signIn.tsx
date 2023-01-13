import React from "react";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  function handleChangeInputValue(event: any) {
    if (event.nativeEvent.data === " ") return;
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event: any) {
    event.preventDefault();
    const response = await api.post("/login", {
      email: form.email,
      senha: form.senha,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          id="email"
          className="form_login_input"
          name="email"
          placeholder="Digite seu e-mail"
          value={form.email}
          onChange={handleChangeInputValue}
        />
        <label htmlFor="">Senha</label>
        <input
          type="password"
          id="password"
          className="form_login_input"
          name="senha"
          placeholder="Digite seu e-mail"
          value={form.senha}
          onChange={handleChangeInputValue}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
