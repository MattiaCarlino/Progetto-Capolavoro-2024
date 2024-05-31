import React from 'react';
import './Topic_box.css'
import {Link} from 'react-router-dom'
import Descrizioni from '../../pages/Topic_pages/Descrizione';

const Topic_box = ({topics}) => {

  return (
  
   <a href='/Descrizioni' id='linkk'>
   <article className='topic-box'>
     <img src={topics.image} alt={topics.title_topics} className='topic-img'/>
     <div className='topic-header'>
     </div>
     <h2>{topics.title_topics}</h2>
     <p>{topics.description}</p>

   </article></a>



  );
};

export default Topic_box;
 /*
      <Link to={topics.path_topic}>
        <button>
          Leggi di più
        </button>
      </Link>
  */