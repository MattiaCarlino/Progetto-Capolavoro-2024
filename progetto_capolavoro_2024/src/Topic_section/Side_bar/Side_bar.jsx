import React from 'react'
import Topics from '../../list_topics.json'
import List_topics from '../Side_bar/List_topics/List_topics.jsx'

export const Side_bar = (id) => {
  return (
    <div id='side-bar'>
      <div className='title-section'>
        <h4> Lista Argomenti </h4>
      </div>
      <div className='list-topics-section'>
        {Topics.map(topics => (
          topics.list_topics.map((sotto_topic) =>{
          <List_topics
            list_topics = {sotto_topic}
          />
          })
        ))}
      </div>
    </div>
  )
}

export default Side_bar;
