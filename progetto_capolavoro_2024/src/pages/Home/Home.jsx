import {React,useState} from 'react' 
import Topic_box from '../../components/Topic_box/Topic_box.jsx'
import list_topics from '../../macro_topics.json'
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
      <section className='main-section'>
        <div className='list-topics'>
          {list_topics.map((topics, index) => (
            <Topic_box
              key={index}
              topics={topics}
            />
          ))}
        </div>  
      </section>
    </div>
    )
}

export default Home;

/*<section>
<div>
{list_topics.map(topics => (
<Topics_page
key = {topics.id}
topics = {topics}
/>
))}
</div>
</section>
*/