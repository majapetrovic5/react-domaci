import React from 'react'
import { Button } from './Button';
import './Appointments.css';

function Appointment({obj, delApp}) {

    return (
    
        <li className='appone'>
            <div className='app_wrap'>
            <figure className='app__pic-wrap' data-category={obj.spec+' appointment'}>
      
              <img
                className='app__img'
                alt='Appointment'
                src={obj.picture}
              />
            </figure>
             <div className='app__info'>
              <p className='app__text'>{obj.name}</p>
              <h5 className='app__name'>{obj.date}</h5>    </div>
              
              <li> <Button
            className='btns'
            buttonStyle='btn--test'
            buttonSize='btn--medium' link='/appointments'
            onClick={delApp}
            id={obj.id}>
            CANCEL APPOINTMENT
          </Button></li> 
        
          </div>
            
        </li>
      
    
    );
  }
  
  export default Appointment;