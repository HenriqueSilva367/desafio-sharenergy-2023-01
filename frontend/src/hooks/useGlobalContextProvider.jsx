import { useLocalStorage } from 'react-use';
import { useState } from 'react';


function useGlobalContextProvider() {
  const [token, setToken, cleaToken] = useLocalStorage('token');
  const [user, setUser, clearUser] = useLocalStorage('username');
  const [itens, setItens] = useState([]);
  const [intemPage, setItemPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState([]);
  const [currentImage, setCurrentImage] = useState();

  return {
    token, 
    setToken, 
    cleaToken,
    user,
    setUser,
    clearUser,
    itens, 
    setItens,
    intemPage, 
    setItemPage,
    currentPage, 
    setCurrentPage,
    search, 
    setSearch,
    currentImage, 
    setCurrentImage
  };
}

export default useGlobalContextProvider;