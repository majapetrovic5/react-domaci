import React from 'react'
import Appointment from '../Appointment';
import '../Appointments.css';
import { Button } from '../Button';

function Appointments({appointments,delApp}) {
    return ( <> 
    {appointments.length==0? 

        
            <div className='appdoc__container'>
            <h1>You do not have any appointments yet.</h1>
            <h1>Go to see our doctors and make an appointment.</h1>
            <div className='btnap'> <Button link='/doctors' buttonSize='btn--large'
   buttonStyle='btn--outline'>DOCTORS</Button>
   </div>
   </div>
  
    
    :
    
   <div className='app'>
   <h1>YOUR APPOINTMENTS</h1>
    <div className='app__container'>
      <div className='app__wrapper'>
        <ul className='app__items'>
      

 {appointments.map(item => (<Appointment obj={item} delApp={delApp}></Appointment>)) }
</ul>       
      </div>
    </div>
  </div>
  
}</>
)
}

export default Appointments
