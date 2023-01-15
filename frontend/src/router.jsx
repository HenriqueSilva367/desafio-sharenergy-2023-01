import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import useGlobalContext from "./hooks/useGlobalContext";
import SignIn from './pages/SignIn/signIn';
import Home from './pages/Home/home'

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
      </Route>
    </Routes>
  );
}

export default MainRoutes;