import React from 'react';
import './Topic_box.css'

const Topic_box = ({topics}) => {

  return (
    <article className='topic-box'>
      <img src={topics.image} alt={topics.title_topics} className='topic-img'/>
      <div className='topic-header'>
      </div>
      <h2>{topics.title_topics}</h2>
      <p>{topics.description}</p>
      
    </article>
  );
};

export default Topic_box;