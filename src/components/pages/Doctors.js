import React from 'react';
import { Button } from '../Button';
import Clients from '../Clients';
import './Doctors.css';


function Doctors({array1,array2,makeAp, star1,star2}) {

    return (<>
        <div>
         <div className='doc-container'>
      <h1>OUR TEAM</h1>
    </div>
          <Clients title='' array1={array1} array2={array2} type='doctors' makeAp={makeAp} 
          star1={star1} star2={star2} ></Clients>
        </div>
        </>
    )
}

export default Doctors
