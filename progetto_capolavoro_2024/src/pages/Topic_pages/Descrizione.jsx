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
                        <li><a href='#evoCom'>L’evoluzione della comunicazione</a></li>
                        <li><a href='#Iso-Osi'>Introduzione al modello ISO-OSI</a></li>
                        <li><a href='#FunzMod'>Funzionamento dei livelli del modello</a></li>
                            <ul>
                                <li><a href='#Ph'>Phiysical</a></li> 
                                <li><a href='#D'>Data Link</a></li>
                                <li><a href='#N'>Network</a></li> 
                                <li><a href='#T'>Transport</a></li> 
                                <li><a href='#S'>Session</a></li> 
                                <li><a href='#Pr'>Presentation</a></li> 
                                <li><a href='#Ap'>Application</a></li> 
                            </ul>
                        
                    </ol>
                <li><a href="#argomento2" id='titoliii'>Stack TCP-IP</a></li>
                    <ol>
                        <li><a href='#Tcp'>Introduzione allo stack TCP/IP</a></li>
                            <ul>
                                <li><a href='#Hiii'>Host interlocutori</a></li> 
                                <li><a href='#ID'>Incapsulamento e decapsulamento</a></li>
                                <li><a href='#MD'>Multiplexing e demultiplexing</a></li>
                            </ul>
                        <li><a href='#ConfI'>Confronto tra ISO-OSI e TCP/IP</a></li>
                    </ol>
                <li><a href="#argomento3" id='titoliii'>Funzionamento di Routing del Livello Network</a></li>
                    <ol>
                        <li><a href='#Rout'>Introduzione al Routing</a></li>
                        <li><a href='#Def'>Routing table e Default router</a></li>
                        <li><a href='#StDn'>Routing Statico e Dinamico</a></li>
                        <li><a href='#RTLP'>Problema della RTLP</a></li>

                    </ol>

            
                <li><a href="#argomento4" id='titoliii'>Algoritmi di Routing</a></li>
                    <ol>
                        <li><a href='#Prot'>Introduzione protocolli di routing</a></li>
                        <li><a href='#DV'>Algoritmo di Distance Vector</a></li>
                            <ul>
                                <li><a href='#RTT'>Routing Table</a></li> 
                                <li><a href='#PA'>Passaggi algoritmo</a></li>
                                
                            </ul>
                        <li><a href='#LS'>Algoritmo Link State</a></li>
                    </ol>

                <li><a href="#argomento5" id='titoliii'>Autonomous System</a></li>
                <ol>
                        <li><a href='#AS'>Introduzione agli Autonomous System</a></li>
                        <li><a href='#FI'>Funzionamento interno</a></li>
                        <li><a href='#EsAS'>Esempio AS</a></li>
                        <li><a href='#ASN'>Tipi di AS e ASN</a></li>

                    </ol>

                <li><a href="#argomento6" id='titoliii'>Glossario e Bibliografia</a></li>


            </ul>
        </nav>
        <div class="content1">
            <section id="argomento1">

                <h1>Modello ISO-OSI</h1>

                <h3 id='evoCom'>L’evoluzione della comunicazione</h3>

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



                <h3 id='Iso-Osi'>Introduzione al modello ISO-OSI</h3>

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

                <h3 id='FunzMod'>Funzionamento dei livelli del modello</h3>
                <h4 id='Ph'>Physical Layer</h4>
                <p id='testoDDD'>È il primo livello seguendo il lato server, qui vengono definite le
caratteristiche e le qualità fisiche e meccaniche del mezzo di trasmissione ,
come i tipi di segnali, i connettori, la durata dei bit, la modulazione e il
tipo di trasmissione effettuato, che può essere half-duplex (uno per volta) o
full-duplex (contemporaneamente). Nella pratica il livello fisico si occupa di
quello che riguarda la trasmissione di pacchetti di bit che gli vengono
serviti tramite specifici mezzi e modalità di trasmissione. Ovviamente tutti i
dispositivi che sono connessi alla rete e tutte le tipologie di comunicazioni
che avvengono all’interno del layer devono rigorosamente seguire
determinate regole per permettere la maggior efficienza possibile
nell’esecuzione degli obiettivi del layer stesso, ovvero seguire dei protocolli.</p>

<img id='imgDescr2' src='https://static.javatpoint.com/tutorial/computer-network/images/physical-layer-in-osi-model2.png'></img>


<h4 id='D'>Data Link Layer</h4>
                <p id='testoDDD'>Questo layer ha come scopo principale quello dell’invio di pacchetti di dati
