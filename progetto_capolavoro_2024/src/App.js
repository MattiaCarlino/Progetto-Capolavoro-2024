import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About_us" element={<About/>} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
