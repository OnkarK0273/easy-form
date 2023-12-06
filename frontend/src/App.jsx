
import { useState } from 'react';
import './App.css';
import AllRoutes from './pages/allRoutes';
import { MyContext } from './authContext/dataContext';
import FormBuilder from './pages/formBuilder';
import FormRender from './pages/formRender';

function App() {
  const [ form, setForm] = useState({});
  console.log('fron',form)
  return (
    <div>
      {/* <MyContext.Provider value={{ form, setForm }}> */}
       <AllRoutes/>
       {/* <FormBuilder/>
       <FormRender/> */}
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default App;
