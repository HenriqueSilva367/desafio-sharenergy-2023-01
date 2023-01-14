import React from 'react';
import { useState } from 'react';
import api from '../../services/api';
import './styled.css';


function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (!email) return window.alert('Você deve informar o campo Email');
      if (!password) return window.alert('Você deve informar o campo Senha');

      const response = await api.post('/signin', {
        username: email,
        password: password,
      });

      if (response.status !== 200) {
        return window.alert(response.data);
      }
      window.alert(`Bem-vindo de volta ${email}`);
      console.log();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='container'>
        <div className='content'>
          <form onSubmit={handleSubmit}>
            <div className='input__username'>
              <label htmlFor="username">Username</label>
              <input
                type='text'
                id='email'
                className='form__login__input'
                name='email'
                placeholder='Username'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className='input__password'>
              <label htmlFor="password">Senha</label>
              <input
                type='password'
                id='password'
                className='form__login__input'
                name='senha'
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className='remember__me'>
              <input id="remember-me" name="remember-me" type="checkbox" className='remember-me' />
              <label htmlFor="remember-me" className='remember__label'>Remember me</label>
            </div>
            <div className='tbn__submit'>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;