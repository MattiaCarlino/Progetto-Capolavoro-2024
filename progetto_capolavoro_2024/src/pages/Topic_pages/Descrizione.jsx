import React from 'react'
import Topic_main_section from '../../components/Topic_main_section/Topic_main_section'
import "./Descrizioni.css"

export const Descrizioni = () => {
  return (
    <div class='container'>
        <nav class="sidebar">
            <h2>Indice degli Argomenti</h2>
            <ul>
                <li><a href="#argomento1">Argomento 1</a></li>
                <li><a href="#argomento2">Argomento 2</a></li>
                <li><a href="#argomento3">Argomento 3</a></li>
                <li><a href="#argomento4">Argomento 4</a></li>
            </ul>
        </nav>
        <div class="content">
            <section id="argomento1">
                <h1>Argomento 1</h1>
                <p>Descrizione dettagliata dell'argomento 1...</p>
            </section>
            <section id="argomento2">
                <h1>Argomento 2</h1>
                <p>Descrizione dettagliata dell'argomento 2...</p>
            </section>
            <section id="argomento3">
                <h1>Argomento 3</h1>
                <p>Descrizione dettagliata dell'argomento 3...</p>
            </section>
            <section id="argomento4">
                <h1>Argomento 4</h1>
                <p>Descrizione dettagliata dell'argomento 4...</p>
            </section>
        </div>
    
    </div>
  )
}

export default Descrizioni;