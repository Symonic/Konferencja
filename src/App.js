import logo from './logo.svg';
//import './App.css';

//Modules
import Home from './Modules/Home.js'
import About from './Modules/About.js'
import Guests from './Modules/Guests.js'
import Program from './Modules/Program.js'
import Contact from './Modules/Contact.js'
import Sign from './Modules/Sign.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/guests' element={<Guests />} />
          <Route path='/program' element={<Program />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
