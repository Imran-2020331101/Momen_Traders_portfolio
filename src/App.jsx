import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Electronics from './pages/Electronics';
import ParentLayout from './components/ParentLayout';

// nothing just testing the automation
function App() {
  return (
    <Routes>
      <Route path='/' element={<ParentLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='electronics' element={<Electronics/>}/>
      </Route>
    </Routes>
  );
}

export default App;
