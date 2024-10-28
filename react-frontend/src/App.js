import logo from './logo.svg';
import { ReactRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SignUp from './signUpComponent';
import NavBar from './navigation.js';

function App() {
  <Router>
    <Routes>
      <Route path='/' element={<NavBar />}>
        {/*
        <Route index path='/' element={}></Route>
        <Route path='messages' element={}></Route>
        <Route path='profile' element={}></Route>
        <Route path='settings' element={}></Route>
        */}
      </Route>
    </Routes>
    <Routes>
      <Route path='/signup' element={<signUp />}></Route>
    </Routes>
  </Router>
}

export default App;
