import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import useGlobalContext from "./hooks/useGlobalContext";
import SignIn from './pages/SignIn/signIn';
import Home from './pages/Home/home'
import HttpCat from './pages/HttpCat/httpcat';
import RandomDog from './pages/RandomDog/randomDog';
import Cliente from './pages/Client/client';

function ProtectedRoutes({ redirectTo }){
  const { user } = useGlobalContext();

  return user ? <Outlet /> : <Navigate to={ redirectTo } />
}


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path='/home' element={<Home />} />
        <Route path='/httpcat' element={<HttpCat />} />
        <Route path='/randomdog' element={<RandomDog />} />
        <Route path='/client' element={<Cliente />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;