al layer successivo privo di errori di qualsiasi tipologia. Anche per questo
motivo il Data Link Layer si divide in due sottolivelli che si occupano di
determinati compiti: <br></br><br></br>
- LLC (Logical Link Control): frammenta i dati provenienti dall’input link
inviati dal layer precedente ad esso, e li suddivide in pacchetti a cui
viene aggiunto un header (intestazione) ed una tail (coda). Ad ogni
pacchetto che il destinatario riceve, invia un segnale di acknowledge
(avvenuta ricezione) per far capire al mittente se i pacchetti sono
arrivati, se questo messaggio non torna il mittente rinvia il pacchetto.
I protocolli utilizzati per permettere queste tecniche di controllo di
eventuali errori di trasmissione e ricezione sono tutti presenti in
driver software di dispositivi esterni (solitamente Switch o Router), ed
è per questo che il livello Data Link è il “più basso” a livello software. <br></br> <br></br>
- MAC (Medium Access Control): dato che il canale di comunicazione può
essere condiviso da più dispositivi, il sottolivello MAC definisce le
regole e le modalità di accesso di questi ultimi. Il Medium Access
Control sfrutta ed utilizza vari protocolli. Uno dei più importanti è il
protocollo ARP (Address Resolution Protocol) che si occupa di fornire la
mappatura tra indirizzo MAC di un dispositivo e l’indirizzo IP assegnato
al dispositivo nella rete. Questa mappatura viene salvata in
un’apposita cache chiamata ARPcache per evitare di utilizzare il
protocollo prima dell’invio di ogni messaggio. Il funzionamento del
protocollo ARP prevede l’invio di una richiesta ARP in broadcast con
l’obiettivo di raggiungere il dispositivo interessato di cui si conosce
l’indirizzo IP. Naturalmente, solo il dispositivo a cui corrisponde
l’indirizzo dato risponderà con il proprio MAC address. I pacchetti dati
del protocollo ARP vengono poi incapsulati all’interno del frame
utilizzato da questo livello.</p>

<img id='imgDescr2' src='https://static.javatpoint.com/tutorial/computer-network/images/data-link-layer-in-osi-model.png '></img>
<br></br>
<img id='imgDescr2' src=' https://i.ytimg.com/vi/N1apF49Ih28/maxresdefault.jpg'></img>


<h4 id='N'>Network Layer</h4>
                <p id='testoDDD'>Il Network Layer è il terzo strato del modello ed è utilizzato essenzialmente
per la comunicazione in rete. Più nello specifico, il Network Layer ha il ruolo
di trasferire i pacchetti da un host mittente a un host destinatario. Questa
funzione del trasferimento dei dati avviene tramite due attività principali: <br></br><br></br>
- Forwarding: attività di inoltro dati all’interno del router, che riceve un
pacchetto da una linea input (input link) e lo trasmette ad un router
destinatario mediante un output link.<br></br><br></br>
- Routing: attività di instradamento dei pacchetti, si determina il
percorso (route) che seguono i pacchetti di dati tra i router. Il compito
del routing è anche quello di verificare e di localizzare percorsi e
strade alternative in caso di guasti di rete o di cambi di topologia
della rete.<br></br><br></br>
Nelle reti SDN (Software Defined Network) in Network Layer presenta due
sottolivelli:<br></br><br></br>
- Data Plane: è il piano di dati, dove si trovano le funzioni e
implementa il forwarding<br></br><br></br>
- Control Plane: è il piano di controllo, dove si trovano le funzioni e
viene implementato il routing, controllando la sua efficienza e
coordinando le sue azioni.<br></br><br></br>
Il Network Layer può inoltre offrire:<br></br><br></br>
- Servizi connessi: sono i ‘connection-oriented’, generalmente i circuiti
virtuali, come l’estrazione telefonica<br></br><br></br>
- Servizi non connessi: sono i ‘connectionless’, come Internet.<br></br><br></br><br></br>
Se le reti hanno un diverso MTU (Maximum Transmission Unit), cioè
dimensione massima del pacchetto dati), questo layer si occupa anche di
un'ulteriore frammentazione di dati. A questo livello appartiene il protocollo
IP (Internet Protocol) - che, detto in breve, assegna ad ogni dispositivo di
rete un indirizzo - ed il protocollo DHCP che assegna automaticamente
l’indirizzo assegnato dall’IP al dispositivo in una rete locale.</p>

<img id='imgDescr2' src='https://www.plixer.com/wp-content/uploads/2018/11/network-layers-2.png'></img>
<br></br>
<img id='imgDescr1' src='https://blog.apnic.net/wp-content/uploads/2018/06/IPv4-header_banner.png'></img>

<h4 id='T'>Transport Layer</h4>
                <p id='testoDDD'>Il compito generale di questo livello è quello di garantire e permettere che i
PDU (Protocol Data Unit), quindi i pacchetti di dati, arrivino nella sequenza
corretta e senza errori o perdita di dati, per rendere la comunicazione in rete
il 100% affidabile. Questo lo permette anche per la funzionalità del layer di
gestire le tempistiche del traffico di pacchetti per evitare congestioni di
rete. A differenza dei livelli precedenti, che si occupano di connessioni tra
nodi contigui di una rete, il Transport Layer si occupa solo del punto di
partenza e di quello finale, permettendo anche di effettuare la
frammentazione da frame singoli in pacchetti. I protocolli implementati in
questo livello sono il TCP (Transmission Control Protocol) e l’UDP (User
Datagram Protocol).</p>

<img id='imgDescr2' src='https://images.ctfassets.net/aoyx73g9h2pg/1dEg4tNJPhu0lFIr12j9TC/872ed4cfec663ad036ec1b8e13d1f05a/Tran
sport-Layer-Protocols-Diagram.jpg'></img>

<h4 id='S'>Session Layer</h4>
                <p id='testoDDD'>Il Session Layer ha il principale dovere sia di stabilire e chiudere una
