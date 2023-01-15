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
  } = useGlobalContext();

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
  }, []);

  //{console.log(itens)}

  return (
    <>
      <Header />
      <div className="container__home">
        <div className="container__post">
          <div className="posts">
            {itens.map(item => {
              console.log(item);
              return (
                <div className="card">
                  <div className="header__card">
                    <img src={item.picture.large} alt="imagem" />
                  </div>
                  <div className="main__card">
                    <span>Nome Completo: {`${item.name.first} ${item.name.last}`}</span>
                    <span>Email: {item.email}</span>
                    <span>Username: {item.login.username}</span>
                    <span>Idade: {item.dob.age}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
