import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import myNavBar from './Components/myNavBar';

import FirstPage from './Pages/FirstPage';
import SecoPage from './Pages/SecoPage';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path ="/" element ={<FirstPage/>} />
      <Route path ="/secoPage" element ={<SecoPage/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
