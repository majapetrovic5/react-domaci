import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import Swal from 'sweetalert2';

function Footer() {

  const onClick= () => {
     if(buttonClick!='') {
    setButtonClick('');
    setTimeout(() => {
      // alert('You have successfully send a message.');
     Swal.fire(
       {
          title: 'Sent!',
          text: 'Your message has been successfully send.',
          icon:'success',
          confirmButtonText: 'OK',
          confirmButtonColor: 'rgb(34, 123, 134)',
       }
     );




    }, 3);
   }
  };
  const onChange= (e) => setButtonClick(e.target.value);
 
 const [buttonClick, setButtonClick] = useState('');

  return (
    <div className='footer-container'>
      <section className='footer-message'>
        <p className='footer-message-heading'>
        Your health is our priority. Always Caring. Always Here. 
        </p>
        <p className='footer-message-text'>
          We are here for you. Ask us a question:
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              placeholder='Your Question'
              value={buttonClick}
              onChange={onChange}
            />
          <Button buttonStyle='btn--outline' link={'#'} onClick={onClick} onChange={onChange}>
              Send</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              DOCFIND
              <i class="fas fa-heartbeat"></i>
            </Link>
          </div>
          <small class='website-rights'>DOCFIND © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/belmedic/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/belmedic.rs/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/user/BelMedicRS/featured'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/belmedic'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://rs.linkedin.com/company/bel-medic'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;