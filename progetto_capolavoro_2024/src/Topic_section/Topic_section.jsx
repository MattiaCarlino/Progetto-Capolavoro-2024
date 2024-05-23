import React from 'react'
import '../Topic_section/Topic_section.css'
import Side_bar from './Side_bar/Side_bar.jsx'
import Topic_content from './Topic_content/Topic_content.jsx'
import Topic from '../list_topics.json'

export const Topic_section = () => {
  return (
    <div id='topic-main-section'>
      <div className='side-bar'>
        <Side_bar/>
      </div>
      <div className='content'>
        {Topic.map(topics => (
          topics.list_topics.map((sotto_topic) =>{
          <Topic_content
            list_topics = {sotto_topic}
          />
          })
        ))}
      </div>
    </div>
  )
}

export default Topic_section;
