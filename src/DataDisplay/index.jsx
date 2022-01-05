import React, { useContext } from 'react';

import Context from '../Context';

const DataDisplay = (props) => {
  const { value } = useContext(Context);

  return (
    <>
      <div>value is {value}</div>
      <div style={{ width: '300px', height: '300px', background: value }}></div>
    </>
  );
};

export default DataDisplay;
