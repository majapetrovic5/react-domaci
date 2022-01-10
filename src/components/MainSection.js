import React from 'react';
import '../App.css';
import { Button } from './Button';
import Clients from './Clients';
import './MainSection.css';
import Img1 from '../assets/images/img-client1.jpg';
import Img2 from '../assets/images/img-clients2.jpg';
import Img3 from '../assets/images/img-client3.jpg';


function MainSection() {

  
  const array=[{
    text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name:'Maria Reyes',
    picture:Img1,
    
  },
{
    text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name:'Robert Gilbert',
    picture:Img2,
    },
  
  {  text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    name:'Chuck Cooper',
    picture:Img3,
     }
  ]

  return (

    <>
    <div className='main-container'>
      <h1>FIND THE BEST DOCTOR </h1>
        <h1>FOR YOU</h1>
      <p>Make an appointment and contribute to your health</p>  
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' link='/doctors'
        >
          MAKE AN APPOINTMENT
        </Button>  
      </div> </div>
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
 directory of its kind when it was launched in 1996. The DocFind was the only online physicia
 directory of its kind when it was launched in 1996.
  The DocFind is still recognized for its easy to use search engine.DocFind contains 
  the licensing background and a lot of information bar of its kind engine lot and 
  local news broadcasts and local news broadcasts is still lot, news and news.</p>
      </div>
      <div className='main-clients'>
          <Clients title='WHAT DO OUR CLIENTS SAY?' array1={array} type='clients'/>
      </div>
  
      </>
  )
}

export default MainSection;