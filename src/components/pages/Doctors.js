import React from 'react';
import { Button } from '../Button';
import Clients from '../Clients';
import './Doctors.css';


function Doctors({array1,array2,makeAp}) {

    return (<>
        <div>
         <div className='doc-container'>
      <h1>OUR TEAM</h1>
    </div>
          <Clients title='' array1={array1} array2={array2} type='doctors' makeAp={makeAp} ></Clients>
        </div>
        </>
    )
}

export default Doctors
