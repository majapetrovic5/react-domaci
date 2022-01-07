import React from 'react';
import '../App.css';
import Clients from './Clients';
import './MainSection.css';



function MainSection() {
  return (
    <>
    <div className='main-container'>
      <h1>FIND THE BEST DOCTOR </h1>
        <h1>FOR YOU</h1>
      <p>Make an appointment and contribute to your health</p>    
      </div>
      <div className='main-text'>
      <h1>ABOUT DOCFIND</h1>
      <p>DocFind contains the licensing background and
         disciplinary information of physicians and other
          health care practitioners from those states that practice. 
          In addition, DocFind includes physician profile information 
          from states that have passed physician profile laws. 
           Very popular with consumers, DocFinder has been featured in 
           numerous state and national publications such as Newsweek Magazine 
           and The Wall Street Journal as well as national and local news broadcasts.
The DocFind was the only online physicia
 directory of its kind when it was launched in 1996.
  The DocFind is still recognized for its easy to use search engine.DocFind contains 
  the licensing background and a lot of information bar of its kind engine lot.</p>
      </div>
      <div className='main-clients'>
          <Clients/>
      </div>
  
      </>
  )
}

export default MainSection;