comunicazione tra due host, sia di consentire la riapertura di una
comunicazione perduta partendo dal punto di interruzione.
Appartengono a questo livello i protocolli NetBIOS (Network Basic Input
Output System) e il protocollo RPC (Remote Procedure Call).
Nel pratico, il Session Layer si occupa di attivare una comunicazione tra due
dispositivi e mantenerla attiva per tutta la durata del trasferimento dei dati.
Da qui deriva il nome del livello, infatti ogni trasferimento dati viene
definito sessione. La sessione comprende 3 fasi: avvio, lavoro in
sessione, chiusura. Un esempio di sessione può essere quando si instaura una
connessione di tipo client-server.
A differenza del Transport Layer, che, come precedentemente anticipato, si
occupa di controllare il corretto invio dei dati, il Session Layer fa in modo
che il significato del messaggio non venga deformato.</p>

<img id='imgDescr2' src='https://www.freecodecamp.org/news/content/images/2021/09/5-1.png'></img>

<h4 id='Pr'>Presentation Layer</h4>
                <p id='testoDDD'>Questo livello si occupa di trasformare i dati forniti dal lato superiore
in una modalità standardizzata. Praticamente quindi il Presentation Layer,
tramite l’utilizzo dei suoi protocolli TLS (Transport Layer Security) e SSL
(Secure Sockets Layer), compressa e cifra i dati in input link. Perciò nell’invio
di un dato, viene aggiunto un presentation header al PDU, che contiene
informazioni sulla codifica del pacchetto (es. formato), cosicché il
destinatario comprenda il messaggio.</p>

<img id='imgDescr3' src='https://cf-assets.www.cloudflare.com/slt3lc6tev37/19L86neKKT8srUkOSe4rf7/ff4c91c94a1790651df7b48433913f
59/osi_model_presentation_layer_6.png'></img>

<h4 id='Ap'>Application Layer</h4>
                <p id='testoDDD'>Il principale compito e scopo di questo livello è quello di permettere
all’utente, essendo l’ultimo layer del modello, di interfacciarsi al meglio con
la macchina. Il layer di applicazione si occupa generalmente di fare in modo
che due applicazioni remote possano stabilire una comunicazione.
L’Application Layer sfrutta vari protocolli nel suo funzionamento:<br></br><br></br>
- l’HTTP (HyperText Transfer Protocol), ovvero il protocollo di
trasferimento di un ipertesto, utilizzato quando navighiamo in internet
tramite un qualsiasi browser. Questo protocollo mette infatti in
comunicazione il nostro browser con il server che ospita il sito
internet che visitiamo.<br></br><br></br>
- l’FTP (File Transfer Protocol), che permette di trasferire dei file tramite
anche autenticazione con nome utente e password.<br></br><br></br>
- POP3 (Post Office Protocol) o SMTP (Simple Mail Transfer), che,
leggendo il significato degli acronimi si può intuire, permettono lo
scambio di email tramite indirizzo stesso.</p>

<img id='imgDescr3' src='https://cf-assets.www.cloudflare.com/slt3lc6tev37/2rcDKpr4WLqoyAZ7GDKkyJ/7cab96402de7ac5465b86e617da3
da4e/osi_model_application_layer_7.png'></img>
<br></br>
<img id='imgDescr3' src='https://miro.medium.com/v2/resize:fit:960/1*9wvRkLhvQgx90caD3pso0A.png'></img>
            </section>
            <section id="argomento2">
                <h1>Stack TCP-IP</h1>
                
                <h3 id='Tcp'>Introduzione allo Stack TCP-IP</h3>

                <p id='testoDDD'>Lo stack (pila) TCP/IP è l'insieme di protocolli di rete utilizzati in Internet.
Come per il modello ISO-OSI, ogni layer dello stack si occupa di un compito
specifico, incapsulando i dati e le informazioni provenienti dal livello
superiore (o inferiore, in base a client-server side, come l’ISO-OSI). Nello
stack TCP/IP quindi esiste ed avviene una vera e propria stratificazione dei
protocolli, che serve essenzialmente a garantire: <br></br><br></br>
● Modularizzazione;<br></br><br></br>
● Suddivisione di compiti complessi in sotto-compiti più semplici;<br></br><br></br>
● Astrazione del problema.<br></br><br></br>
Sempre come abbiamo anticipato con il modello ISO-OSI, tra due
interlocutori, ogni livello dello stack TCP/IP forma un collegamento logico
(lato software). Il nome della “suite” deriva dai due termini:<br></br><br></br>
● TCP (Transmission Control Protocol), a livello di trasporto. <br></br><br></br>
● IP (Internet protocol), a livello di rete.</p>

<img id='imgDescr2' src='https://it.emcelettronica.com/wp-content/uploads/2016/04/721.jpg'></img>

                <h4 id='Hiii'>Host interlocutori</h4>
                <p id='testoDDD'>La pila TCP/IP completa è implementata in ogni end-system, ovvero gli host
interlocutori. Gli intermediate-system, che abbiamo visto che sono
essenzialmente i router, non implementano tutti e 5 i livelli dello stack.
Infatti:<br></br><br></br>
● I router implementano i primi tre livelli;<br></br><br></br>
● Gli switch (e altri dispositivi simili) implementano i primi due.</p>

