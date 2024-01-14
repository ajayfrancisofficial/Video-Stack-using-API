import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import React from 'react';




function App() {
  return (
    <div >
    
        <Header></Header>
        
         <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/main' element={<MainPage></MainPage>}></Route>
             
         </Routes>
  
        <Footer></Footer>
    
    </div>
  );
}

export default App;
