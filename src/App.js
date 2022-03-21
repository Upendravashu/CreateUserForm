import React from 'react'
// impo'rt CreateUser from './CreateUser';
import "./App.css"
import Exitance from './Exitance';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import User from './User';


const App = () => {
  return (
       <div>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<RegistrationForm/>}></Route>
             <Route path='/exitance' element={<Exitance/>}></Route>
             <Route path='/user/:id' element={<User/>}></Route>
           </Routes>
         </BrowserRouter>
       </div>
  );
}

export default App;