<img id='imgDescr3' src='https://informaticabrutta.it/content/images/2017/07/stack-tcpip-host-e-intermedi.png'></img>

<h4 id='ID'>Incapsulamento e Decapsulamento</h4>
                <p id='testoDDD'>Possiamo dire brevemente che quando un dispositivo vuole comunicare con un
altro dispositivo, deve praticamente:<br></br><br></br>
1. Inscatolare il messaggio da inviare<br></br><br></br>
2. Inviarlo al livello inferiore/superiore<br></br><br></br>
3. Il quale lo inscatola nuovamente e riparte il ciclo che termina
all’ultimo/primo layer<br></br><br></br>
Il messaggio (pacchetto di dati) appena creato viene inviata lungo il canale
(cablato o wireless) fino a raggiungere la destinazione, dove viene aperto,
spostato il contenuto al livello successivo, riaperto, ecc.. Questa serie di
passi appena descritti sono rispettivamente: incapsulamento e
decapsulamento (il mittente incapsula, il ricevente decapsula). Un po' più in
maniera specifica, durante l’incapsulamento ogni livello riceve un pacchetto
dal livello precedente, che comprende un header e dei dati (payload). Il
livello corrente crea un nuovo pacchetto con un proprio header ed inserisce
come payload quello ricevuto prima e rinvia il tutto. In fase di
decapsulamento, invece, avviene la procedura inversa.</p>

<img id='imgDescr2' src='https://informaticabrutta.it/content/images/2017/07/tcpip-incapsulamento.png'></img>

<h4 id='MD'>Multiplexing e Demultiplexing</h4>
                <p id='testoDDD'>Nello stack TCP/IP abbiamo visto come ci sono vari protocolli per layer. Essi
si possono utilizzare contemporaneamente, tramite le tecniche di
multiplexing e demultiplexing.</p>

<img id='imgDescr3' src='https://informaticabrutta.it/content/images/2017/07/tcpip-multiplexing-demultiplexing.png'></img>

<p id='testoDDD'> ● Frecce arancioni -^- MULTIPLEXING: un protocollo incapsula e recapita
pacchetti ottenuti da più protocolli del livello precedente. <br></br><br></br>
● Frecce verdi -^- DEMULTIPLEXING: un protocollo decapsula e recapita
pacchetti verso più protocolli superiori.<br></br><br></br>
Per realizzare tutto questo c’è bisogno però di alcune informazioni
nell’header dei pacchetti.</p>

<h3 id='ConfI'>Confronto con ISO-OSI</h3>

                <p id='testoDDD'>Il modello ISO-OSI è stato ideato per permettere la comunicazione nelle reti
di computer, esso non è un protocollo rigido, ma è un punto di riferimento
per le architetture di rete a pacchetto, che potranno distanziarsi dal modello
di partenza. Come già precedentemente detto, invece, Internet si basa sul
protocollo TCP/IP (nato prima del modello ISO-OSI) che si differenzia dal
modello ISO-OSI per il numero di
livelli, in questo caso solo 4: <br></br><br></br>
• Livello di applicazione <br></br><br></br>
• Livello di trasporto <br></br><br></br>
• Livello di rete <br></br><br></br>
• Livello di accesso alla rete <br></br><br></br>
I livelli sessione e presentazione sono assenti perché implementati
(eventualmente) altrove, cioè nell’applicazione stand-alone esterna.</p>

<img id='imgDescr2' src='https://vitolavecchia.altervista.org/wp-content/uploads/2019/06/Caratteristiche-e-livelli-del-modello-TCP-IP
-nelle-reti-di-telecomunicazioni.png'></img>
            </section>

            <section id="argomento3">
                <h1>Funzionamento di Routing del Livello Network</h1>
                
                <h3 id='Rout'>Introduzione al Routing</h3>

                <p id='testoDDD'>Come abbiamo visto nel capitolo precedente il Network layer del sistema
ISO-OSI e dello stack TCP/IP svolge due operazioni fondamentali che esegue
per gestire il traffico dei pacchetti sulla rete ovvero: Routing e Forwarding,
la prima è sostanzialmente l’operazione che stabilisce il percorso migliore
tra i router per far arrivare un pacchetto dati da un punto A della rete a un
punto B. La funzione di routing è svolta singolarmente da ogni router della
rete, che per poter determinare il percorso su cui poi instradare il pacchetto,
con la seconda funzione del livello network cioè il forwarding, deve
conoscere, aggiornare e salvare delle informazioni fondamentali.</p>

<img id='imgDescr2' src='https://www.ipxo.com/app/uploads/2022/04/Featured-820x460.jpg'></img>

<h3 id='Def'>Routing table e Default router</h3>

                <p id='testoDDD'>Le informazioni fondamentali che deve gestire il router per poter eseguire il
routing e avviare successivamente il forwarding e il l’invio del pacchetto,
sono 4 e sono:<br></br><br></br>
- 1. indirizzo destinatario (destination address);<br></br><br></br>
- 2. router adiacenti (neighbor), cioè direttamente collegati al router;<br></br><br></br>
- 3. tutte le possibili route verso le reti remote;<br></br><br></br>
- 4. il percorso migliore per ciascuna rete remota.<br></br><br></br>

