import React from 'react'
import { Side_bar } from '../Side_bar/Side_bar'
import List_topics from '../../list_topics.json'

export const Topic_main_section = (id) => {
  return (
    <div id='Topic-main-section'>
        <div className='side-bar'>
            <Side_bar id = {id}></Side_bar>
        </div>
        <div className='content-section'>
            {List_topics.map(topic =>{
                if( topic.id == id){
                    <p>{topic.content}</p>
                }
                
            })}
        </div>

    </div>
  )
}

export default Topic_main_section;
