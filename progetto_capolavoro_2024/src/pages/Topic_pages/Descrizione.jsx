import React from 'react'
import Topic_main_section from '../../components/Topic_main_section/Topic_main_section'
import "./Descrizioni.css"

export const Descrizioni = () => {
  return (
    <div class='container1'>
        <nav class="sidebar1">
            <h2 id='indice'>Indice</h2>
            <ul>
                <li><a href="#argomento1" id='titoliii'>Modello ISO-OSI</a></li>
                    <ol>
                        <li>L’evoluzione della comunicazione</li>
                        <li>Introduzione al modello ISO-OSI</li>
                        <li>Funzionamento dei livelli del modello</li>
                            <ul>
                                <li>Phiysical</li> 
                                <li>Data Link</li>
                                <li>Network</li> 
                                <li>Transport</li> 
                                <li>Session</li> 
                                <li>Presentation</li> 
                                <li>Application</li> 
                            </ul>
                        
                    </ol>
                <li><a href="#argomento2" id='titoliii'>Stack TCP-IP</a></li>
                    <ol>
                        <li>Introduzione allo stack TCP/IP</li>
                            <ul>
                                <li>Host interlocutori</li> 
                                <li>Incapsulamento e decapsulamento</li>
                                <li>Multiplexing e demultiplexing</li>
                            </ul>
                        <li>Confronto tra ISO-OSI e TCP/IP</li>
                    </ol>
                <li><a href="#argomento3" id='titoliii'>Funzionamento di Routing del Livello Network</a></li>
                    <ol>
                        <li>Introduzione al routing</li>
                        <li>Routing table e default router</li>
                        <li>Routing statico e dinamico</li>
                        <li>Problema della RTLP</li>

                    </ol>

            
                <li><a href="#argomento4" id='titoliii'>Algoritmi di Routing</a></li>
                    <ol>
                        <li>Introduzione protocolli di routing</li>
                        <li>Algoritmo di Distance Vector</li>
                            <ul>
                                <li>Routing Table</li> 
                                <li>Passaggi algoritmo</li>
                                
                            </ul>
                        <li>Algoritmo Link State</li>
                    </ol>

                <li><a href="#argomento5" id='titoliii'>Autonomous System</a></li>
                <ol>
                        <li>Introduzione agli Autonomous System</li>
                        <li>Funzionamento interno</li>
                        <li>Esempio AS</li>
                        <li>Tipi di AS e ASN</li>

                    </ol>

                <li><a href="#argomento6" id='titoliii'>Glossario e Bibliografia</a></li>


            </ul>
        </nav>
        <div class="content">
            <section id="argomento1">

                <h1>Modello ISO-OSI</h1>

                <h3>L’evoluzione della comunicazione</h3>

                <p id='testoDDD'>Nella storia c’è sempre stata la necessità di comunicare gli uni con gli altri,
                utilizzando, o cercando di utilizzare un linguaggio univoco per interagire e
                comunicare con tutti a distanza. Con il passare degli anni e con
                l’avanzamento della tecnologia, sono stati resi molto più efficienti vari
                metodi e strade per rendere tutto ciò sempre più semplice e veloce.
                Naturalmente vanno seguite delle regole e bisogna saper rispettare i propri
                diritti e doveri per comunicare in maniera completa e diretta. Immaginando
                una qualsiasi azienda, notiamo che ogni livello prevede doveri differenti ed
                indipendenti dagli altri, con l’obiettivo di svolgere uno o più compiti ben
                precisi.</p>

                <img id='imgDescr' src='https://www.societaria.it/wp-content/uploads/2018/09/organigramma-divisionale.jpg'></img>



                <h3>Introduzione al modello ISO-OSI</h3>

                <p id='testoDDD'>Il modello ISO-OSI segue il modello di una qualsiasi azienda, in cui ogni
livello ha compiti diversi ed indipendente dagli altri. In pratica l’ISO
(International Organization for Standardization), è un'organizzazione che ha
promosso l’OSI (Open System Interconnection), ovvero uno standard per reti.
Questo modello ISO-OSI è diviso in 7 diversi layer e definisce i diversi
compiti specificando le funzioni per ogni singolo livello, tralasciando però
le specifiche che riguardano i protocolli utilizzati per l’implementazione del
modello stesso. Ogni layer eseguirà quindi il proprio compito, inviando dati
ed informazioni di servizio al layer successivo fino al raggiungimento del
livello fisico (Physical layer). Il trasferimento di dati, che comporta sempre
lo sfruttamento di tutti i livelli del layer, si verifica sempre con l’unità di
misura in bit, quindi qualsiasi sia la tipologia di messaggio che si vuole
inviare, verrà sempre convertita in bit, e per la consegna del messaggio verrà
ridefinito il messaggio applicando una seconda conversione da bit al tipo
desiderato.</p>

<img id='imgDescr2' src='https://www.fastweb.it/var/storage_feeds/cms20/media/fwb_wbce_cms20_fwplus/858/858be0e9335f8f788ddcc597bb77a301/OSI%20Model.jpg'></img>

                <h3>Funzionamento dei livelli del modello</h3>
                <p id='testoDDD'>Nella storia c’è sempre stata la necessità di comunicare gli uni con gli altri,
                utilizzando, o cercando di utilizzare un linguaggio univoco per interagire e
                comunicare con tutti a distanza. Con il passare degli anni e con
                l’avanzamento della tecnologia, sono stati resi molto più efficienti vari
                metodi e strade per rendere tutto ciò sempre più semplice e veloce.
                Naturalmente vanno seguite delle regole e bisogna saper rispettare i propri
                diritti e doveri per comunicare in maniera completa e diretta. Immaginando
                una qualsiasi azienda, notiamo che ogni livello prevede doveri differenti ed
                indipendenti dagli altri, con l’obiettivo di svolgere uno o più compiti ben
                precisi.</p>





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