Queste informazioni sono salvate dal router nella propria memoria e
organizzate in una tabella, chiamata: Routing Table, questa tabella viene
costruita dal router in maniera autonoma o manuale, a seconda dei tipi di
routing. Il formato e i campi della routing table possono variare a seconda
dei vari standard ma in generale per ogni riga della tabella detta “entry”
sono presenti 4 campi:<br></br><br></br>
-1. Network address: è l’indirizzo IP di ogni rete raggiungibile scritto con la
parte host dell’indirizzo a zero;<br></br><br></br>
-2. Next hop: indirizzo del router successivo nella route per il destinatario;<br></br><br></br>
-3. Interface: interfaccia, porta fisica, del router a cui è collegato il next
hop, porta dunque su cui inviare il pacchetto;<br></br><br></br>
-4. Metric: è il dato in base a cui viene scelto il percorso migliore tra più
alternative, la metrica è l’unità di misura che viene scelta per discriminare
la scelta di una route rispetto a un'altra, ad esempio può essere il numero di
hop necessari per raggiungere la destinazione, ma può variare a seconda dei
parametri utilizzati.</p>

<img id='imgDescr4' src='https://www.baeldung.com/wp-content/uploads/sites/4/2022/10/Routing-Table.drawio.png'></img>

<p id='testoDDD'>Nella routing table di ogni router poi è di fondamentale importanza
esplicitare il Default router, che in caso di un pacchetto il cui destinatario
appartenga a una rete non presente nella routing table del router, il router
invia il pacchetto al default router che prende in carico l’instradamento del
pacchetto per farlo giungere al router destinatario. In caso di default router
non definito il router invierebbe un messaggio ICMP di “Destination
unreachable”.</p>

<h3 id='StDn'>Routing Statico e Dinamico</h3>

                <p id='testoDDD'>La dinamica che condiziona maggiormente il comportamento di una rete e
dei router che la compongono è la modalità con cui viene costruita,
aggiornata e gestita la routing table dei singoli router, i casi possibili sono,
che poi vanno a definire i due tipi di routing possibili:<br></br><br></br>
-1. Routing statico: su una rete è applicato routing statico quando
l'amministratore di rete, o chi possiede i permessi da amministratore,
inserisci in maniera manuale i dati della routing table, dunque la
costruzione della tabella e l’aggiornamento delle route conosciute dai ogni
singolo router è eseguita manualmente, questa soluzione è usata solamente
per applicazioni su reti molto piccole, reti locali e scolastiche;<br></br><br></br>

-2. Routing dinamico: al contrario nel routing dinamico la costruzione,
aggiornamento e manutenzione della routing table di ogni router è eseguita
da un protocollo di routing che automaticamente gestisce tutte queste
operazioni, la differenza principale tra i vari protocolli di routing sta negli
algoritmi che sfruttano per gestire le routing table dei router, e soprattutto
come fanno a propagare le informazioni nella rete e costruire la routing
table, per questa caratteristica di relativa autonomia operativa sono usati in
applicativi di grosse reti, a livello aziendale, dalla piccola azienda alla
multinazionale, e in grosse infrastrutture pubbliche o private.</p>

<img id='imgDescr2' src='https://techdifferences.com/wp-content/uploads/2018/02/Untitled-1.jpg'></img>

<h3 id='RTLP'>Problema della RTLP</h3>

                <p id='testoDDD'>Il problema principale con il sistema della routing table è legato alla
velocità estremamente elevata con cui il router deve, quando arriva un
pacchetto, cercare la rete del destination address nella routing table, se
presente, scegliere la route migliore in base alla situazione in quel momento
della rete e poi instradare il pacchetto con le operazioni di forwarding,
queste operazioni molto semplici devono essere svolte tra router e routing
table in tempi brevissimi per evitare che si creino congestioni a catena su
tutta la rete, proprio questa dinamica genera il problema definito come:
Routing Table Lookup Problem (RTLP). Questa dinamica e il problema
conseguente sono stati e sono ancora un punto chiave per la scalabilità della
rete internet e in generale per tutte le infrastrutture di medie/grandi
dimensioni, perché ovviamente più interfacce ha un router, più pacchetti
dovrà gestire e più questo problema si paleserà. Per la sua risoluzione si
stanno sviluppando più soluzioni legate a molti aspetti differenti delle
infrastrutture di rete e della loro funzionamento, con diverse idee e progetti
che stanno venendo sviluppati e testati sia lato software, come algoritmi per
una consultazione più rapida della routing table, o una gestione
parallelizzata del processo di accesso, verifica e instradamento, mentre lato
hardware con lo sviluppo dei network processor, processori specifici per avere
alte prestazioni nelle operazioni svolte durante il routing.</p>


            </section>
            <section id="argomento4">
                <h1>Algoritmi di Routing</h1>
                
                <h3 id='Prot'>Introduzione ai protocolli di routing</h3>

