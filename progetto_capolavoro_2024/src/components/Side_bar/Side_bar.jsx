import React from 'react'
import List_topics from '../../list_topics.json'
import Sotto_topic_title from '../Sotto_topics_title/Sotto_topics_title.jsx'

export const Side_bar = (id) => {
  return (
    <div id='Side_bar'>
        <div className='main-section'>
            <ul className='lista-topics'>
                {List_topics.map(topic => {
                    if( topic.id == id){
                        <Sotto_topic_title
                            key = {topic.id}
                            title = {topic.Sotto_topic_title}>
                        </Sotto_topic_title>
                    }
                })}
            </ul>
        </div>
    </div>
  )
}

export default Side_bar;
