import React from 'react';
import {Button} from './Button';
import  { useState } from 'react';


function Client({text,name,picture,spec, type,star}) {

 
  const [starNum, setstarNum] = useState(star);
  const [clicked, setClicked] = useState(false);
  const onClick1= ()=>{
       if(clicked==false) setstarNum(starNum+1);   
       setClicked(true);
  }

  const onClick2= ()=>{
    setstarNum(starNum-1);   
    setClicked(false);
}
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
                 {clicked== false ? 
               <i class="far fa-star" onClick={onClick1}></i>  
              : <i class="fas fa-star" onClick={onClick2} ></i>}
             <p>{starNum}</p>
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