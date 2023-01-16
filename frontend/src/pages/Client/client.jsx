import React from 'react';
import Header from '../../components/Header/heder';
import useGlobalContext from '../../hooks/useGlobalContext';
import Addclient from '../../components/ModalAddClient/modalAddClient';
import './styled.css';
import CardClient from '../../components/CardClient/cardClient';

function Cliente() {
  const {
    openAdd, 
    setOpenAdd
  } = useGlobalContext();

  return (
    <>
      <Header />
      <div className='container__client'>
        <div className='content__client'>
            <div className='conentn__btn'>
              <button onClick={()=> setOpenAdd(true)}>Adicionar Cliente</button>
            </div>
        </div>
      </div>
      <Addclient
          openAdd={openAdd}
          handleClose={()=> setOpenAdd(false)} 
        />
      <CardClient/>
    </>

  );
}

export default Cliente;
