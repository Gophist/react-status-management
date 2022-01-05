import React, { useState } from 'react';
import './style.css';

import Context from './Context';
import DataInput from './DataInput';
import DataDisplay from './DataDisplay';

export default function App() {
  const [value, setValue] = useState('red');
  return (
    <>
      <h3>useContext + useState Hook</h3>
      <Context.Provider value={{ value, setValue }}>
        <DataInput />
        <br />
        <br />
        <DataDisplay />
      </Context.Provider>
    </>
  );
}
