import {React,useState} from 'react' 
import Topic_box from '../../components/Topic_box/Topic_box.jsx'
import list_topics from '../../macro_topics.json'
import './Home.css'

export const Home = () => {

  const [isClicked,setClicked] = useState(false);
  const [idDaVisualizzare, setIDDaVisualizzare] = useState(0);

  return (
    <div id = "homepage" className='wrapper2'>
      <div className='web-app-name'><h1> Algoritmi di Routing & Autonomous System </h1></div>
      <div className='description'>
      </div>
      <section className='main-section'>
        <div className='list-topics'>
          {list_topics.map(topics => (
            <Topic_box
            key={topics.id}
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