<p id='testoDDD'>Come abbiamo precedentemente visto a seconda di come viene creata,
gestita e aggiornata la routing table si può avere un routing statico o
dinamico, nel caso di quest’ultimo per implementare in maniera automatica
queste operazioni sui router vengono usati i protocolli di routing. Lo scopo
di un protocollo di routing è dunque aggiornare le routing table dei router e
per far ciò è necessaria la condivisione delle informazioni sulle route tra i
vari router, questi aggiornamenti sono inviati ad ogni router tramite
pacchetti appositi definiti: routing update. Un protocollo di routing
efficiente risponde a 5 caratteristiche:<br></br><br></br>
-1. Ottimalità: deve saper determinare il miglior percorso per ogni rete e le
eventuali alternative, in base alla materica utilizzata, che può essere hop
count, larghezza di banda su un determinato percorso e altre ancora;<br></br><br></br>

-2. Imparzialità: deve gestire e suddividere il traffico dei pacchetti a
seconda del carico sulla rete nei momenti specifici, utilizzando tutte le
linee disponibili, evitando così congestioni;<br></br><br></br>
-3. Flessibilità: uno dei più grandi vantaggi del routing dinamico è la
creazione di un sistema adattivo, dunque la flessibilità in caso di
cambiamenti sulla rete è una caratteristica fondamentale;<br></br><br></br>

-4. Convergenza veloce: per convergenza s’intende il tempo in cui un
pacchetto di routing update si propaga nella rete, al fine di minimizzare i
rischi per la sicurezza e aumentare le prestazioni della rete;<br></br><br></br>

-5. Robustezza: capacità di funzionamento anche in caso di guasti o
configurazioni errate, avere dunque un alta resilienza.<br></br><br></br>

Come abbiamo visto prima il comportamento di un protocollo di routing per
quanto riguarda le dinamiche di creazione e aggiornamento delle routing
table sui router della rete è influenzato principalmente dalla logica
dell’algoritmo di routing sottostante, cioè quello che integra in sé il
protocollo e che poi contiene i passaggi e l’iter per andare a compiere le
operazioni di comunicazione tra i router e della creazione della tabella di
routing, a seconda dei vari algoritmi abbiamo diversi vantaggi e svantaggi,
conseguenti proprio della logica che regola il funzionamento dell’algoritmo,
i due principale algoritmi di router, per quanto riguarda i routing protocol
definiti come Interior Gateway Protocol (IGPs), sono: algoritmo di Distance
Vector e l'algoritmo Link State.</p>

<img id='imgDescr2' src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*9VePVHliXXnFgGe3V-C84A.png'></img>

<h3 id='DV'>Algoritmo Distance Vector</h3>

<p id='testoDDD'>L’algoritmo di Distance Vector è utilizzato nell’ambito del routing, è basato
sull’algoritmo per la determinazione del miglior percorso, o “best route”, di
Bellman-Ford. i due punti di analisi di questo algoritmo sono:<br></br><br></br>
-3.2(1) Routing table<br></br><br></br>
-3.2.(2) Passaggi per la determinazione di tutti i percorsi.</p>

<h4 id='RTT'>Routing table</h4>
                <p id='testoDDD'>La routing table che crea e gestisce l’algoritmo di distance vector ha come
righe della tabella i nodi della rete conosciuti, come tutte le tabelle di
routing, mentre come colonne ha due colonne contenenti: la distanza e
l’interfaccia, la prima colonna specifica la distanza stimata misurata con la
metrica, scelta per valutare la distanza, la seconda colonna specifica
l’interfaccia a cui è collegata con la route il nodo della rete.</p>

<h4 id='PA'>Passaggi algoritmo</h4>
                <p id='testoDDD'>Essendo un algoritmo è formato da una serie di passaggi e condizioni che poi
vanno creare e aggiornare la routing table dei router della rete, dunque
analizziamo i passaggi principali, dall’inizio, uguali sia per la creazione che
per l’aggiornamento della routing table dei router:<br></br><br></br>

1. Pacchetto di ECHO: i router della rete scambiano con i router vicini,
definiti neighbor, un pacchetto ECHO, che serve per calcolare la
distanza con i router vicini;<br></br><br></br>

2. Vettore delle distanze: una volta che i router conoscono la distanza dai
vicini si scambiano un vettore delle distanze che riporta l’elenco di
tutte le route conosciute dai router vicini, meno ovviamente la route
per il router destinatario del vettore delle distanze;<br></br><br></br>
3. Confronto tra le route e salvataggio: avendo tutte le informazioni dei
router vicini ogni router aggiorna la tabella di routing, aggiungendo
anche i nodi non vicini, confrontando i costi salvati con i nuovi
ottenuti e andando a scegliere la best route.</p>

<img id='imgDescr4' src="https://image.slideserve.com/1455796/distance-vector-example-step-2-l.jpg"></img>

<p id='testoDDD'>La caratteristica principale dell’algoritmo di Distance Vector, che lo
distingue dall’altro algoritmo che vedremo dopo ovvero l’algoritmo Link
state, è la non conoscenza della topologia di rete, infatti ogni router della
rete conosce solamente i router vicini, a differenza del link state in cui ogni
router salva e aggiorna l’intera topologia della rete. Questa caratteristica del
Distance vector porta a 2, possibili, problemi principalmente:<br></br><br></br>
1. Routing loop: problema che si verifica quando un pacchetto è inoltrato
in un percorso circolare e non riesce a raggiungere la destinazione, per
questa dinamica delle reti è stato introdotto infatti nell’header dei
pacchetti il TTL (Time To Live), contatore che si decrementa a ogni
passaggio in un router e quando arriva a zero il pacchetto viene
scartato;<br></br><br></br>

