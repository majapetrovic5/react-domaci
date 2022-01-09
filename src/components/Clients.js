import React from 'react';
import './Clients.css';
import Client from './Client'; 


function Clients({title, array1, array2, type,makeAp, star1,star2}) {
  return (
    <div className='clients'>
      <h1>{title}</h1>
      <div className='clients__container'>
        <div className='clients__wrapper'>
          <ul className='clients__items'>
        
{
  array1.map(item => (<Client key={item.id} id={item.id} name={item.name} text={item.text} picture={item.picture}
    spec={item.spec }type={type} star={item.star} checked={item.checked}  makeAp={makeAp} 
    star1={star1} star2={star2}>  </Client>)) }
</ul>
{
 array2 != null ? <ul className='clients__items'>
 {
   array2.map(item => (<Client key={item.id} id={item.id} name={item.name} text={item.text} picture={item.picture}
    spec={item.spec}type={type} star={item.star} checked={item.checked} makeAp={makeAp} 
    star1={star1} star2={star2}>  </Client>)) }
</ul> : <></>
}
          
        </div>
      </div>
    </div>
  );
}

export default Clients;