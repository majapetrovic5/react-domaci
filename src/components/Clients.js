import React from 'react';
import './Clients.css';
import Client from './Client'; 
import Img1 from '../assets/images/img-client1.jpg';
import Img2 from '../assets/images/img-clients2.jpg';
import Img3 from '../assets/images/img-client3.jpg';

function Clients() {
  return (
    <div className='clients'>
      <h1>WHAT OUR CLIENTS SAYS?</h1>
      <div className='clients__container'>
        <div className='clients__wrapper'>
          <ul className='clients__items'>
            <Client
              text='It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout.'
              name='Maria Reyes'
              picture={Img1}
            />
            <Client
              text='It is a long established fact that a reader will be 
              distracted by the readable content of a page when looking at its layout.'
              name='Rebecca Gilbert'
              picture={Img2}
            />
            <Client
              text='It is a long established fact that a reader will be 
              distracted by the readable content of a page when looking at its layout.'
              name='Chuck Cooper'
              picture={Img3} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Clients;