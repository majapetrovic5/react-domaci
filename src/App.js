import './App.css';
import Main from './components/pages/Main';
import Doctors from './components/pages/Doctors';
import Appointments from './components/pages/Appointments';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/'element={<Main/>}></Route>
      <Route path='/doctors' element={<Doctors/>}></Route>
      <Route path='/appointments' element={<Appointments/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
