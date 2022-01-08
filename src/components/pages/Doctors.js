import React from 'react';
import { Button } from '../Button';
import Clients from '../Clients';
import './Doctors.css';


function Doctors() {

    const array=[{
        text:'As a dermatologist, I enjoy caring for patients of all ages. I have a special interest in skin cancer, however I enjoy caring for all forms of skin disease including acne, skin cancer and eczema.My goal is to treat patients with the same kind of care I would want my loved ones to receive.In addition, I like to read',
        name:'Alison K. Adams',
        spec:'Dermatology',
        star:130,
        picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-0.jpg'
      },
    {
        text:'My area of focus in health care is within the perioperative management of orthopedic patients. I also have a special interest in working with older adults.During my free time I enjoy spending time with my husband, son, daughter and extended family. In addition, I like to read, have fun with friends and relax.',
        name:'Elizabeth Ann Pui Abell',
        spec:'Urology',
        star:70,
        picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-1.jpg',
        },
      
      {  text:'I am a licensed independent clinical social worker trained to treat individuals and families affected by eating disorders. I feel fortunate to have found this specialty path of practice, which I truly love, and I am thankful to work side by side with individuals and families in creating a better state of health and recovery.',
        name:'Melissa A. Adler',
        spec:'Mental Health',
        star:121,
        picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-2.jpg' }
      ]
    
      const array2=[{
        text:'I have a passion for working with women and their families. As a women’s health care provider, I want to provide women with education about their health to make fully informed decisions and be the driving force of their health.I also enjoy advanced endoscop.',
        name:'Mark D. Ahlquist',
        star:98,
        spec:'Obstetrics & Gynecology',
        picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-4.jpg',
        
      },
    {
        text:'I enjoy my work as a gastroenterologist because it offers me the combination of procedural and office skills I use on a daily basis. Working in a field where I save lives by detecting early cancers and preventing it is extremely rewarding. I also enjoy advanced endoscop.',
        name:'Michael T. Akin',
        spec:'Gastroenterology',
        star:403,
        picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-5.jpg' },
      
      {  text:'I provide well-child visits for newborns to 18-year-old teenagers. I particularly enjoy sports-related visits, but am happy also treating children with asthma, seasonal allergies, eczema, obesity, infectious concerns, injuries and more. I enjoy assisting patients who ne',
        name:'Luke A. Albares',
        spec:'Pediatrics',
        star:88,
        picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-3.jpg',
         }
      ]

    return (<>
        <div>
         <div className='doc-container'>
      <h1>OUR TEAM</h1>
    </div>
          <Clients title='' array1={array} array2={array2} type='doctors'></Clients>
        </div>
        </>
    )
}

export default Doctors
