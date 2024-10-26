import logo from './logo.svg';
import './App.css';
import SignUp from './signUpComponent';
import { ReactRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  <Router>
    <Route path='/signup' element={<signUp />}></Route>
  </Router>
}

export default App;
