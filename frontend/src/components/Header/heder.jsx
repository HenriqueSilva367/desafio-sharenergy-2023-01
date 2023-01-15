import './styled.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';

function Header() {
  const { user, cleaToken, clearUser} = useGlobalContext();
  const navigate = useNavigate();
  function handleLogout(){
    cleaToken();
    clearUser();
    navigate('/');
  }

  return (
    <>
      <div className='container__header'>
      <div className='user_header'>
        <span>{user}</span> 
      </div> 
        <div className='content__header'>
          <ul className='menu__heder'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/httpcat">HTTP Cat</Link></li>
            <li><Link to="/randomdog">Random Dog</Link></li>
            <li>Cadastrar Clientes</li>
          </ul>
        </div>
        <div className='logout_header'>
        <button onClick={handleLogout}>Sair</button>  
      </div> 
      </div>
    </>
  );
}

export default Header;
