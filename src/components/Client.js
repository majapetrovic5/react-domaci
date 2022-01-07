import React from 'react';
import {Button} from './Button';



function Client({text,name,picture,spec, type}) {
  return (
    <>
      <li className='client'>
          <div className='client_wrap'>
          <figure className='client__pic-wrap' data-category={type=='clients'? '"': spec}>
    
            <img
              className='client__img'
              alt='Client'
              src={picture}
            />
          </figure>
           <div className='client__info'>
            <p className='client__text'>{text}</p>
            <h5 className='client__name'>{name}</h5>
            {type==='doctors'? 
            <div>
              <ul>
             <li>
               <div className='star'>
             <i class="fas fa-star"></i>
             <p>{Math.floor((Math.random() * 5) + 1)}</p>
             </div>
             
             </li>
            <li> <Button
          className='btns'
          buttonStyle='btn--test'
          buttonSize='btn--medium' link='/doctors'
        >
          MAKE AN APPOINTMENT
        </Button></li> </ul>  
 
            </div>
          
            : <></>}
           
            </div>
          </div>
      </li>
    
    </>
  );
}

export default Client;