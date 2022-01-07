import React from 'react';
import Quote from './Quote';


function Client({text,name, picture}) {
  return (
    <>
      <li className='client'>
          <div className='client_wrap'>
          <figure className='client__pic-wrap' data-category={'”'}>
    
            <img
              className='client__img'
              alt='Client'
              src={picture}
            />
          </figure>
           <div className='client__info'>
            <p className='client__text'>{text}</p>
            <h5 className='client__name'>{name}</h5>
           
            </div>
          </div>
      </li>
    
    </>
  );
}

export default Client;