2. Count to infinity: Problema che deriva principalmente da una
convergenza troppo alta, infatti si verifica quando, nella fase di
calcolo delle distanze, il pacchetto inviato continua ad aumentare
senza raggiungere il router vicino, e dunque viene alla fine scartato
per evitare loop, si verifica ad esempio quando c’è un guasto o una
configurazione errata sul percorso o sul router, problema che dunque
con una convergenza molto rapida si risolverebbe perché i router vicini
avrebbero subito conoscenza del problema.<br></br><br></br>

Per risolvere questi problemi dell’algoritmo di Distance vector sono state
sviluppate negli anni delle varianti dell’algoritmo per andare a limitarli e
gestirli in maniera alcune di queste varianti sono Split Horizon, Poison
reverse, Route poisoning, hold down e triggered updates.</p>

<h3 id='LS'>Algoritmo Link State</h3>

<p id='testoDDD'>L’algoritmo Link state è insieme al Distance vector il principale algoritmo di
routing, sempre in ambito di protocolli di routing IGPs, la differenza
principale con l’altro algoritmo è come abbiamo visto la conoscenza da parte
di ogni router dell’ intera topologia di rete. Dunque il link state non è
soggetto ai problemi del Distance vector derivanti dalla non conoscenza
della topologia di rete e dalla convergenza più lenta. Come per il Distance
vector possiamo ricostruire come l’algoritmo ricavi la topologia di rete e i
relativi percorsi stabilendo il migliore, tramite i passaggi principali,
passaggi identici anche per l’aggiornamento della routing table:<br></br><br></br>

1. LSP: all'inizio ogni router invia a tutti gli altri il pacchetto LSP (Link
State Packet), questo pacchetto contiene l’elenco e la distanza da ogni
vicino, un po’ come il vettore delle distanza e il pacchetto di ECHO,
per il Distance vector, in un solo pacchetto;<br></br><br></br>
2. Flooding: ogni router verifica che il numero identificativo dell’LSP
ricevuto sia il maggiore salvato in memoria, se così lo salva e lo
rinvia in flooding, cioè lo invia su tutte le linee escludendo L’input
link;<br></br><br></br>
3. Algoritmo di Dijkstra: da qui con le informazioni dell’LSP, ogni router
crea un grafo pesato rappresentante la rete, su cui applica l’algoritmo
di Dijkstra, che trova i percorsi minimi per ogni route.<br></br><br></br>
Dunque come possiamo notare da questa spiegazione l’algoritmo link state
crea un maggior traffico di pacchetti sulla rete, che tra l’altro sono anche più
pesanti, riportando le informazioni di distanza e elenco per ogni router.
L’algoritmo link state dunque risolve i problemi del distance vector ma con
il compromesso di aggiungere un maggior carico sulle route della rete e
anche sui router che dovranno salvare nella memoria l’intera topologia della
rete, risultando dunque logicamente un sistema più costoso a livello
energetico e di hardware.</p>

<img id='imgDescr2' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1671745151505/5488136c-81a8-4a65-9d52-fa966d645b3f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"></img>

            </section>

            <section id="argomento5">
                <h1>Autonomous System</h1>
                
                <h3 id='AS'>Introduzione agli Autonomous System</h3>

                <p id='testoDDD'>Nei primi anni del ‘80 Internet era un’unica rete (single network) dove gli
intermediate-system dovevano predisporre e completare la routing table per
ogni indirizzo raggiungibile da esso, perciò la tabella di routing conteneva
enormi quantità di dati ed informazioni, che non si potevano nemmeno
liberare tramite algoritmi e protocolli di routing. La soluzione migliore
applicata fu quella della creazione di una rete modulare, abbandonando per
sempre il modello a single network. Da allora, Internet fu suddivisa in varie
aree e settori, chiamati Autonomous System, ognuna contenente un
amministratore o gruppo di amministratori (network provider). L’Autonomous
System è formato da un insieme di router e LAN raggruppati e connessi
seguendo una specifica topologia di rete.</p>

<img id='imgDescr4' src='https://2.bp.blogspot.com/-pZapUtREzmM/WWzIsqoE6PI/AAAAAAAAEZU/oTJa8f_BPqY_Zfq_UMblyQSU3NfH39dXQC
LcBGAs/s1600/internet_topology.jpg'></img>

<h3 id='FI'>Funzionamento interno</h3>

                <p id='testoDDD'>Le informazioni e i dati sulla raggiungibilità degli effettivi destinatari
