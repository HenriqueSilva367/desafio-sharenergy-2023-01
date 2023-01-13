import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";


import Login from './pages/signIn';




function MyRoutes() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>

  );
}

export default MyRoutes;
