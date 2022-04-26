import React from 'react';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/home/single/Single';
import Write from './pages/home/write/Write';
import Login from './pages/home/login/Login';
import Register from './pages/home/register/Register';
import Settings from './pages/home/settings/Settings';
import { useContext } from "react";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const user = false;
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={<Write />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/post/:postId'>
        </Route>
      </Routes>
      {/* <Single /> */}
    </Router>

  );
}
export default App;

