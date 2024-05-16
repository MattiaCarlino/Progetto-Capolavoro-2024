import React from 'react'

export const Topics_page = ({topics}) => {
  return (
    <div id='Topics_page' className='wrapper2'>
        <div className='list_sotto_topics'>
            <h6>{topics.list_sotto_topics}</h6>
        </div>
        <div className='title_topics'>
            <h2 >{topics.list_sotto_topics.title_sotto_topics}</h2>
        </div>
         <div className='content'>
            {topics.list_sotto_topics.content}
        </div>
    </div>
  )
}

export default Topics_page;
