import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar  from './components/navbar';
import My_Blog from './components/my-blog';
import Grievance_Page from './components/Grievance';
import Home from './components/home';
function App() {
  return (
    <Router>
      <Routes>
            <Route exact path='/' element={< Navbar />}></Route>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/Grievance' element={< Grievance_Page/>}></Route>
            <Route exact path='/blogcreate' element={< My_Blog/>}></Route>
    </Routes>
  </Router>
    
  );
}

export default App;
