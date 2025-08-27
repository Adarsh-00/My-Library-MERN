import React from 'react';
import Create from './components/Create';
import Update from './components/Update';
import List from './components/List';
import NotFound from './components/NotFound';

import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column my-4'>
      <h1 className='my-4'>My Library</h1>
      <nav>
        <Link to='/' className='btn btn-primary mx-2'>Home</Link>
        <Link to='create' className='btn btn-success mx-2'>Add Book</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={ <Update /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      

    </div>
  );
}

export default App;
