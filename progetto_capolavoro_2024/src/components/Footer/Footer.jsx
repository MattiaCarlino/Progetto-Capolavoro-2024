import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer class="footer" >
    <div class="container" id="finePagina">
        <div class="footer-content">
            <div class="footer-logo">
                <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.isarchimede.edu.it/&ved=2ahUKEwj5kIS4z7CGAxX7gP0HHUi8DeoQFnoECAYQAQ&usg=AOvVaw1mmBG6DM-2L1eVCzcFwoKT' target='_blank'>
                <img src="https://scontent.fmxp12-1.fna.fbcdn.net/v/t39.30808-6/302138691_464954835647691_3659711233732093474_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ON6HVvovZPkQ7kNvgHFcQtd&_nc_ht=scontent.fmxp12-1.fna&oh=00_AYA5eGdbgjk7FS1b-IO-HV6TqMUS7DTfBer0io5K74U0-A&oe=665BC954" alt="Logo" id='archimede'></img>
                </a>
            </div>
            <div class="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
            
        </div>
        <div class="footer-info">
            <p>© 2024 ITIS Archimede</p>
            <p>Indirizzo: Via Greggia, 52, 24047 Treviglio BG</p>
            <p>Email: <a href='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJlLWRklPbhSZbrdvdMmhWqmvqBtJmvMPBwnRWkRfrCZhQfdGgbJjfpZVCpwtFbgcGGMcvq'target='_blank'>ferri.davide.stu@isarchimede.it</a> | <a href='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJlLWRklPbhSZbrdvdMmhWqmvqBtJmvMPBwnRWkRfrCZhQfdGgbJjfpZVCpwtFbgcGGMcvq'target='_blank'>carlino.mattia.stu@isarchimede.it</a>
            </p>
        </div>

        <div>

        <p id='titolo'> Utilities: </p>

        <nav>
            <ul id='utilities'>
                
                <li> <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://it.legacy.reactjs.org/&ved=2ahUKEwj9hsab0rCGAxWcgv0HHQOgCbUQFnoECBwQAQ&usg=AOvVaw1qFG6icnSO7LRQkh8Hcs4j'target='_blank'>React</a></li>
                <li> <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://unica.istruzione.gov.it/it&ved=2ahUKEwiOxail0rCGAxU-i_0HHYM4AtQQFnoECAYQAQ&usg=AOvVaw1vD0O1DmVL-x96OusjGHMF'target='_blank'>Unica</a></li>
                <li> <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.isarchimede.edu.it/&ved=2ahUKEwj5kIS4z7CGAxX7gP0HHUi8DeoQFnoECAYQAQ&usg=AOvVaw1mmBG6DM-2L1eVCzcFwoKT' target='_blank'>ITIS Archimede Treviglio</a></li>
            </ul>
        </nav>


        </div>

    </div>
</footer>

  )
}

export default Footer;