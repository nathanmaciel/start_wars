import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Login from './components/page-containers/Login';
import Navbar from './components/Navbar';
import AllFilms from './components/page-containers/AllFilms';

function App() {
  return (
    <React.Fragment>
        <AllFilms />
    </React.Fragment>
  );
}

export default App;
