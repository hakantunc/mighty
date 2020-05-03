import React from 'react';
import './App.css';

import Counter from './components/Counter';
import Tile from './components/Tile';

const App = () => {
  return (
    <div className='container'>
      <div className='row justify-content-around'>
        <h1>Hello There!</h1>
      </div>
      <div className='row justify-content-around'>
        <Tile />
      </div>
      <div className='row justify-content-around'>
        <Counter />
      </div>
    </div>
  );
};

export default App;
