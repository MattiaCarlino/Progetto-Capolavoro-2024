import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Topic_section from './Topic_section/Topic_section.jsx'

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About_us" element={<About/>} />
          <Route path="/Topic_section" element={<Topic_section/>}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
