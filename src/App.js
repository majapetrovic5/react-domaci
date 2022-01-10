import './App.css';
import Main from './components/pages/Main';
import Doctors from './components/pages/Doctors';
import Appointments from './components/pages/Appointments';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import  { useState } from 'react';


function App() {

  const arrayd1=[{
    id:1,
    text:'As a dermatologist, I enjoy caring for patients of all ages. I have a special interest in skin cancer, however I enjoy caring for all forms of skin disease including acne, skin cancer and eczema.My goal is to treat patients with the same kind of care I would want my loved ones to receive.In addition, I like to read and to watch movies.',
    name:'Alison K. Adams',
    times:0,
    spec:'Dermatology',
    date: '05.02.2021. 11:35am',
    star:130,
    checked: false,
    added:false,
    picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-0.jpg'
  },
{
  id:2,
    text:'My area of focus in health care is within the perioperative management of orthopedic patients. I also have a special interest in working with older adults.During my free time I enjoy spending time with my husband, son, daughter and extended family. In addition, I like to read, have fun with friends and relax.',
    name:'Elizabeth Abell',
    spec:'Urinology',
    added:false,
    checked: false,
    times:0,
    star:70,
    date: '18.01.2021. 09:35am',
    picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-1.jpg',
    },
  
  { 
    id:3,text:'I am a licensed independent clinical social worker trained to treat individuals and families affected by eating disorders. I feel fortunate to have found this specialty path of practice, which I truly love, and I am thankful to work side by side with individuals and families in creating a better state of health and recovery.',
    name:'Melissa A. Adler',
    spec:'Mental Health',
    added:false,
    times:0,
    checked: false,
    star:121,
    date: '20.01.2021. 11:30am',
    picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-2.jpg' }
  ]

  const arrayd2=[{
    id:4,text:'I have a passion for working with women and their families. As a women’s health care provider, I want to provide women with education about their health to make fully informed decisions and be the driving force of their health.I, also enjoy advanced endoscop.',
    name:'Mark D. Ahlquist',
    star:98,
    added:false,
    times:0,
    checked: false,
    spec:'Gynecology',
    date: '09.02.2021. 12:30pm',
    picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-4.jpg',
    
  },
{
  id:5,text:'I enjoy my work as a gastroenterologist because it offers me the combination of procedural and office skills I use on a daily basis. Working in a field where I save lives by detecting early cancers and preventing it is extremely rewarding. I also enjoy advanced endoscop.',
    name:'Michael T. Akin',
    spec:'Gastrology',
    star:403,
    checked: false,
    times:0,
    date: '15.01.2021. 10:40am',
    added:false,
    picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-5.jpg' },
  
  { id:6, text:'I provide well-child visits for newborns to 18-year-old teenagers. I particularly enjoy sports-related visits, but am happy also treating children with asthma, seasonal allergies, eczema, obesity, infectious concerns, injuries and more. I enjoy assisting patients who ne',
    name:'Luke A. Albares',
    spec:'Pediatrics',
    star:88,
    checked: false,
    times:0,
    date: '17.02.2021. 14:30pm',
    added:false,
    picture:'https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-3.jpg',
     }
  ]
const [num, setNum] = useState(0);
  const [array1, setArr1] = useState(arrayd1);
  const [array2, setArr2] = useState(arrayd2);
  const [appointments, setApp] = useState([]);

  const star1 = (id) => {
    let arr1 = [];
    array1.forEach(element => {
      if(element.id === id) {
      if(!element.checked) {
        element.star = element.star + 1;
        element.checked = true;
        arr1.push(element);
      }}
      else{
        arr1.push(element);
      }
    }
    );
    console.log(arr1);
    setArr1(arr1);
    console.log(array1);

    
    let arr2 = [];
    array2.forEach(element => {
      if(element.id === id) {
      if(!element.checked) {
        element.star = element.star + 1;
        element.checked = true;
        arr2.push(element);
      }}
      else{
        arr2.push(element);
      }
    }
    );
    console.log(arr2);
    setArr2(arr2);
    console.log(array2);
  }
  
  const star2 = (id) => {

    let arr1 = [];
    array1.forEach(element => {
      if(element.id === id) {
      if(element.checked) {
        element.star = element.star - 1;
        element.checked = false;
        arr1.push(element);
      }}
      else{
        arr1.push(element);
      }
    }
    );
    setArr1(arr1);
   
    let arr2 = [];

    array2.forEach(element => {

      if(element.id === id) {

      if(element.checked) {
        element.star = element.star - 1;
        element.checked = false;
        arr2.push(element);
      }}
      else{
        arr2.push(element);
      }
    }
    );
    setArr2(arr2);
  }

  const makeAp = (id)=>{
   
    array1.forEach(element => {
      if(element.id===id) {
        if(element.added===false) {setNum(num+1);
        element.added=true; } 
      }
    });

    array2.forEach(element => {
      if(element.id===id)  {
        if(element.added===false) {setNum(num+1);
          element.added=true; } 
      }
    });

    let addedApp1 = array1.filter((item)=>item.added==true);
    let addedApp2 = array2.filter((item)=>item.added==true);
    let addedApp= [...addedApp1,...addedApp2];

    setApp(addedApp);
  }

  const delApp = (id)=>{
   
     console.log(id);
     appointments.forEach(element => {
      if(element.id==id) {
        if(element.added===true) {setNum(num-1);
        element.added=false;  }
        
       }
      
    });

    let addedApp = appointments.filter((item)=>item.added==true);
    
    setApp(addedApp);
  }


  return (
    <div className="App">
    <BrowserRouter>
    <Navbar num={num}></Navbar>
    <Routes>
      <Route path='/'element={<Main/>}></Route>
      <Route path='/doctors' element={<Doctors array1={array1} array2={array2} makeAp={makeAp}
      star1={star1} star2={star2}/>}></Route>
      <Route path='/appointments' element={<Appointments appointments={appointments} delApp={delApp}/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
