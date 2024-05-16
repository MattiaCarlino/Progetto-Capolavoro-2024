import {React,useState} from 'react' 
import Topic_box from '../../components/Topics/Topics.jsx'
import list_topics from '../../list_topics.json'
import Topics_page  from '../../components/Topics_page/Topics_page.jsx'
import './Home.css'


export const Home = () => {

  const [isClicked,setClicked] = useState(false);
  const [idDaVisualizzare, setIDDaVisualizzare] = useState(0);

  return (
    <div id = "homepage" className='wrapper2'>
    <div className='web-app-name'><h1> Nome web app </h1></div>
    <div className='description'>
      <p> descrizione del progetto, come è diviso e organizzato</p>
    </div>
    <div className='title-main-section'><h1> Argomenti </h1></div>
    {!isClicked && (<section className='main-section'>
      <div className='left-section'>
      {list_topics.map(topics => (
          <Topic_box
            key={topics.id}
            topics={topics}
            click = {setClicked(true)}
          />
        ))}
      </div>
    </section>)}

    {isClicked &&(
      <section>
        <div>
        {list_topics.map(topics => (
        <Topics_page
        key = {topics.id}
        topics = {topics}
        />
        ))}
        </div>
      </section>)}
    </div>
  )
}

export default Home;
