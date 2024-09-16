import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/loginPage/Login';
import Signup from './components/signupPage/Signup';

function App() {
  return (
    <div className="wrapper"> {/* main Parent div for all the pages */}
      <Routes>
        <Route path='/'>
          <Route   index element={<Login />} /> {/* Default Page as Login Page */}
          <Route path='signup' element={<Signup />} /> {/* Signup page on signup url */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
