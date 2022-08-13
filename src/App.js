import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home';
import User from './components/User/User';
import Login from './components/User/Login';
import SignUp from './components/User/Signup';
import './AppDefault.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
