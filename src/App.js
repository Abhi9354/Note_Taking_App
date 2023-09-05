
import './App.css';
import { Dashboard } from './modules/notes/pages/dashboard';
import {  Route, Routes } from 'react-router-dom';

import { UserPage } from './modules/user/pages/UserPage';

function App() {
  return (
<div className="App">
  {/* <Routes> */}
      {/* <Route path = "/" exact element={<UserPage/>}/> */}
      {/* <Route path = "/"  element={<Dashboard/>}/> */}
      {/* </Routes> */}
      <Dashboard/>
      </div>
  
 

   
  );
}

export default App;
