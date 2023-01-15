import React, { useEffect } from 'react';
import Header from '../../components/Header/heder';
import useGlobalContext from '../../hooks/useGlobalContext';
import './styled.css';

function Home() {
  const {
    itens,
    setItens,
    intemPage,
    setItemPage,
    currentPage,
    setCurrentPage,
    search, 
    setSearch
  } = useGlobalContext();


  const pages = Math.ceil(itens.length / intemPage);
  const startIndex = currentPage * intemPage;
  const endIndex = startIndex + intemPage;
  const currentItens = itens.slice(startIndex, endIndex);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://randomuser.me/api/?results=50`)
          .then((response) => response.json())
          .then((data) => data);

        setItens(result.results);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setItemPage]);

  return (
    <>
      <Header />

      <div className='container__home'>
        <div className='container__post'>
      <div className='container__search'>
        <input 
          className='input__search' 
          placeholder='Buscar' 
          type="text" 
          value={'search'}
          onChange={(event) => setSearch(event.target.value)}
          />
      </div>
          <div className='posts'>
            {currentItens.map(item => {
              console.log(item);
              return (
                <div className='card' key={item.login.uuid}>
                  <div className='header__card'>
                    <img src={item.picture.large} alt='imagem' />
                  </div>
                  <div className='main__card'>
                    <span><span className='title'>Nome: </span>{`${item.name.first} ${item.name.last}`}</span>
                    <span><span className='title'>Email: </span>{item.email}</span>
                    <span><span className='title'>Username: </span>{item.login.username}</span>
                    <span><span className='title'>Idade: </span>{item.dob.age}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        <div className='container__btn'>
          {Array.from(Array(pages), (item, index) => {
            return <button key={index} className='btn__page' value={index} onClick={(event) => setCurrentPage(Number(event.target.value))}>{index + 1}</button>
          })}
      </div>
    </>
  );
}

export default Home;
