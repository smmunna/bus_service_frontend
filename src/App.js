import React from 'react'
import './App.css';
import Header from './components/Header';
import Show from './components/main/Show';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Footer from './components/Footer';
import PrivateComponents from './components/PrivateComponents';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route>
            <Route element={<PrivateComponents/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/show' element={<Show/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
   
        </Routes>
       

        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
