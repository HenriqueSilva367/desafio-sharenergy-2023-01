import { useLocalStorage } from 'react-use';
import { useState } from 'react';

function useGlobalContextProvider() {
  const [token, setToken, cleaToken] = useLocalStorage('token');
  const [user, setUser, clearUser] = useLocalStorage('username');
  const [itens, setItens] = useState([]);
  const [intemPage, setItemPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

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
    setCurrentPage
  };
}

export default useGlobalContextProvider;