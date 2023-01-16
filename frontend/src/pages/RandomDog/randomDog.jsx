import React, { useEffect } from 'react';
import Header from '../../components/Header/heder';
import useGlobalContext from '../../hooks/useGlobalContextProvider';
import { Link } from 'react-router-dom';
import axios from "axios";
import './styled.css';

function RandomDog() {
  const { currentImage, setCurrentImage } = useGlobalContext();

  function refreshPage(){ 
    window.location.reload(); 
  }

  useEffect(() => {
    axios.get('https://random.dog/woof.json?include=jpg',)
      .then((response) => {
        setCurrentImage(response.data.url)
        console.log(response)
      })
      .catch((err) => {
      })
  }, [setCurrentImage])


  return (
    <>
      <Header />
      <div className='container__dog'>
        <img src={currentImage} alt='Cachorro' width='500' height='400' />
      </div>
      <div className='refresh'>
        <button className='content__refresh'>
          <Link 
            to={{pathname:'/randomdog'}} 
            onClick={refreshPage}>
            Refresh
          </Link>
        </button>
      </div>
    </>
  );
}

export default RandomDog;
