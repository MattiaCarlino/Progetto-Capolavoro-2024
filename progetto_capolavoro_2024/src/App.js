import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Modello_ISO_OSI from './pages/Topic_pages/Modello_ISO_OSI.jsx'
import Stack_TCP_IP from './pages/Topic_pages/Stack_TCP_IP.jsx'
import Funzioni_routing from './pages/Topic_pages/Routing_functionality.jsx'
import Algoritmi_routing from './pages/Topic_pages/Algoritmi_routing.jsx'
import Autonomous_system from './pages/Topic_pages/Autonomous_system.jsx'
import Glossario_bibliografia from './pages/Topic_pages/Glossario.jsx'

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About_us" element={<About/>} />
          <Route path="/Modello_ISO_OSI" element={<Modello_ISO_OSI/>}/>
          <Route path="/Stack_TCP_IP" element={<Stack_TCP_IP/>}/>
          <Route path="/Funzioni_routing" element={<Funzioni_routing/>}/>
          <Route path="/Algoritmi_routing" element={<Algoritmi_routing/>}/>
          <Route path="/Autonomous_system" element={<Autonomous_system/>}/>
          <Route path="/Glossario_bibliografia" element={<Glossario_bibliografia/>}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
