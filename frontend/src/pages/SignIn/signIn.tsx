import React from 'react';
import { useState } from 'react';
import api from '../../services/api';
import './styled';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      if(!email)return window.alert('Você deveinformar o campo Email');
      if(!password)return window.alert('Você deveinformar o campo Senha');

      console.log(email);
      console.log(password);

      const response = await api.post('/signin', {
        username: email,
        password: password,
      });

      if (response.status !== 200) {
        return window.alert(response.data);
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type='text'
          id='email'
          className='form_login_input'
          name='email'
          placeholder='Digite seu e-mail'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="">Senha</label>
        <input
          type='password'
          id='password'
          className='form_login_input'
          name='senha'
          placeholder='Digite sua senha'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