all’interno dell’AS sono gestite tramite l’utilizzo di uno o più protocolli
adattivi, gli Interior Protocol. Invece, tra lo scambio di informazioni tra
Autonomous System viene utilizzato un protocollo chiamato Exterior Protocol.
Nell’utilizzo del primo protocollo, è il caso in cui un router deve comunicare
(instradare un messaggio) con un altro router appartenente allo stesso
Autonomous System, e quindi avrà nella propria routing table le informazioni
sulla raggiungibilità del router destinatario. Per il secondo protocollo
invece, un router di un AS ha necessità di comunicare con un router
appartenente ad un altro AS. I router che comunicano nello stesso AS vengono
detti IR (Interior Router), mentre la coppia router che si scambiano
informazioni tra due AS differenti vengono chiamati ER (Exterior Router).
Perciò, gli ER, conoscono sia le informazioni riguardo al proprio AS, come gli
IR, ma anche l’/gli ER appartenenti ad ulteriori AS. Ogni Autonomous System
viene gestito in maniera indipendente dagli altri, tranne per il fatto che
vengono stabiliti degli accordi tecnici ed amministrativi tra i vari provider,
gli accordi di peering, che vengono implementati ogni qual volta che viene
attivato un ER.</p>

<img id='imgDescr' src='https://lh6.googleusercontent.com/proxy/oLpY4wHRYkqLxw5cu1WHJgGXmmN0u8tpk8mb7CKQUp1rn-B6gMJz2u7t-DKlLUJcIf0hFAzrKZBnvzt7qPdLcA'></img>

<h3 id='EsAS'>Esempio AS</h3>

                <p id='testoDDD'>La rete dell’Università di Bologna ed il Politecnico di Torino comunicano
nella rete Internet tramite il GARR (Gruppo per l'Armonizzazione della Rete
della Ricerca) e i suoi accordi o relazioni di peering, che insieme a tutte le
altre reti connessa ad essa costituiscono un unico Autonomous System.
Esistono vari punti di contatto o accesso tra i vari AS che vengono definiti
come NAP (Natural Access Point), che dal punto di vista fisico si potrebbe
considerare come una LAN, quindi una specie di sottosistema per la
comunicazione. Quindi un NAP viene configurato implementando ed
utilizzando l’Exterior Protocol, quindi per interconnettere router appartenenti
a diversi Autonomous System.</p>

<img id='imgDescr' src='https://www.garr.it/it/comunita/scuola/materiale-informativo/loghi/3955-logo-garr-png/file'></img>

<h3 id='ASN'>Tipi di AS e ASN</h3>

                <p id='testoDDD'>Possono essere distinti tre tipi diversi di Autonomous System:<br></br><br></br>
● multi-homed AS: l’AS si connette a due o più AS, così da permettere il
funzionamento in caso di guasti verso un AS.<br></br><br></br>
● single-homed AS: l’AS si connette ad un solo altro AS, ma potrebbe
avere ulteriori connessioni private.<br></br><br></br>
● transit AS: l’AS agisce da collegamento tra due o più AS, fornendo il
transito dei dati tra reti non associate.<br></br><br></br>

Essendo che gli Autonomous System sono delle unità organizzative
indipendenti, devono essere riconosciute ed identificate in modo univoco.
Internazionalmente si è deciso di utilizzare un elenco di numeri
identificativi da assegnare ad ogni AS per i network provider che ne fanno
richiesta. Questi id vengono definiti come ASN (Autonomous System Number),
e sono dei blocchi di numeri che vengono assegnati e collocati dalle RIR
(Regional Internet Registry) di IANA, in base al continente in cui ti trovi. Ci
sono due tipologie di formati ASN:<br></br><br></br>
● 2 BYTE: blocco di 1023.<br></br><br></br>
● 4 BYTE: blocco di 94.967.295.</p>

            </section>

            <section id="argomento6">
                <h1>Glossario e Bibliografia</h1>
                
                <p id='testoDDD'>

                [1] Autore: Davide Quaranta, Titolo: Introduzione allo Stack TCP/IP,
Anno: 2017,
link:https://informaticabrutta.it/stack-tcp-ip/index.html#google_vignette,
ultima data di consultazione: 05/02/2023. <br></br><br></br><br></br>

[2]. Wikipedia, Titolo: Suite di protocolli Internet,
link:https://it.wikipedia.org/wiki/Suite_di_protocolli_Internet, data ultima
consultazione: 05/02/23.<br></br><br></br>
Fonti interne:<br></br><br></br>
-1. Autore: Andrew Stuart Tanenbaum, Titolo: Reti di calcolatori ,Luogo di
pubblicazione: Vrije universiteit Amsterdam, Olanda ,Editore: Pearson Italia
S.p.a., Anno pubblicazione: 2003, ISBN: 978-88-7192-182-2.<br></br><br></br>

-2. Autore: Kevin R. Fall, W. Richard Stevens, Titolo: TCP/IP Illustrated,
Volume 1: The Protocols, Luogo di pubblicazione: Ann Arbor, Michigan, United
States ,Editore: Addison-Wesley , Anno pubblicazione: 2011, ISBN: 0132808188,
9780132808187.<br></br><br></br><br></br>

[3]. Autori: Elena Baldino, Renato Rondano, Antonio Spano, Cesare Iacobelli,
Titolo: Internetworking, luogo di pubblicazione: Milano, Editore: Mondadori
education S.p.A. , anno di pubblicazione: 2021. <br></br><br></br><br></br>
                </p>

            </section>

        </div>
    
    </div>
  )
}

export default Descrizioni;