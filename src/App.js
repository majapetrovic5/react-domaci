import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<MainSection/>}></Route>
      <Route path='/doctors'></Route>
      <Route path='/appointments'></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
