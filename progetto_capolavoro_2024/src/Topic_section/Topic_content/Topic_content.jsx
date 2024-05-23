import React from 'react'

export const Topic_content = (list_topics) => {
  return (
    <div id='topic-content'>
      <div className='title-section'>
        <h2>{list_topics.title_sotto_topics}</h2>
      </div>
      <div className='content'>
        {list_topics.content}
      </div>
    </div>
  )
}

export default Topic_content