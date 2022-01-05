import React, { useContext } from 'react';
import Context from '../Context';

const DataInput = () => {
  const { setValue } = useContext(Context);
  return (
    <>
      <button
        onClick={() => {
          setValue('blue');
        }}
      >
        Blue
      </button>
      &nbsp;
      <button
        onClick={() => {
          setValue('red');
        }}
      >
        red
      </button>
    </>
  );
};

export default DataInput;
