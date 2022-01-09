import React from 'react';
import {Button} from './Button';
import  { useState } from 'react';


function Client({id,text, name,picture,spec, type,star, checked, makeAp,star1,star2}) {

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
               <div className='star' >
                 {checked==false ? 
               <i class="far fa-star" onClick={()=>{star1(id)}}></i>  
              : <i class="fas fa-star" onClick={()=>{star2(id)}} ></i>}
             <p>{star}</p>
             </div>
             
             </li>
            <li> <Button
          className='btns'
          buttonStyle='btn--test'
          buttonSize='btn--medium' link='/doctors'
          onClick={makeAp}
          id={id}>
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