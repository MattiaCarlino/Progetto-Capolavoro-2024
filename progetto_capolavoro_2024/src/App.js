import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Descrizioni from './pages/Topic_pages/Descrizione.jsx';


function App() {
  return (
    <div id='App' className='montserrat-font'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Descrizioni" element={<Descrizioni/>}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
