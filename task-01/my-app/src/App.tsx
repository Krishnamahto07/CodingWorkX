import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/'>
          <Route   index element={<Login />} />
          <Route path='signup' element={<Signup />} />

        </Route>
        {/* <Route path='/' element={<>Home Page</>} /> */}
      </Routes>
    </div>
  );
}

export default App;
