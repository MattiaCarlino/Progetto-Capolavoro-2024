import {React} from 'react'
import Topic_box from '../../components/Topic_box/Topic_box.jsx'
import list_topics from '../../macro_topics.json'
import './Home.css'

export const Home = () => {

  return (
    <div id = "homepage" className='wrapper2'>
      <div className='web-app-name'><h1> Algoritmi di Routing & Autonomous System </h1></div>
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