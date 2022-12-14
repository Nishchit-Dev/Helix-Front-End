import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home';
import User from './components/User/User';

import SignUp from './components/User/Signup';
import './AppDefault.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/user' element={<User/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
